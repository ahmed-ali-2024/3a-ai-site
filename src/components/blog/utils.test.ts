/**
 * اختبارات الوحدة لدوال المساعدة
 * Feature: blog-posts-section
 */

import { describe, it, expect } from 'vitest';
import { stripHtml, extractExcerpt, getDefaultImage } from './utils';
import { DEFAULT_IMAGE_URL, MAX_EXCERPT_LENGTH } from './constants';

describe('stripHtml', () => {
  it('should remove simple HTML tags', () => {
    const input = '<p>Hello World</p>';
    const result = stripHtml(input);
    expect(result).toBe('Hello World');
  });

  it('should remove nested HTML tags', () => {
    const input = '<div><p>Hello <strong>World</strong></p></div>';
    const result = stripHtml(input);
    expect(result).toBe('Hello World');
  });

  it('should handle text without HTML tags', () => {
    const input = 'Plain text';
    const result = stripHtml(input);
    expect(result).toBe('Plain text');
  });

  it('should handle empty string', () => {
    const input = '';
    const result = stripHtml(input);
    expect(result).toBe('');
  });

  it('should remove self-closing tags', () => {
    const input = 'Text with <br/> line break';
    const result = stripHtml(input);
    expect(result).toBe('Text with  line break');
  });

  it('should handle Arabic text with HTML', () => {
    const input = '<p>مرحباً <strong>بالعالم</strong></p>';
    const result = stripHtml(input);
    expect(result).toBe('مرحباً بالعالم');
  });

  it('should decode HTML entities like quotes', () => {
    const input = '&#8220;Quote&#8221; and &#8216;single&#8217;';
    const result = stripHtml(input);
    expect(result).toBe('"Quote" and \u2018single\u2019');
  });

  it('should decode common HTML entities', () => {
    const input = '&amp; &lt; &gt; &quot; &nbsp;';
    const result = stripHtml(input);
    expect(result).toBe('& < > "  ');
  });

  it('should handle HTML tags and entities together', () => {
    const input = '<p>شرح RentAHuman.ai: كيف تربح المال من تنفيذ مهام لـ &#8220;روبوتات&#8221; الذكاء الاصطناعي؟</p>';
    const result = stripHtml(input);
    expect(result).toBe('شرح RentAHuman.ai: كيف تربح المال من تنفيذ مهام لـ "روبوتات" الذكاء الاصطناعي؟');
  });
});

describe('extractExcerpt', () => {
  it('should return short text as-is', () => {
    const input = '<p>Short text</p>';
    const result = extractExcerpt(input, 150);
    expect(result).toBe('Short text');
  });

  it('should truncate long text and add ellipsis', () => {
    const longText = '<p>' + 'a'.repeat(200) + '</p>';
    const result = extractExcerpt(longText, 150);
    expect(result).toHaveLength(153); // 150 + '...'
    expect(result.endsWith('...')).toBe(true);
  });

  it('should use default max length of 150', () => {
    const longText = '<p>' + 'a'.repeat(200) + '</p>';
    const result = extractExcerpt(longText);
    expect(result).toHaveLength(153); // MAX_EXCERPT_LENGTH + '...'
    expect(result.endsWith('...')).toBe(true);
  });

  it('should strip HTML before truncating', () => {
    const input = '<p>Hello <strong>World</strong></p>';
    const result = extractExcerpt(input, 10);
    expect(result).toBe('Hello Worl...');
  });

  it('should handle empty string', () => {
    const input = '';
    const result = extractExcerpt(input, 150);
    expect(result).toBe('');
  });

  it('should handle text exactly at max length', () => {
    const input = 'a'.repeat(150);
    const result = extractExcerpt(input, 150);
    expect(result).toBe(input);
    expect(result.endsWith('...')).toBe(false);
  });

  it('should trim whitespace before adding ellipsis', () => {
    const input = 'Hello World     ' + 'a'.repeat(150);
    const result = extractExcerpt(input, 15);
    // trim() removes trailing whitespace, so we expect 'Hello World...'
    expect(result).toBe('Hello World...');
  });

  it('should handle Arabic text', () => {
    const input = '<p>مرحباً بالعالم</p>';
    const result = extractExcerpt(input, 10);
    expect(result).toBe('مرحباً بال...');
  });
});

describe('getDefaultImage', () => {
  it('should return the default image URL', () => {
    const result = getDefaultImage();
    expect(result).toBe(DEFAULT_IMAGE_URL);
  });

  it('should return a valid URL', () => {
    const result = getDefaultImage();
    expect(result).toMatch(/^https?:\/\/.+/);
  });

  it('should return the same URL on multiple calls', () => {
    const result1 = getDefaultImage();
    const result2 = getDefaultImage();
    expect(result1).toBe(result2);
  });
});
