import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import SecondaryNav from './components/SecondaryNav.jsx';
import Hero from './components/Hero.jsx';
import ProblemsSolutions from './components/ProblemsSolutions.jsx';
import ManualGuide from './components/ManualGuide.jsx';
import SocialProof from './components/SocialProof.jsx';
import FaqSection from './components/FaqSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import DownloadModal from './components/DownloadModal.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'manual'
  const [activeManualStep, setActiveManualStep] = useState(0);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [appInfo, setAppInfo] = useState(null);
  const [statsData, setStatsData] = useState(null);
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    // Pobierz informacje z backendu FastAPI
    fetch('/api/info')
      .then(res => res.ok ? res.json() : null)
      .then(data => data && setAppInfo(data))
      .catch(() => console.log('Używam danych domyślnych aplikacji'));

    fetch('/api/stats')
      .then(res => res.ok ? res.json() : null)
      .then(data => data && setStatsData(data))
      .catch(() => console.log('Używam danych domyślnych statystyk'));

    fetch('/api/faq')
      .then(res => res.ok ? res.json() : null)
      .then(data => data && setFaqData(data.faq || []))
      .catch(() => console.log('Używam danych domyślnych FAQ'));
  }, []);

  const handleOpenDownload = () => {
    setIsDownloadOpen(true);
  };

  const handleCloseDownload = () => {
    setIsDownloadOpen(false);
  };

  const handleOpenManual = (stepIndex = 0) => {
    setActiveManualStep(stepIndex);
    setActiveTab('manual');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    setActiveTab('home');
    setTimeout(() => {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* 1. Główny pasek nawigacyjny: TYLKO wybór pomiędzy stronami ('Główna' / 'Podręcznik') */}
      <Navbar
        onDownloadClick={handleOpenDownload}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* 2. Pasek podrzędny (SecondaryNav w stylu Google One): pojawia się wyłącznie na Stronie Głównej po zjechaniu niżej */}
      {activeTab === 'home' && (
        <SecondaryNav activeTab={activeTab} />
      )}

      <main className="flex-grow">
        {/* Widok: Strona Główna */}
        {activeTab === 'home' && (
          <>
            <Hero 
              onDownloadClick={handleOpenDownload} 
              onOpenManual={() => handleOpenManual(0)} 
            />

            <ProblemsSolutions 
              onOpenManual={() => handleOpenManual(0)} 
            />

            {/* Skrócona zachęta do podręcznika na stronie głównej */}
            <section className="py-14 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-school-600 mb-2 block">
                  Instrukcja obsługi
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Chcesz poznać program od podszewki?
                </h3>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto text-base">
                  Zobacz nasz przejrzysty podręcznik w układzie książki: ze spisem treści, zrzutami ekranu i odpowiedziami na pytania do każdej funkcji.
                </p>
                <button
                  onClick={() => handleOpenManual(0)}
                  className="btn-secondary text-base px-6 py-3 border-school-300 text-school-800 hover:bg-school-50 font-bold"
                >
                  📖 Otwórz podręcznik (Spis treści i opis funkcji)
                </button>
              </div>
            </section>

            <SocialProof 
              statsData={statsData} 
            />

            <FaqSection 
              faqList={faqData}
              onContactClick={handleContactClick} 
            />

            <ContactSection />
          </>
        )}

        {/* Widok: Dedykowany Podręcznik (Układ książki z bocznym spisem treści i personalizowanym FAQ) */}
        {activeTab === 'manual' && (
          <div className="animate-fadeIn">
            <ManualGuide 
              onDownloadClick={handleOpenDownload}
            />

            <ContactSection />
          </div>
        )}
      </main>

      <Footer 
        onOpenManual={() => handleOpenManual(0)} 
        onDownloadClick={handleOpenDownload} 
      />

      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={handleCloseDownload}
        appInfo={appInfo}
      />
    </div>
  );
}
