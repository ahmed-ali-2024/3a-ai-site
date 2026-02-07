/**
 * دوال التحويل لمكون عرض المقالات من المدونة الخارجية
 * Feature: blog-posts-section
 */

import type { WordPressPost, BlogPost } from './types';
import { stripHtml, extractExcerpt, getDefaultImage } from './utils';

/**
 * استخراج رابط الصورة المميزة من البيانات المضمنة
 * 
 * @param embedded - البيانات المضمنة من WordPress API (_embedded)
 * @returns رابط الصورة المميزة أو الصورة الافتراضية إذا لم تكن متوفرة
 * 
 * @example
 * // مع صورة مميزة متوفرة
 * extractFeaturedImage({
 *   'wp:featuredmedia': [{ source_url: 'https://example.com/image.jpg' }]
 * }) // 'https://example.com/image.jpg'
 * 
 * // بدون صورة مميزة
 * extractFeaturedImage(undefined) // DEFAULT_IMAGE_URL
 * extractFeaturedImage({}) // DEFAULT_IMAGE_URL
 * 
 * Validates: Requirements 1.3, 1.4
 */
export function extractFeaturedImage(embedded?: WordPressPost['_embedded']): string {
  // التحقق من وجود البيانات المضمنة والصورة المميزة
  if (embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    return embedded['wp:featuredmedia'][0].source_url;
  }
  
  // إرجاع الصورة الافتراضية إذا لم تكن الصورة المميزة متوفرة
  return getDefaultImage();
}

/**
 * تحويل مقال WordPress إلى تنسيق BlogPost
 * يستخرج جميع الحقول المطلوبة ويعالج الحالات الخاصة
 * 
 * @param wpPost - مقال WordPress من API
 * @returns مقال بتنسيق BlogPost
 * 
 * @example
 * transformWordPressPost({
 *   id: 123,
 *   title: { rendered: '<p>عنوان المقال</p>' },
 *   excerpt: { rendered: '<p>نبذة طويلة جداً...</p>' },
 *   link: 'https://example.com/post',
 *   _embedded: {
 *     'wp:featuredmedia': [{ source_url: 'https://example.com/image.jpg' }]
 *   }
 * })
 * // {
 * //   id: 123,
 * //   title: 'عنوان المقال',
 * //   excerpt: 'نبذة طويلة جداً...',
 * //   link: 'https://example.com/post',
 * //   featuredImage: 'https://example.com/image.jpg'
 * // }
 * 
 * Validates: Requirements 1.2, 1.3, 1.4
 */
export function transformWordPressPost(wpPost: WordPressPost): BlogPost {
  return {
    id: wpPost.id,
    // إزالة علامات HTML من العنوان
    title: stripHtml(wpPost.title.rendered),
    // استخراج النبذة وإزالة HTML واقتصاصها إلى 150 حرف
    excerpt: extractExcerpt(wpPost.excerpt.rendered),
    // رابط المقال الكامل
    link: wpPost.link,
    // استخراج الصورة المميزة أو استخدام الصورة الافتراضية
    featuredImage: extractFeaturedImage(wpPost._embedded),
  };
}
