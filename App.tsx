import React, { useState, useRef, useEffect } from 'react';
import { type BlogPost } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tools from './components/Tools';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import SocialLinks from './components/SocialLinks';
import EmailLink from './components/EmailLink';
import Report from './components/Report';
import Preloader from './components/Preloader';

const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: 'How I Completed My Web Development Internship',
    date: 'September 1, 2024',
    excerpt: 'My web development internship at Oasis Infobyte was a transformative experience, bridging the gap between theory and real-world application. I moved beyond just writing code to understanding how to architect and build maintainable, user-centric web applications.',
    content: (
      <div className="space-y-6">
        <p>
          Embarking on my web development internship with Oasis Infobyte was a pivotal moment in my career. It was an opportunity to transition from theoretical knowledge to practical, real-world application. This article chronicles my journey, the tasks I tackled, the skills I gained, and the valuable lessons I learned along the way.
        </p>

        <h3 className="text-2xl font-bold text-slate-100">My Internship Tasks: A Practical Gauntlet</h3>
        <p>
          The internship was structured around a series of tasks, each designed to build upon the last and introduce new concepts. My primary responsibilities revolved around frontend development, focusing on creating responsive and user-friendly web interfaces.
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>The Personal Portfolio:</strong> My first assignment was to build a personal portfolio website from scratch. This project served as the foundation for my learning, requiring me to create a clean, responsive single-page application using React and Tailwind CSS.
          </li>
          <li>
            <strong>Responsive Landing Page:</strong> The second task was to develop a pixel-perfect, responsive landing page. This honed my CSS skills and reinforced the importance of a mobile-first design approach.
          </li>
          <li>
            <strong>A Dynamic To-Do List Web App:</strong> The final and most challenging task was to create a functional to-do list application, which introduced me to the complexities of state management and persisting data to local storage.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-slate-100">Conclusion: More Than Just Code</h3>
        <p>
          My internship at Oasis Infobyte was an invaluable experience. It bridged the gap between academic learning and professional practice, providing me with the confidence and skills to tackle real-world web development challenges. This experience has solidified my passion for web development, and I am excited to continue learning and building amazing things for the web.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Top 5 Tips for Building a Portfolio Fast',
    date: 'September 15, 2024',
    excerpt: 'Building a professional portfolio doesn\'t have to take weeks. My top five tips focus on efficiency: leverage a utility-first CSS framework like Tailwind, stick to a clean single-page layout, use high-quality placeholders, write concise project descriptions, and deploy using a simple service like GitHub Pages.',
    content: (
       <div className="space-y-6">
        <p>
          Need a portfolio, fast? Whether it's for a job application or a hackathon, sometimes you don't have weeks to craft the perfect site. The good news is, with modern tools, you can build a clean, professional, and responsive portfolio in just a couple of hours. This guide will walk you through the process, focusing on speed and efficiency without sacrificing quality.
        </p>
        <h3 className="text-2xl font-bold text-slate-100">1. Leverage a CDN for Styling</h3>
        <p>
          This is the single biggest time-saver. Instead of setting up a local development environment with Node.js and a build process, use the Tailwind CSS CDN. Just add the script tag to your HTML head, and you can start using thousands of utility classes immediately. This lets you focus purely on design and layout.
        </p>
        <h3 className="text-2xl font-bold text-slate-100">2. Stick to a Single-Page Layout</h3>
        <p>
          Managing multiple pages, routing, and navigation can be time-consuming. A single-page application with smooth-scrolling sections (Home, About, Projects, Contact) is elegant, modern, and much faster to build. It keeps the user experience focused and simplifies your code.
        </p>
        <h3 className="text-2xl font-bold text-slate-100">3. Use Quality Placeholders</h3>
        <p>
          Don't let the hunt for perfect project images slow you down. Use a service like <a href="https://picsum.photos/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">Lorem Picsum</a> to generate high-quality, correctly-sized placeholders. This keeps your layout looking professional while you work on the content, and you can easily swap them out later.
        </p>
        <h3 className="text-2xl font-bold text-slate-100">4. Write Concise Project Descriptions</h3>
        <p>
          Focus on impact. For each project, write 2-3 sentences covering the problem, your solution, and the technologies used. Bullet points are great for listing key features or your specific contributions. The goal is to give a clear, scannable overview of your skills.
        </p>
        <h3 className="text-2xl font-bold text-slate-100">5. Use a Simple Deployment Service</h3>
        <p>
          Services like Netlify, Vercel, or GitHub Pages offer incredibly simple drag-and-drop or Git-based deployment. You can have your static site live on the web in minutes, complete with a free URL. This final step is often surprisingly quick and provides a huge motivational boost.
        </p>
      </div>
    ),
  },
];

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeBlogPost, setActiveBlogPost] = useState<BlogPost | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const sections = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    tools: useRef<HTMLElement>(null),
    blog: useRef<HTMLElement>(null),
    report: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };
  
  const navLinks = ['Home', 'About', 'Tools', 'Blog', 'Report', 'Contact'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); 

    return () => clearTimeout(timer);
  }, []);

  const handleNavLinkClick = (sectionId: string) => {
    const ref = sections[sectionId.toLowerCase() as keyof typeof sections];
    if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const sectionElements = Object.values(sections)
      .map(ref => ref.current)
      .filter(el => el && el.id !== 'home'); // Don't observe the hero section

    sectionElements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, [isLoading]);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2.5;
      let currentSection = 'home';
      // Find the current section based on scroll position
      const sectionEntries = Object.entries(sections);
      for (const [key, ref] of sectionEntries) {
          if (ref.current && ref.current.offsetTop <= scrollPosition) {
              currentSection = key;
          }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const viewBlogPost = (id: number) => {
    const post = blogPostsData.find(p => p.id === id);
    if (post) {
      setActiveBlogPost(post);
      window.scrollTo(0, 0);
    }
  };

  const closeBlogPost = () => {
    setActiveBlogPost(null);
  };

  return (
    <div className="bg-black min-h-screen">
      <Preloader isLoading={isLoading} />
      {activeBlogPost ? (
        <BlogPage post={activeBlogPost} onBack={closeBlogPost} />
      ) : (
        <>
          <Header navLinks={navLinks} activeSection={activeSection} onNavLinkClick={handleNavLinkClick}/>
          <SocialLinks />
          <EmailLink />
          <div className="container mx-auto px-4 sm:px-8 md:px-24">
            <main>
              <Hero ref={sections.home} />
              <About ref={sections.about} />
              <Tools ref={sections.tools} />
              <Blog ref={sections.blog} posts={blogPostsData} onViewPost={viewBlogPost} />
              <Report ref={sections.report} />
              <Contact ref={sections.contact} />
            </main>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;