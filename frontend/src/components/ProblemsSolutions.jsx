import React from 'react';
import { Mail, FileSpreadsheet, Bus, ChefHat, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProblemsSolutions({ onOpenManual }) {
  const problems = [
    {
      badTitle: "Ręczne wysyłanie setek maili z rozliczeniami",
      badDesc: "Wpisywanie do każdego rodzica osobnej wiadomości z kwotą, odpisami i numerem konta zajmowało dziesiątki lub setki godzin rocznie.",
      goodTitle: "Seryjna wysyłka e-mail jednym kliknięciem",
      goodDesc: "Program automatycznie generuje spersonalizowane maile do wszystkich rodziców z dokładną kwotą, terminem, numerem konta i odliczeniami.",
      icon: Mail
    },
    {
      badTitle: "Dane porozrzucane po wielu plikach i duplikaty",
      badDesc: "Zapisywanie w różnych arkuszach Excela i na kartkach powodowało chaos – te same nazwiska pojawiały się podwójnie, a dane ginęły.",
      goodTitle: "Jedna baza SQL i import z pliku .xlsx",
      goodDesc: "Wszystkie dane są w bezpiecznej bazie SQL. Całą listę uczniów importujesz jednym plikiem Excela w 10 sekund bez ryzyka duplikatów.",
      icon: FileSpreadsheet
    },
    {
      badTitle: "Ręczne kasowanie obiadów przy wycieczkach",
      badDesc: "Gdy klasa wyjeżdżała do kina lub na wycieczkę, trzeba było otwierać karty 25 uczniów z osobna i żmudnie odznaczać posiłki.",
      goodTitle: "Grupowe odwoływanie dla klas w 2 kliknięcia",
      goodDesc: "Wybierasz klasę, zaznaczasz datę wycieczki i klikasz 'Zapisz odwołania'. Program natychmiast koryguje plany całej klasy i przelicza koszty.",
      icon: Bus
    },
    {
      badTitle: "Ręczne sumowanie obiadów i stres w kuchni",
      badDesc: "Kalkulator i ciągłe obawy, czy panie kucharki ugotują właściwą liczbę zup i drugich dań, a gmina nie zakwestionuje rozliczenia.",
      goodTitle: "Przejrzyste dane zbiorcze z podziałem na zupę i II danie",
      goodDesc: "Tabela zbiorcza natychmiast pokazuje dokładną liczbę zup i drugich dań na każdy dzień roboczy wraz z pełnym podsumowaniem finansowym.",
      icon: ChefHat
    }
  ];

  return (
    <section id="problems" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-wider text-school-600 mb-2">
            Zaprojektowane z myślą o realnych problemach szkoły
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Koniec z chaosem w arkuszach i żmudną pracą
          </h3>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Aplikacja powstała na podstawie rzeczywistych potrzeb pracowników administracji szkolnej, zamieniając godziny frustracji w kilka prostych kliknięć.
          </p>
        </div>

        {/* Siatka 4 problemów i rozwiązań */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-school-300 hover:shadow-soft transition-all"
              >
                <div>
                  {/* Nagłówek kafelka z ikoną */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-school-100 text-school-700 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Usprawnienie {idx + 1}
                    </span>
                  </div>

                  {/* Porównanie: Przedtem vs Teraz */}
                  <div className="space-y-3.5">
                    {/* Jak było (Problem) */}
                    <div className="flex items-start gap-3 text-slate-600 bg-rose-50/70 p-3.5 rounded-xl border border-rose-100">
                      <span className="text-rose-600 font-bold text-xs shrink-0 mt-0.5 px-2 py-0.5 bg-rose-100 rounded-md">
                        PRZEDTEM
                      </span>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-xs sm:text-sm">{item.badTitle}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.badDesc}</p>
                      </div>
                    </div>

                    {/* Jak jest z programem (Rozwiązanie) */}
                    <div className="flex items-start gap-3 text-slate-800 bg-emerald-50/80 p-4 rounded-xl border border-emerald-200/70 shadow-2xs">
                      <span className="text-emerald-800 font-bold text-xs shrink-0 mt-0.5 px-2 py-0.5 bg-emerald-100 rounded-md flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Z PROGRAMEM
                      </span>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base text-emerald-950">{item.goodTitle}</h4>
                        <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed font-normal">{item.goodDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Belka zachęcająca do sprawdzenia podręcznika */}
        <div className="mt-12 bg-gradient-to-r from-school-900 to-school-800 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
          <div className="max-w-xl text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold">Chcesz zobaczyć te funkcje krok po kroku na zrzutach ekranu?</h4>
            <p className="text-school-200 text-sm mt-1">
              Otwórz nasz podręcznik – przygotowaliśmy spis treści ze szczegółowym opisem każdego modułu i odpowiedziami na pytania.
            </p>
          </div>
          <button
            onClick={onOpenManual}
            className="btn-primary bg-white text-school-900 hover:bg-school-50 shrink-0 font-bold shadow-none"
          >
            <span>Otwórz podręcznik (Książka)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
