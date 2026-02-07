/**
 * مكون بطاقة المقال - يعرض معلومات مقال واحد من المدونة
 * Feature: blog-posts-section
 * 
 * Validates: Requirements 3.1, 3.2, 3.3, 5.1, 5.2, 5.3, 9.4, 10.1, 10.3, 10.5
 */

import React from 'react';
import type { PostCardProps } from './types';

/**
 * مكون PostCard - يعرض بطاقة مقال واحد
 * 
 * @param props - خصائص المكون
 * @param props.post - بيانات المقال المراد عرضه
 * 
 * @example
 * <PostCard post={{
 *   id: 1,
 *   title: 'عنوان المقال',
 *   excerpt: 'نبذة مختصرة عن المقال',
 *   link: 'https://example.com/post',
 *   featuredImage: 'https://example.com/image.jpg'
 * }} />
 */
export function PostCard({ post }: PostCardProps) {
  return (
    <article className="glass-card rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group h-full flex flex-col">
      {/* الصورة المميزة */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={post.featuredImage}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* تأثير overlay عند hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* محتوى البطاقة */}
      <div className="p-6 flex flex-col flex-grow">
        {/* العنوان */}
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
          {post.title}
        </h3>

        {/* النبذة المختصرة */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        {/* رابط المقال */}
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`اقرأ المزيد عن ${post.title}`}
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium group/link"
        >
          <span>اقرأ المزيد</span>
          <svg
            className="w-4 h-4 mr-2 transition-transform group-hover/link:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default PostCard;
