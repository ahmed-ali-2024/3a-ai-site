/**
 * المكون الرئيسي لعرض قسم المقالات من المدونة الخارجية
 * Feature: blog-posts-section
 * 
 * يعرض آخر 4 مقالات من مدونة WordPress الخارجية في تخطيط شبكي متجاوب
 * يدير حالات التحميل والأخطاء ويعرض المقالات باستخدام مكون PostCard
 * 
 * Validates: Requirements 2.1, 2.2, 2.3, 4.1, 4.3, 6.1, 6.2, 7.1, 8.2, 8.3
 */

import React from 'react';
import { useFetchPosts } from './useFetchPosts';
import { PostCard } from './PostCard';
import { SECTION_TITLE, LOADING_TEXT, NO_POSTS_TEXT } from './constants';
import type { BlogPostsSectionProps } from './types';

/**
 * مكون BlogPostsSection - المكون الرئيسي لعرض المقالات
 * 
 * يستخدم useFetchPosts hook لجلب البيانات من WordPress REST API
 * ويعرض المقالات في شبكة متجاوبة (2x2 على desktop، عمود واحد على mobile)
 * 
 * @example
 * // في ملف Astro
 * <BlogPostsSection client:visible />
 */
export function BlogPostsSection(_props: BlogPostsSectionProps) {
  // جلب المقالات باستخدام custom hook
  const { posts, loading, error } = useFetchPosts();

  return (
    <section 
      className="w-full py-20 px-4 sm:px-6 lg:px-8"
      dir="rtl"
      aria-label="قسم المقالات من المدونة"
    >
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12 leading-relaxed">
          {SECTION_TITLE}
        </h2>

        {/* حالة التحميل */}
        {loading && (
          <div 
            className="flex items-center justify-center py-20"
            role="status"
            aria-live="polite"
          >
            <div className="flex flex-col items-center gap-4">
              {/* مؤشر التحميل الدوار */}
              <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
              <p className="text-gray-400 text-lg">{LOADING_TEXT}</p>
            </div>
          </div>
        )}

        {/* حالة الخطأ */}
        {error && !loading && (
          <div 
            className="glass-card rounded-2xl p-8 text-center max-w-2xl mx-auto"
            role="alert"
            aria-live="assertive"
          >
            <div className="flex flex-col items-center gap-4">
              {/* أيقونة الخطأ */}
              <svg
                className="w-16 h-16 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {/* رسالة الخطأ */}
              <p className="text-red-400 text-lg font-medium">{error}</p>
            </div>
          </div>
        )}

        {/* عرض المقالات */}
        {!loading && !error && posts.length > 0 && (
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            role="list"
          >
            {posts.map((post) => (
              <div key={post.id} role="listitem">
                <PostCard post={post} />
              </div>
            ))}
          </div>
        )}

        {/* حالة عدم وجود مقالات */}
        {!loading && !error && posts.length === 0 && (
          <div className="glass-card rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <p className="text-gray-400 text-lg">{NO_POSTS_TEXT}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogPostsSection;
