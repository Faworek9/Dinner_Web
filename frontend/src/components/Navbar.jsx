import React, { useState } from 'react';
import { Download, Mail, Menu, X, BookOpen, ShieldCheck, MessageSquarePlus } from 'lucide-react';

export default function Navbar({ onDownloadClick, activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePageSwitch = (tabName) => {
    setActiveTab(tabName);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all">
      {/* Górny pasek informacyjny */}
      <div className="bg-school-900 text-white text-xs md:text-sm py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center p-1 rounded-full bg-emerald-500/20 text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5" />
            </span>
            <span className="font-medium text-slate-200">
              Oficjalna strona programu dla polskich szkół i przedszkoli
            </span>
          </div>
          <div className="flex items-center gap-2 text-school-100">
            <Mail className="w-3.5 h-3.5 text-school-300" />
            <span>Kontakt:</span>
            <a 
              href="mailto:ewidencja.obiadow@gmail.com" 
              className="font-bold text-white hover:text-school-200 underline decoration-school-400"
            >
              ewidencja.obiadow@gmail.com
            </a>
          </div>
        </div>
      </div>


      {/* Główny pasek nawigacyjny - wzorowany na Google One: TYLKO wybór głównych stron */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo i Główne strony */}
          <div className="flex items-center gap-6 lg:gap-10">
            {/* Logo */}
            <div 
              onClick={() => handlePageSwitch('home')}
              className="flex items-center gap-3 cursor-pointer group py-2"
            >
              <img 
                src="/app_icon.png" 
                alt="Ewidencja Obiadów" 
                className="w-10 h-10 rounded-xl object-contain drop-shadow-sm group-hover:scale-105 transition-transform" 
              />
              <div>
                <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight block leading-tight">
                  Ewidencja Obiadów
                </span>
                <span className="text-[11px] font-medium text-school-700 block">
                  program dla placówek oświatowych
                </span>
              </div>
            </div>

            {/* Górne menu: TYLKO wybór stron (jak w Google One) */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 h-18">
              <button
                onClick={() => handlePageSwitch('home')}
                className={`relative px-3.5 py-6 text-sm sm:text-base font-bold transition-colors flex items-center gap-2 ${
                  activeTab === 'home'
                    ? 'text-school-700 font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Strona główna</span>
                {activeTab === 'home' && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-school-600 rounded-t-full"></span>
                )}
              </button>

              <button
                onClick={() => handlePageSwitch('manual')}
                className={`relative px-3.5 py-6 text-sm sm:text-base font-bold transition-colors flex items-center gap-2 ${
                  activeTab === 'manual'
                    ? 'text-school-700 font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-4 h-4 text-school-500" />
                <span>Podręcznik (Jak to działa)</span>
                {activeTab === 'manual' && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-school-600 rounded-t-full"></span>
                )}
              </button>

              <button
                onClick={() => handlePageSwitch('feedback')}
                className={`relative px-3.5 py-6 text-sm sm:text-base font-bold transition-colors flex items-center gap-2 ${
                  activeTab === 'feedback'
                    ? 'text-school-700 font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <MessageSquarePlus className="w-4 h-4 text-school-500" />
                <span>Zostaw opinię</span>
                {activeTab === 'feedback' && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-school-600 rounded-t-full"></span>
                )}
              </button>
            </nav>
          </div>

          {/* Prawa strona: Przycisk Pobierz */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onDownloadClick}
              className="btn-primary py-2.5 px-5 text-sm sm:text-base"
              aria-label="Pobierz najnowszą wersję programu na komputer z systemem Windows"
            >
              <Download className="w-4 h-4" />
              <span>Pobierz program</span>
            </button>
          </div>

          {/* Hamburger Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onDownloadClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-school-600 rounded-lg shadow"
            >
              <Download className="w-3.5 h-3.5" />
              Pobierz
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Otwórz menu nawigacji"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobilne - wyłącznie wybór stron */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-2 shadow-lg animate-fadeIn">
          <button
            onClick={() => handlePageSwitch('home')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold flex items-center justify-between ${
              activeTab === 'home' ? 'text-school-700 bg-school-50' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            <span>Strona główna</span>
            {activeTab === 'home' && <span className="text-xs bg-school-600 text-white px-2 py-0.5 rounded-full">Aktywna</span>}
          </button>

          <button
            onClick={() => handlePageSwitch('manual')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold flex items-center justify-between ${
              activeTab === 'manual' ? 'text-school-700 bg-school-50' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-school-600" />
              Podręcznik (Jak to działa)
            </span>
            {activeTab === 'manual' && <span className="text-xs bg-school-600 text-white px-2 py-0.5 rounded-full">Aktywna</span>}
          </button>

          <button
            onClick={() => handlePageSwitch('feedback')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold flex items-center justify-between ${
              activeTab === 'feedback' ? 'text-school-700 bg-school-50' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            <span className="flex items-center gap-2">
              <MessageSquarePlus className="w-4 h-4 text-school-600" />
              Zostaw opinię
            </span>
            {activeTab === 'feedback' && <span className="text-xs bg-school-600 text-white px-2 py-0.5 rounded-full">Aktywna</span>}
          </button>

          <div className="pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onDownloadClick(); }}
              className="w-full btn-primary py-3 text-sm"
            >
              <Download className="w-4 h-4" />
              Pobierz program na Windows
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
