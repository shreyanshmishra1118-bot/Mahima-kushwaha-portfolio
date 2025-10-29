import React from 'react';

const EmailLink: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col items-center fixed bottom-0 right-10 z-30">
        <div className="flex flex-col items-center">
            <a 
                href="mailto:mahimakushwah00@gmail.com"
                data-interactive
                className="font-mono text-sm tracking-widest text-slate-400 hover:text-orange-500 transition-colors duration-300 p-3"
                style={{ writingMode: 'vertical-rl' }}
            >
                mahimakushwah00@gmail.com
            </a>
        </div>
        <div className="w-px h-24 bg-slate-600 mt-4"></div>
    </div>
  );
};

export default EmailLink;
