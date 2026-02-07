# دليل استكشاف الأخطاء - موقع 3A-AI

> حلول للمشاكل الشائعة التي قد تواجهها

---

## 🐛 المشاكل الشائعة

### 1. خطأ Keystatic: lodash export error

#### الخطأ
```
[astro-island] Error hydrating /node_modules/@keystatic/astro/internal/keystatic-page.js
SyntaxError: The requested module '/node_modules/lodash/debounce.js' does not provide an export named 'default'
```

#### السبب
مكتبة `lodash` الإصدار 4.x لا تدعم ES Modules بشكل كامل، بينما Keystatic يحتاج إلى ES Modules.

#### الحل
استبدل `lodash` بـ `lodash-es`:

```bash
# 1. احذف lodash القديم
npm uninstall lodash

# 2. ثبّت lodash-es
npm install lodash-es

# 3. امسح الكاش وأعد التشغيل
rm -rf .astro node_modules/.vite
npm run dev
```

#### التحقق من الحل
افتح `http://localhost:4321/keystatic` - يجب أن تعمل لوحة التحكم بدون أخطاء.

---

### 2. لوحة التحكم لا تظهر

#### الأعراض
- عند فتح `/keystatic` تظهر صفحة فارغة أو خطأ 404

#### الحلول المحتملة

**الحل 1: تأكد من وضع التطوير**
```bash
# Keystatic يعمل فقط في وضع التطوير
npm run dev

# وليس
npm run build
npm run preview
```

**الحل 2: تحقق من astro.config.mjs**
تأكد من أن Keystatic مفعّل في وضع التطوير:
```javascript
export default defineConfig({
  integrations: [
    react(),
    markdoc(),
    ...(process.env.NODE_ENV !== 'production' ? [keystatic()] : []),
  ]
});
```

**الحل 3: أعد تثبيت التبعيات**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

### 3. الصور لا تظهر

#### الأعراض
- الصور المرفوعة عبر Keystatic لا تظهر في الموقع

#### الحلول

**الحل 1: تحقق من المسار**
تأكد من أن المسار يبدأ بـ `/`:
```yaml
# ✅ صحيح
image: /images/services/my-service/image.webp

# ❌ خطأ
image: images/services/my-service/image.webp
```

**الحل 2: تحقق من وجود الصورة**
```bash
# تحقق من وجود الصورة في public/
ls -la public/images/services/my-service/
```

**الحل 3: امسح الكاش**
```bash
rm -rf .astro dist
npm run dev
```

---

### 4. خطأ في البناء (Build Error)

#### الأعراض
- `npm run build` يفشل مع أخطاء

#### الحلول

**الحل 1: تحقق من صحة المحتوى**
تأكد من أن جميع الحقول المطلوبة موجودة في ملفات `.mdoc`:
```bash
# تحقق من ملفات المحتوى
find src/content -name "*.mdoc" -exec head -20 {} \;
```

**الحل 2: تحقق من TypeScript**
```bash
npx astro check
```

**الحل 3: امسح الكاش وأعد البناء**
```bash
rm -rf .astro dist node_modules/.vite
npm run build
```

---

### 5. التغييرات لا تظهر

#### الأعراض
- بعد التعديل، التغييرات لا تظهر في المتصفح

#### الحلول

**الحل 1: امسح كاش المتصفح**
- Chrome/Edge: `Ctrl+Shift+R` (Windows) أو `Cmd+Shift+R` (Mac)
- Firefox: `Ctrl+F5` (Windows) أو `Cmd+Shift+R` (Mac)

**الحل 2: أعد تشغيل السيرفر**
```bash
# اضغط Ctrl+C لإيقاف السيرفر
# ثم
npm run dev
```

**الحل 3: امسح كاش Astro**
```bash
rm -rf .astro
npm run dev
```

---

### 6. خطأ Port مستخدم

#### الخطأ
```
Port 4321 is already in use
```

#### الحلول

**الحل 1: أوقف العملية المستخدمة للمنفذ**
```bash
# Linux/Mac
lsof -ti:4321 | xargs kill -9

# أو ابحث عن العملية يدوياً
lsof -i:4321
```

