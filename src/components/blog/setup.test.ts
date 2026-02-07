/**
 * اختبار للتحقق من إعداد fast-check بشكل صحيح
 * Feature: blog-posts-section
 */

import { describe, it, expect } from 'vitest';
import fc from 'fast-check';

describe('Fast-check Setup Verification', () => {
  it('should run a simple property-based test', () => {
    fc.assert(
      fc.property(fc.integer(), (n) => {
        // خاصية بسيطة: أي عدد صحيح مضروب في 2 يجب أن يكون زوجياً
        const result = n * 2;
        // استخدام Math.abs للتعامل مع -0
        expect(Math.abs(result % 2)).toBe(0);
      }),
      { numRuns: 100 }
    );
  });

  it('should generate strings correctly', () => {
    fc.assert(
      fc.property(fc.string(), (str) => {
        // خاصية بسيطة: طول السلسلة النصية يجب أن يكون غير سالب
        expect(str.length).toBeGreaterThanOrEqual(0);
      }),
      { numRuns: 100 }
    );
  });

  it('should generate arrays correctly', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (arr) => {
        // خاصية بسيطة: طول المصفوفة يجب أن يكون غير سالب
        expect(arr.length).toBeGreaterThanOrEqual(0);
      }),
      { numRuns: 100 }
    );
  });
});
