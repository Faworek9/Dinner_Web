import React, { useState, useEffect } from 'react';

export default function SecondaryNav({ activeTab, onSelectManualStep, activeManualStep }) {
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
        const sections = ['hero', 'problems', 'opinions', 'faq', 'contact'];
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
      const yOffset = -140; // bezpieczny offset pod główny pasek (105px) + margines
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const homeItems = [
    { id: 'hero', label: 'O programie' },
    { id: 'problems', label: 'Co zyskujesz' },
    { id: 'opinions', label: 'Opinie szkół' },
    { id: 'faq', label: 'Częste pytania' },
    { id: 'contact', label: 'Kontakt' },
  ];

  const manualItems = [
    { stepIndex: 0, label: '1. Uczniowie i stawki' },
    { stepIndex: 1, label: '2. Poranne odpisy' },
    { stepIndex: 2, label: '3. Raport dla kuchni' },
    { stepIndex: 3, label: '4. Rozliczenie miesiąca' },
  ];

  if (!visible) return null;

  return (
    <div className="sticky top-[115px] z-30 w-full pointer-events-none transition-all duration-300 animate-fadeIn">
      <div className="max-w-5xl mx-auto px-4 flex justify-center">
        {/* Wyśrodkowana kapsuła nawigacyjna w stylu Google One bez zbędnego drugiego przycisku pobierania */}
        <div className="pointer-events-auto bg-slate-900/95 backdrop-blur-md text-white p-1.5 rounded-full shadow-2xl border border-slate-700/80 inline-flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar scroll-smooth">
          {activeTab === 'home' && homeItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-school-600 text-white shadow-md shadow-school-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {activeTab === 'manual' && manualItems.map((item) => {
            const isActive = activeManualStep === item.stepIndex;
            return (
              <button
                key={item.stepIndex}
                onClick={() => {
                  if (onSelectManualStep) onSelectManualStep(item.stepIndex);
                  scrollToSection('manual');
                }}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-school-600 text-white shadow-md shadow-school-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
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
