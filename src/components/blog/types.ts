/**
 * نماذج البيانات لمكون عرض المقالات من المدونة الخارجية
 * Feature: blog-posts-section
 */

/**
 * نموذج البيانات الرئيسي الذي يمثل مقالاً واحداً
 */
export interface BlogPost {
  /** معرف فريد للمقال (من WordPress) */
  id: number;
  /** عنوان المقال (نص عادي بدون HTML) */
  title: string;
  /** نبذة مختصرة عن المقال (نص عادي، مقتص إلى 150 حرف) */
  excerpt: string;
  /** رابط المقال الكامل على المدونة الخارجية */
  link: string;
  /** رابط الصورة المميزة (أو الصورة الافتراضية) */
  featuredImage: string;
}

/**
 * تنسيق البيانات المستلمة من WordPress REST API
 */
export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
  };
}

/**
 * أنواع الأخطاء المحتملة
 */
export type ErrorType = 
  | 'NETWORK_ERROR'    // خطأ في الاتصال بالشبكة
  | 'PARSE_ERROR'      // خطأ في تحليل البيانات
  | 'API_ERROR'        // خطأ من API (status code غير 200)
  | 'UNKNOWN_ERROR';   // خطأ غير معروف

/**
 * حالة الخطأ
 */
export interface ErrorState {
  type: ErrorType;
  message: string;
  originalError?: Error;
}

/**
 * تكوين طلب API
 */
export interface APIConfig {
  baseURL: string;
  endpoint: string;
  params: {
    per_page: number;
    _embed: boolean;
  };
}

/**
 * حالة التحميل
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/**
 * حالة المكون الكاملة
 */
export interface ComponentState {
  posts: BlogPost[];
  loadingState: LoadingState;
  error: ErrorState | null;
}

/**
 * Props لمكون PostCard
 */
export interface PostCardProps {
  post: BlogPost;
}

/**
 * Props لمكون BlogPostsSection
 */
export interface BlogPostsSectionProps {
  // لا توجد props خارجية - المكون مستقل
}

/**
 * قيمة الإرجاع من useFetchPosts hook
 */
export interface UseFetchPostsReturn {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
}
