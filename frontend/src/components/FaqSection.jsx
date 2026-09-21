import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

export default function FaqSection({ faqList, onContactClick }) {
  const [openIndex, setOpenIndex] = useState(0);

  const defaultFaq = [
    {
      id: 1,
      category: "Wymagania i instalacja",
      question: "Czy program wymaga stałego połączenia z internetem?",
      answer: "Nie. Jest to program instalowany bezpośrednio na komputerze w Twojej szkole (tzw. aplikacja desktopowa). Działa w 100% lokalnie i bezawaryjnie – nawet jeśli w szkole padnie internet, możesz normalnie prowadzić ewidencję, zaznaczać obecności i drukować raporty."
    },
    {
      id: 2,
      category: "Obsługa i prostota",
      question: "Czy poradzę sobie z obsługą, jeśli słabo znam komputer?",
      answer: "Zdecydowanie tak. Program został stworzony we współpracy z intendentami, którzy cenili sobie maksymalną prostotę. Przyciski są duże i czytelne, a na ekranie nie ma żadnych zbędnych opcji. Codzienna praca polega dosłownie na kliknięciu nazwiska ucznia, a resztę program liczy sam."
    },
    {
      id: 3,
      category: "Raporty i odpisy",
      question: "Jak program radzi sobie z odpisami za nieobecności?",
      answer: "Gdy rodzic rano zgłasza nieobecność, wystarczy jedno kliknięcie przy nazwisku. Program automatycznie wylicza stawkę zwrotu i pomniejsza rachunek na kolejny miesiąc. Na koniec miesiąca tworzy czytelne zestawienie ze wszystkimi odliczeniami dla każdego rodzica."
    },
    {
      id: 4,
      category: "Bezpieczeństwo i RODO",
      question: "Gdzie są przechowywane dane uczniów i czy to bezpieczne (RODO)?",
      answer: "Baza danych znajduje się wyłącznie na dysku twardym Twojego komputera w szkole. Żadne dane osobowe dzieci ani rodziców nie są wysyłane do obcych chmur ani na zewnętrzne serwery w internecie. Szkoła zachowuje 100% prywatności i pełną zgodność z przepisami RODO."
    },
    {
      id: 5,
      category: "Nowy rok szkolny",
      question: "Co dzieje się z uczniami przy przejściu na nowy rok szkolny?",
      answer: "Program posiada funkcję 'Przejdź na nowy rok szkolny' – jednym przyciskiem przenosisz całe klasy o rok wyżej (np. klasa 1A staje się klasą 2A), a klasę kończącą szkołę bezpiecznie archiwizujesz. Nowe dzieci możesz zaimportować z pliku Excel w kilka sekund."
    },
    {
      id: 6,
      category: "Wersja próbna i licencja",
      question: "Czy mogę wypróbować program za darmo przed podjęciem decyzji?",
      answer: "Tak! Możesz bezpłatnie pobrać program i wypróbować go w swojej szkole na przykładowych lub własnych danych. Pobranie nie wymaga żadnej karty płatniczej ani podpisywania papierowych umów."
    }
  ];

  const items = faqList && faqList.length > 0 ? faqList : defaultFaq;

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-school-600 mb-2 block">
            Odpowiedzi na częste wątpliwości
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Najczęściej zadawane pytania (FAQ)
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Zebraliśmy pytania, które najczęściej zadają nam intendenci przed rozpoczęciem pracy z programem.
          </p>
        </div>

        {/* Akordeon pytań */}
        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id || idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all duration-150"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-school-100 text-school-700 rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ramka pomocnicza - "Nie znalazłeś odpowiedzi?" */}
        <div className="mt-10 p-6 rounded-2xl bg-school-50/70 border border-school-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-slate-900 text-base">
              Masz inne pytanie lub nietypową sytuację w szkole?
            </h4>
            <p className="text-slate-600 text-sm mt-0.5">
              Zadzwoń do nas lub napisz – chętnie odpowiemy i doradzimy najlepsze rozwiązanie.
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="btn-primary text-sm px-5 py-2.5 shrink-0 whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4" />
            Napisz lub zadzwoń
          </button>
        </div>
      </div>
    </section>
  );
}
