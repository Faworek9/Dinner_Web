import React, { useState } from 'react';
import { Mail, FileSpreadsheet, Bus, ChefHat, Plus, X, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export default function ProblemsSolutions({ onOpenManual }) {
  // Stan rozwinięcia poszczególnych kart (domyślnie zwinięte z chwytliwym tytułem)
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const improvements = [
    {
      id: 1,
      category: "Powiadomienia i SMS",
      icon: Mail,
      titleMain: "Wysyłaj rozliczenia do setek rodziców ",
      titleHighlight: "jednym kliknięciem myszy",
      expandedTitle: "Automatyczna wysyłka rozliczeń i odpisów",
      expandedDescription: "Zamiast ręcznie przepisywać kwoty i pisać maile do każdego rodzica z osobna, program jednym kliknięciem generuje spersonalizowane powiadomienia. Wiadomość zawiera należność, uwzględnione odpisy za nieobecności oraz numer konta szkoły.",
      extraNote: "Obsługa powiadomień e-mail oraz bramek SMS"
    },
    {
      id: 2,
      category: "Baza danych i Excel",
      icon: FileSpreadsheet,
      titleMain: "Koniec z gubieniem danych – import całej szkoły ",
      titleHighlight: "z Excela w 10 sekund",
      expandedTitle: "Bezpieczna baza danych i szybki import uczniów",
      expandedDescription: "Nie musisz ręcznie przepisywać setek nazwisk na początku roku szkolnego. Wgrywasz listę uczniów z gotowego pliku Excel w kilka sekund. Wszystkie klasy, stawki i dane kontaktowe trafiają do uporządkowanej bazy.",
      extraNote: "100% lokalna baza na komputerze szkoły (zgodność z RODO)"
    },
    {
      id: 3,
      category: "Wycieczki i nieobecności",
      icon: Bus,
      titleMain: "Wycieczka całej klasy? Odwołaj obiady ",
      titleHighlight: "w 2 proste kliknięcia",
      expandedTitle: "Grupowe odwoływanie posiłków i odpisy",
      expandedDescription: "Gdy klasa wyjeżdża na wycieczkę lub rekolekcje, nie otwierasz kart 25 uczniów po kolei. Wybierasz klasę, wskazujesz zakres dat i zatwierdzasz. Program automatycznie odznacza posiłki i od razu przelicza odpisy na kolejny miesiąc.",
      extraNote: "Automatyczna korekta rachunków rodziców w nowym miesiącu"
    },
    {
      id: 4,
      category: "Stołówka i rozliczenia",
      icon: ChefHat,
      titleMain: "Zawsze idealna liczba porcji dla kucharek ",
      titleHighlight: "bez kalkulatora i pomyłek",
      expandedTitle: "Dzienne porcje dla kuchni i raporty dla gminy",
      expandedDescription: "Tabela zbiorcza każdego ranka bezbłędnie sumuje porcje dla kucharek (zupy, drugie dania, diety) bez kalkulatora. Na koniec miesiąca jednym kliknięciem drukujesz kompletne zestawienia finansowe dla gminy i księgowości.",
      extraNote: "Gotowe szablony raportów dla ZEAS / CUW i księgowości"
    }
  ];

  return (
    <section id="problems" className="py-16 md:py-24 bg-slate-50/60 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nagłówek sekcji */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-school-100/80 border border-school-200 text-school-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-school-600" />
            <span>Prawdziwe usprawnienia w codziennej pracy</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Koniec z chaosem w arkuszach i żmudną pracą
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Aplikacja powstała na podstawie rzeczywistych potrzeb pracowników szkół. Kliknij kartę, aby zobaczyć szczegóły każdego usprawnienia.
          </p>
        </div>

        {/* Siatka kart (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {improvements.map((item) => {
            const isExpanded = !!expandedCards[item.id];
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => toggleCard(item.id)}
                className={`group bg-white rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between p-6 sm:p-7 min-h-[250px] sm:h-[270px] select-none ${
                  isExpanded 
                    ? 'border-school-400 shadow-lg shadow-school-600/10 ring-2 ring-school-400/20' 
                    : 'border-slate-200/90 hover:border-school-300 hover:shadow-card'
                }`}
              >
                <div>
                  {/* Plakietka kategorii z ikoną – zostaje na górze w obu stanach */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-school-50 border border-school-200/80 text-school-700 text-xs font-semibold mb-3">
                    <Icon className="w-3.5 h-3.5 text-school-600" />
                    <span>{item.category}</span>
                  </div>

                  {/* Widok w zależności od stanu rozwinięcia */}
                  {!isExpanded ? (
                    /* ZWINIĘTY: Chwytliwe hasło z niebieskim akcentem */
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug pt-1">
                      {item.titleMain}
                      <span className="text-school-600">{item.titleHighlight}</span>
                    </h3>
                  ) : (
                    /* ROZWINIĘTY: Bogatsze formatowanie z tytułem, opisem i notatką */
                    <div className="animate-fadeIn">
                      <h4 className="text-base sm:text-[17px] font-bold text-school-700 leading-snug mb-1.5">
                        {item.expandedTitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.expandedDescription}
                      </p>
                      {item.extraNote && (
                        <div className="pt-2.5 mt-2.5 border-t border-slate-100 flex items-center gap-2 text-[11px] sm:text-xs font-medium text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                          <span>{item.extraNote}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Dolny pasek – sam przycisk + / X po prawej stronie */}
                <div className="flex items-center justify-end pt-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCard(item.id);
                    }}
                    aria-label={isExpanded ? 'Zwiń' : 'Rozwiń'}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
                      isExpanded
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        : 'bg-school-600 hover:bg-school-700 text-white hover:scale-105 shadow-school-600/20'
                    }`}
                  >
                    {isExpanded ? (
                      <X className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2.5]" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Jasne, eleganckie odniesienie do podręcznika */}
        <div className="mt-14 bg-gradient-to-r from-school-50/70 via-white to-sky-50/50 rounded-3xl p-6 sm:p-8 border border-school-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-school-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-school-600/20">
              <BookOpen className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                Chcesz zobaczyć, jak wygląda każdy krok w programie?
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
                W naszym podręczniku znajdziesz szczegółowy opis modułów ze zrzutami ekranu i odpowiedziami na pytania.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenManual}
            className="btn-primary text-sm px-6 py-3.5 shadow-md shadow-school-600/15 flex items-center gap-2 group shrink-0"
          >
            <span>Przejdź do podręcznika</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
