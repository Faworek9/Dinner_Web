from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
import os
from contextlib import asynccontextmanager

try:
    from backend.database import init_db, save_contact_message, get_all_messages
    from backend.models import (
        ContactRequest,
        ContactResponse,
        AppInfoResponse,
        StatsResponse,
        Testimonial,
        FaqItem
    )
    from backend.routers.downloads import router as downloads_router
except ImportError:
    from database import init_db, save_contact_message, get_all_messages
    from models import (
        ContactRequest,
        ContactResponse,
        AppInfoResponse,
        StatsResponse,
        Testimonial,
        FaqItem
    )
    from routers.downloads import router as downloads_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield

app = FastAPI(
    title="Ewidencja Obiadów Szkolnych - API Promocyjne",
    description="Backend serwisu promocyjnego aplikacji desktopowej do ewidencji obiadów w szkołach.",
    version="2.4.0",
    lifespan=lifespan
)

# CORS middleware dla lokalnego środowiska deweloperskiego i produkcji
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ścieżka do skompilowanego frontendu (w kontenerze Docker: static/, w repo: frontend/dist)
STATIC_DIR = os.path.join(os.path.dirname(__file__), "..", "static")
if not os.path.exists(STATIC_DIR):
    STATIC_DIR = os.path.join(os.path.dirname(__file__), "static")
if not os.path.exists(STATIC_DIR):
    STATIC_DIR = os.path.join(os.path.dirname(__file__), "..", "frontend", "dist")

if os.path.exists(STATIC_DIR):
    assets_dir = os.path.join(STATIC_DIR, "assets")
    if os.path.exists(assets_dir):
        from fastapi.staticfiles import StaticFiles
        app.mount("/assets", StaticFiles(directory=assets_dir), name="assets")


APP_METADATA = {
    "app_name": "Ewidencja Obiadów Szkolnych",
    "version": "2.4.2",
    "release_date": "15 września 2026",
    "file_size_mb": 42.5,
    "os_requirement": "Windows 10 / Windows 11 (64-bit)",
    "download_filename": "EwidencjaObiadow-Instalator-v2.4.exe"
}

TESTIMONIALS_DATA = [
    Testimonial(
        id=1,
        author="Pani Maria Kowalczyk",
        role="Starszy Intendent",
        school="Szkoła Podstawowa nr 4",
        city="Siedlce",
        quote="Przed wprowadzeniem programu koniec każdego miesiąca oznaczał siedzenie po godzinach ze stosem zeszytów i kalkulatorem. Teraz raport dla księgowej w gminie drukuję jednym kliknięciem przed godziną 14:00. Wszystko się zgadza co do grosza!",
        years_using="od 3 lat"
    ),
    Testimonial(
        id=2,
        author="Pan Tomasz Wiśniewski",
        role="Kierownik Gospodarczy",
        school="Zespół Szkolno-Przedszkolny",
        city="Wieliczka",
        quote="Nasi pracownicy stołówki i sekretariatu nie przesiadują całymi dniami przed komputerem i bali się skomplikowanego systemu. Ten program jest tak przejrzysty, że po 20 minutach każdy wiedział, jak zaznaczyć nieobecność czy wydać obiad.",
        years_using="od 2 lat"
    ),
    Testimonial(
        id=3,
        author="Pani Barbara Szymańska",
        role="Główna Księgowa",
        school="Szkoła Podstawowa im. KEN",
        city="Swarzędz",
        quote="Największą ulgą są automatyczne odpisy za zgłoszone nieobecności. Rodzice dostają jasne kwitki opłat z dokładnym wykazem odliczeń. Skończyły się telefony z pretensjami i ciągłe korygowanie tabel w Excelu.",
        years_using="od 4 lat"
    ),
    Testimonial(
        id=4,
        author="Pani Danuta Zielińska",
        role="Dyrektor Szkoły",
        school="Szkoła Podstawowa nr 12",
        city="Gdynia",
        quote="Zależało nam na bezpieczeństwie danych (RODO) i stabilności. Program działa bezpośrednio na komputerze w szkole, nie wymaga logowania przez przeglądarkę i działa nawet wtedy, gdy w szkole padnie internet.",
        years_using="od ponad roku"
    )
]

