# Blog Posts Section Component

مكون React لعرض آخر 4 مقالات من مدونة WordPress خارجية.

## البنية الأساسية

### الملفات الأساسية

- **`types.ts`**: تعريفات جميع الأنواع (BlogPost, WordPressPost, ErrorState, APIConfig)
- **`constants.ts`**: الثوابت (API_CONFIG, DEFAULT_IMAGE_URL, رسائل الأخطاء)
- **`utils.ts`**: دوال المساعدة (stripHtml, extractExcerpt, getDefaultImage)
- **`transformers.ts`**: دوال التحويل (transformWordPressPost, extractFeaturedImage)
- **`useFetchPosts.ts`**: Custom Hook لجلب البيانات من WordPress REST API
- **`PostCard.tsx`**: مكون عرض بطاقة مقال واحد
- **`BlogPostsSection.tsx`**: المكون الرئيسي
- **`index.ts`**: ملف التصدير

### إطار الاختبار

تم إعداد **Vitest** مع **fast-check** للاختبارات:

```bash
# تشغيل جميع الاختبارات
npm test

# تشغيل الاختبارات مع واجهة المستخدم
npm run test:ui

# تشغيل الاختبارات مع تقرير التغطية
npm run test:coverage
```

### الأنواع المعرفة

#### BlogPost
```typescript
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  link: string;
  featuredImage: string;
}
```

#### WordPressPost
```typescript
interface WordPressPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}
```

#### ErrorState
```typescript
interface ErrorState {
  type: ErrorType;
  message: string;
  originalError?: Error;
}
```

### الثوابت

#### API_CONFIG
```typescript
const API_CONFIG = {
  baseURL: 'https://3aai-tn.net',
  endpoint: '/wp-json/wp/v2/posts',
  params: {
    per_page: 4,
    _embed: true,
  },
};
```

#### رسائل الأخطاء
- `NETWORK_ERROR`: تعذر الاتصال بالمدونة
- `PARSE_ERROR`: حدث خطأ في معالجة البيانات
- `API_ERROR`: تعذر تحميل المقالات
- `UNKNOWN_ERROR`: حدث خطأ غير متوقع

## المتطلبات المحققة

- ✅ 1.1: إعداد تكوين WordPress REST API
- ✅ 8.4: استخدام Tailwind CSS للتنسيق

## الخطوات التالية

1. تنفيذ دوال المساعدة (Task 2)
2. تنفيذ دوال التحويل (Task 3)
3. تنفيذ Custom Hook لجلب البيانات (Task 5)
4. تنفيذ مكون PostCard (Task 6)
5. تنفيذ المكون الرئيسي BlogPostsSection (Task 8)
6. التكامل مع الصفحة الرئيسية (Task 10)