**الحل 2: استخدم منفذ آخر**
```bash
npm run dev -- --port 3000
```

---

### 7. خطأ في Git Push

#### الأعراض
- لا يمكن رفع التغييرات إلى GitHub

#### الحلول

**الحل 1: تحقق من حالة Git**
```bash
git status
git branch
```

**الحل 2: اسحب آخر التحديثات أولاً**
```bash
git pull origin main
# حل أي تعارضات إن وجدت
git push origin main
```

**الحل 3: تحقق من الصلاحيات**
تأكد من أن لديك صلاحيات الكتابة على المستودع.

---

### 8. GitHub Actions فشل

#### الأعراض
- النشر التلقائي فشل

#### الحلول

**الحل 1: تحقق من السجلات**
1. افتح GitHub → **Actions**
2. اضغط على آخر Workflow فاشل
3. اقرأ رسالة الخطأ

**الحل 2: تحقق من Secrets**
تأكد من أن المتغيرات التالية موجودة في GitHub Secrets:
- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`

**الحل 3: اختبر البناء محلياً**
```bash
npm run build
# إذا فشل، حل المشكلة أولاً
```

---

### 9. خطأ Module not found

#### الخطأ
```
Cannot find module '@astrojs/...'
```

#### الحل
```bash
# أعد تثبيت التبعيات
rm -rf node_modules package-lock.json
npm install
```

---

### 10. خطأ في Keystatic بعد التحديث

#### الأعراض
- بعد تحديث التبعيات، Keystatic لا يعمل

#### الحلول

**الحل 1: تحقق من التوافق**
```bash
# تحقق من إصدارات Keystatic
npm list @keystatic/astro @keystatic/core
```

**الحل 2: أعد تثبيت Keystatic**
```bash
npm uninstall @keystatic/astro @keystatic/core
npm install @keystatic/astro@latest @keystatic/core@latest
```

**الحل 3: راجع سجل التغييرات**
راجع [Keystatic Releases](https://github.com/Thinkmill/keystatic/releases) للتحقق من التغييرات الكبيرة.

---

## 🔍 تشخيص المشاكل

### خطوات التشخيص العامة

1. **اقرأ رسالة الخطأ بعناية**
   - غالباً ما تحتوي على الحل

2. **تحقق من السجلات (Logs)**
   ```bash
   # سجلات التطوير
   npm run dev
   
   # سجلات البناء
   npm run build
   ```

3. **امسح الكاش**
   ```bash
   rm -rf .astro dist node_modules/.vite
   ```

4. **أعد تثبيت التبعيات**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

5. **تحقق من Git**
   ```bash
   git status
   git log --oneline -5
   ```

---

## 📞 الحصول على المساعدة

إذا لم تجد حلاً لمشكلتك:

1. **ابحث في Issues**
   - [Astro Issues](https://github.com/withastro/astro/issues)
   - [Keystatic Issues](https://github.com/Thinkmill/keystatic/issues)

2. **اسأل في Discord**
   - [Astro Discord](https://astro.build/chat)

3. **افتح Issue جديد**
   - في مستودع المشروع على GitHub

4. **تواصل معنا**
   - البريد: support@3aai.in

---

## 💡 نصائح للوقاية

### 1. احتفظ بنسخ احتياطية
```bash
# نسخ احتياطي يومي
git add .
git commit -m "backup: $(date +%Y-%m-%d)"
git push
```

### 2. اختبر قبل النشر
```bash
npm run build
npm run preview
```

### 3. حدّث التبعيات بحذر
```bash
# تحقق من التحديثات المتاحة
npm outdated

# حدّث واحدة تلو الأخرى
npm update <package-name>
```

### 4. استخدم Git بشكل صحيح
```bash
# رسائل commit واضحة
git commit -m "fix: حل مشكلة الصور في Keystatic"

# فروع للميزات الجديدة
git checkout -b feature/new-feature
```

---

## 📚 موارد إضافية

- [الدليل الشامل](DEVELOPER_GUIDE.md)
- [دليل Keystatic](KEYSTATIC_GUIDE.md)
- [المرجع السريع](QUICK_REFERENCE.md)

---

**آخر تحديث**: فبراير 2026  
**الإصدار**: 1.0
