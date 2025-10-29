import React from 'react';
import { type BlogPost } from '../types';

interface BlogPageProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ post, onBack }) => {
  return (
    <div className="min-h-screen bg-black text-slate-300 animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={onBack}
            data-interactive
            className="mb-8 text-orange-500 font-semibold hover:text-orange-400 transition-colors flex items-center group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Portfolio
          </button>
          
          <article className="prose prose-lg max-w-none prose-p:text-slate-400 prose-headings:text-slate-100 prose-a:text-orange-500 hover:prose-a:text-orange-400 prose-strong:text-slate-100 prose-ul:text-slate-400 prose-ol:text-slate-400">
            <h1 className="text-4xl font-bold text-slate-100 mb-4">{post.title}</h1>
            <p className="text-slate-500 text-base mb-8 font-mono">{post.date}</p>
            <div>{post.content}</div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
