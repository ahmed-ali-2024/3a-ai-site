import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('اسم الكاتب'),
    image: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    client: z.string().optional(),
    projectUrl: z.string().optional(),
    serviceType: z.string().optional(),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

const authorsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    avatar: z.string().optional(),
    bio: z.string(),
    social: z.object({
      twitter: z.string().optional(),
      github: z.string().optional(),
      linkedin: z.string().optional(),
    }).optional(),
  }),
});

// مجموعة الخدمات
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(), // أيقونة الخدمة (emoji أو اسم أيقونة)
    image: z.string().optional(),
    features: z.array(z.string()).default([]), // قائمة الميزات
    order: z.number().default(0), // ترتيب العرض
    draft: z.boolean().default(false),
  }),
});

// مجموعة معرض الأعمال
const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string().optional(), // اسم العميل
    date: z.coerce.date(),
    image: z.string().optional(), // الصورة الرئيسية
    gallery: z.array(z.string()).default([]), // معرض الصور
    technologies: z.array(z.string()).default([]), // التقنيات المستخدمة
    projectUrl: z.string().optional(), // رابط المشروع
    category: z.string(), // تصنيف المشروع
    featured: z.boolean().default(false), // مشروع مميز
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  authors: authorsCollection,
  services: servicesCollection,
  portfolio: portfolioCollection,
};
