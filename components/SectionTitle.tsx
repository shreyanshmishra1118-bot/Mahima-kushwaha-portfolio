import React from 'react';

interface SectionTitleProps {
  number: string;
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ number, title, className = '' }) => (
  <h2 className={`text-2xl md:text-3xl font-bold text-slate-100 flex items-center whitespace-nowrap ${className}`}>
    <span className="text-orange-500 font-mono text-xl md:text-2xl mr-4">0{number}.</span>
    {title}
    <span className="h-px w-full bg-zinc-700 ml-6 section-title-line"></span>
  </h2>
);

export default SectionTitle;