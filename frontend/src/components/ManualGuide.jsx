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
  ZoomIn, 
  X, 
  HelpCircle,
  Sparkles,
  Maximize2,
  Copy,
  Check,
  FileDown,
  Zap,
  Table
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
  const [copyStatus, setCopyStatus] = useState(null);

  const sampleRows = [
    { klasa: '1A', nazwisko: 'Kowalski Jan', mama: '501100200', tata: '501300400', email: 'jan.kowalski@szkola.pl', meals: [1,1, 1,1, 1,1, 1,1, 1,1] },
    { klasa: '1A', nazwisko: 'Nowak Zofia', mama: '601111222', tata: '', email: 'zofia.nowak@szkola.pl', meals: [1,0, 1,0, 1,0, 1,0, 1,0] },
    { klasa: '1B', nazwisko: 'Wiśniewski Adam', mama: '701888999', tata: '701222333', email: 'adam.wisniewski@szkola.pl', meals: [0,1, 0,1, 0,1, 0,1, 0,1] }
  ];

  const handleCopyHeaders = () => {
    // Format TSV z tabulatorami – bezpośrednie wklejenie Ctrl+V w Excelu do komórki A1
    // Kopiujemy wyłącznie 2 wiersze nagłówków kolumn (A-O), bez danych uczniów
    const r1 = ['', '', '', '', '', 'Poniedziałek', '', 'Wtorek', '', 'Środa', '', 'Czwartek', '', 'Piątek', ''].join('\t');
    const r2 = ['klasa', 'nazwisko i imię', 'numer do mamy', 'numer do taty', 'adres e-mail', 'zupa', 'II danie', 'zupa', 'II danie', 'zupa', 'II danie', 'zupa', 'II danie', 'zupa', 'II danie'].join('\t');
    const textToCopy = `${r1}\n${r2}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopyStatus(true);
      setTimeout(() => setCopyStatus(false), 3500);
    }).catch(err => {
      console.error('Błąd kopiowania do schowka', err);
    });
  };

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

          <div className="flex items-center shrink-0">
            <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-xs font-bold text-slate-600 border border-slate-200">
              Rozdział {activeChapter.number} z {MANUAL_CHAPTERS.length}
            </span>
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
                <span className="font-medium">Kontakt e-mail:</span>
                <a href="mailto:konrad321k@gmail.com" className="font-semibold text-school-700 hover:underline flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-school-600" />
                  konrad321k@gmail.com
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
                <div className={`mb-10 ${
                  activeChapter.screenshotLayout === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-start -mx-1 sm:-mx-3 lg:-mx-5'
                    : 'space-y-6'
                }`}>
                  {activeChapter.screenshots.map((s, idx) => {
                    const isGrid = activeChapter.screenshotLayout === 'grid';
                    const sizeMode = s.size || activeChapter.screenshotSize || 'full';
                    const sizeContainerClass = 
                      isGrid
                        ? 'w-full'
                        : sizeMode === 'small'
                        ? 'max-w-[560px] mx-auto'
                        : sizeMode === 'medium'
                        ? 'max-w-[760px] mx-auto'
                        : 'max-w-full';

                    return (
                      <div 
                        key={idx} 
                        className={`border border-slate-300 rounded-2xl overflow-hidden shadow-card bg-white transition-all group ${sizeContainerClass}`}
                      >
                        {/* Pasek okna aplikacji Windows */}
                        <div className="bg-slate-800 text-slate-200 px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between text-xs sm:text-sm select-none border-b border-slate-700">
                          <div className="flex items-center gap-2 sm:gap-3 font-medium truncate">
                            <div className="flex items-center gap-1.5 shrink-0">
                              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block"></span>
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
                            </div>
                            <span className="truncate font-semibold text-white text-xs sm:text-sm">
                              Dinner App • {s.caption}
                            </span>
                          </div>

                          {/* Przycisk powiększenia zrzutu */}
                          <button
                            onClick={() => setZoomImage(s.src)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-school-600 hover:bg-school-500 active:bg-school-700 px-2.5 sm:px-3 py-1.5 rounded-lg shadow-sm transition-all shrink-0 ml-2 cursor-pointer"
                            title="Powiększ na pełny ekran"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Powiększ</span>
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

                      </div>

                      </div>
                    );
                })}
                </div>
              )}

              {/* ======================================================== */}
              {/* MODUŁ INTERAKTYWNY DLA ROZDZIAŁU 03 (SZABLON EXCEL .XLSX) */}
              {/* ======================================================== */}
              {activeChapter.hasExcelTemplate && (
                <div className="mb-10 bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/70 border-2 border-emerald-300/80 rounded-2xl p-5 sm:p-7 shadow-sm">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 pb-6 border-b border-emerald-200/80">
                    <div className="flex items-start gap-4">
                      <div className="w-13 h-13 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                        <FileSpreadsheet className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                            Gotowy plik .xlsx
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            15 kolumn • Format Poniedziałek – Piątek
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                          Wzór arkusza do importu uczniów i posiłków
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                          Pobierz gotowy plik Excel z prawidłowymi nagłówkami lub jednym kliknięciem skopiuj strukturę do schowka i wklej (Ctrl+V) w pustym arkuszu.
                        </p>
                      </div>
                    </div>

                    {/* Przyciski pobierania i kopiowania */}
                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
                      <a
                        href="/wzor_importu_uczniow.xlsx"
                        download="wzor_importu_uczniow.xlsx"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all shrink-0 cursor-pointer"
                      >
                        <FileDown className="w-4 h-4" />
                        <span>Pobierz wzór (.xlsx)</span>
                      </a>

                      <button
                        onClick={handleCopyHeaders}
                        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                          copyStatus
                            ? 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold shadow-xs'
                            : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 shadow-2xs'
                        }`}
                        title="Kopiuje 2 wiersze nagłówków tabeli z tabulatorami – po wklejeniu (Ctrl+V) w komórce A1 w Excelu kolumny A-O powstaną natychmiast"
                      >
                        {copyStatus ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Skopiowano nagłówki!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-slate-500 shrink-0" />
                            <span>Kopiuj nagłówki do Excela (Ctrl+V)</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Informacja po skopiowaniu */}
                  {copyStatus && (
                    <div className="mt-4 p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-semibold flex items-center gap-2 animate-fade-in">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>
                        ✅ Skopiowano nagłówki arkusza! Otwórz program Excel, zaznacz komórkę <strong>A1</strong> i wciśnij skrót <strong>Ctrl+V</strong> – 15 kolumn ułoży się automatycznie.
                      </span>
                    </div>
                  )}

                  {/* Interaktywny podgląd struktury tabeli (15 kolumn) */}
                  <div className="mt-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                        <Table className="w-3.5 h-3.5 text-emerald-600" />
                        Podgląd układu arkusza importu (15 kolumn: A – O)
                      </span>
                      <span className="text-2xs text-slate-500 font-medium">
                        Wiersz 1: Dni robocze • Wiersz 2: Nagłówki • Wiersze 3+: Kartoteki i deklaracje
                      </span>
                    </div>

                    <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-2xs text-xs">
                      <table className="min-w-[980px] w-full border-collapse">
                        <thead>
                          {/* Wiersz 1: Scalone grupy dni tygodnia */}
                          <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 text-center select-none">
                            <th colSpan="5" className="px-3 py-2 border-r border-slate-300 text-left bg-slate-50 text-slate-600 font-semibold text-2xs uppercase tracking-wider">
                              1. Dane osobowe i kontaktowe (A – E)
                            </th>
                            <th colSpan="2" className="px-2 py-1.5 border-r border-slate-200 bg-amber-50 text-amber-900 font-bold">Poniedziałek</th>
                            <th colSpan="2" className="px-2 py-1.5 border-r border-slate-200 bg-blue-50 text-blue-900 font-bold">Wtorek</th>
                            <th colSpan="2" className="px-2 py-1.5 border-r border-slate-200 bg-emerald-50 text-emerald-900 font-bold">Środa</th>
                            <th colSpan="2" className="px-2 py-1.5 border-r border-slate-200 bg-purple-50 text-purple-900 font-bold">Czwartek</th>
                            <th colSpan="2" className="px-2 py-1.5 bg-rose-50 text-rose-900 font-bold">Piątek</th>
                          </tr>
                          {/* Wiersz 2: Dokładne nazwy kolumn */}
                          <tr className="bg-slate-50 font-bold text-slate-800 border-b border-slate-200 text-left select-none">
                            <th className="px-2.5 py-2 border-r border-slate-200 text-slate-900 font-bold">A: klasa</th>
                            <th className="px-3 py-2 border-r border-slate-200 text-slate-900 font-bold">B: nazwisko i imię</th>
                            <th className="px-2.5 py-2 border-r border-slate-200 text-slate-600">C: numer do mamy</th>
                            <th className="px-2.5 py-2 border-r border-slate-200 text-slate-600">D: numer do taty</th>
                            <th className="px-3 py-2 border-r-2 border-slate-300 text-slate-600">E: adres e-mail</th>
                            <th className="px-2 py-2 border-r border-slate-200 text-center bg-amber-50/40 text-amber-950">zupa</th>
                            <th className="px-2 py-2 border-r border-slate-200 text-center bg-amber-50/40 text-amber-950">II danie</th>
                            <th className="px-2 py-2 border-r border-slate-200 text-center bg-blue-50/40 text-blue-950">zupa</th>
                            <th className="px-2 py-2 border-r border-slate-200 text-center bg-blue-50/40 text-blue-950">II danie</th>
                            <th className="px-2 py-2 border-r border-slate-200 text-center bg-emerald-50/40 text-emerald-950">zupa</th>
                            <th className="px-2 py-2 border-r border-slate-200 text-center bg-emerald-50/40 text-emerald-950">II danie</th>
                            <th className="px-2 py-2 border-r border-slate-200 text-center bg-purple-50/40 text-purple-950">zupa</th>
                            <th className="px-2 py-2 border-r border-slate-200 text-center bg-purple-50/40 text-purple-950">II danie</th>
                            <th className="px-2 py-2 border-r border-slate-200 text-center bg-rose-50/40 text-rose-950">zupa</th>
                            <th className="px-2 py-2 text-center bg-rose-50/40 text-rose-950">II danie</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                          {sampleRows.map((r, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                              <td className="px-2.5 py-2 border-r border-slate-200 font-bold text-slate-900 bg-slate-50/50">{r.klasa}</td>
                              <td className="px-3 py-2 border-r border-slate-200 font-medium text-slate-800">{r.nazwisko}</td>
                              <td className="px-2.5 py-2 border-r border-slate-200 text-slate-500 font-mono text-2xs">{r.mama}</td>
                              <td className="px-2.5 py-2 border-r border-slate-200 text-slate-500 font-mono text-2xs">{r.tata || '—'}</td>
                              <td className="px-3 py-2 border-r-2 border-slate-300 text-slate-600 truncate max-w-[150px]">{r.email}</td>
                              {r.meals.map((m, mIdx) => (
                                <td key={mIdx} className={`px-2 py-2 text-center border-r border-slate-200 font-bold ${
                                  m === 1 ? 'text-emerald-700 bg-emerald-50/60' : 'text-slate-300'
                                }`}>
                                  {m}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Karta wyjaśniająca miękki import */}
                  <div className="mt-5 p-4 rounded-xl bg-amber-50/90 border border-amber-200/90 text-amber-900 flex items-start gap-3 shadow-2xs">
                    <Zap className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <strong className="font-bold text-amber-950 block mb-1">
                        Czym jest „Miękki import” w programie Dinner App?
                      </strong>
                      Zaznacz pole <em>„Miękki import (tylko aktualizacja istniejących uczniów)”</em> w oknie importu posiłków, gdy chcesz zaktualizować dane i plany obiadów <strong>wyłącznie dla dzieci, które już są w bazie</strong>. Nowe nazwiska z pliku zostaną bezpiecznie zignorowane, a dotychczasowa historia rozliczeń i odpisów pozostanie nienaruszona.
                    </div>
                  </div>
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
