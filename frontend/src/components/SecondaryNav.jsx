import React, { useState, useEffect } from 'react';

export default function SecondaryNav({ activeTab }) {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Obserwator przewijania ekranu
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Pokaż pasek dopiero po zjechaniu niżej (ok. 260px)
      if (scrollY > 260) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      if (activeTab === 'home') {
        const sections = ['hero', 'problems', 'faq', 'contact'];
        const scrollPosition = scrollY + 220;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -135; // 72px (Navbar) + ~48px (SecondaryNav) + 15px marginesu
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const homeItems = [
    { id: 'hero', label: 'O programie' },
    { id: 'problems', label: 'Co zyskujesz' },
    { id: 'faq', label: 'Częste pytania' },
    { id: 'contact', label: 'Kontakt' },
  ];

  if (!visible || activeTab !== 'home') return null;

  return (
    <div className="sticky top-[72px] z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all duration-300 animate-fadeIn">
      <div className="max-w-5xl mx-auto px-4 flex justify-center py-2 sm:py-2.5">
        {/* Wyśrodkowana nawigacja podrzędna spójna z jasnym motywem serwisu */}
        <div className="p-1 bg-slate-100/90 rounded-full border border-slate-200/80 inline-flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar scroll-smooth">
          {homeItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-school-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
