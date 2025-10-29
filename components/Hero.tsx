import React, { forwardRef } from 'react';

const Hero = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center py-20 -mt-20">
      <div className="container mx-auto px-4 text-left max-w-4xl mt-16">
        <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <p className="bg-orange-500 text-black font-mono px-3 py-1 rounded-sm inline-block mb-5 text-base">
            Hi, my name is
          </p>
        </div>
        <h1 className="font-signature text-6xl sm:text-7xl md:text-8xl font-bold text-slate-100 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Mahima Kushwaha.
        </h1>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-400 leading-tight mt-1 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          I build things for the web.
        </h2>
        <p className="mt-8 text-lg text-slate-400 max-w-xl animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          I’m a web developer specializing in building exceptional digital experiences. Currently, I’m focused on creating responsive, human-centered products and expanding my skills in modern frontend technologies.
        </p>
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
           <a 
            href="mailto:mahimakushwah00@gmail.com"
            data-interactive
            className="inline-block bg-orange-500 text-black font-mono font-semibold px-8 py-4 rounded-md hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 glow-on-hover"
           >
            Get In Touch
           </a>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;