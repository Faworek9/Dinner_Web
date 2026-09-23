# Ewidencja Obiadów Szkolnych – Serwis Internetowy & Podręcznik

Nowoczesna, przejrzysta i intuicyjna strona internetowa promująca aplikację desktopową **Ewidencja Obiadów** przeznaczoną dla polskich szkół, przedszkoli, intendentów, kierowników stołówek oraz księgowości placówek oświatowych.

---

## 🌟 Główne Funkcjonalności Serwisu

1. **Strona Główna**:
   - Prezentacja korzyści i rozwiązań codziennych problemów stołówki szkolnej.
   - Liczniki aktywnych placówek oraz rozliczonych posiłków.
   - Sekcja z opiniami i referencjami ze szkół.
   - Akordeon najczęściej zadawanych pytań (FAQ).
   - Bezpieczny formularz kontaktowy zintegrowany z bazą danych i powiadomieniami SMTP.
   - Modal pobierania najnowszej wersji instalatora Windows (`.exe`).

2. **Interaktywny Podręcznik Użytkownika ("Jak to działa")**:
   - 10 szczegółowych rozdziałów z rzeczywistymi zrzutami ekranu z aplikacji.
   - Boczny spis treści z szybką nawigacją i płynnym przewijaniem.
   - Możliwość pobrania przykładowego wzoru pliku Excel do importu uczniów (`wzor_importu_uczniow.xlsx`).
   - Dedykowane sekcje pytań i odpowiedzi dla każdego etapu pracy z programem.

3. **Zakładka "Zostaw opinię"**:
   - Bezpośrednio osadzone formularze Google Forms wewnątrz strony:
     - **Formularz 1: Ogólna opinia o aplikacji** (~3 min).
     - **Formularz 2: Opinia o konkretnej funkcji / Zgłoszenie ulepszenia** (~2 min).
   - Interaktywny boks bezpośredniego kontaktu z funkcją szybkiego kopiowania adresu e-mail (`ewidencja.obiadow@gmail.com`) do schowka.

4. **Powiadomienia E-mail (SMTP)**:
   - Asynchroniczna wysyłka eleganckich powiadomień HTML/tekstowych na skrzynkę e-mail po nadesłaniu zapytania z formularza kontaktowego.

---

## 🏗️ Architektura i Technologie

- **Frontend**:
  - React 18 (JSX) + Vite 6
  - Tailwind CSS + niestandardowa paleta barw (Brand Color `#4F46E5`)
  - Lucide React (nowoczesny zestaw ikon wektorowych)
- **Backend**:
  - Python 3.9+ / FastAPI
  - Uvicorn (serwer ASGI)
  - Pydantic v2 (walidacja typów i danych wejściowych)
  - SQLite (lokalna, bezobsługowa baza danych zapytań kontaktowych)
  - Smtplib (obsługa wysyłki poczty przez Gmail SMTP z SSL/TLS)

```text
Dinner_Web/
├── backend/
│   ├── main.py              # Aplikacja FastAPI, routing, CORS, obsługa pobierania i zapytań
│   ├── database.py          # Baza SQLite do zapisywania zapytań z formularza kontaktowego
│   ├── mailer.py            # Moduł asynchronicznej wysyłki e-maili SMTP (Gmail)
│   ├── models.py            # Modele Pydantic dla formularza, statystyk i FAQ
│   ├── requirements.txt     # Wymagane pakiety Python (fastapi, uvicorn, pydantic)
│   └── downloads/           # Katalog z instalatorem desktopowym .exe
├── frontend/
│   ├── public/
│   │   ├── app_icon.png     # Oficjalne logo aplikacji
│   │   ├── favicon.ico      # Ikona karty przeglądarki
│   │   ├── favicon.png      # Ikona PNG favicon
│   │   ├── wzor_importu_uczniow.xlsx # Wzór pliku importu uczniów
│   │   └── screenshots/     # Zrzuty ekranu z programu do podręcznika
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Górny pasek nawigacji i wybór stron
│   │   │   ├── SecondaryNav.jsx     # Pasek podrzędny (szybkie przewijanie)
│   │   │   ├── Hero.jsx             # Sekcja powitalna z makietą aplikacji
│   │   │   ├── ProblemsSolutions.jsx # Zestawienie korzyści i problemów
│   │   │   ├── ManualGuide.jsx      # Interaktywny podręcznik z rozdziałami
│   │   │   ├── FeedbackPage.jsx     # Zakładka opinii z osadzonymi formularzami Google
│   │   │   ├── SocialProof.jsx      # Statystyki i opinie szkół
│   │   │   ├── FaqSection.jsx       # Sekcja najczęstszych pytań (FAQ)
│   │   │   ├── ContactSection.jsx   # Formularz kontaktowy z walidacją
│   │   │   ├── DownloadModal.jsx    # Modal z instrukcją pobierania
│   │   │   └── Footer.jsx           # Stopka serwisu
│   │   ├── App.jsx          # Główny stan aplikacji i routing zakładek
│   │   ├── index.css        # Style Tailwind i animacje
│   │   └── main.jsx         # Punkt startowy aplikacji React
│   ├── package.json         # Zależności npm
│   ├── tailwind.config.js   # Konfiguracja kolorów i motywu Tailwind
│   └── vite.config.js       # Konfiguracja Vite oraz proxy do portu 8000
├── run_dev.ps1              # Automatyczny skrypt uruchamiający oba serwery w PowerShell
└── README.md
```

