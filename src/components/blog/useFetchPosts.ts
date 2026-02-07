/**
 * Custom React Hook لجلب المقالات من WordPress REST API
 * Feature: blog-posts-section
 */

import { useState, useEffect } from 'react';
import type { BlogPost, UseFetchPostsReturn, WordPressPost, ErrorType } from './types';
import { API_CONFIG, ERROR_MESSAGES } from './constants';
import { transformWordPressPost } from './transformers';

/**
 * Hook لجلب آخر 4 مقالات من المدونة الخارجية
 * 
 * يستخدم WordPress REST API لجلب البيانات ويعالج حالات التحميل والأخطاء
 * يتم استدعاء API مرة واحدة فقط عند تحميل المكون
 * 
 * @returns {UseFetchPostsReturn} حالة المقالات، التحميل، والأخطاء
 * 
 * @example
 * function BlogComponent() {
 *   const { posts, loading, error } = useFetchPosts();
 *   
 *   if (loading) return <div>جاري التحميل...</div>;
 *   if (error) return <div>{error}</div>;
 *   return <div>{posts.map(post => <PostCard key={post.id} post={post} />)}</div>;
 * }
 * 
 * Validates: Requirements 1.1, 1.2, 1.5, 6.1, 6.2, 7.1, 7.2, 7.3, 9.2, 9.3
 */
export function useFetchPosts(): UseFetchPostsReturn {
  // حالة المقالات
  const [posts, setPosts] = useState<BlogPost[]>([]);
  // حالة التحميل
  const [loading, setLoading] = useState<boolean>(true);
  // حالة الخطأ
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // دالة لجلب المقالات من API
    async function fetchPosts() {
      try {
        // بناء URL مع المعاملات الصحيحة
        const url = new URL(API_CONFIG.endpoint, API_CONFIG.baseURL);
        url.searchParams.append('per_page', API_CONFIG.params.per_page.toString());
        url.searchParams.append('_embed', 'true');

        // إرسال طلب GET إلى WordPress REST API
        const response = await fetch(url.toString());

        // معالجة أخطاء API (status code غير 200)
        if (!response.ok) {
          const errorType: ErrorType = response.status === 404 ? 'API_ERROR' : 'API_ERROR';
          throw new Error(`${errorType}: ${response.status}`);
        }

        // تحليل البيانات JSON
        const data: WordPressPost[] = await response.json();

        // التحقق من أن البيانات عبارة عن مصفوفة
        if (!Array.isArray(data)) {
          throw new Error('PARSE_ERROR: Invalid data format');
        }

        // تحويل البيانات المستلمة باستخدام transformWordPressPost
        const transformedPosts = data.map(transformWordPressPost);

        // تطبيق حد 4 مقالات (للتأكد حتى لو أرجع API أكثر)
        const limitedPosts = transformedPosts.slice(0, 4);

        // تحديث حالة المقالات
        setPosts(limitedPosts);
        setLoading(false);
      } catch (err) {
        // معالجة الأخطاء المختلفة
        let errorMessage: string = ERROR_MESSAGES.UNKNOWN_ERROR;
        
        if (err instanceof TypeError) {
          // خطأ في الشبكة (network error)
          errorMessage = ERROR_MESSAGES.NETWORK_ERROR;
          console.error('Network error:', err);
        } else if (err instanceof Error) {
          // تحديد نوع الخطأ من رسالة الخطأ
          if (err.message.includes('PARSE_ERROR')) {
            errorMessage = ERROR_MESSAGES.PARSE_ERROR;
            console.error('Parse error:', err);
          } else if (err.message.includes('API_ERROR')) {
            errorMessage = ERROR_MESSAGES.API_ERROR;
            console.error('API error:', err);
          } else {
            console.error('Unknown error:', err);
          }
        }

        // تحديث حالة الخطأ
        setError(errorMessage);
        setLoading(false);
      }
    }

    // استدعاء دالة جلب المقالات
    fetchPosts();
  }, []); // dependency array فارغ لضمان استدعاء API مرة واحدة فقط

  return {
    posts,
    loading,
    error,
  };
}
