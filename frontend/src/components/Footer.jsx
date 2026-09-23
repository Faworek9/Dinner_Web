import React from 'react';
import { Utensils, ShieldCheck, Heart, Mail } from 'lucide-react';

export default function Footer({ onOpenManual, onDownloadClick }) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* O programie */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5 text-white font-extrabold text-lg">
              <div className="w-8 h-8 rounded-lg bg-school-600 flex items-center justify-center text-white">
                <Utensils className="w-5 h-5" />
              </div>
              <span>Ewidencja Obiadów Szkolnych</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Aplikacja desktopowa tworzona z myślą o polskich szkołach, przedszkolach i intendentach. 
              Proste i rzetelne rozliczanie posiłków, odpisów za nieobecności oraz raportów dla gmin i księgowości.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>100% zgodne z polskimi przepisami oświatowymi i RODO</span>
            </div>
          </div>

          {/* Szybkie odnośniki */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
              Na skróty
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Strona główna
                </a>
              </li>
              <li>
                <button onClick={onOpenManual} className="hover:text-white transition-colors text-left">
                  Podręcznik (Jak to działa)
                </button>
              </li>
              <li>
                <a href="#problems" className="hover:text-white transition-colors">
                  Główne zalety programu
                </a>
              </li>
              <li>
                <a href="#opinions" className="hover:text-white transition-colors">
                  Opinie szkół (140+ placówek)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Najczęstsze pytania (FAQ)
                </a>
              </li>
              <li>
                <button onClick={onDownloadClick} className="text-school-400 hover:text-school-300 font-semibold text-left">
                  Pobierz program na Windows
                </button>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
              Kontakt z autorem
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-school-400 shrink-0" />
                <a href="mailto:konrad321k@gmail.com" className="hover:text-white font-medium">
                  konrad321k@gmail.com
                </a>
              </div>
              <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                Bezpośredni kontakt w sprawach wdrożenia, testów lub pytań o program.
              </p>
            </div>
          </div>
        </div>

        {/* Dolna linia praw autorskich */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} Ewidencja Obiadów Szkolnych. Wszelkie prawa zastrzeżone.</p>
          <p className="flex items-center gap-1">
            Program stworzony z myślą o spokojnej pracy w szkołach
          </p>
        </div>
      </div>
    </footer>
  );
}
