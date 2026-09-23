import React from 'react';
import { Download, BookOpen, CheckCircle2, ShieldCheck, Clock, Sparkles } from 'lucide-react';

export default function Hero({ onDownloadClick, onOpenManual }) {
  return (
    <section id="hero" className="relative pt-10 pb-16 md:pt-16 md:pb-20 overflow-hidden bg-gradient-to-b from-school-50/60 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Delikatna etykieta zaufania */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-school-100/80 border border-school-200 text-school-800 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-school-600" />
            <span>Stworzone specjalnie dla polskich szkół i przedszkoli</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Koniec z ręcznymi zeszytami i stresem przy <span className="text-school-600 underline decoration-school-300 underline-offset-8">ewidencji obiadów</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8">
            Prosty i przejrzysty program komputerowy na pulpit dla intendentów i sekretariatów. 
            Wszystkie odpisy, listy dla kuchni i raporty do gminy zrobisz kilkoma kliknięciami – bez informatycznego bełkotu i bez obcych chmur.
          </p>

          {/* Przyciski Akcji */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={onDownloadClick}
              className="btn-primary w-full sm:w-auto text-lg px-8 py-4 shadow-school-500/25 shadow-lg group"
            >
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              <span>Pobierz program na komputer</span>
            </button>

            <button
              onClick={onOpenManual}
              className="btn-secondary w-full sm:w-auto text-lg px-7 py-4"
            >
              <BookOpen className="w-5 h-5 text-school-600" />
              <span>Zobacz podręcznik (Jak to działa)</span>
            </button>
          </div>

          {/* Szybkie zapewnienia bezpieczeństwa */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-2.5 text-slate-700 bg-white/80 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Działa bez stałego internetu</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-700 bg-white/80 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium shadow-xs">
              <ShieldCheck className="w-4 h-4 text-school-600 shrink-0" />
              <span>100% zgodne z RODO (dane w szkole)</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-700 bg-white/80 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium shadow-xs">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Wdrożenie i nauka w 15 minut</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
