/**
 * الثوابت لمكون عرض المقالات من المدونة الخارجية
 * Feature: blog-posts-section
 */

import type { APIConfig } from './types';

/**
 * تكوين WordPress REST API
 * يحدد عنوان API والمعاملات المطلوبة لجلب المقالات
 */
export const API_CONFIG: APIConfig = {
  baseURL: 'https://3aai-tn.net',
  endpoint: '/wp-json/wp/v2/posts',
  params: {
    per_page: 4,
    _embed: true,
  },
};

/**
 * رابط الصورة الافتراضية
 * يُستخدم عندما لا تكون الصورة المميزة متوفرة للمقال
 */
export const DEFAULT_IMAGE_URL = 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop';

/**
 * الحد الأقصى لطول النبذة بالأحرف
 */
export const MAX_EXCERPT_LENGTH = 150;

/**
 * عنوان القسم الرئيسي
 */
export const SECTION_TITLE = 'لا يفوتك الاطلاع على كل ما هو جديد في عالم التكنولوجيا في مدونة الموقع 3A-Ai';

/**
 * رسائل الأخطاء
 */
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'تعذر الاتصال بالمدونة. يرجى التحقق من اتصال الإنترنت.',
  PARSE_ERROR: 'حدث خطأ في معالجة البيانات. يرجى المحاولة لاحقاً.',
  API_ERROR: 'تعذر تحميل المقالات. يرجى المحاولة لاحقاً.',
  UNKNOWN_ERROR: 'حدث خطأ غير متوقع. يرجى تحديث الصفحة.',
} as const;

/**
 * نص حالة التحميل
 */
export const LOADING_TEXT = 'جاري التحميل...';

/**
 * نص عدم وجود مقالات
 */
export const NO_POSTS_TEXT = 'لا توجد مقالات متاحة حالياً.';
