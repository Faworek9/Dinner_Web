import React from 'react';
import { School, Utensils, HeartHandshake, Award, Quote, CheckCircle2, Star } from 'lucide-react';

export default function SocialProof({ statsData }) {
  // Wartości domyślne / fallback
  const stats = statsData || {
    active_schools: 142,
    meals_served_monthly: 48500,
    satisfaction_rate: 99,
    years_on_market: 6,
    testimonials: [
      {
        id: 1,
        author: "Pani Maria Kowalczyk",
        role: "Starszy Intendent",
        school: "Szkoła Podstawowa nr 4",
        city: "Siedlce",
        quote: "Przed wprowadzeniem programu koniec każdego miesiąca oznaczał siedzenie po godzinach ze stosem zeszytów i kalkulatorem. Teraz raport dla księgowej w gminie drukuję jednym kliknięciem przed 14:00. Wszystko się zgadza co do grosza!",
        years_using: "od 3 lat"
      },
      {
        id: 2,
        author: "Pan Tomasz Wiśniewski",
        role: "Kierownik Gospodarczy",
        school: "Zespół Szkolno-Przedszkolny",
        city: "Wieliczka",
        quote: "Nasi pracownicy stołówki i sekretariatu nie przesiadują całymi dniami przed komputerem i bali się skomplikowanego systemu. Ten program jest tak przejrzysty, że po 20 minutach każdy wiedział, jak zaznaczyć nieobecność czy wydać obiad.",
        years_using: "od 2 lat"
      },
      {
        id: 3,
        author: "Pani Barbara Szymańska",
        role: "Główna Księgowa",
        school: "Szkoła Podstawowa im. KEN",
        city: "Swarzędz",
        quote: "Największą ulgą są automatyczne odpisy za zgłoszone nieobecności. Rodzice dostają jasne kwitki opłat z dokładnym wykazem odliczeń. Skończyły się telefony z pretensjami i ciągłe korygowanie tabel w Excelu.",
        years_using: "od 4 lat"
      },
      {
        id: 4,
        author: "Pani Danuta Zielińska",
        role: "Dyrektor Szkoły",
        school: "Szkoła Podstawowa nr 12",
        city: "Gdynia",
        quote: "Zależało nam na bezpieczeństwie danych (RODO) i stabilności. Program działa bezpośrednio na komputerze w szkole, nie wymaga logowania przez przeglądarkę i działa nawet wtedy, gdy w szkole padnie internet.",
        years_using: "od ponad roku"
      }
    ]
  };

  return (
    <section id="opinions" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sekcja Liczb i Statystyk */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-school-600 mb-2 block">
            Zaufanie w polskiej oświacie
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Program, który każdego dnia ułatwia pracę w setkach stołówek
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Prawdziwe liczby i opinie osób, które na co dzień odpowiadają za żywienie dzieci w szkołach.
          </p>
        </div>

        {/* 4 Duże Liczby */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="bg-school-50/70 border border-school-100 rounded-2xl p-6 text-center shadow-xs">
            <div className="w-12 h-12 mx-auto rounded-xl bg-school-600 text-white flex items-center justify-center mb-3">
              <School className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-school-900 font-mono tracking-tight">
              {stats.active_schools}+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
              Szkół i przedszkoli
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              korzysta z programu w Polsce
            </div>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-6 text-center shadow-xs">
            <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3">
              <Utensils className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-mono tracking-tight">
              {stats.meals_served_monthly.toLocaleString('pl-PL')}+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
              Rozliczonych obiadów
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              każdego miesiąca w systemie
            </div>
          </div>

          <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-6 text-center shadow-xs">
            <div className="w-12 h-12 mx-auto rounded-xl bg-amber-600 text-white flex items-center justify-center mb-3">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-950 font-mono tracking-tight">
              {stats.satisfaction_rate}%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
              Zadowolonych intendentów
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              ocenia program na 5 gwiazdek
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center shadow-xs">
            <div className="w-12 h-12 mx-auto rounded-xl bg-slate-700 text-white flex items-center justify-center mb-3">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
              {stats.years_on_market} lat
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
              Rozwoju w placówkach
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              stałe wsparcie i aktualizacje
            </div>
          </div>
        </div>

        {/* Karty Opinii Użytkowników */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.testimonials.map((t) => (
            <div
              key={t.id}
              className="card-clean bg-slate-50/40 border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:bg-white hover:shadow-card transition-all"
            >
              <div>
                {/* 5 gwiazdek */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-semibold text-slate-500 ml-2">
                    {t.years_using}
                  </span>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic relative">
                  <span className="text-school-300 font-serif text-3xl leading-none mr-1">“</span>
                  {t.quote}
                  <span className="text-school-300 font-serif text-3xl leading-none ml-1">”</span>
                </p>
              </div>

              {/* Informacja o autorze opinii */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-school-600 text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0">
                  {t.author.replace('Pani ', '').replace('Pan ', '').charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500">
                    <span className="text-school-700 font-medium">{t.role}</span> • {t.school}, {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
