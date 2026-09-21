import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, ShieldCheck, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    school_name: '',
    contact_info: '',
    message: ''
  });

  const [statusState, setStatusState] = useState({
    loading: false,
    success: false,
    error: null,
    responseMsg: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusState({ loading: true, success: false, error: null, responseMsg: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusState({
          loading: false,
          success: true,
          error: null,
          responseMsg: data.message || 'Wiadomość została wysłana! Skontaktujemy się z Twoją szkołą w ciągu 24 godzin.'
        });
        setFormData({ name: '', school_name: '', contact_info: '', message: '' });
      } else {
        throw new Error(data.detail || 'Wystąpił problem z wysłaniem wiadomości. Spróbuj ponownie lub zadzwoń.');
      }
    } catch (err) {
      setStatusState({
        loading: false,
        success: false,
        error: err.message || 'Nie udało się połączyć z serwerem. Prosimy o kontakt telefoniczny.',
        responseMsg: ''
      });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-school-600 mb-2 block">
            Jesteśmy tu, aby Ci pomóc
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Porozmawiajmy o ewidencji w Twojej szkole
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Chętnie odpowiemy na każde pytanie, pomożemy przy instalacji lub zorganizujemy bezpłatną, 10-minutową prezentację programu przez telefon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kolumna Lewa: Bezpośredni kontakt (Telefon, Godziny, Zaufanie) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-clean bg-school-900 text-white p-7 shadow-card">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Phone className="w-5 h-5 text-school-300" />
                <span>Bezpośredni telefon do autora</span>
              </h3>
              <p className="text-school-200 text-sm mb-6 leading-relaxed">
                Jeśli wolisz porozmawiać zamiast pisać na klawiaturze – zadzwoń śmiało. Odbieramy osobiście i tłumaczymy wszystko prostym, spokojnym językiem.
              </p>

              <div className="bg-school-800/80 rounded-2xl p-5 border border-school-700 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-school-600 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-school-300 block">Zadzwoń teraz:</span>
                    <a 
                      href="tel:790123456" 
                      className="text-2xl font-black text-white hover:text-school-200 tracking-tight"
                    >
                      790 123 456
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-school-700/80 text-school-200 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <span className="text-school-300 block">Godziny kontaktu:</span>
                    <strong className="text-white">Poniedziałek – Piątek: 7:30 – 15:30</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-school-700/80 text-school-200 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <span className="text-school-300 block">Adres poczty e-mail:</span>
                    <a href="mailto:kontakt@ewidencja-obiadow.pl" className="text-white font-medium hover:underline">
                      kontakt@ewidencja-obiadow.pl
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bezpieczeństwo i gwarancja */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-start gap-3 text-slate-700 text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-bold">Gwarancja bezpłatnego wsparcia</strong>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Dla każdej szkoły zapewniamy bezpłatną pomoc w uruchomieniu programu oraz zaimportowaniu listy uczniów.
                </p>
              </div>
            </div>
          </div>

          {/* Kolumna Prawa: Formularz kontaktowy */}
          <div className="lg:col-span-7 card-clean border-slate-200">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-school-600" />
                <span>Napisz do nas wiadomość</span>
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Wypełnij poniższe pola – odpowiemy telefonicznie lub mailowo najszybciej jak to możliwe.
              </p>
            </div>

            {statusState.success && (
              <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-emerald-950 block text-base">Dziękujemy za kontakt!</strong>
                  <p className="text-sm text-emerald-800 mt-1 leading-relaxed">
                    {statusState.responseMsg}
                  </p>
                </div>
              </div>
            )}

            {statusState.error && (
              <div className="mb-6 bg-rose-50 border border-rose-200 text-rose-900 rounded-2xl p-4 flex items-start gap-3 text-sm">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-rose-950 block">Uwaga:</strong>
                  <p className="text-rose-800 mt-0.5">{statusState.error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Twoje Imię i Nazwisko: <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="np. Anna Kowalska"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-school-500 focus:ring-2 focus:ring-school-500/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="school_name" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Nazwa Szkoły / Przedszkola i miasto: <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="school_name"
                  name="school_name"
                  required
                  placeholder="np. Szkoła Podstawowa nr 3 w Toruniu"
                  value={formData.school_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-school-500 focus:ring-2 focus:ring-school-500/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact_info" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Twój numer telefonu lub e-mail: <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact_info"
                  name="contact_info"
                  required
                  placeholder="np. 601 234 567 lub intendent@szkola.pl"
                  value={formData.contact_info}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-school-500 focus:ring-2 focus:ring-school-500/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Treść pytania lub wiadomość: <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="np. Chcielibyśmy sprawdzić program w naszej szkole od nowego miesiąca. Czy możemy otrzymać pomoc przy instalacji?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-800 text-sm focus:border-school-500 focus:ring-2 focus:ring-school-500/20 outline-none transition-all"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={statusState.loading}
                  className="btn-primary w-full py-4 text-base font-bold flex items-center justify-center gap-2"
                >
                  {statusState.loading ? (
                    <span>Przesyłanie wiadomości...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Wyślij zapytanie do autora programu</span>
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2.5">
                  Gwarantujemy poufność: Twoje dane służą wyłącznie do udzielenia odpowiedzi.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
