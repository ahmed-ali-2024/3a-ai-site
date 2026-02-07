/**
 * اختبارات بسيطة للتحقق من صحة الأنواع والثوابت
 * Feature: blog-posts-section
 */

import { describe, it, expect } from 'vitest';
import { API_CONFIG, DEFAULT_IMAGE_URL, MAX_EXCERPT_LENGTH } from './constants';
import type { BlogPost, WordPressPost, APIConfig } from './types';

describe('Types and Constants Setup', () => {
  describe('API_CONFIG', () => {
    it('should have correct base URL', () => {
      expect(API_CONFIG.baseURL).toBe('https://news.3aai.in');
    });

    it('should have correct endpoint', () => {
      expect(API_CONFIG.endpoint).toBe('/wp-json/wp/v2/posts');
    });

    it('should request 4 posts per page', () => {
      expect(API_CONFIG.params.per_page).toBe(4);
    });

    it('should enable embed parameter', () => {
      expect(API_CONFIG.params._embed).toBe(true);
    });
  });

  describe('Constants', () => {
    it('should have a default image URL', () => {
      expect(DEFAULT_IMAGE_URL).toBeDefined();
      expect(typeof DEFAULT_IMAGE_URL).toBe('string');
      expect(DEFAULT_IMAGE_URL.length).toBeGreaterThan(0);
    });

    it('should have max excerpt length of 150', () => {
      expect(MAX_EXCERPT_LENGTH).toBe(150);
    });
  });

  describe('Type Definitions', () => {
    it('should allow creating a valid BlogPost object', () => {
      const post: BlogPost = {
        id: 1,
        title: 'Test Post',
        excerpt: 'This is a test excerpt',
        link: 'https://example.com/post',
        featuredImage: 'https://example.com/image.jpg',
      };

      expect(post.id).toBe(1);
      expect(post.title).toBe('Test Post');
    });

    it('should allow creating a valid WordPressPost object', () => {
      const wpPost: WordPressPost = {
        id: 1,
        title: { rendered: 'Test Post' },
        excerpt: { rendered: 'Test excerpt' },
        link: 'https://example.com/post',
        _embedded: {
          'wp:featuredmedia': [{
            source_url: 'https://example.com/image.jpg',
          }],
        },
      };

      expect(wpPost.id).toBe(1);
      expect(wpPost.title.rendered).toBe('Test Post');
    });

    it('should allow creating APIConfig with correct structure', () => {
      const config: APIConfig = {
        baseURL: 'https://test.com',
        endpoint: '/api/posts',
        params: {
          per_page: 10,
          _embed: true,
        },
      };

      expect(config.baseURL).toBe('https://test.com');
      expect(config.params.per_page).toBe(10);
    });
  });
});
