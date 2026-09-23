import React, { useState } from 'react';
import { 
  MessageSquarePlus, 
  Sparkles, 
  Star, 
  ExternalLink, 
  CheckCircle2, 
  Send, 
  Lightbulb,
  Mail,
  HelpCircle,
  Clock,
  MessageCircle,
  FileCheck
} from 'lucide-react';

export default function FeedbackPage({ onDownloadClick }) {
  // Aktywny formularz: 'general' (ogólna opinia) | 'feature' (opinia o funkcji)
  const [selectedForm, setSelectedForm] = useState('general');

  // Linki do formularzy Google (z parametrem embedded=true do ramki iframe)
  const generalFormEmbeddedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf_KscEj81iLIHYwYoorbK-fYuXwv6Ms_2yzgw-r21m_hP6YQ/viewform?embedded=true";
  const generalFormDirectUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf_KscEj81iLIHYwYoorbK-fYuXwv6Ms_2yzgw-r21m_hP6YQ/viewform?usp=header";

  // Drugi formularz (gdy przygotujesz link, wkleimy go tutaj)
  const featureFormEmbeddedUrl = ""; 
  const featureFormDirectUrl = "";

  return (
    <div className="py-10 md:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Nagłówek sekcji */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-school-50 border border-school-200 text-school-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-4 h-4 text-school-600" />
            Twój głos tworzy ten program
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Zostaw opinię o programie
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Ewidencja Obiadów powstaje w oparciu o codzienne doświadczenia intendentów, księgowych i dyrektorów szkół. 
            Wypełnij ankietę bezpośrednio poniżej – Twoje uwagi mają bezpośredni wpływ na kolejne aktualizacje.
          </p>
        </div>

        {/* Przełącznik wyboru formularza (Karty / Zakładki) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          
          {/* Opcja 1: Ogólna opinia */}
          <button
            onClick={() => setSelectedForm('general')}
            className={`text-left p-5 sm:p-6 rounded-2xl border-2 transition-all flex items-start gap-4 relative overflow-hidden ${
              selectedForm === 'general'
                ? 'bg-white border-school-600 shadow-xl shadow-school-100 ring-2 ring-school-600/20'
                : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white text-slate-600 shadow-xs'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
              selectedForm === 'general'
                ? 'bg-school-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-600'
            }`}>
              <Star className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between gap-2">
                <span className={`font-bold text-base sm:text-lg ${selectedForm === 'general' ? 'text-slate-900 font-extrabold' : 'text-slate-700'}`}>
                  1. Ogólna opinia o aplikacji
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 shrink-0">
                  <Clock className="w-3 h-3" /> 2 min
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Ocena wygody pracy, stabilności programu, czytelności i ogólnych wrażeń.
              </p>
            </div>
          </button>

          {/* Opcja 2: Opinia o konkretnej funkcji */}
          <button
            onClick={() => setSelectedForm('feature')}
            className={`text-left p-5 sm:p-6 rounded-2xl border-2 transition-all flex items-start gap-4 relative overflow-hidden ${
              selectedForm === 'feature'
                ? 'bg-white border-purple-600 shadow-xl shadow-purple-100 ring-2 ring-purple-600/20'
                : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white text-slate-600 shadow-xs'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
              selectedForm === 'feature'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-600'
            }`}>
              <Lightbulb className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between gap-2">
                <span className={`font-bold text-base sm:text-lg ${selectedForm === 'feature' ? 'text-slate-900 font-extrabold' : 'text-slate-700'}`}>
                  2. Zgłoszenie ulepszenia funkcji
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200 shrink-0">
                  <Clock className="w-3 h-3" /> 3 min
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Pomysł na nową opcję, usprawnienie raportów, odpisów lub księgowości.
              </p>
            </div>
          </button>

        </div>

        {/* Kontener z osadzonym formularzem (iframe) */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-200/60 overflow-hidden mb-12">
          
          {/* Pasek pomocniczy nad formularzem */}
          <div className="bg-slate-50 border-b border-slate-200/80 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {selectedForm === 'general' ? (
                <span>Formularz: <strong>Ogólna opinia o aplikacji</strong></span>
              ) : (
                <span>Formularz: <strong>Opinia o konkretnej funkcji</strong></span>
              )}
            </div>
            
            {/* Opcjonalny przycisk otwarcia w nowej karcie */}
            {selectedForm === 'general' && (
              <a
                href={generalFormDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-school-600 hover:text-school-800 font-semibold transition-colors"
              >
                <span>Otwórz w pełnym oknie</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {selectedForm === 'feature' && featureFormDirectUrl && (
              <a
                href={featureFormDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-purple-600 hover:text-purple-800 font-semibold transition-colors"
              >
                <span>Otwórz w pełnym oknie</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Zawartość: Formularz 1 (Ogólny) */}
          {selectedForm === 'general' && (
            <div className="w-full flex justify-center bg-white p-2 sm:p-4">
              <iframe
                src={generalFormEmbeddedUrl}
                width="100%"
                height="1050"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Formularz ogólnej opinii o programie Ewidencja Obiadów"
                className="w-full max-w-3xl border-0 rounded-xl"
              >
                Ładowanie formularza Google Forms...
              </iframe>
            </div>
          )}

          {/* Zawartość: Formularz 2 (Konkretna funkcja) */}
          {selectedForm === 'feature' && (
            <div className="p-8 sm:p-12 text-center max-w-2xl mx-auto">
              {featureFormEmbeddedUrl ? (
                <iframe
                  src={featureFormEmbeddedUrl}
                  width="100%"
                  height="1050"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Formularz opinii o funkcji"
                  className="w-full max-w-3xl border-0 rounded-xl"
                >
                  Ładowanie formularza...
                </iframe>
              ) : (
                <div className="py-8">
                  <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-purple-100 shadow-xs">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Formularz zgłaszania pomysłów i funkcji
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    Masz pomysł na usprawnienie programu, nowy format raportu lub specyficzne rozliczenie w Twojej szkole? 
                    Gdy utworzysz drugi formularz w Google Forms, natychmiast go tutaj osadzimy.
                  </p>

                  <div className="bg-purple-50/70 border border-purple-200/80 rounded-2xl p-5 text-left mb-6">
                    <h4 className="text-xs font-bold text-purple-900 uppercase tracking-wider mb-2">
                      Co możesz nam zasugerować:
                    </h4>
                    <ul className="text-xs sm:text-sm text-purple-800 space-y-1.5">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                        <span>Nowe opcje w module odpisów lub nieobecności</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                        <span>Nietypowe szablony raportów dla Twojej gminy / CUW</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                        <span>Integracje z innymi systemami (np. dzienniki elektroniczne)</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="mailto:konrad321k@gmail.com?subject=Pomys%C5%82%20na%20now%C4%85%20funkcj%C4%99%20-%20Ewidencja%20Obiad%C3%B3w"
                    className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Napisz bezpośrednio na e-mail</span>
                  </a>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Dodatkowy boks: Bezpośredni kontakt z twórcą */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-school-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
                <Mail className="w-4 h-4" />
                Bezpośredni kontakt
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Wolisz porozmawiać lub napisać maila?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Jeśli Twoja placówka potrzebuje indywidualnej wyceny, wsparcia technicznego lub chcesz omówić wdrożenie w całej gminie – skontaktuj się bezpośrednio z autorem programu.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href="mailto:konrad321k@gmail.com?subject=Opinia%20o%20programie%20Ewidencja%20Obiad%C3%B3w"
                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 text-school-600" />
                konrad321k@gmail.com
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
