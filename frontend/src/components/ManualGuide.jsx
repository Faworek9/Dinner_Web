import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  LayoutDashboard, 
  FileSpreadsheet, 
  CalendarCheck, 
  Bus, 
  ChefHat, 
  Mail, 
  Download, 
  Settings, 
  Database, 
  Search, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Phone, 
  ZoomIn, 
  X, 
  HelpCircle,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { MANUAL_CHAPTERS } from '../data/manualChapters.js';

// Mapowanie nazw ikon na komponenty Lucide
const ICON_MAP = {
  LayoutDashboard,
  FileSpreadsheet,
  CalendarCheck,
  Bus,
  ChefHat,
  Mail,
  Download,
  Settings,
  Database
};

/**
 * Inteligentny parser formatujący tekst bez pokazywania surowych gwiazdek Markdown (**)
 * Zamienia **tekst** na pogrubienie, *tekst* na kursywę, `kod` na kod oraz formatuje listy numerowane i punktowane.
 */
function FormattedContent({ rawContent }) {
  if (!rawContent) return null;

  const parseInline = (text) => {
    // Dzieli tekst na segmenty dopasowując **bold**, *italic*, `code`
    const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
    const elements = [];
    let lastIdx = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIdx) {
        elements.push(text.substring(lastIdx, match.index));
      }

      const token = match[0];
      if (token.startsWith('**') && token.endsWith('**')) {
        elements.push(
          <strong key={match.index} className="font-bold text-slate-900">
            {token.slice(2, -2)}
          </strong>
        );
      } else if (token.startsWith('*') && token.endsWith('*')) {
        elements.push(
          <span key={match.index} className="font-semibold text-school-700">
            {token.slice(1, -1)}
          </span>
        );
      } else if (token.startsWith('`') && token.endsWith('`')) {
        elements.push(
          <code key={match.index} className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-school-800 font-mono text-xs">
            {token.slice(1, -1)}
          </code>
        );
      }
      lastIdx = match.index + token.length;
    }

    if (lastIdx < text.length) {
      elements.push(text.substring(lastIdx));
    }

    return elements.length > 0 ? elements : text;
  };

  const lines = rawContent.split('\n');
  const renderedBlocks = [];
  let currentList = [];
  let currentListType = null; // 'numbered' | 'bullet'

  const flushList = () => {
    if (currentList.length > 0) {
      if (currentListType === 'numbered') {
        renderedBlocks.push(
          <ol key={`list-${renderedBlocks.length}`} className="my-3 space-y-2">
            {currentList}
          </ol>
        );
      } else {
        renderedBlocks.push(
          <ul key={`list-${renderedBlocks.length}`} className="my-3 space-y-1.5">
            {currentList}
          </ul>
        );
      }
      currentList = [];
      currentListType = null;
    }
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      return;
    }

    // Sprawdź czy to lista numerowana: 1. 2. 3.
    const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
    // Sprawdź czy to punktator: - lub *
    const bulletMatch = trimmed.match(/^[-*]\s+(.*)$/);

    if (numMatch) {
      if (currentListType !== 'numbered') {
        flushList();
        currentListType = 'numbered';
      }
      currentList.push(
        <li key={`num-${idx}`} className="flex items-start gap-3 text-slate-700 bg-slate-50/70 p-2.5 rounded-xl border border-slate-200/70">
          <span className="w-6 h-6 rounded-lg bg-school-600 text-white font-bold flex items-center justify-center shrink-0 text-xs shadow-2xs mt-0.5">
            {numMatch[1]}
          </span>
          <div className="flex-1 text-sm sm:text-base leading-relaxed">
            {parseInline(numMatch[2])}
          </div>
        </li>
      );
    } else if (bulletMatch) {
      if (currentListType !== 'bullet') {
        flushList();
        currentListType = 'bullet';
      }
      currentList.push(
        <li key={`bullet-${idx}`} className="flex items-start gap-2.5 text-slate-700 pl-3">
          <span className="w-2 h-2 rounded-full bg-school-500 shrink-0 mt-2"></span>
          <div className="flex-1 text-sm sm:text-base leading-relaxed">
            {parseInline(bulletMatch[1])}
          </div>
        </li>
      );
    } else {
      flushList();
      renderedBlocks.push(
        <p key={`p-${idx}`} className="text-slate-700 text-sm sm:text-base leading-relaxed my-2">
          {parseInline(trimmed)}
        </p>
      );
    }
  });

  flushList();

  return <div className="space-y-2">{renderedBlocks}</div>;
}

