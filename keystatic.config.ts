// @ts-check
import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },

    singletons: {
        siteSettings: singleton({
            label: 'إعدادات الموقع',
            path: 'src/config/site',
            format: { data: 'json' },
            schema: {
                title: fields.text({
                    label: 'عنوان الموقع',
                    validation: { length: { min: 1 } },
                }),
                description: fields.text({
                    label: 'وصف الموقع',
                    multiline: true,
                }),
                url: fields.url({
                    label: 'رابط الموقع',
                }),
                author: fields.object({
                    name: fields.text({ label: 'اسم الكاتب' }),
                    bio: fields.text({ label: 'نبذة عن الكاتب' }),
                    avatar: fields.text({ label: 'الصورة الشخصية' }),
                    email: fields.text({ label: 'البريد الإلكتروني' }),
                }, { label: 'معلومات الكاتب' }),
                logo: fields.object({
                    src: fields.text({ label: 'مسار الشعار' }),
                    alt: fields.text({ label: 'النص البديل للشعار' }),
                    text: fields.text({ label: 'نص الشعار' }),
                }, { label: 'الشعار' }),
                social: fields.array(
                    fields.object({
                        platform: fields.text({ label: 'المنصة' }),
                        url: fields.url({ label: 'الرابط' }),
                        icon: fields.text({ label: 'الأيقونة' }),
                    }),
                    {
                        label: 'روابط التواصل الاجتماعي',
                        itemLabel: (props) => props.fields.platform.value || 'رابط جديد',
                    }
                ),
                navigation: fields.array(
                    fields.text({ label: 'عنصر' }),
                    {
                        label: 'قائمة التنقل',
                        itemLabel: (props) => props.value || 'عنصر جديد',
                    }
                ),
                footer: fields.object({
                    about: fields.object({
                        title: fields.text({ label: 'العنوان' }),
                        description: fields.text({ label: 'الوصف', multiline: true }),
                    }, { label: 'قسم من نحن' }),
                    links: fields.array(
                        fields.text({ label: 'رابط' }),
                        {
                            label: 'روابط الفوتر',
                            itemLabel: (props) => props.value || 'رابط جديد',
                        }
                    ),
                    copyright: fields.text({ label: 'حقوق النشر' }),
                }, { label: 'الفوتر' }),
                postsPerPage: fields.number({
                    label: 'عدد المقالات في الصفحة',
                    defaultValue: 10,
                }),
                language: fields.text({
                    label: 'اللغة',
                    defaultValue: 'ar',
                }),
                direction: fields.text({
                    label: 'الاتجاه',
                    defaultValue: 'rtl',
                }),
            },
        }),
    },

    collections: {
        blog: collection({
            label: 'المقالات والمشاريع',
            slugField: 'slug',
            path: 'src/content/blog/*',
            format: { contentField: 'body' },
            entryLayout: 'content',
            schema: {
                slug: fields.slug({ name: { label: 'الرابط (Slug)' } }),
                title: fields.text({
                    label: 'العنوان',
                    validation: { length: { min: 1 } },
                }),
                description: fields.text({
                    label: 'الوصف',
                    multiline: true,
                }),
                date: fields.date({
                    label: 'تاريخ النشر',
                    defaultValue: { kind: 'today' },
                }),
                author: fields.text({
                    label: 'الكاتب',
                    defaultValue: 'فريق 3AAI',
                }),
                image: fields.image({
                    label: 'الصورة البارزة',
                    directory: 'public/images/blog',
                    publicPath: '/images/blog/',
                }),
                category: fields.select({
                    label: 'التصنيف',
                    options: [
                        { label: 'أخبار', value: 'أخبار' },
                        { label: 'تقنية', value: 'تقنية' },
                        { label: 'تطوير', value: 'تطوير' },
                        { label: 'شروحات', value: 'شروحات' },
                        { label: 'نشر', value: 'نشر' },
                        { label: 'CMS', value: 'CMS' },
                        { label: 'Astro', value: 'Astro' },
                        { label: 'ذكاء اصطناعي', value: 'ذكاء اصطناعي' },
                        { label: 'عام', value: 'عام' },
                    ],
                    defaultValue: 'تقنية',
                }),
                tags: fields.array(
                    fields.text({ label: 'وسم' }),
                    {
                        label: 'الوسوم',
                        itemLabel: (props) => props.value || 'وسم جديد',
                    }
                ),
                draft: fields.checkbox({
                    label: 'مسودة؟',
                    defaultValue: false,
                }),
                client: fields.text({
                    label: 'العميل (للمشاريع)',
                }),
                projectUrl: fields.url({
                    label: 'رابط المشروع',
                }),
                serviceType: fields.text({
                    label: 'نوع الخدمة',
                }),
                body: fields.document({
                    label: 'المحتوى',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/blog',
                        publicPath: '/images/blog/',
                    },
                }),
            },
        }),

        pages: collection({
            label: 'الصفحات الثابتة',
            slugField: 'slug',
            path: 'src/content/pages/*',
            format: { contentField: 'body' },
            schema: {
                slug: fields.slug({ name: { label: 'الرابط (Slug)' } }),
                title: fields.text({
                    label: 'العنوان',
                    validation: { length: { min: 1 } },
                }),
                description: fields.text({
                    label: 'الوصف',
                    multiline: true,
                }),
                image: fields.image({
                    label: 'صورة الغلاف',
                    directory: 'public/images/pages',
                    publicPath: '/images/pages/',
                }),
                body: fields.document({
                    label: 'المحتوى',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/pages',
                        publicPath: '/images/pages/',
                    },
                }),
            },
        }),

        authors: collection({
            label: 'المؤلفون',
            slugField: 'slug',
            path: 'src/content/authors/*',
            format: { contentField: 'body' },
            schema: {
                slug: fields.slug({ name: { label: 'الرابط (Slug)' } }),
                name: fields.text({
                    label: 'الاسم',
                    validation: { length: { min: 1 } },
                }),
                role: fields.text({
                    label: 'الوظيفة/الدور',
                }),
                avatar: fields.image({
                    label: 'الصورة الشخصية',
                    directory: 'public/images/authors',
                    publicPath: '/images/authors/',
                }),
                bio: fields.text({
                    label: 'النبذة المختصرة',
                    multiline: true,
                }),
                social: fields.object({
                    twitter: fields.url({ label: 'Twitter' }),
                    github: fields.url({ label: 'GitHub' }),
                    linkedin: fields.url({ label: 'LinkedIn' }),
                }, {
                    label: 'روابط التواصل الاجتماعي',
                }),
                body: fields.document({
                    label: 'السيرة الذاتية الكاملة',
                    formatting: true,
                }),
            },
        }),

        // مجموعة الخدمات
        services: collection({
            label: 'الخدمات',
            slugField: 'slug',
            path: 'src/content/services/*',
            format: { contentField: 'body' },
            entryLayout: 'content',
            schema: {
                slug: fields.slug({ name: { label: 'الرابط (Slug)' } }),
                title: fields.text({
                    label: 'عنوان الخدمة',
                    validation: { length: { min: 1 } },
                }),
                description: fields.text({
                    label: 'وصف الخدمة',
                    multiline: true,
                }),
                icon: fields.text({
                    label: 'أيقونة الخدمة (Emoji)',
                    description: 'مثال: 🚀 أو 💻',
                }),
                image: fields.image({
                    label: 'صورة الخدمة',
                    directory: 'public/images/services',
                    publicPath: '/images/services/',
                }),
                features: fields.array(
                    fields.text({ label: 'ميزة' }),
                    {
                        label: 'مميزات الخدمة',
                        itemLabel: (props) => props.value || 'ميزة جديدة',
                    }
                ),
                order: fields.number({
                    label: 'ترتيب العرض',
                    defaultValue: 0,
                }),
                draft: fields.checkbox({
                    label: 'مسودة؟',
                    defaultValue: false,
                }),
                body: fields.document({
                    label: 'تفاصيل الخدمة',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/services',
                        publicPath: '/images/services/',
                    },
                }),
            },
        }),

        // مجموعة معرض الأعمال
        portfolio: collection({
            label: 'معرض الأعمال',
            slugField: 'slug',
            path: 'src/content/portfolio/*',
            format: { contentField: 'body' },
            entryLayout: 'content',
            schema: {
                slug: fields.slug({ name: { label: 'الرابط (Slug)' } }),
                title: fields.text({
                    label: 'عنوان المشروع',
                    validation: { length: { min: 1 } },
                }),
                description: fields.text({
                    label: 'وصف المشروع',
                    multiline: true,
                }),
                client: fields.text({
                    label: 'اسم العميل',
                }),
                date: fields.date({
                    label: 'تاريخ الإنجاز',
                    defaultValue: { kind: 'today' },
                }),
                image: fields.image({
                    label: 'الصورة الرئيسية',
                    directory: 'public/images/portfolio',
                    publicPath: '/images/portfolio/',
                }),
                category: fields.select({
                    label: 'تصنيف المشروع',
                    options: [
                        { label: 'تطوير ويب', value: 'تطوير ويب' },
                        { label: 'تطبيقات موبايل', value: 'تطبيقات موبايل' },
                        { label: 'ذكاء اصطناعي', value: 'ذكاء اصطناعي' },
                        { label: 'تصميم UI/UX', value: 'تصميم UI/UX' },
                        { label: 'أنظمة إدارة', value: 'أنظمة إدارة' },
                        { label: 'أخرى', value: 'أخرى' },
                    ],
                    defaultValue: 'تطوير ويب',
                }),
                technologies: fields.array(
                    fields.text({ label: 'تقنية' }),
                    {
                        label: 'التقنيات المستخدمة',
                        itemLabel: (props) => props.value || 'تقنية جديدة',
                    }
                ),
                projectUrl: fields.url({
                    label: 'رابط المشروع',
                }),
                featured: fields.checkbox({
                    label: 'مشروع مميز؟',
                    defaultValue: false,
                }),
                draft: fields.checkbox({
                    label: 'مسودة؟',
                    defaultValue: false,
                }),
                body: fields.document({
                    label: 'تفاصيل المشروع',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/portfolio',
                        publicPath: '/images/portfolio/',
                    },
                }),
            },
        }),
    },
});
