import React, { useState } from 'react';
import { Download, BookOpen, CheckCircle2, Monitor, ShieldCheck, Printer, Calendar, Clock, Sparkles } from 'lucide-react';

export default function Hero({ onDownloadClick, onOpenManual }) {
  // Stan interaktywny w makiecie dla zademonstrowania prostoty programu
  const [selectedClass, setSelectedClass] = useState('1B');
  const [students, setStudents] = useState([
    { id: 1, name: 'Borkowski Aleksander', status: 'present', fee: '8,50 zł', note: 'Dieta standard' },
    { id: 2, name: 'Czarnecka Zofia', status: 'absent', fee: '0,00 zł', note: 'Odpis (zgłoszony o 7:45)' },
    { id: 3, name: 'Dąbrowski Jakub', status: 'present', fee: '8,50 zł', note: 'Sama zupa' },
    { id: 4, name: 'Głowacka Julia', status: 'present', fee: '8,50 zł', note: 'Bez laktozy' },
    { id: 5, name: 'Kaczmarek Michał', status: 'absent', fee: '0,00 zł', note: 'Odpis (zgłoszony SMS)' },
  ]);

  const toggleStudent = (id) => {
    setStudents(prev => prev.map(s => {
      if (s.id === id) {
        const newStatus = s.status === 'present' ? 'absent' : 'present';
        return {
          ...s,
          status: newStatus,
          fee: newStatus === 'present' ? '8,50 zł' : '0,00 zł',
          note: newStatus === 'present' ? 'Obecny / Do wydania' : 'Odpis (zgłoszony odliczony)'
        };
      }
      return s;
    }));
  };

  const presentCount = students.filter(s => s.status === 'present').length;

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-school-50/60 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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
            <div className="flex items-center gap-2.5 text-slate-700 bg-white/80 border border-slate-200/80 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-medium shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Działa bez stałego internetu</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-700 bg-white/80 border border-slate-200/80 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-medium shadow-xs">
              <ShieldCheck className="w-4 h-4 text-school-600 shrink-0" />
              <span>100% zgodne z RODO (dane w szkole)</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-700 bg-white/80 border border-slate-200/80 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-medium shadow-xs">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Wdrożenie i nauka w 15 minut</span>
            </div>
          </div>
        </div>

        {/* Realistyczna makieta okna aplikacji Windows */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900/5 p-2 sm:p-4 rounded-3xl backdrop-blur-sm border border-slate-200 shadow-card">
            {/* Obramowanie okna Windows */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              {/* Pasek tytułowy Windows */}
              <div className="bg-slate-800 text-white px-4 py-2.5 flex items-center justify-between text-xs select-none">
                <div className="flex items-center gap-2 font-medium">
                  <div className="w-4 h-4 rounded bg-school-500 flex items-center justify-center text-[10px] font-bold">
                    O
                  </div>
                  <span>Ewidencja Obiadów Szkolnych v6.4 — Szkoła Podstawowa nr 4 [Baza Lokalna]</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
                </div>
              </div>

              {/* Górny pasek narzędziowy programu */}
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-300 font-medium text-slate-800">
                    <Calendar className="w-4 h-4 text-school-600" />
                    <span>Poniedziałek, 21 września 2026</span>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-100 text-emerald-800">
                    Kasa i ewidencja otwarta
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50">
                    <Printer className="w-3.5 h-3.5 text-slate-600" />
                    Drukuj dla kucharek
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-school-600 text-white text-xs font-semibold hover:bg-school-700">
                    Raport miesięczny (Gmina)
                  </button>
                </div>
              </div>

              {/* Główny obszar roboczy - podział na klasy i listę uczniów */}
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[340px]">
                {/* Kolumna lewa: Klasy */}
                <div className="md:col-span-4 bg-slate-50/80 border-r border-slate-200 p-3 space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-2 mb-2">
                    Wybierz oddział / klasę:
                  </div>

                  <button
                    onClick={() => setSelectedClass('1A')}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                      selectedClass === '1A' ? 'bg-school-600 text-white shadow-sm' : 'hover:bg-slate-200/70 text-slate-700'
                    }`}
                  >
                    <span>Klasa 1A (edukacja wcz.)</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${selectedClass === '1A' ? 'bg-school-700 text-white' : 'bg-slate-200 text-slate-700'}`}>
                      24 / 24
                    </span>
                  </button>

                  <button
                    onClick={() => setSelectedClass('1B')}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                      selectedClass === '1B' ? 'bg-school-600 text-white shadow-sm' : 'hover:bg-slate-200/70 text-slate-700'
                    }`}
                  >
                    <div>
                      <span>Klasa 1B</span>
                      <span className="block text-[11px] opacity-80">2 zgłoszone odpisy</span>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${selectedClass === '1B' ? 'bg-school-700 text-white' : 'bg-slate-200 text-slate-700'}`}>
                      {presentCount} / 5
                    </span>
                  </button>

                  <button
                    onClick={() => setSelectedClass('2A')}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                      selectedClass === '2A' ? 'bg-school-600 text-white shadow-sm' : 'hover:bg-slate-200/70 text-slate-700'
                    }`}
                  >
                    <span>Klasa 2A</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                      21 / 22
                    </span>
                  </button>

                  <button
                    onClick={() => setSelectedClass('3B')}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                      selectedClass === '3B' ? 'bg-school-600 text-white shadow-sm' : 'hover:bg-slate-200/70 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Klasa 3B</span>
                      <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded">Wycieczka</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                      0 / 23
                    </span>
                  </button>
                </div>

                {/* Kolumna prawa: Lista uczniów dla wybranej klasy */}
                <div className="md:col-span-8 p-4 bg-white flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">
                          Uczniowie: Klasa {selectedClass}
                        </h4>
                        <p className="text-xs text-slate-500">
                          Kliknij ucznia, aby szybko zaznaczyć lub cofnąć odpis:
                        </p>
                      </div>
                      <span className="text-xs font-semibold bg-school-50 text-school-700 px-2.5 py-1 rounded-md border border-school-200">
                        Kliknij w wiersz (Interaktywny podgląd)
                      </span>
                    </div>

                    {/* Tabela uczniów */}
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-slate-50 text-slate-600 text-xs font-bold border-b border-slate-200">
                          <tr>
                            <th className="py-2 px-3">Uczeń</th>
                            <th className="py-2 px-3">Status posiłku na dziś</th>
                            <th className="py-2 px-3 text-right">Stawka</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                          {students.map((student) => (
                            <tr
                              key={student.id}
                              onClick={() => toggleStudent(student.id)}
                              className={`cursor-pointer transition-colors ${
                                student.status === 'present'
                                  ? 'hover:bg-slate-50 text-slate-800'
                                  : 'bg-rose-50/50 hover:bg-rose-50 text-slate-600'
                              }`}
                            >
                              <td className="py-2.5 px-3">
                                <div className="font-semibold text-slate-900">{student.name}</div>
                                <div className="text-[11px] text-slate-500">{student.note}</div>
                              </td>
                              <td className="py-2.5 px-3">
                                {student.status === 'present' ? (
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-100 text-emerald-800">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    Wydano obiad
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-rose-100 text-rose-800">
                                    Odliczony odpis (-8,50 zł)
                                  </span>
                                )}
                              </td>
                              <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-700">
                                {student.fee}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Dolny pasek podsumowania porannego dla kuchni */}
                  <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-slate-50 p-3 rounded-xl text-xs">
                    <div>
                      <span className="text-slate-500 block">Zestawienie dla kucharek na dzisiaj:</span>
                      <strong className="text-slate-900 text-sm">
                        Do wydania: 184 obiady <span className="text-slate-400 font-normal">| Odpisy z rana: 12 dzieci</span>
                      </strong>
                    </div>
                    <div className="text-school-700 font-semibold flex items-center gap-1">
                      <span>✓ Raport gotowy do druku</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 mt-3">
            * Powyżej: rzeczywisty podgląd ekranu codziennej pracy w programie komputerowym. Bez zbędnych komplikacji.
          </p>
        </div>
      </div>
    </section>
  );
}