FAQ_DATA = [
    FaqItem(
        id=1,
        category="Wymagania i instalacja",
        question="Czy program wymaga stałego połączenia z internetem?",
        answer="Nie. Jest to w 100% aplikacja desktopowa instalowana bezpośrednio na komputerze szkolnym (np. w gabinecie intendenta lub sekretariacie). Działa niezawodnie nawet przy braku połączenia z siecią. Internet jest potrzebny jedynie do pobrania instalatora lub automatycznej aktualizacji."
    ),
    FaqItem(
        id=2,
        category="Obsługa i prostota",
        question="Czy poradzę sobie z obsługą, jeśli słabo znam się na komputerach?",
        answer="Zdecydowanie tak! Program został zaprojektowany wspólnie z intendentami ze szkół. Posiada duże, czytelne przyciski, przejrzysty podział na klasy oraz brak skomplikowanych opcji technicznych. Codzienna praca sprowadza się do 2-3 kliknięć."
    ),
    FaqItem(
        id=3,
        category="Raporty i finanse",
        question="Jak program radzi sobie z odpisami za nieobecności uczniów?",
        answer="Gdy rodzic zgłasza nieobecność dziecka, wystarczy jedno kliknięcie przy nazwisku w kalendarzu. Program automatycznie wylicza odpis i pomniejsza należność za kolejny miesiąc. Generuje również gotowe kwitki wpłat z podsumowaniem dla rodziców."
    ),
    FaqItem(
        id=4,
        category="Bezpieczeństwo i RODO",
        question="Gdzie przechowywane są dane uczniów i czy to bezpieczne (RODO)?",
        answer="Wszystkie dane pozostają wyłącznie na dysku komputera w Twojej szkole. Nie są wysyłane do żadnych zewnętrznych chmur ani serwerów komercyjnych. Szkoła zachowuje 100% kontroli nad danymi osobowymi zgodnie z wymogami RODO."
    ),
    FaqItem(
        id=5,
        category="Nowy rok szkolny",
        question="Co dzieje się z danymi uczniów na koniec roku szkolnego?",
        answer="Program posiada intuicyjną funkcję 'Nowy Rok Szkolny' – jednym kliknięciem przenosisz klasy o rok wyżej (np. z 1A do 2A), a klasę kończącą szkołę archiwizujesz. Listy nowych uczniów można łatwo zaimportować z pliku Excel lub dziennika elektronicznego."
    ),
    FaqItem(
        id=6,
        category="Wersja próbna i licencja",
        question="Czy mogę przetestować program bez żadnych zobowiązań?",
        answer="Tak! Pobrana wersja pozwala na bezpłatne i w pełni funkcjonalne przetestowanie programu na przykładowych danych lub we własnej szkole. Do pobrania programu nie jest wymagane podawanie karty płatniczej ani podpisywanie umów."
    )
]