---

## 🚀 Szybkie Uruchomienie (PowerShell)

W głównym katalogu projektu uruchom jedno polecenie:

```powershell
.\run_dev.ps1
```

Skrypt automatycznie wystartuje:
1. **Backend FastAPI**: [http://localhost:8000](http://localhost:8000) (Dokumentacja Swagger: [http://localhost:8000/docs](http://localhost:8000/docs))
2. **Frontend React (Vite)**: [http://localhost:5173](http://localhost:5173)

---

## ⚙️ Uruchomienie Ręczne Krok po Kroku

### 1. Uruchomienie Backendu (FastAPI)
```powershell
# W katalogu głównym:
.venv\Scripts\python.exe -m uvicorn backend.main:app --reload --host 127.0.0.1 --port 8000
```

### 2. Uruchomienie Frontendu (React)
```powershell
cd frontend
npm run dev
```
Otwórz w przeglądarce adres: **`http://localhost:5173`**.

---

## 📧 Konfiguracja Powiadomień E-mail (SMTP)

Aplikacja domyślnie wysyła powiadomienia na adres **`ewidencja.obiadow@gmail.com`**.

Aby włączyć rzeczywistą wysyłkę e-maili przez serwer Google SMTP:
1. Włącz weryfikację dwuetapową na koncie Google.
2. Wygeneruj **Hasło do aplikacji** (16-znakowy ciąg) w ustawieniach konta Google (`Bezpieczeństwo` -> `Hasła do aplikacji`).
3. Ustaw zmienne środowiskowe przed uruchomieniem backendu:

```powershell
$env:SMTP_USER = "ewidencja.obiadow@gmail.com"
$env:SMTP_PASSWORD = "twoje_16_znakowe_haslo"
$env:ADMIN_EMAIL = "ewidencja.obiadow@gmail.com"
```

*Jeśli hasło nie zostanie ustawione, zapytania kontaktowe i tak zostaną bezpiecznie zapisane w lokalnej bazie SQLite, a błąd SMTP zostanie bezpiecznie pominięty.*

---

## 📡 Endpointy REST API

| Metoda | Endpoint | Opis |
|---|---|---|
| `GET` | `/api/info` | Zwraca metadane programu (wersja, data, rozmiar, wymagania). |
| `GET` | `/api/stats` | Zwraca statystyki placówek i posiłków oraz opinie. |
| `GET` | `/api/faq` | Zwraca listę pytań i odpowiedzi FAQ. |
| `GET` | `/api/manual` | Zwraca strukturę kroków podręcznika. |
| `POST` | `/api/contact` | Przyjmuje zgłoszenie z formularza, zapisuje w SQLite i wysyła e-mail SMTP. |
| `GET` | `/api/contact/messages` | Zwraca listę zapisanych wiadomości od placówek. |
| `GET` | `/api/download/latest` | Bezpiecznie serwuje najnowszy plik instalatora `.exe`. |
| `GET` | `/health` | Healthcheck statusu serwera backendowego. |

---

## 📄 Kontakt i Wsparcie

- **E-mail**: [ewidencja.obiadow@gmail.com](mailto:ewidencja.obiadow@gmail.com)
- **Oficjalna strona projektu**: [http://localhost:5173](http://localhost:5173)
