/**
 * ملف التصدير الرئيسي لمكون عرض المقالات من المدونة الخارجية
 * Feature: blog-posts-section
 * 
 * يصدر المكون الرئيسي والأنواع المهمة للاستخدام في أجزاء أخرى من التطبيق
 * 
 * Validates: Requirements 8.1
 */

// تصدير المكون الرئيسي كـ default export
export { default } from './BlogPostsSection';
export { BlogPostsSection } from './BlogPostsSection';

// تصدير الأنواع المهمة
export type { BlogPost, ErrorState } from './types';
