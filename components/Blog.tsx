import React, { forwardRef } from 'react';
import { type BlogPost } from '../types';
import SectionTitle from './SectionTitle';

interface BlogProps {
  posts: BlogPost[];
  onViewPost: (id: number) => void;
}

const BlogCard: React.FC<{ post: BlogPost; onViewPost: (id: number) => void }> = ({ post, onViewPost }) => (
  <div 
    onClick={() => onViewPost(post.id)}
    data-interactive
    className="bg-zinc-900 p-6 rounded-md shadow-lg transform transition-all duration-300 hover:-translate-y-2 border border-zinc-800/50 hover:border-orange-500/30 flex flex-col cursor-pointer group glow-on-hover"
  >
    <div className="flex justify-between items-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-slate-100 group-hover:text-orange-500 transition-colors mb-3">{post.title}</h3>
    <p className="text-slate-400 mb-4 flex-grow text-sm">{post.excerpt}</p>
    <div className="flex justify-between items-center mt-auto">
      <p className="text-xs text-slate-500 font-mono">{post.date}</p>
      <span className="text-orange-500 font-semibold text-sm group-hover:underline">
        Read more &rarr;
      </span>
    </div>
  </div>
);

const Blog = forwardRef<HTMLElement, BlogProps>(({ posts, onViewPost }, ref) => {
  return (
    <section ref={ref} id="blog" className="py-24 fade-up-on-scroll">
      <div className="container mx-auto">
        <SectionTitle number="3" title="My Writings" className="mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} onViewPost={onViewPost} />
          ))}
        </div>
      </div>
    </section>
  );
});

Blog.displayName = 'Blog';

export default Blog;