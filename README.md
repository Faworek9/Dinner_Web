# Ewidencja Obiadów Szkolnych – Serwis Promocyjny

Nowoczesna, przejrzysta i intuicyjna strona promocyjna dla aplikacji desktopowej służącej do ewidencji obiadów w szkołach i przedszkolach.

Strona została zaprojektowana ze szczególnym uwzględnieniem ergonomii i czytelności dla **intendentów, kierowników stołówek, sekretariatów i dyrekcji szkół**:
- Duża, czytelna czcionka o wysokim kontraście.
- Brak przeładowania zbędnymi informacjami i brak trudnego żargonu technicznego.
- Realistyczna makieta okna programu komputerowego.
- Zakładka z podręcznikiem ("Jak to działa w 4 krokach").
- Zestawienie problemów i rozwiązań ("Z czym koniec, co zyskujesz").
- Licznik 140+ aktywnych szkół i opinie intendentów.
- Akordeon najczęstszych pytań (FAQ: RODO, brak internetu, obsługa bez wiedzy technicznej).
- Formularz kontaktowy zintegrowany z backendem oraz bezpośredni numer telefonu do autora.
- Przycisk pobierania z prostą instrukcją instalacji w 3 krokach.

---

## Architektura Projektu

- **Frontend**: React (JavaScript/JSX), Vite, Tailwind CSS, Lucide Icons.
- **Backend**: Python 3.9+, FastAPI, Pydantic, SQLite (baza zapytań kontaktowych), bezpieczne serwowanie instalatora `.exe`.

```text
Dinner_Web/
├── backend/
│   ├── main.py          # Aplikacja FastAPI, routing, CORS, obsługa pobierania i zapytań
│   ├── database.py      # Baza SQLite do zapisywania zapytań z formularza kontaktowego
│   ├── models.py        # Modele Pydantic dla formularza, statystyk i FAQ
│   ├── requirements.txt # Wymagane pakiety Python (fastapi, uvicorn, pydantic)
│   └── downloads/       # Katalog z plikiem instalatora desktopowego
├── frontend/
│   ├── src/
│   │   ├── components/  # Komponenty: Navbar, Hero, ProblemsSolutions, ManualGuide, SocialProof, FaqSection, ContactSection, DownloadModal, Footer
│   │   ├── App.jsx      # Główny komponent z przełączaniem zakładek i pobieraniem danych z API
│   │   └── index.css    # Style Tailwind CSS i usprawnienia dostępności
│   ├── package.json     # Zależności npm
│   └── vite.config.js   # Konfiguracja Vite i proxy do backendu (port 8000)
├── run_dev.ps1          # Skrypt PowerShell uruchamiający jednym kliknięciem oba serwery
└── README.md
```

---

## Szybkie Uruchomienie (PowerShell)

W katalogu głównym projektu `C:\Users\kongr\VS Code\Dinner_Web` uruchom:

```powershell
.\run_dev.ps1
```

Skrypt automatycznie uruchomi:
1. **Backend FastAPI** pod adresem: [http://localhost:8000](http://localhost:8000) (Dokumentacja Swagger: [http://localhost:8000/docs](http://localhost:8000/docs))
2. **Frontend React** pod adresem: [http://localhost:5173](http://localhost:5173)

---

## Ręczne Uruchomienie Krok po Kroku

### 1. Backend (FastAPI):
```powershell
# Aktywacja wirtualnego środowiska i uruchomienie serwera
.venv\Scripts\python.exe -m uvicorn backend.main:app --reload --host 127.0.0.1 --port 8000
```

### 2. Frontend (React + Vite):
```powershell
cd frontend
npm run dev
```
Otwórz w przeglądarce: `http://localhost:5173`.

---

## Endpointy API

- `GET /api/info` – Zwraca wersję, datę wydania, wagę pliku i wymagania systemowe aplikacji.
- `GET /api/stats` – Zwraca statystyki aktywnych szkół, wydanych posiłków i opinie intendentów.
- `GET /api/faq` – Zwraca listę pytań i odpowiedzi FAQ.
- `GET /api/manual` – Zwraca 4 kroki podręcznika użytkownika.
- `POST /api/contact` – Przyjmuje i waliduje formularz kontaktowy, zapisując go do bazy SQLite.
- `GET /api/contact/messages` – Lista nadesłanych wiadomości od szkół.
- `GET /api/download/latest` – Bezpieczne pobieranie najnowszej wersji instalatora `.exe`.
