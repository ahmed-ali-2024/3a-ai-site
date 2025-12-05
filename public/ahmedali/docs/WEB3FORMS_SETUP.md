# تفعيل نموذج التواصل - Web3Forms

## الخطوات:

### 1. احصل على Access Key مجاني
- اذهب إلى: https://web3forms.com
- أدخل بريدك الإلكتروني (الذي ستصلك عليه الرسائل)
- انقر على "Create Access Key"
- انسخ الـ Access Key

### 2. ضع الـ Access Key في الموقع
- افتح ملف `index.html`
- ابحث عن السطر:
  ```html
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
  ```
- استبدل `YOUR_ACCESS_KEY_HERE` بالـ Access Key الخاص بك

### 3. جرب النموذج
- افتح الموقع في المتصفح
- املأ النموذج وأرسله
- ستصلك رسالة على بريدك الإلكتروني

## ملاحظات:
- ✅ مجاني تماماً بدون حدود
- ✅ لا يحتاج backend أو server
- ✅ يعمل مباشرة من HTML
- ✅ يدعم حماية من spam
- ✅ ستصلك الرسائل على بريدك مباشرة

## مثال على Access Key:
```
a1b2c3d4-e5f6-7890-abcd-ef1234567890
```

## إذا أردت تخصيص أكثر:
يمكنك إضافة المزيد من الخيارات في النموذج مثل:
- `redirect` - صفحة شكر بعد الإرسال
- `botcheck` - حماية من البوتات
- راجع التوثيق: https://docs.web3forms.com
