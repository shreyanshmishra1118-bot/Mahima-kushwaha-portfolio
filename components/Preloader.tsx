import React from 'react';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-500 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-hidden={!isLoading}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-100 mb-6 animate-text-pulse">
          Welcome
        </h1>
        <div 
          className="w-10 h-10 border-4 border-zinc-800 border-t-orange-500 rounded-full animate-spin mx-auto"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;