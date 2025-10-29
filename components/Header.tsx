import React, { useState, useEffect } from 'react';

interface HeaderProps {
  navLinks: string[];
  activeSection: string;
  onNavLinkClick: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ navLinks, activeSection, onNavLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleLinkClick = (link: string) => {
    onNavLinkClick(link.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`bg-black/80 backdrop-blur-sm sticky top-0 z-30 transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-black/50' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-20">
            <div className="hidden md:block">
              <nav className="flex items-baseline space-x-6">
                {navLinks.map((link, index) => (
                  <button
                    key={link}
                    data-interactive
                    onClick={() => handleLinkClick(link)}
                    className={`text-sm transition-colors duration-300 font-mono relative group ${
                      activeSection === link.toLowerCase()
                        ? 'text-orange-500'
                        : 'text-slate-300 hover:text-orange-500'
                    }`}
                  >
                    <span className="text-orange-500 mr-1.5">0{index + 1}.</span>
                    {link}
                    <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-orange-500 transition-all duration-300 ease-out ${activeSection === link.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </button>
                ))}
              </nav>
            </div>
            <div className="md:hidden">
              <button
                data-interactive
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path className={`${isMenuOpen ? 'hidden' : 'inline-block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  <path className={`${isMenuOpen ? 'inline-block' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Container */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>

        {/* Panel */}
        <div
          id="mobile-menu"
          className={`absolute top-0 right-0 h-full w-3/4 max-w-xs bg-zinc-900 shadow-xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <h2 id="mobile-menu-title" className="sr-only">Main Menu</h2>
            <nav className="px-2 pt-2 pb-3 space-y-8 text-center">
              {navLinks.map((link, index) => (
                <button
                  key={link}
                  data-interactive
                  onClick={() => handleLinkClick(link)}
                  className="block text-slate-300 hover:text-orange-500 rounded-md px-3 py-2 text-base font-medium font-mono transition-opacity duration-300"
                  style={{ opacity: isMenuOpen ? 1 : 0, transitionDelay: isMenuOpen ? `${100 + index * 100}ms` : '0ms' }}
                >
                  <span className="text-orange-500 block mb-1">0{index + 1}.</span>
                  {link}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;