MANUAL_STEPS_DATA = [
    {
        "step": 1,
        "title": "Wprowadzenie klas i uczniów",
        "badge": "Przygotowanie na start",
        "description": "Dodaj klasy jednym ruchem lub zaimportuj gotową listę uczniów z pliku Excel / CSV z dziennika elektronicznego. Program pozwala przypisać indywidualne stawki (np. pełny obiad, sama zupa, posiłki dla nauczycieli).",
        "tip": "Wskazówka: Dane wprowadzasz tylko raz na początku roku – potem program sam pamięta przypisania.",
        "icon": "Users"
    },
    {
        "step": 2,
        "title": "Codzienne zaznaczanie obecności",
        "badge": "Codzienna praca (2 min)",
        "description": "Rano rodzic zgłasza nieobecność? Wystarczy kliknąć nazwisko ucznia w widoku danego dnia. Cała klasa jedzie na wycieczkę? Jednym przyciskiem 'Wycieczka' odznaczasz całą grupę.",
        "tip": "Wskazówka: Zgłoszone nieobecności automatycznie przeliczają się na zwroty i odpisy w rachunkach.",
        "icon": "CalendarCheck"
    },
    {
        "step": 3,
        "title": "Błyskawiczna informacja dla kuchni",
        "badge": "Raport poranny dla kucharek",
        "description": "Koniec z bieganiem po korytarzach! O ustalonej godzinie (np. 8:30) program generuje czytelny wydruk dla pań kucharek z dokładną liczbą porcji do ugotowania z podziałem na diety i grupy.",
        "tip": "Wskazówka: Stołówka gotuje dokładnie tyle porcji, ile potrzeba – zero marnowania żywności.",
        "icon": "ChefHat"
    },
    {
        "step": 4,
        "title": "Rozliczenie miesiąca i kwitki opłat",
        "badge": "Koniec miesiąca bez stresu",
        "description": "Na koniec miesiąca program jednym kliknięciem tworzy całościowe zestawienie dla księgowości oraz generuje gotowe kwitki do druku lub wysyłki z dokładną kwotą do zapłaty dla każdego rodzica.",
        "tip": "Wskazówka: Zestawienie zawiera sumę wpłat, sumę odpisów i ewentualne zaległości.",
        "icon": "FileText"
    }
]

@app.get("/")
def read_root():
    if os.path.exists(STATIC_DIR):
        index_file = os.path.join(STATIC_DIR, "index.html")
        if os.path.isfile(index_file):
            return FileResponse(index_file)
    return {
        "status": "online",
        "app": APP_METADATA["app_name"],
        "version": APP_METADATA["version"],
        "docs_url": "/docs"
    }


@app.get("/api/info", response_model=AppInfoResponse)
def get_app_info():
    return AppInfoResponse(**APP_METADATA)

@app.get("/api/stats", response_model=StatsResponse)
def get_stats():
    return StatsResponse(
        active_schools=142,
        meals_served_monthly=48500,
        satisfaction_rate=99,
        years_on_market=6,
        testimonials=TESTIMONIALS_DATA
    )

@app.get("/api/faq")
def get_faq():
    return {"faq": FAQ_DATA}

@app.get("/api/manual")
def get_manual():
    return {"steps": MANUAL_STEPS_DATA}

@app.post("/api/contact", response_model=ContactResponse)
def submit_contact_form(payload: ContactRequest):
    try:
        inserted_id = save_contact_message(
            name=payload.name,
            school_name=payload.school_name,
            contact_info=payload.contact_info,
            message=payload.message
        )
        return ContactResponse(
            success=True,
            message="Dziękujemy za kontakt! Twoja wiadomość została pomyślnie przesłana. Skontaktujemy się z Twoją szkołą w ciągu 24 godzin.",
            contact_id=inserted_id
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Wystąpił błąd podczas zapisywania wiadomości: {str(e)}"
        )

@app.get("/api/contact/messages")
def list_contact_messages():
    messages = get_all_messages()
    return {"count": len(messages), "messages": messages}

# Dołączenie modułu pobierania (GitHub Releases / analityka)
app.include_router(downloads_router)


# Obsługa routingu SPA oraz pozostałych plików statycznych (np. screenshots)
if os.path.exists(STATIC_DIR):
    @app.get("/{full_path:path}")
    async def serve_spa(full_path: str):
        # Nie przechwytuj zapytań do API, dokumentacji Swagger / OpenAPI
        if full_path.startswith("api/") or full_path.startswith("docs") or full_path.startswith("openapi.json"):
            raise HTTPException(status_code=404, detail="Not found")
            
        file_candidate = os.path.join(STATIC_DIR, full_path)
        if os.path.isfile(file_candidate):
            return FileResponse(file_candidate)
            
        index_file = os.path.join(STATIC_DIR, "index.html")
        if os.path.isfile(index_file):
            return FileResponse(index_file)
            
        raise HTTPException(status_code=404, detail="Not found")