export default function ManualGuide({ onDownloadClick }) {
  const [activeChapterId, setActiveChapterId] = useState(MANUAL_CHAPTERS[0].id);
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);

  // Obsługa klawisza ESC do zamykania powiększenia
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setZoomImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filtrowanie rozdziałów po wpisaniu tekstu w wyszukiwarce
  const filteredChapters = MANUAL_CHAPTERS.filter((chap) => {
    const term = searchTerm.toLowerCase();
    return (
      chap.title.toLowerCase().includes(term) ||
      chap.description.toLowerCase().includes(term) ||
      chap.category.toLowerCase().includes(term)
    );
  });

  const activeChapter = MANUAL_CHAPTERS.find((c) => c.id === activeChapterId) || MANUAL_CHAPTERS[0];
  const activeChapterIndex = MANUAL_CHAPTERS.findIndex((c) => c.id === activeChapter.id);

  const prevChapter = activeChapterIndex > 0 ? MANUAL_CHAPTERS[activeChapterIndex - 1] : null;
  const nextChapter = activeChapterIndex < MANUAL_CHAPTERS.length - 1 ? MANUAL_CHAPTERS[activeChapterIndex + 1] : null;

  const handleSelectChapter = (id) => {
    setActiveChapterId(id);
    setOpenFaqIndex(null); // zresetuj FAQ
    // Przewiń płynnie na górę treści rozdziału
    const contentEl = document.getElementById('chapter-content-top');
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const ActiveIcon = ICON_MAP[activeChapter.iconName] || BookOpen;

  return (
    <div className="py-8 md:py-12 bg-slate-50 min-h-screen">
      {/* Poszerzony kontener dla maksymalnej czytelności zrzutów ekranu */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pasek wprowadzający do książki podręcznika */}
        <div className="mb-8 bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-school-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Podręcznik użytkownika: Dinner App
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Praktyczny przewodnik po funkcjach programu. Wybierz temat ze spisu treści po lewej stronie.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end">
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
              Rozdział {activeChapter.number} z {MANUAL_CHAPTERS.length}
            </span>
            <button
              onClick={onDownloadClick}
              className="btn-primary py-2.5 px-5 text-xs sm:text-sm whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>Pobierz program na komputer</span>
            </button>
          </div>
        </div>

        {/* Układ Książki: Spis treści (3 kolumny) + Duża przestrzeń na treść i zrzuty (9 kolumn) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ======================================================== */}
          {/* LEWA KOLUMNA: SPIS TREŚCI (SIDEBAR)                       */}
          {/* ======================================================== */}
          <aside className="lg:col-span-4 xl:col-span-3 sticky top-24 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-soft overflow-hidden">
              
              {/* Nagłówek spisu treści */}
              <div className="p-4 border-b border-slate-100 bg-slate-50/70">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-school-700 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-school-600" />
                    Spis treści
                  </span>
                  <span className="text-[11px] font-bold bg-school-100 text-school-800 px-2.5 py-0.5 rounded-full">
                    9 rozdziałów
                  </span>
                </div>

                {/* Szybka wyszukiwarka w spisie treści */}
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Filtruj tematy w spisie..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-school-500/20 focus:border-school-500 transition-all"
                  />
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm('')} 
                      className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Lista rozdziałów */}
              <nav className="p-2 space-y-1 max-h-[calc(100vh-260px)] overflow-y-auto">
                {filteredChapters.length === 0 ? (
                  <div className="p-6 text-center text-xs text-slate-500">
                    Brak wyników dla hasła "{searchTerm}".
                  </div>
                ) : (
                  filteredChapters.map((chap) => {
                    const isActive = chap.id === activeChapter.id;
                    const ItemIcon = ICON_MAP[chap.iconName] || BookOpen;

                    return (
                      <button
                        key={chap.id}
                        onClick={() => handleSelectChapter(chap.id)}
                        className={`w-full text-left p-3 rounded-xl transition-all duration-150 flex items-start gap-3 group relative ${
                          isActive
                            ? 'bg-school-50 text-school-900 font-bold border border-school-200 shadow-xs'
                            : 'text-slate-700 hover:bg-slate-50/80 hover:text-slate-900'
                        }`}
                      >
                        {/* Wskaźnik aktywnego rozdziału */}
                        {isActive && (
                          <span className="absolute left-0 top-2 bottom-2 w-1.5 bg-school-600 rounded-r-full"></span>
                        )}

                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold transition-colors ${
                          isActive 
                            ? 'bg-school-600 text-white shadow-xs' 
                            : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                        }`}>
                          {chap.number}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                              {chap.category}
                            </span>
                          </div>
                          <div className="text-xs sm:text-sm leading-snug truncate font-semibold">
                            {chap.title}
                          </div>
                        </div>
                      </button>
                    );
                  })
                )}
              </nav>

              {/* Dolna wizytówka wsparcia w spisie treści */}
              <div className="p-3.5 border-t border-slate-100 bg-slate-50/50 text-xs text-slate-600 flex items-center justify-between">
                <span className="font-medium">Infolinia wsparcia:</span>
                <a href="tel:790123456" className="font-bold text-school-700 hover:underline flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  790 123 456
                </a>
              </div>
            </div>
          </aside>

          {/* ======================================================== */}
          {/* PRAWA KOLUMNA: TREŚĆ ROZDZIAŁU (DUŻE ZRZUTY EKRANU)       */}
          {/* ======================================================== */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-8">
            <div id="chapter-content-top" className="card-clean bg-white p-6 sm:p-8 lg:p-10 border-slate-200 shadow-soft">
              
              {/* Nagłówek rozdziału */}
              <div className="border-b border-slate-100 pb-6 mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-school-100 text-school-800">
                    Rozdział {activeChapter.number}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Kategoria: {activeChapter.category}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-school-50 text-school-700 flex items-center justify-center shrink-0 border border-school-100">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {activeChapter.title}
                    </h2>
                    <p className="mt-2 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                      {activeChapter.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* ======================================================== */}
              {/* DUŻE, CZYTELNE ZRZUTY EKRANU (PEŁNA SZEROKOŚĆ)            */}
              {/* ======================================================== */}
              {activeChapter.screenshots && activeChapter.screenshots.length > 0 && (
                <div className="mb-10 space-y-6">
                  {activeChapter.screenshots.map((s, idx) => (
                    <div 
                      key={idx} 
                      className="border border-slate-300 rounded-2xl overflow-hidden shadow-card bg-white transition-all group"
                    >
                      {/* Pasek okna aplikacji Windows */}
                      <div className="bg-slate-800 text-slate-200 px-4 sm:px-5 py-3 flex items-center justify-between text-xs sm:text-sm select-none border-b border-slate-700">
                        <div className="flex items-center gap-3 font-medium truncate">
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
                            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                          </div>
                          <span className="truncate font-semibold text-white">
                            Dinner App • {s.caption}
                          </span>
                        </div>

                        {/* Przycisk powiększenia zrzutu */}
                        <button
                          onClick={() => setZoomImage(s.src)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-school-600 hover:bg-school-500 active:bg-school-700 px-3 py-1.5 rounded-lg shadow-sm transition-all shrink-0 ml-2"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Powiększ na pełny ekran</span>
                        </button>
                      </div>

                      {/* Zrzut ekranu w pełnej szerokości kolumny, 100% ostrości */}
                      <div 
                        onClick={() => setZoomImage(s.src)} 
                        className="cursor-zoom-in bg-slate-50 flex items-center justify-center relative overflow-hidden"
                        title="Kliknij, aby otworzyć zrzut ekranu w pełnej wielkości"
                      >
                        <img
                          src={encodeURI(s.src)}
                          alt={s.caption}
                          className="w-full h-auto block object-contain transition-transform duration-200 group-hover:scale-[1.005]"
                          loading="lazy"
                        />

                        {/* Nakładka przy najechaniu */}
                        <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                          <span className="bg-slate-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                            <ZoomIn className="w-4 h-4" />
                            Kliknij, aby otworzyć w 100% ostrości
                          </span>
                        </div>
                      </div>

                      {/* Podpis zrzutu z podpowiedzią */}
                      <div className="bg-slate-50/90 px-4 sm:px-5 py-2.5 text-xs text-slate-600 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <strong className="text-slate-800">Fot. {idx + 1}:</strong> {s.caption}
                        </div>
                        <span className="text-school-700 font-medium">
                          🔍 Kliknij w obrazek, aby otworzyć pełny podgląd
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* ======================================================== */}
              {/* CZYSTY, SFORMATOWANY TEKST OPISU (BEZ GWIAZDEK)           */}
              {/* ======================================================== */}
              <div className="mb-10 text-slate-800">
                <FormattedContent rawContent={activeChapter.content} />
              </div>

              {/* ======================================================== */}
              {/* INSTRUKCJA KROK PO KROKU                                 */}
              {/* ======================================================== */}
              <div className="bg-school-50/80 border border-school-200/90 rounded-2xl p-6 sm:p-7 mb-10 shadow-xs">
                <h3 className="text-sm font-bold uppercase tracking-wider text-school-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-school-600" />
                  Instrukcja krok po kroku
                </h3>

                <div className="space-y-3">
                  {activeChapter.steps.map((st, i) => (
                    <div key={i} className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-school-100 text-sm sm:text-base text-slate-800 shadow-2xs">
                      <span className="w-7 h-7 rounded-lg bg-school-600 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-xs mt-0.5">
                        {i + 1}
                      </span>
                      <p className="leading-relaxed pt-0.5 font-medium">{st}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ======================================================== */}
              {/* SPERSONALIZOWANE FAQ DLA WYBRANEJ FUNKCJONALNOŚCI         */}
              {/* ======================================================== */}
              <div className="pt-8 border-t border-slate-200">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-school-100 text-school-700 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                    Częste pytania: {activeChapter.shortTitle || activeChapter.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mb-5">
                  Odpowiedzi na najczęstsze wątpliwości intendentów związane z tym modułem programu:
                </p>

                <div className="space-y-3">
                  {activeChapter.faq.map((item, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white"
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full px-5 py-4 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                        >
                          <span>{item.q}</span>
                          <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-school-600' : ''
                          }`} />
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-sm text-slate-700 leading-relaxed bg-slate-50/70 border-t border-slate-100">
                            <p>{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Nawigacja dolna między rozdziałami (Poprzedni / Następny) */}
              <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                {prevChapter ? (
                  <button
                    onClick={() => handleSelectChapter(prevChapter.id)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-semibold transition-colors shadow-2xs"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Poprzedni: {prevChapter.shortTitle || prevChapter.title}</span>
                  </button>
                ) : <div />}

                {nextChapter && (
                  <button
                    onClick={() => handleSelectChapter(nextChapter.id)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-school-600 text-white hover:bg-school-700 text-sm font-bold shadow-md shadow-school-600/20 transition-all ml-auto"
                  >
                    <span>Następny: {nextChapter.shortTitle || nextChapter.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          </main>
        </div>

      </div>

      {/* ======================================================== */}
      {/* PEŁNOEKRANOWY LIGHTBOX DO PRZEGLĄDANIA ZRZUTÓW EKRANU    */}
      {/* ======================================================== */}
      {zoomImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-3 sm:p-6 flex flex-col items-center justify-between animate-fadeIn select-none"
          onClick={() => setZoomImage(null)}
        >
          {/* Górna belka modalu z tytułem i przyciskiem zamknięcia */}
          <div className="w-full max-w-7xl flex items-center justify-between text-white pb-3 pt-1">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-semibold text-slate-300">
                Podgląd zrzutu ekranu w pełnej rozdzielczości
              </span>
              <span className="text-xs text-slate-500 hidden sm:inline">• Naciśnij ESC lub kliknij poza obrazkiem, aby zamknąć</span>
            </div>

            <button
              onClick={() => setZoomImage(null)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
              aria-label="Zamknij podgląd"
            >
              <X className="w-4 h-4" />
              <span>Zamknij</span>
            </button>
          </div>

          {/* Wycentrowany, krystalicznie ostry obraz w maksymalnym rozmiarze */}
          <div 
            className="flex-1 w-full max-w-7xl flex items-center justify-center overflow-auto p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={encodeURI(zoomImage)} 
              alt="Powiększony zrzut ekranu" 
              className="max-w-full max-h-[86vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-slate-700/80 bg-white" 
            />
          </div>

          <div className="w-full max-w-7xl text-center pt-2">
            <p className="text-xs text-slate-400">
              Użyj kółka myszy lub gestu powiększenia w przeglądarce, jeśli potrzebujesz jeszcze większego zbliżenia na poszczególne kolumny.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
