/**
 * دوال مساعدة لمكون عرض المقالات من المدونة الخارجية
 * Feature: blog-posts-section
 */

import { DEFAULT_IMAGE_URL, MAX_EXCERPT_LENGTH } from './constants';

/**
 * فك تشفير HTML entities (مثل &amp; و &#8220; وغيرها)
 * 
 * @param text - النص الذي يحتوي على HTML entities
 * @returns النص مع HTML entities مفكوكة
 */
function decodeHtmlEntities(text: string): string {
  // فك تشفير الـ numeric entities أولاً (مثل &#8220;)
  let decoded = text.replace(/&#(\d+);/g, (match, dec) => {
    return String.fromCharCode(parseInt(dec, 10));
  });
  
  // فك تشفير الـ hex entities (مثل &#x2018;)
  decoded = decoded.replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });
  
  // فك تشفير الـ named entities الشائعة
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
    '&apos;': "'",
    '&nbsp;': ' ',
    '&ndash;': '–',
    '&mdash;': '—',
    '&hellip;': '…',
    '&laquo;': '«',
    '&raquo;': '»',
  };
  
  for (const [entity, char] of Object.entries(entities)) {
    decoded = decoded.replace(new RegExp(entity, 'g'), char);
  }
  
  return decoded;
}

/**
 * إزالة جميع علامات HTML من النص وفك تشفير HTML entities
 * 
 * @param html - النص الذي يحتوي على علامات HTML
 * @returns النص العادي بدون علامات HTML ومع HTML entities مفكوكة
 * 
 * @example
 * stripHtml('<p>Hello <strong>World</strong></p>') // 'Hello World'
 * stripHtml('Plain text') // 'Plain text'
 * stripHtml('&#8220;Quote&#8221;') // '"Quote"'
 * 
 * Validates: Requirements 3.4
 */
export function stripHtml(html: string): string {
  // إزالة جميع علامات HTML باستخدام regex
  const withoutTags = html.replace(/<[^>]*>/g, '');
  // فك تشفير HTML entities
  return decodeHtmlEntities(withoutTags);
}

/**
 * اقتصاص النص إلى الطول المحدد وإضافة "..." في النهاية
 * يزيل علامات HTML أولاً ثم يقتص النص
 * 
 * @param htmlContent - المحتوى الذي قد يحتوي على علامات HTML
 * @param maxLength - الحد الأقصى لطول النص (افتراضياً 150 حرف)
 * @returns النص المقتص مع "..." إذا كان أطول من الحد الأقصى
 * 
 * @example
 * extractExcerpt('<p>Short text</p>', 150) // 'Short text'
 * extractExcerpt('<p>Very long text...</p>', 10) // 'Very long ...'
 * 
 * Validates: Requirements 3.4, 3.5
 */
export function extractExcerpt(htmlContent: string, maxLength: number = MAX_EXCERPT_LENGTH): string {
  // إزالة علامات HTML أولاً
  const plainText = stripHtml(htmlContent);
  
  // إذا كان النص أقصر من أو يساوي الحد الأقصى، إرجاعه كما هو
  if (plainText.length <= maxLength) {
    return plainText;
  }
  
  // اقتصاص النص وإضافة "..."
  return plainText.substring(0, maxLength).trim() + '...';
}

/**
 * إرجاع رابط الصورة الافتراضية
 * يُستخدم عندما لا تكون الصورة المميزة متوفرة للمقال
 * 
 * @returns رابط الصورة الافتراضية
 * 
 * @example
 * getDefaultImage() // 'https://images.unsplash.com/photo-...'
 * 
 * Validates: Requirements 1.4
 */
export function getDefaultImage(): string {
  return DEFAULT_IMAGE_URL;
}
