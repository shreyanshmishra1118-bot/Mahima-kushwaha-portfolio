import React, { forwardRef } from 'react';
import SectionTitle from './SectionTitle';
import { profilePhoto } from '../assets/profile-photo';

const About = forwardRef<HTMLElement>((props, ref) => {
  const skillsData = [
    { name: 'React', percentage: 95 },
    { name: 'TypeScript', percentage: 90 },
    { name: 'JavaScript (ES6+)', percentage: 92 },
    { name: 'Tailwind CSS', percentage: 98 },
    { name: 'HTML & CSS', percentage: 99 },
  ];
  
  return (
    <section ref={ref} id="about" className="py-24 fade-up-on-scroll">
       <div className="container mx-auto">
        <SectionTitle number="1" title="About Me" />
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-3">
            <div className="text-slate-400 space-y-4 text-lg mb-12">
              <p>
                Hello! I'm Mahima, a passionate web developer with a keen eye for design and a drive to create intuitive, dynamic user experiences. My journey into web development started with a curiosity for how things work on the internet, which quickly grew into a passion for building elegant and functional websites.
              </p>
              <p>
                My recent internship at Oasis Infobyte honed my skills in modern web technologies, where I had the opportunity to work on exciting projects and transform ideas into reality. I thrive on solving complex problems and am always eager to learn and grow in this ever-evolving field.
              </p>
            </div>
            <div className="space-y-6">
              {skillsData.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-slate-200">{skill.name}</span>
                    <span className="text-sm font-medium text-slate-300">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2.5">
                    <div 
                      className="bg-orange-500 h-2.5 rounded-full progress-bar-inner" 
                      style={{ '--target-width': `${skill.percentage}%` } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center items-start">
            <div className="relative group w-full max-w-sm">
                <div className="aspect-square absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-amber-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative aspect-square bg-zinc-900 rounded-lg overflow-hidden flex items-center justify-center">
                    <img 
                        src={profilePhoto} 
                        alt="A placeholder image for Mahima Kushwaha's profile photo." 
                        className="w-full h-full object-cover" 
                    />
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
