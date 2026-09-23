import React from 'react';
import { X, Download, CheckCircle2, Mail, AlertCircle, Laptop, ArrowDownCircle } from 'lucide-react';

export default function DownloadModal({ isOpen, onClose, appInfo }) {
  if (!isOpen) return null;

  const info = appInfo || {
    app_name: "Ewidencja Obiadów Szkolnych",
    version: "6.4",
    file_size_mb: 71.3,
    os_requirement: "Windows 10 / Windows 11",
    download_filename: "Dinner_App_Instalator.exe"
  };


  const handleStartDownload = () => {
    // Rozpoczęcie pobierania pliku
    window.location.href = '/api/download/latest';
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-xl w-full p-6 sm:p-8 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Przycisk zamknięcia */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Zamknij okno"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Nagłówek okna */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-school-100 text-school-700 mx-auto flex items-center justify-center mb-3">
            <Download className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">
            Pobieranie programu na komputer
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Wersja: <strong>{info.version} dla Windows</strong> • Rozmiar: <strong>~{info.file_size_mb} MB</strong>
          </p>
        </div>

        {/* Przycisk bezpośredniego pobrania */}
        <div className="mb-6">
          <button
            onClick={handleStartDownload}
            className="w-full btn-primary py-4 text-base font-bold shadow-lg shadow-school-600/20 flex items-center justify-center gap-2"
          >
            <ArrowDownCircle className="w-5 h-5" />
            <span>Kliknij tutaj, aby rozpocząć pobieranie pliku instalatora</span>
          </button>
          <p className="text-center text-xs text-slate-500 mt-2">
            Plik: <code>{info.download_filename}</code> (bezpieczny, sprawdzony antywirusowo)
          </p>
        </div>

        {/* Prosta instrukcja w 3 krokach */}
        <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 mb-6 space-y-3.5">
          <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
            <Laptop className="w-4 h-4 text-school-600" />
            <span>Jak uruchomić program w 3 prostych krokach:</span>
          </h4>

          <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
            <span className="w-5 h-5 rounded-full bg-school-600 text-white font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
              1
            </span>
            <p>
              Kliknij pobrany plik na dolnym pasku przeglądarki lub w folderze <strong>Pobrane</strong> na Twoim komputerze.
            </p>
          </div>

          <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
            <span className="w-5 h-5 rounded-full bg-school-600 text-white font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
              2
            </span>
            <p>
              W oknie instalatora kliknij <strong>Dalej</strong> i <strong>Zainstaluj</strong>. Instalacja potrwa około 15 sekund.
            </p>
          </div>

          <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
              3
            </span>
            <p>
              Gotowe! Na Twoim pulpicie pojawi się ikona z talerzem obiadowym. Kliknij ją dwukrotnie, aby rozpocząć bezpłatny test.
            </p>
          </div>
        </div>

        {/* Wsparcie mailowe przy instalacji */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5">
            <Mail className="w-5 h-5 text-amber-600 shrink-0" />
            <span className="text-amber-950 font-medium">
              Potrzebujesz pomocy przy instalacji?
            </span>
          </div>
          <a
            href="mailto:ewidencja.obiadow@gmail.com"
            className="font-bold text-amber-900 hover:text-amber-800 underline shrink-0"
          >
            Napisz: ewidencja.obiadow@gmail.com
          </a>
        </div>
      </div>
    </div>
  );

}
