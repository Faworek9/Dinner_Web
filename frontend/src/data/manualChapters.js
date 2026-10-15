export const MANUAL_CHAPTERS = [
  {
    id: "ekran-glowny",
    number: "01",
    title: "Ekran główny i nawigacja",
    shortTitle: "Ekran główny",
    category: "Podstawy",
    iconName: "LayoutDashboard",
    description: "Wszystko pod ręką w jednym, przejrzystym oknie – alfabetyczna lista uczniów i pracowników, statusy dofinansowań, kalendarz posiłków oraz automatyczne podsumowania finansowe.",
    content: `Ekran główny programu **Dinner App** został zaprojektowany tak, aby cała codzienna praca stołówki odbywała się w jednym, czytelnym oknie:

### 1. Lewy panel boczny – Lista uczniów i pracowników
- **Alfabetyczna lista**: Uporządkowana według polskich reguł językowych (pełne wsparcie dla liter Ą, Ć, Ę, Ł, Ń, Ó, Ś, Ź, Ż).
- **Automatyczne awatary**: Przy każdym nazwisku program wyświetla czytelną plakietkę z inicjałami osoby, co ułatwia szybkie odszukanie ucznia wzrokiem.
- **Wyszukiwarka na żywo**: Pole wyszukiwania filtruje listę w czasie rzeczywistym podczas wpisywania tekstu (obsługuje polskie znaki diakrytyczne), a przycisk \`×\` pozwala błyskawicznie wyczyścić filtr.
- **Statusy i oznaczenia dofinansowań posiłków**:
  - 🟢 **[SFCH]** – uczeń objęty dofinansowaniem fundacji lub stowarzyszenia (jasnozielone tło kafelka).
  - 🟠 **[MOPS]** – uczeń objęty wsparciem opieki społecznej (jasnopomarańczowe tło kafelka).
  - 🔵 **[PRACOWNIK]** – pracownik / nauczyciel korzystający ze stołówki (jasnoniebieskie tło kafelka).
- **Błyskawiczne dodawanie osób i inteligentne czyszczenie filtru**: Rozwijany formularz nad listą pozwala dopisać nowego ucznia i zatwierdzić go klawiszem \`Enter\` bez przechodzenia do osobnych ekranów. Jeśli w trakcie dodawania aktywne było wyszukiwanie, a nowa osoba nie spełnia jego kryteriów, filtr zostaje automatycznie wyczyszczony, a nowo dodany uczeń od razu staje się zaznaczony.

### 2. Górny pasek narzędzi i płynna nawigacja
- **Wybór miesiąca**: Szybkie przełączanie między miesiącami roku szkolnego.
- **Przyciski akcji**: Szybki dostęp do kluczowych modułów (*Zmień dane*, *Eksport danych*, *Wyślij e-mail*).
- **Płynna nawigacja bez sięgania po myszkę**: Przyciski **„Poprzedni uczeń”** oraz **„Następny uczeń”** na pasku górnym pozwalają przeglądać kolejne osoby jedna po drugiej.
- **Rozwijany przycisk „Dane zbiorcze”**: Umieszczony w prawym górnym rogu przycisk umożliwia jednym kliknięciem przełączenie widoku na zapotrzebowanie całej szkoły (*Dane zbiorcze (wszyscy)*) lub przefiltrowanie tabeli według wybranej diety żywieniowej.

### 3. Ergonomiczna tabela miesięczna i automatyczny zapis
- **Dni robocze miesiąca**: Tabela obejmuje wszystkie dni nauki szkolnej (od poniedziałku do piątku).
- **Pionowe linie tygodni**: Wyraźne pionowe linie oddzielające poszczególne tygodnie (po każdym piątku) ułatwiają orientację w kalendarzu.
- **Przypięte kolumny boczne**: Podczas przewijania dni w prawo nazwy wierszy po lewej stronie oraz podsumowanie **„Razem”** po prawej stronie zawsze pozostają widoczne na ekranie.
- **Niezależna ewidencja Zupy i Drugiego dania**: Każdy posiłek podzielony jest na dwa osobne elementy z własną stawką cenową.
- **Automatyczny, natychmiastowy zapis w tle**: Każda zmiana komórki w tabeli ewidencji (zarówno posiłku planowanego, jak i odwołanego) jest od razu utrwalana w bazie danych – bez konieczności ręcznego klikania jakichkolwiek przycisków zapisu.
- **Przycisk „Zobacz historię zmian”**: Umieszczony bezpośrednio pod tabelą ewidencji pozwala w każdej chwili otworzyć szczegółowy rejestr korekt planu posiłków dokonanych w danym miesiącu.

### 4. Cykl posiłków i czytelny kod kolorystyczny
- 🔵 **Niebieski (Planowane)**: deklaracja zapotrzebowania na posiłek (wprowadzona na stałe, z grafiku lub ręcznie).
- 🔴 **Czerwony (Odwołane)**: zgłoszone nieobecności dziecka (np. choroba, wyjazd).
- 🟢 **Zielony (Wykonane / Do zapłaty)**: posiłki faktycznie zjedzone i podlegające opłacie (\`Planowane minus Odwołane\`).
- 🟡 **Żółty**: dni wolne od szkoły (święta państwowe, ferie, dni dyrektorskie).

> **Wbudowane zabezpieczenia logiczne**: Nie można odwołać posiłku, który nie był wcześniej zaplanowany (pole odwołania jest wtedy zablokowane i wyszarzone), a wycofanie posiłku z planu automatycznie usuwa powiązane z nim odwołanie w danym dniu.`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 113522.png",
        caption: "Widok ekranu głównego programu dla ucznia Dąbrowski Jakub (Klasa 5A)"
      }
    ],
    steps: [
      "Wybierz interesujący Cię miesiąc strzałkami przy polu wyboru daty na górnym pasku.",
      "Odszukaj ucznia lub pracownika na liście po lewej stronie albo wpisz nazwisko w wyszukiwarce na żywo.",
      "Sprawdź lub edytuj wiersze: Planowane, Odwołane oraz Wykonane dla zupy i drugiego dania – każda zmiana zapisuje się automatycznie w tle.",
      "Użyj przycisków „Poprzedni uczeń” / „Następny uczeń”, aby wygodnie przejść do kolejnej osoby bez sięgania po myszkę."
    ],
    faq: [
      {
        q: "Czy po zmianie komórki w tabeli muszę klikać przycisk zapisu?",
        a: "Nie! Każda zmiana w tabeli ewidencji (zarówno w wierszu Planowane, jak i Odwołane) jest automatycznie i natychmiastowo zapisywana w bazie danych w tle."
      },
      {
        q: "Co oznaczają kolorowe kwoty w kolumnie „Razem” po prawej stronie?",
        a: "Niebieska kwota to łączna wartość posiłków zaplanowanych na dany miesiąc, czerwona to suma odpisów za zgłoszone nieobecności, a zielona to ostateczna kwota do zapłaty (posiłki wykonane)."
      },
      {
        q: "Co się stanie, gdy dodam nowego ucznia podczas aktywnego wyszukiwania na liście?",
        a: "Jeśli nowo dodana osoba nie pasuje do wpisanego wcześniej tekstu w wyszukiwarce, program inteligentnie wyczyści filtr wyszukiwania i od razu zaznaczy nowego ucznia na liście."
      }
    ]
  },
  {
    id: "baza-uczniow-kartoteki",
    number: "02",
    title: "Baza uczniów, statusy i diety żywieniowe",
    shortTitle: "Baza uczniów i diety",
    category: "Dane i uczniowie",
    iconName: "Database",
    description: "Ergonomiczna kartoteka osobowa, szybka edycja seryjna, statusy dofinansowań (SFCH, MOPS, Pracownik) oraz bezpieczna ewidencja diet żywieniowych.",
    content: `Koniec z gubiącymi się kartkami, zeszytami i podwójnie wpisanymi dziećmi. **Dinner App** gromadzi wszystkie dane podopiecznych oraz pracowników stołówki w jednej, spójnej bazie:

### 1. Ergonomiczny profil ucznia i szybka edycja
- **Zwarta i czytelna struktura**: Pole klasy umieszczone jest bezpośrednio obok okienka z imieniem i nazwiskiem, co zapewnia szybką i przejrzystą edycję danych bez zbędnego przewijania formularza.
- **Kontakty i rozliczenia**: Osobny numer telefonu do mamy, numer telefonu do taty oraz adres e-mail do rozliczeń.
- **Bezpośrednia korespondencja e-mail (przycisk \`✉️ Napisz wiadomość\`)**: Tuż obok pola adresu e-mail w profilu znajduje się dedykowany przycisk otwierający okno wysyłki wiadomości do rodziców danego dziecka.
- **Szybka edycja seryjna (przycisk \`💾 Zapisz i następna ▶\`)**: Pozwala jednym kliknięciem zapisać wprowadzone zmiany i natychmiast przejść do profilu kolejnego ucznia z listy bez konieczności powracania do tabeli.
- **Wizualne potwierdzenie zapisu (Feedback)**: Po kliknięciu „Zapisz dane” przycisk na 2,5 sekundy zmienia stan na zielony z ikoną \`✅\` i komunikatem \`Zapisano!\`, dając intendentowi natychmiastową pewność utrwalenia danych.
- **Ochrona wprowadzonych danych**: Puste pola klasy, telefonów i adresu e-mail nigdy nie nadpisują wcześniej zapisanych w profilu danych pustą wartością.

### 2. Statusy i oznaczenia (SFCH / MOPS / Pracownik)
Program pozwala natychmiast wyróżnić osoby korzystające z dofinansowań oraz personel szkoły:
- 🟢 **SFCH (Stowarzyszenie / Fundacja)**: Uczeń objęty dofinansowaniem fundacji jest widoczny na liście dzięki jasnozielonemu tłu kafelka i plakietce \`[SFCH]\`.
- 🟠 **MOPS (Opieka Społeczna)**: Uczeń objęty wsparciem MOPS jest oznaczony jasnopomarańczowym tłem kafelka i plakietką \`[MOPS]\`.
- 🔵 **Pracownik**: Pracownik lub nauczyciel korzystający ze stołówki wyróżniony jest na liście jasnoniebieskim tłem kafelka oraz plakietką \`[PRACOWNIK]\`.
- **Czysty i intuicyjny wybór statusu**: W profilu status wybiera się za pomocą estetycznych kafelków z samą nazwą i dedykowanym kolorem (bez zbędnych dopisków tekstowych o kolorach). Wszystkie statusy wykluczają się wzajemnie (maksymalnie jeden status lub żaden), a ich zmiana natychmiast aktualizuje wygląd listy oraz nagłówka profilu.

### 3. Ewidencja diet żywieniowych
- **Wybór wyłącznie z listy (brak wpisywania ręcznego)**: Pole wyboru diety działa w trybie zamkniętej listy rozwijanej – zablokowano możliwość przypadkowego wpisywania tekstu z klawiatury, co gwarantuje pełną spójność i brak literówek w nazwach diet.
- **Domyślny brak diety (\`Brak\`)**: Aplikacja domyślnie nie narzuca żadnych sztywnych diet – jedyną stałą pozycją początkową jest \`Brak\`, a intendent sam definiuje wyłącznie te diety, które faktycznie występują w jego placówce. Każdy uczeń i pracownik ma domyślnie przypisaną wartość \`Brak\`, która jest trwale zabezpieczona przed usunięciem.
- **Zarządzanie listą diet (przycisk \`➕\`)**: Dedykowany przycisk obok pola wyboru otwiera okno zarządzania, gdzie intendent może dodawać nowe, własne nazwy diet (np. *Bezglutenowa*, *Bezmleczna*, *Wegetariańska*) oraz usuwać te niepotrzebne.
- **Bezpieczne usuwanie diet i ochrona danych uczniów**:
  - Jeśli usuwana dieta jest przypisana do jakiegokolwiek ucznia lub pracownika, system wyświetla okno ostrzegawcze z dokładną liczbą przypisanych osób (\`Z tej diety korzysta x osób, czy na pewno chcesz usunąć?\`) i wymaga potwierdzenia.
  - Po zatwierdzeniu usunięcia diety, u wszystkich osób, które miały ją przypisaną, dieta zostaje **automatycznie zaktualizowana na \`Brak\`** (zarówno na widoku profilu, jak i trwale w bazie danych), co eliminuje osierocone rekordy i zapobiega samoczynnemu powracaniu usuniętej diety.
- Zdefiniowane diety są trwale zapamiętywane w ustawieniach programu i synchronizowane przy migracji bazy danych.

### 4. Bezpieczne usuwanie profilu
Możliwość usunięcia profilu ucznia z czytelnym komunikatem potwierdzającym. Usunięcie osoby kasuje kaskadowo w bazie danych również całą jej ewidencję obiadów oraz przypisaną historię zmian.`,
    screenshots: [
      {
        src: "/screenshots/kartoteka_ucznia_edycja.png",
        caption: "Karta danych osobowych i kontaktowych ucznia: klasa, telefony rodziców, e-mail, diety oraz statusy SFCH, MOPS i Pracownik"
      }
    ],
    steps: [
      "Odszukaj osobę na liście lub wpisz nazwisko w polu wyszukiwarki na żywo.",
      "W profilu ucznia uzupełnij klasę, telefony rodziców lub adres e-mail (możesz od razu kliknąć „✉️ Napisz wiadomość” obok pola e-mail).",
      "Wybierz odpowiedni kafelek statusu (SFCH, MOPS lub Pracownik) oraz wskaż dietę z listy rozwijanej (lub dodaj nową dietę przyciskiem „➕”).",
      "Kliknij „Zapisz dane” (zobaczysz zielone potwierdzenie „✅ Zapisano!”) lub użyj przycisku „💾 Zapisz i następna ▶”, aby od razu przejść do kolejnej osoby z listy."
    ],
    faq: [
      {
        q: "Do czego służą statusy SFCH, MOPS oraz Pracownik?",
        a: "Pozwalają natychmiast odróżnić na liście oraz w wyeksportowanych arkuszach Excel uczniów z dofinansowaniem fundacji (SFCH – zielony), ośrodka pomocy społecznej (MOPS – pomarańczowy) oraz nauczycieli i personel (Pracownik – niebieski)."
      },
      {
        q: "Co się stanie z uczniami, jeśli usunę dietę, z której dotychczas korzystali?",
        a: "Program najpierw wyświetli ostrzeżenie z dokładną liczbą osób korzystających z tej diety. Po potwierdzeniu usunięcia program automatycznie przestawi dietę u tych osób na bezpieczną wartość „Brak” zarówno na ekranie, jak i w bazie danych."
      },
      {
        q: "Jak najszybciej uzupełnić dane kontaktowe u kilkudziesięciu uczniów po kolei?",
        a: "Skorzystaj z przycisku „💾 Zapisz i następna ▶” w profilu ucznia – jedno kliknięcie zapisuje zmiany u bieżącego dziecka i od razu otwiera kartę kolejnej osoby z listy."
      }
    ]
  },
  {
    id: "import-danych-excel",
    number: "03",
    title: "Import danych z pliku Excel (.xlsx) i bezpieczna aktualizacja",
    shortTitle: "Import z Excela (.xlsx)",
    category: "Dane i uczniowie",
    iconName: "FileSpreadsheet",
    hasExcelTemplate: true,
    screenshotSize: "medium",
    description: "Dwuetapowy import uczniów, kontaktów i grafików posiłków z pliku .xlsx, interaktywny pasek postępu oraz opcje bezpieczeństwa chroniące bazę danych.",
    content: `Import z pliku Excel to najszybszy sposób na uruchomienie programu we wrześniu oraz bieżącą aktualizację bazy w trakcie roku szkolnego. Program pozwala wgrać listę uczniów, kontakty do rodziców oraz tygodniowy grafik obiadów w kilka sekund.

### Pełna elastyczność formatu arkusza Excel (.xlsx)
Program automatycznie dopasowuje się do struktury Twojego pliku:
1. **Standardowy arkusz z e-mailem (15 kolumn)**:
   - **Kolumny A – E (Dane osobowe i kontakty)**: Klasa, Nazwisko i imię, Telefon do mamy, Telefon do taty, Adres e-mail (obsługuje również adresy z prefiksem \`mailto:\`).
   - **Kolumny F – O (Plan posiłków Pn – Pt)**: Pod każdym dniem roboczym kolumny *zupa* oraz *II danie* (wpisujesz \`1\` = posiłek wykupiony, \`0\` lub puste = brak posiłku).
2. **Starsze szablony szkolne bez e-maila (14 kolumn)**: Pełna kompatybilność wsteczna.
3. **Arkusze tylko z danymi kontaktowymi (od 2 do 5 kolumn)**: Jeśli chcesz zaktualizować wyłącznie same telefony, adresy e-mail czy klasy uczniów bez ruszania posiłków – program bez problemu odczyta taki plik!

---

### Dwuetapowy proces importu i pasek postępu na żywo
Po kliknięciu przycisku *„Importuj .xlsx”* nad listą uczniów program prowadzi Cię przez dwa przejrzyste kroki:

- **Krok 1 – Wybór zakresu, trybu i opcji bezpieczeństwa**:
  - **Wybór roku szkolnego i miesięcy**: Wskazujesz rok szkolny (np. *2026/2027*) oraz zaznaczasz miesiące, do których ma trafić importowany grafik (np. cały rok szkolny IX–VI lub tylko bieżący miesiąc). Miesiące wakacyjne (*Lipiec*, *Sierpień*) są wizualnie wyróżnione.
  - Wybierasz potrzebne opcje bezpieczeństwa (szczegółowo opisane poniżej).

- **Krok 2 – Automatyczne wczytanie pliku i pasek postępu (Progress Bar)**:
  - Wskazujesz plik \`.xlsx\` przygotowany przez szkołę.
  - **Ochrona dni wolnych od szkoły przy imporcie**: Niezależnie od wybranych opcji posiłki nigdy nie są zapisywane w dniach oznaczonych w kalendarzu jako wolne od szkoły – dni te są automatycznie pomijane, chroniąc integralność kalendarza szkolnego.
  - **Interaktywny pasek postępu (Progress Bar)**: Po wybraniu pliku program wyświetla eleganckie okno overlay z animowanym paskiem postępu i bieżącym statusem (wczytywanie arkusza, przetwarzanie kolejnych uczniów wraz z wyświetlaniem ich nazwisk i klas, zapis w bazie danych, odświeżanie ewidencji).
  - **Czytelne podsumowanie po zakończeniu**: Dokładny raport z wyszczególnieniem dodanych uczniów, zaktualizowanych profili, pominiętych osób (w trybie aktualizacji tylko istniejących), zaktualizowanych grafików obiadów oraz obiadów zachowanych bez zmian.

---

### Opcja 1: ⚡ Aktualizacja tylko istniejących uczniów [OPCJA]
- **Jak działa?** Zaktualizuje dane wyłącznie dla uczniów już wprowadzonych do programu. Osoby z pliku Excel, których nie ma w bazie, zostaną pominięte (nowi uczniowie nie będą dodawani).
- **Kiedy z niej korzystać?** Gdy otrzymujesz z sekretariatu zbiorczy plik obejmujący całą szkołę (np. 500 uczniów), a obiady jada tylko 160 zapisanych dzieci. Włączenie tej opcji zaktualizuje dane stołowników bez dodawania pozostałych 340 uczniów do bazy.

---

### Opcja 2: 🔒 Tylko dodawaj nowe dane (nie zmieniaj istniejących) [OPCJA]
- **Jak działa?** Gdy uczeń posiada już w bazie uzupełniony telefon, e-mail, klasę lub posiłki w wybranym miesiącu, program **nie nadpisze tych danych** niezależnie od zawartości pliku Excel. Zostaną dodani nowi uczniowie oraz uzupełnione wyłącznie te pola w profilach, które dotychczas były puste, a także nadane posiłki wyłącznie dla uczniów, którzy w danym miesiącu nie mieli jeszcze żadnego grafiku.
- **Kiedy z niej korzystać?** Gdy w trakcie roku wprowadziłeś już własne korekty w programie, a teraz wgrywasz kolejny arkusz z sekretariatu i chcesz uzupełnić wyłącznie brakujące informacje.

---

### Opcja 3: 🍽️ Puste komórki posiłków interpretuj jako 0 [OPCJA]
- **Kiedy jest potrzebna?** Funkcja ta jest niezbędna w sytuacji, gdy w importowanym pliku Excel (\`.xlsx\`) zamiast standardowego zapisu \`1\` i \`0\`, ktoś wpisał tylko \`1\` (zapisany na obiad), natomiast zamiast \`0\` pozostawił **puste komórki**. Włączenie tej opcji sprawia, że program prawidłowo zinterpretuje te puste pola jako brak posiłku (\`0\`) i wyzeruje obiady w te dni.
- **Domyślne bezpieczeństwo i ochrona obiadów**: Gdy powyższa opcja jest wyłączona (stan domyślny), puste komórki w kolumnach posiłków nie nadpisują ani nie usuwają dotychczasowych obiadów ucznia w bazie.
- **Niezależna ochrona danych kontaktowych**: Niezależnie od wybranej opcji dla posiłków, puste komórki w kolumnach z danymi kontaktowymi (klasa, telefon mamy, telefon taty, e-mail) są zawsze pomijane i nigdy nie czyszczą wprowadzonych wcześniej danych w profilu ucznia.

> **⚠️ Ostrzeżenie przed utratą danych**: W przypadku, gdy opcja *„Puste komórki posiłków interpretuj jako 0”* jest zaznaczona, a wszystkie komórki dotyczące posiłków są puste (na przykład gdy intendent importuje plik Excel zawierający wyłącznie numery telefonów rodziców czy adresy e-mail), **wszystkie dotychczasowe obiady ucznia w wybranych miesiącach zostaną usunięte / wyzerowane**! Podczas aktualizowania samych danych kontaktowych opcja ta musi bezwzględnie pozostać odznaczona.`,
    screenshots: [
      {
        src: "/screenshots/ustawienia_importu_posilkow.png",
        caption: "Okno konfiguracji importu posiłków: wybór miesięcy oraz opcje 'Aktualizacja tylko istniejących uczniów', 'Tylko dodawaj nowe dane' i 'Puste komórki posiłków interpretuj jako 0'"
      }
    ],
    steps: [
      "Pobierz gotowy wzór pliku .xlsx (zielony przycisk powyżej) lub skopiuj nagłówki do pustego arkusza.",
      "Uzupełnij arkusz danymi uczniów (pełne deklaracje obiadów w 15 kolumnach lub same dane kontaktowe w 2–5 kolumnach).",
      "W programie kliknij przycisk „Importuj .xlsx” nad listą uczniów.",
      "W Kroku 1 wybierz rok szkolny, zaznacz miesiące obowiązywania grafiku oraz dostosuj opcje bezpieczeństwa.",
      "W Kroku 2 wskaż plik .xlsx na dysku – obserwuj interaktywny pasek postępu, a po zakończeniu sprawdź szczegółowe podsumowanie importu."
    ],
    faq: [
      {
        q: "Co program robi domyślnie, gdy komórka z posiłkiem w Excelu jest pusta?",
        a: "Domyślnie program chroni Twoje dane – pusta komórka w Excelu nie wyzeruje zaplanowanych obiadów ucznia w bazie. Obiady zostaną wyzerowane pustymi polami tylko wtedy, gdy celowo zaznaczysz opcję „Puste komórki posiłków interpretuj jako 0”."
      },
      {
        q: "Na co uważać przy imporcie pliku zawierającego wyłącznie telefony i adresy e-mail?",
        a: "Podczas importowania samych danych kontaktowych opcja „Puste komórki posiłków interpretuj jako 0” musi być bezwzględnie ODZNACZONA – w przeciwnym razie brak posiłków w pliku wyzerowałby dotychczasowe obiady dzieci."
      },
      {
        q: "Czy import z pliku Excel może przypadkowo przypisać obiady w dni wolne od szkoły?",
        a: "Nie. Niezależnie od wybranych opcji importu posiłki nigdy nie są zapisywane w dniach oznaczonych w kalendarzu jako wolne od szkoły."
      },
      {
        q: "Co się stanie, jeśli w pliku Excel komórka z telefonem lub e-mailem jest pusta?",
        a: "Niezależnie od wybranych opcji dla posiłków, puste komórki w kolumnach kontaktowych (klasa, telefon mamy, telefon taty, e-mail) są zawsze pomijane i nigdy nie kasują wcześniej zapisanych danych w profilu ucznia."
      }
    ]
  },
  {
    id: "ewidencja-posilkow",
    number: "04",
    title: "Ewidencja posiłków, planowanie i historia zmian",
    shortTitle: "Ewidencja i historia zmian",
    category: "Codzienna praca",
    iconName: "CalendarCheck",
    description: "Trzy wyspecjalizowane tryby edycji w oknie „Zmień dane”, podsumowanie kosztowe na żywo (Live Counter) oraz chronologiczny rejestr historii zmian posiłków.",
    content: `Codzienna ewidencja obiadów oraz modyfikacja grafików w programie **Dinner App** są szybkie, przejrzyste i zabezpieczone przed pomyłkami:

### 1. Trzy wyspecjalizowane tryby pracy w oknie „Zmień dane”
Okno **„Zmień dane”** automatycznie podpowiada aktualny rozkład posiłków ucznia z bieżącego miesiąca jako punkt wyjścia (*Inteligentny start*) i oferuje trzy tryby pracy:

1. **Tryb A – Planowane (jeden miesiąc)**:
   - Precyzyjna edycja pojedynczych dni roboczych miesiąca (włączanie/wyłączanie zupy i drugiego dania dla konkretnej daty).
   - Lewa kolumna z szablonem tygodniowym (Pn–Pt) i przyciskami szybkiego wypełnienia: *Pełne obiady*, *Tylko zupy*, *Tylko drugie dania*, *Wyczyść*.
   - Pod każdym dniem widoczny jest czytelny skrót planu (*„Zupa + II danie”*, *„Tylko zupa”*, *„Brak planu”*).
2. **Tryb B – Odwołane (masowe odwoływanie w miesiącu)**:
   - Dedykowany moduł pozwalający hurtowo odwołać posiłki wybranego ucznia w danym miesiącu (np. zaplanowane leczenie, sanatorium lub dłuższa nieobecność).
   - Tygodniowy szablon odwołań (Pn–Pt) dla zup i drugich dań oraz przyciski szybkiej akcji: *Odwołaj wszystkie zaplanowane* oraz *Wyczyść wszystkie odwołania*.
   - **Pełne bezpieczeństwo**: pola odwołań w dniach bez zaplanowanego posiłku są zablokowane, a nad każdym dniem widnieje plakietka z podglądem pierwotnego planu.
3. **Tryb C – Wiele miesięcy (szablon na cały semestr lub rok szkolny)**:
   - Definiowanie stałego tygodniowego planu obiadów i zastosowanie go od razu na dowolnie wybrane miesiące (np. od września do czerwca).
   - Wygodna siatka miesięcy (IX–VI) ze skrótami (*Tylko bieżący miesiąc*, *Cały rok szkolny*, *Zaznacz wszystkie*, *Odznacz wszystkie*).
   - **Inteligentna ochrona odwołań**: Zmiana planu na wiele miesięcy nie niszczy wprowadzonych wcześniej zgłoszeń nieobecności (odwołań) na konkretne dni.

### 2. Podsumowanie kosztowe na żywo (Live Counter) i ochrona dni wolnych
- **Live Counter w stopce okna**: Stopka okna edycji na bieżąco kalkuluje i wyświetla liczbę zup i drugich dań oraz dokładną łączną kwotę w zł dla wprowadzanych zmian, natychmiast reagując na każdą modyfikację checkboxa.
- **Automatyczna ochrona dni wolnych od szkoły**: Zapis planu (zarówno w trybie jednego miesiąca, jak i wielu miesięcy) bezwzględnie pomija dni oznaczone w kalendarzu jako wolne od szkoły. Przy planowaniu wielomiesięcznym aplikacja wyświetla czytelny żółty pasek ostrzegawczy informujący o liczbie dni wolnych przypadających w wybranym okresie.

### 3. Historia zmian posiłków w danym miesiącu
Bezpośrednio pod tabelą ewidencji obiadów każdego ucznia znajduje się przycisk **„Zobacz historię zmian”**, który otwiera szczegółowy rejestr korekt planu posiłków dokonanych w trakcie trwania danego miesiąca:
- **Kluczowe wskaźniki (KPI)**: Prezentuje bilans netto posiłków dodanych i usuniętych dla danego miesiąca (np. \`+3 zupy, -1 drugie danie\`) oraz łączną sumę wprowadzonych modyfikacji.
- **Zbiorczy zapis operacji (bez rozbijania na każdy dzień)**: Każda modyfikacja (np. zmiana szablonu, edycja dni lub tabeli) jest zapisywana jako pojedynczy wpis z łączną liczbą dodanych/usuniętych zup i drugich dań (\`+/- zup\`, \`+/- drugie dania\`), co zapewnia maksymalną przejrzystość i zwięzłość historii.
- **Chronologiczny dziennik zdarzeń**: Każdy wpis zawiera dokładną datę i godzinę modyfikacji, podsumowanie zmian dla zup i drugich dań oraz rodzaj wykonanej operacji (*szablon tygodniowy*, *edycja dni*, *tabela główna*).
- Rejestracja dotyczy wyłącznie posiłków planowanych (odwołania nieobecności są rejestrowane i widoczne bezpośrednio w samej ewidencji).`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 114147.png",
        caption: "Konfiguracja planowanych posiłków – seryjne szablony tygodniowe, kalendarz dni roboczych i Live Counter"
      },
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 114215.png",
        caption: "Moduł odwoływania posiłków – automatyczne wyliczanie wartości odpisów i blokada dni bez planu"
      }
    ],
    steps: [
      "Wybierz ucznia z listy i kliknij fioletowy przycisk „Zmień dane” na górnym pasku.",
      "Wybierz właściwy tryb pracy: „Planowane (jeden miesiąc)”, „Odwołane” lub „Wiele miesięcy”.",
      "Skorzystaj z gotowych przycisków szablonu tygodniowego (np. „Pełne obiady”, „Tylko zupy”) lub dostosuj poszczególne dni.",
      "Sprawdź kalkulację na żywo (Live Counter) w stopce okna i kliknij „Zapisz zmiany”.",
      "Aby przejrzeć dziennik wprowadzonych korekt planu w danym miesiącu, kliknij przycisk „Zobacz historię zmian” pod tabelą ewidencji."
    ],
    faq: [
      {
        q: "Co się stanie, jeśli w tabeli wycofam posiłek z planu w dniu, w którym wcześniej zgłoszono już odwołanie?",
        a: "Wbudowane zabezpieczenie logiczne automatycznie usunie powiązane z tym dniem odwołanie, dzięki czemu liczba odwołań nigdy nie przekroczy liczby posiłków zaplanowanych."
      },
      {
        q: "Co zapisuje się w oknie „Zobacz historię zmian” pod tabelą ucznia?",
        a: "Okno to rejestruje wszystkie korekty posiłków planowanych dokonane w trakcie danego miesiąca wraz z dokładną datą, godziną, rodzajem operacji oraz bilansem netto dodanych i odjętych zup oraz drugich dań."
      },
      {
        q: "Co się stanie z odwołaniami, gdy zmienię plan posiłków ucznia w trybie wielomiesięcznym?",
        a: "Wcześniej wprowadzone odwołania nieobecności są w 100% chronione – zmiana planu na wiele miesięcy nie niszczy zgłoszonych wcześniej odpisów na konkretne dni."
      }
    ]
  },
  {
    id: "odwolywanie-po-klasach",
    number: "05",
    title: "Masowe odwoływanie obiadów dla klas (Wycieczki i wyjścia)",
    shortTitle: "Wycieczki i całe klasy",
    category: "Akcje masowe",
    iconName: "Bus",
    description: "Cała klasa wyjeżdża na wycieczkę szkolną? Odwołaj obiady wszystkim uczniom danej klasy jednym kliknięciem z zachowaniem wierności planu.",
    content: `Gdy cała klasa wyjeżdża na wycieczkę szkolną lub wyjście edukacyjne, dawniej intendent musiał otwierać kartę każdego dziecka z osobna i ręcznie kasować posiłek. W **Dinner App** zrobisz to grupowo w kilka sekund:

### 1. Błyskawiczne odwoływanie grupowe i podgląd zapotrzebowania
- **Dedykowany moduł dla klas**: Pozwala jednym kliknięciem odwołać obiady dla całej wybranej klasy (np. *klasa 4b*) w określonym dniu lub przedziale dat (np. 3-dniowa wycieczka szkolna).
- **Podgląd zapotrzebowania**: Przy każdym dniu kalendarza widoczna jest dokładna informacja, ilu uczniów z danej klasy miało w tym dniu zaplanowany obiad.
- **Przyciski szybkiego działania dla całego miesiąca**: Gotowe przyciski szybkiej akcji **„Odwołaj wszystkie dni”** (odwołuje posiłki dla całej klasy we wszystkich dniach roboczych miesiąca) oraz **„Przywróć wszystkie dni”** (cofa masowe odwołania za jednym razem).

### 2. Sprawiedliwe rozliczenie i wierność planu
- **Dokładnie według planu dziecka**: Odwołanie rejestrowane jest wyłącznie u tych dzieci z klasy, które faktycznie miały na ten dzień zaplanowany posiłek – odwoływane jest dokładnie to, co było zaplanowane (zupy i/lub drugie dania), a ich rachunek miesięczny zostaje automatycznie pomniejszony.
- **Pełne bezpieczeństwo**: Uczniowie niekorzystający ze stołówki pozostają nienaruszeni, dni wolne od szkoły są automatycznie pomijane, a podwójne odwołanie tego samego posiłku jest niemożliwe.`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 114037.png",
        caption: "Okno grupowego odwoływania posiłków po klasach dla wycieczek szkolnych"
      }
    ],
    steps: [
      "Przejdź do widoku „Dane zbiorcze” i kliknij niebieski przycisk „Zmień dane po klasach”.",
      "Z listy po lewej stronie wybierz klasę, która wyjeżdża na wycieczkę.",
      "Zaznacz dni nieobecności klasy w kalendarzu (lub użyj przycisków szybkiej akcji „Odwołaj wszystkie dni” / „Przywróć wszystkie dni”).",
      "Kliknij „Zapisz odwołania” – program automatycznie naniesie odpisy u wszystkich uczniów tej klasy posiadających w te dni zaplanowany posiłek."
    ],
    faq: [
      {
        q: "Co jeśli jedno dziecko z klasy ma wykupione tylko zupy, a inne pełne obiady?",
        a: "Program zachowuje pełną wierność planu – każdemu dziecku z klasy odwołuje dokładnie te składniki posiłku (zupę i/lub drugie danie), które miało zaplanowane w danym dniu."
      },
      {
        q: "Co jeśli dwoje dzieci z tej klasy nie jedzie na wycieczkę i zostaje w świetlicy na obiedzie?",
        a: "Po grupowym odwołaniu dla całej klasy wystarczy wejść w kartę tego konkretnego ucznia i jednym kliknięciem przywrócić mu obiad na ten dzień."
      },
      {
        q: "Co zrobić, gdy wycieczka została odwołana z powodu pogody?",
        a: "Otwórz okno odwoływania po klasach, wybierz klasę, odznacz dni wycieczki (lub kliknij „Przywróć wszystkie dni”) i zapisz zmiany."
      }
    ]
  },
  {
    id: "dane-zbiorcze-kuchnia",
    number: "06",
    title: "Zestawienie zbiorcze dla kuchni, diety i historia zmian",
    shortTitle: "Dane zbiorcze i diety",
    category: "Kuchnia i raporty",
    iconName: "ChefHat",
    description: "Codzienne zapotrzebowanie kuchni na żywo, błyskawiczne filtrowanie tabeli według diet żywieniowych oraz zbiorcza historia zmian posiłków dla całej szkoły.",
    content: `Kluczowe narzędzie codziennej pracy intendenta, personelu kuchennego i magazynu. Widok **„Dane zbiorcze”** gromadzi całościowe zapotrzebowanie placówki oraz pozwala jednym kliknięciem filtrować posiłki według diet żywieniowych:

### 1. Widok „Dane zbiorcze” i filtrowanie według diety w oknie głównym
- **Zapotrzebowanie całej placówki**: Domyślnie widok prezentuje zapotrzebowanie kuchni na posiłki dla wszystkich podopiecznych i pracowników szkoły (\`Dane zbiorcze (wszyscy)\`).
- **Interaktywny wybór tabeli i diety**: Przycisk danych zbiorczych w prawym górnym rogu jest estetyczną, rozwijaną listą umożliwiającą błyskawiczne przełączenie widoku na konkretną dietę (np. \`Dieta: Wegetariańska\`, \`Dieta: Bezglutenowa\`, \`Dieta: Bezmleczna\`, \`Dieta: Brak\` itd.).
- **Automatyczne przeliczanie tabeli na żywo**: Po wskazaniu diety tabela ewidencji natychmiast ładuje się na nowo, wyświetlając dzienne liczby zaplanowanych, odwołanych i wykonanych zup oraz drugich dań **wyłącznie dla uczniów i pracowników korzystających z danej diety**.
- **Dynamiczny nagłówek i licznik osób**: Belka tytułowa tabeli aktualizuje nazwę (np. \`Ewidencja obiadów - Dane zbiorcze (Dieta: Wegetariańska)\`) oraz podaje dokładną liczbę osób na wybranej diecie (np. \`Osób na diecie: 8 (z 120)\`).
- **Spójny eksport do Excela**: Przy włączonym filtrze diety przycisk *„Eksport danych”* generuje zestawienie ograniczone wyłącznie do wybranej diety, co ogromnie ułatwia kuchni wydawanie posiłków specjalnych oraz zakupy produktów magazynowych.

### 2. Zbiorcza historia zmian posiłków (Dla wszystkich uczniów)
Bezpośrednio pod tabelą danych zbiorczych znajduje się dedykowany przycisk **„Zobacz historię zmian”**, który otwiera przejrzyste zestawienie wszystkich modyfikacji planu posiłków w danym miesiącu:
- **Zbiorczy wiersz szkolny (Łączny bilans placówki)**: Na samej górze okna prezentowane jest całościowe podsumowanie zmian dla całej szkoły, pokazujące łączną liczbę zup i drugich dań dodanych oraz odjętych w danym miesiącu.
- **Kluczowa zasada zwięzłości (Suma zamiast pojedynczych dni)**: Każdy uczeń posiada w tabeli dokładnie jeden wiersz z sumą netto wprowadzonych zmian: \`Imię i nazwisko\`, \`Zupy (+ / -)\` oraz \`Drugie dania (+ / -)\`.
- **Automatyczne filtrowanie osób**: W tabeli widoczne są **wyłącznie te osoby, u których w danym miesiącu nastąpiła jakakolwiek modyfikacja planu posiłków** (uczniowie bez zmian nie zaciemniają widoku).
- **Wyszukiwarka na żywo (po nazwisku lub klasie)**: Błyskawiczne filtrowanie listy zmian z dynamicznym licznikiem znalezionych osób.
- **Pełna interaktywność**: Dwukrotne kliknięcie w wiersz danego ucznia otwiera jego szczegółową, chronologiczną historię zmian z dokładnymi znacznikami czasu.`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 113544.png",
        caption: "Widok 'Dane zbiorcze' – dzienne sumy zup i drugich dań dla kuchni oraz łączne podsumowanie finansowe stołówki"
      }
    ],
    steps: [
      "Kliknij rozwijany przycisk „Dane zbiorcze” w prawym górnym rogu okna.",
      "Wybierz „Dane zbiorcze (wszyscy)”, aby sprawdzić łączną liczbę zup i drugich dań do przygotowania na dany dzień.",
      "Aby sprawdzić zapotrzebowanie na posiłki specjalne, wybierz z tej samej listy konkretną dietę (np. „Dieta: Bezglutenowa”) – tabela i licznik osób przeliczą się natychmiast.",
      "Kliknij przycisk „Zobacz historię zmian” pod tabelą zbiorczą, aby zobaczyć bilans korekt posiłków w całej szkole (dwukrotne kliknięcie w ucznia pokaże jego szczegóły)."
    ],
    faq: [
      {
        q: "Jak szybko sprawdzić, ile obiadów bezmlecznych lub bezglutenowych musi przygotować kuchnia w danym dniu?",
        a: "Kliknij rozwijany przycisk „Dane zbiorcze” w prawym górnym rogu i wybierz interesującą Cię dietę z listy. Tabela natychmiast pokaże dzienną liczbę zup i drugich dań wyłącznie dla osób na tej diecie."
      },
      {
        q: "Czy mogę wyeksportować do Excela zestawienie obejmujące tylko jedną wybraną dietę?",
        a: "Tak! Gdy w widoku danych zbiorczych włączysz filtr wybranej diety i klikniesz „Eksport danych”, wygenerowany arkusz Excel będzie zawierał wyłącznie osoby korzystające z tej diety."
      },
      {
        q: "Czy w zbiorczej historii zmian wyświetlani są wszyscy uczniowie szkoły?",
        a: "Nie – aby zachować maksymalną czytelność, tabela wyświetla wyłącznie tych uczniów, u których w danym miesiącu faktycznie zmieniono plan posiłków. Dwukrotne kliknięcie w wiersz ucznia otwiera pełny dziennik jego zmian."
      }
    ]
  },
  {
    id: "seryjna-wysylka-email",
    number: "07",
    title: "Centrum powiadomień i korespondencji e-mail z rodzicami",
    shortTitle: "Seryjna wysyłka e-mail",
    category: "Komunikacja i rozliczenia",
    iconName: "Mail",
    description: "Indywidualna i masowa wysyłka rozliczeń do rodziców, inteligentne wyliczanie kwot i terminów płatności oraz 3 bezpieczne kanały pocztowe (Outlook, SMTP, Microsoft 365).",
    content: `Ręczne przepisywanie kwot i pisanie setek wiadomości co miesiąc zabierało intendentom wiele godzin. **Dinner App** automatyzuje zarówno pojedynczą korespondencję, jak i masowy mailing do całej szkoły:

### 1. Indywidualna wysyłka e-mail do rodzica
- **Wygodne uruchomienie**: Z poziomu paska narzędziowego (**\`✉️ Wyślij e-mail\`**) lub bezpośrednio z profilu dziecka przyciskiem **\`✉️ Napisz wiadomość\`** obok pola adresu e-mail.
- **Inteligentne wyliczenie kwoty do zapłaty**: Kwota bazuje na posiłkach faktycznie wykonanych (wydanych), a w sytuacji, gdy w danym miesiącu wykonanie wynosi zero (np. rozliczenie wysyłane z góry przed końcem miesiąca), program automatycznie podstawia kwotę z posiłków zaplanowanych.
- **Dynamiczny termin płatności**: Program wyznacza datę na podstawie dnia zdefiniowanego w Ustawieniach (np. do 10. dnia miesiąca); jeśli dzień ten w danym miesiącu już minął, aplikacja automatycznie podpowiada bezpieczny termin **7 dni od dnia bieżącego**.
- **4 gotowe wzory wiadomości**:
  1. *Zbliżający się termin płatności* (standardowe przypomnienie).
  2. *Powiadomienie o zaległej płatności* (upomnienie o przekroczeniu terminu).
  3. *Miesięczne rozliczenie obiadów* (pełne zestawienie wydanych posiłków, odwołań i kwot).
  4. *Własna wiadomość* (dowolna treść z automatycznym nagłówkiem i podpisem).
- Możliwość swobodnej edycji tematu i treści przed wysłaniem, przycisk **\`🔄 Resetuj treść\`** przywracający oryginalne brzmienie wzoru oraz automatyczne zapisanie wpisanego adresu e-mail do profilu ucznia w bazie (również w trybie Outlook).

### 2. Masowa wysyłka powiadomień (Hurtowy mailing do wszystkich rodziców)
- **Wygodne filtry i szybki wybór**: Wybór konkretnej klasy (w tym opcja *„Brak klasy”*), wyszukiwanie po nazwisku lub e-mailu, filtr *„Tylko z adresem e-mail”* oraz przyciski: *Zaznacz wszystkich*, *Odznacz wszystkich*, *Zaznacz tylko z e-mailem*.
- **Edytor wzoru masowego ze znacznikami**: Możliwość dostosowania treści szablonu z automatyczną zamianą znaczników (\`[nazwisko i imię ucznia]\`, \`[kwota do zapłaty]\`, \`[termin płatności]\`, \`[numer konta]\`, \`[liczba wydanych posiłków]\`) oraz przycisk **\`🔄 Resetuj wzór\`**.
- **Wysyłka w tle i ochrona antyspamowa**: Masowa wysyłka realizowana jest w pełni automatycznie przez protokół SMTP lub chmurę Microsoft 365 z krótkimi przerwami zapobiegającymi blokadom antyspamowym serwera (program Outlook jest zarezerwowany dla wysyłki pojedynczej).
- **Pasek postępu i podgląd na żywo**: Licznik postępu (np. \`45 / 120\`), bieżący status w wierszu każdego ucznia (*Oczekuje*, *Wysyłanie...*, *✓ Wysłano*, *❌ Błąd* z dymkiem wyjaśniającym przyczynę, *Pominięto (brak e-maila)*) oraz przycisk **„Przerwij wysyłanie”** pozwalający bezpiecznie zatrzymać proces w dowolnym momencie.

### 3. Dwa główne tryby i trzy kanały wysyłki poczty
1. **Tryb Półautomatyczny (Microsoft Outlook zainstalowany na komputerze)**:
   - Aplikacja przygotowuje wiadomość i otwiera program Microsoft Outlook z wypełnionym odbiorcą, tematem i wyliczoną kwotą – bez wpisywania haseł do skrzynki w programie (100% bezpieczeństwa dla kont Office 365).
   - Przycisk **„Sprawdź domyślny program pocztowy w systemie Windows”** otwierający systemowe ustawienia aplikacji.
   - **Maksymalna przejrzystość**: W tym trybie opcje IMAP oraz BCC są automatycznie ukryte, ponieważ Outlook sam archiwizuje wysłaną pocztę.
2. **Tryb W Pełni Automatyczny (Wysyłka w tle: SMTP lub Microsoft 365)**:
   - **Bezpośrednia wysyłka ze szkolnej skrzynki (SMTP)**: Tradycyjny protokół pocztowy (np. Gmail z 16-znakowym hasłem aplikacji, poczta w domenie szkoły, home.pl, nazwa.pl) z obsługą portów TLS/SSL.
   - **Chmura Microsoft 365 (Microsoft Graph API)**: Nowoczesna wysyłka z wykorzystaniem kluczy aplikacji (*Tenant ID*, *Client ID*, *Client Secret*) z portalu Microsoft Entra (Azure AD) bez używania osobistego hasła intendenta.

### 4. Archiwizacja, bezpieczeństwo i ściśle lokalna konfiguracja poczty
- **Ściśle lokalne przechowywanie danych logowania**: Wszystkie hasła, loginy, ustawienia SMTP/IMAP oraz klucze Microsoft 365 są zapisywane **wyłącznie lokalnie na danym komputerze** (\`%LOCALAPPDATA%\\Dinner_App\\email_config.json\`). **Nigdy nie są wysyłane do bazy danych** (ani PostgreSQL, ani SQLite), dzięki czemu prywatne hasła intendenta nie są widoczne dla innych pracowników w sieci.
- **Zapis w folderze „Wysłane” (IMAP) i automatyczne wyprowadzanie hosta**: Program potrafi automatycznie zapisać kopię każdej wysłanej wiadomości (pojedynczej i masowej) w folderze *Elementy wysłane* na serwerze jako przeczytaną. Jeśli nie podano osobnego serwera IMAP, aplikacja sama wyprowadza jego adres z hosta SMTP (np. \`smtp.szkola.pl\` ➔ \`imap.szkola.pl\`).
- **Ukryta kopia (BCC / UDW)**, konfigurowalny podpis nadawcy (domyślnie *„Stołówka Szkolna”*) oraz **wbudowane przyciski testowe** dla połączenia SMTP i Microsoft 365.`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 114642.png",
        caption: "Moduł seryjnej wysyłki e-mail z podglądem szablonu, znacznikami i listą odbiorców"
      },
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 113810.png",
        caption: "Ustawienia poczty: wybór trybu Outlook vs SMTP / Microsoft 365",
        size: "small"
      }
    ],
    steps: [
      "Aby wysłać wiadomość do jednego rodzica, kliknij „✉️ Napisz wiadomość” w profilu ucznia; aby uruchomić wysyłkę hurtową, kliknij „Wyślij e-mail” na górnym pasku w widoku zbiorczym.",
      "W wysyłce masowej przefiltruj odbiorców (np. po klasie lub przyciskiem „Zaznacz tylko z e-mailem”).",
      "Wybierz wzór wiadomości, sprawdź automatycznie wyznaczony termin płatności i w razie potrzeby dostosuj treść (lub użyj „🔄 Resetuj wzór”).",
      "Kliknij „Wyślij e-mail” i obserwuj pasek postępu oraz statusy wysyłki na żywo."
    ],
    faq: [
      {
        q: "Skąd program bierze kwotę do zapłaty, jeśli wysyłam maile na początku miesiąca, gdy posiłki wykonane wynoszą jeszcze 0 zł?",
        a: "Program działa inteligentnie: jeśli w danym miesiącu wykonanie wynosi zero, automatycznie podstawia do rozliczenia kwotę z posiłków zaplanowanych."
      },
      {
        q: "Czy inni pracownicy podłączeni do wspólnej bazy PostgreSQL zobaczą hasło do mojej skrzynki pocztowej?",
        a: "Nigdy. Wszystkie hasła i klucze pocztowe są zapisywane wyłącznie lokalnie na Twoim komputerze w pliku email_config.json i nigdy nie trafiają do bazy danych."
      },
      {
        q: "Co się stanie, jeśli domyślny dzień płatności (np. 10. dzień miesiąca) już minął?",
        a: "Program automatycznie wykryje, że ta data w bieżącym miesiącu już upłynęła, i podpowie bezpieczny termin płatności przypadający za 7 dni od dnia dzisiejszego."
      }
    ]
  },
  {
    id: "eksport-excel",
    number: "08",
    title: "Wielowariantowy eksport raportów do Excela (.xlsx)",
    shortTitle: "Eksport do Excela",
    category: "Księgowość i finanse",
    iconName: "Download",
    screenshotLayout: "grid",
    description: "Karty podsumowania kwotowego przed eksportem, raporty indywidualne 1:1 oraz zestawienia zbiorcze z kolorystycznym wyróżnieniem statusów SFCH, MOPS i Pracownik.",
    content: `Urzędy gmin oraz księgowość szkolna wymagają czytelnych zestawień w arkuszu kalkulacyjnym. **Dinner App** generuje gotowe, sformatowane pliki Excel (\`.xlsx\`) jednym kliknięciem:

### 1. Karty podsumowania kwotowego w oknie eksportu
Przed wygenerowaniem pliku Excel okno eksportu wyświetla czytelne **karty podsumowania** z dokładną liczbą sztuk oraz łącznymi kwotami w zł dla posiłków:
- 🔵 **Planowanych**,
- 🔴 **Odwołanych**,
- 🟢 **Do zapłaty (Wykonanych)**.

### 2. Trzy warianty raportów do wyboru
1. **Raport dla pojedynczego ucznia (Wierne odwzorowanie 1:1)**:
   - Generuje elegancki arkusz Excel będący dokładną kopią karty ewidencyjnej z programu.
   - Zawiera dane dziecka, klasę, rozbicie na zupę i drugie danie, wiersze *Planowane*, *Odwołane*, *Wykonane*, żółte wyróżnienie dni wolnych oraz podsumowanie kosztów.

2. **Raport zbiorczy – Podsumowanie łączne (Cała szkoła)**:
   - Tabela zawierająca wszystkich uczniów i pracowników szkoły w podziale na klasy, z liczbą zjedzonych zup, drugich dań oraz łączną kwotą do zapłaty.
   - **Kolorystyczne oznaczenie statusów w arkuszu**: komórka z nazwiskiem i imieniem danej osoby w wygenerowanym pliku Excel jest automatycznie wyróżniona kolorem tła odpowiadającym jej statusowi (**zielony dla SFCH**, **pomarańczowy dla MOPS**, **błękitny dla Pracownika**), co ułatwia natychmiastową identyfikację osób z dofinansowaniem lub personelu. Osoby bez przypisanego statusu posiadają standardowe białe tło.
   - Na dole arkusza znajduje się wiersz podsumowania finansowego i ilościowego całej placówki.

3. **Raport zbiorczy – Szczegółowy rozkład na dni**:
   - Pełna macierz: osoby w wierszach, wszystkie dni robocze miesiąca w kolumnach z rozbiciem na zupę i drugie danie.
   - **Wyróżnienie statusów**: analogicznie jak w podsumowaniu łącznym, komórki z nazwiskiem i imieniem posiadają kolorowe tło zgodne ze statusem (*SFCH* / *MOPS* / *Pracownik*).
   - Oznaczenie dni wolnych oraz dzienne sumy zapotrzebowania na dole tabeli.

### 3. Spójny eksport z filtrem diety
Jeżeli w głównym oknie programu w widoku *„Dane zbiorcze”* wybrano konkretną dietę żywieniową (np. *Dieta: Bezglutenowa*), przycisk **„Eksport danych”** wygeneruje zestawienie Excel ograniczone wyłącznie do osób korzystających z tej diety.`,
    screenshots: [
      {
        src: "/screenshots/eksport_indywidualny_excel.png",
        caption: "Okno eksportu danych indywidualnego ucznia z kartami podsumowania kwotowego"
      },
      {
        src: "/screenshots/eksport_zbiorczy_excel.png",
        caption: "Eksport danych zbiorczych: wybór podsumowania łącznego lub szczegółowego rozkładu na dni"
      }
    ],
    steps: [
      "W widoku wybranego ucznia lub w widoku „Dane zbiorcze” kliknij przycisk „Eksport danych”.",
      "Sprawdź karty podsumowania kwotowego i ilościowego widoczne w górnej części okna eksportu.",
      "Wybierz wariant raportu (np. „Podsumowanie łączne” dla księgowości lub „Szczegółowy rozkład na dni” dla kuchni).",
      "Kliknij „Eksportuj do pliku Excel” i wskaż miejsce zapisu gotowego arkusza .xlsx."
    ],
    faq: [
      {
        q: "Jak w wyeksportowanym pliku Excel odróżnię uczniów z MOPS i SFCH od pozostałych dzieci?",
        a: "Komórki z nazwiskiem i imieniem w raportach zbiorczych są automatycznie pokolorowane: zielone tło oznacza SFCH, pomarańczowe MOPS, a błękitne Pracownika. Uczniowie bez statusu mają standardowe białe tło."
      },
      {
        q: "Czy wygenerowany plik otworzy się w programie Excel oraz darmowym LibreOffice Calc?",
        a: "Tak, pliki zapisywane są w uniwersalnym standardzie .xlsx, w pełni zgodnym z Microsoft Excel, LibreOffice Calc oraz Arkuszami Google."
      },
      {
        q: "Jak wygenerować arkusz Excel tylko dla uczniów na diecie wegetariańskiej?",
        a: "Przełącz widok w prawym górnym rogu na „Dieta: Wegetariańska”, a następnie kliknij „Eksport danych” – raport obejmie wyłącznie osoby na tej diecie."
      }
    ]
  },
  {
    id: "ustawienia-cennik-dni-wolne",
    number: "09",
    title: "Panel ustawień, cennik i globalny kalendarz dni wolnych",
    shortTitle: "Cennik i dni wolne",
    category: "Konfiguracja",
    iconName: "Settings",
    description: "Karty akordeonowe ustawień, stawki za posiłki, dane do przelewu oraz globalny kalendarz dni wolnych z blokadą weekendów i nieniszczącą Wirtualną Maską.",
    content: `Wszystkie parametry finansowe i organizacyjne stołówki konfigurujesz w nowoczesnym panelu **Ustawienia**, podzielonym na czytelne, rozwijane karty akordeonowe (*Cennik obiadów*, *Płatności i konto bankowe*, *Poczta e-mail*, *Dni wolne od szkoły*, *Baza danych*, *Nowy rok szkolny*, *Resetowanie danych*):

### 1. Cennik posiłków i dane do przelewu
- **Ceny z dokładnością do grosza**: Definiowanie stawki za **zupę** oraz **drugie danie** (np. zupa 5,00 zł, drugie danie 15,00 zł). Zapisanie zmian powoduje natychmiastowe przeliczenie wszystkich sum w programie.
- **Rachunek bankowy i termin wpłat**: Podanie numeru konta bankowego szkoły do wpłat, domyślnego dnia miesiąca na uregulowanie należności (np. do 10. dnia miesiąca) oraz oficjalnego podpisu nadawcy wiadomości e-mail.

### 2. Globalny kalendarz dni wolnych od szkoły
- **Jedno kliknięcie dla całej placówki**: Wygodny kalendarz w ustawieniach programu pozwalający oznaczyć święta państwowe, ferie zimowe, przerwy świąteczne oraz dni dyrektorskie.
- **Zabezpieczenie weekendów**: Soboty i niedziele są nieklikalne – aplikacja uniemożliwia przypadkowe oznaczenie weekendu jako dnia wolnego od szkoły.
- **Lista dni wolnych w danym miesiącu i szybkie usuwanie**:
  - Bezpośrednio pod kalendarzem wyświetlana jest czytelna lista wszystkich zdefiniowanych dni wolnych w przeglądanym miesiącu (data i nazwa dnia tygodnia) wraz z przyciskami szybkiego usuwania (\`✕\`) pojedynczych pozycji.
  - Dedykowany przycisk **„Wyczyść dni wolne w tym miesiącu”** pozwala jednym kliknięciem usunąć wszystkie oznaczenia dni wolnych w wybranym miesiącu.
- **Inteligentna i nieniszcząca „Wirtualna Maska”**:
  - Oznaczenie dnia jako wolnego automatycznie blokuje możliwość spożywania posiłków w tym dniu, zeruje naliczanie opłat i oznacza kolumnę w tabeli na żółto.
  - **Plany posiłków nie są kasowane**: Jeśli dzień wolny został oznaczony omyłkowo lub termin uległ zmianie, jego odznaczenie natychmiast przywraca oryginalne plany posiłków wszystkich uczniów bez konieczności ponownego wpisywania czegokolwiek!

### 3. Ergonomiczna nawigacja i bezpieczeństwo
- W stopce okna ustawień znajdują się wygodne przyciski: **„Powrót”** (zamknięcie okna bez zapisywania wprowadzonych zmian) oraz **„💾 Zamknij i zapisz”** (trwałe utrwalenie parametrów i natychmiastowe przeliczenie danych w aplikacji).
- Funkcja przywracania ustawień fabrycznych jest zabezpieczona przed przypadkowym użyciem.`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 113627.png",
        caption: "Główny panel ustawień programu Dinner App z rozwijanymi kartami akordeonowymi"
      },
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 113716.png",
        caption: "Ustawienia stawek cennika oraz numeru konta bankowego szkoły"
      }
    ],
    steps: [
      "Kliknij przycisk Ustawienia (ikona koła zębatego) w lewym panelu nad listą uczniów.",
      "W sekcji „Cennik obiadów” oraz „Płatności i konto bankowe” uzupełnij stawki posiłków, numer rachunku szkoły i dzień płatności.",
      "Rozwiń sekcję „Dni wolne od szkoły”, kliknij w kalendarzu dni świąteczne lub ferie (pod kalendarzem zobaczysz ich pełną listę z możliwością szybkiego usunięcia przyciskiem „✕”).",
      "Kliknij przycisk „💾 Zamknij i zapisz” w stopce okna, aby trwale zapisać konfigurację i przeliczyć dane."
    ],
    faq: [
      {
        q: "Co jeśli przez pomyłkę zaznaczę dzień wolny w normalny dzień nauki?",
        a: "Dzięki mechanizmowi „Wirtualnej Maski” plany uczniów nie są kasowane. Wystarczy odznaczyć ten dzień w kalendarzu lub kliknąć „✕” przy tej dacie na liście pod kalendarzem, a oryginalne obiady wszystkich dzieci natychmiast wrócą na swoje miejsce."
      },
      {
        q: "Czy mogę przypadkowo zaznaczyć sobotę lub niedzielę jako dzień wolny od szkoły?",
        a: "Nie – soboty i niedziele są w kalendarzu trwale zablokowane przed kliknięciem, aby lista dni wolnych obejmowała wyłącznie rzeczywiste dni nauki szkolnej."
      },
      {
        q: "Jak usunąć wszystkie dni wolne z danego miesiąca za jednym razem?",
        a: "Pod kalendarzem dni wolnych kliknij przycisk „Wyczyść dni wolne w tym miesiącu”."
      }
    ]
  },
  {
    id: "nowy-rok-szkolny",
    number: "10",
    title: "Przejście na nowy rok szkolny (Automatyczny awans klas)",
    shortTitle: "Nowy rok szkolny",
    category: "Administracja",
    iconName: "GraduationCap",
    description: "Automatyczne promowanie uczniów do kolejnych klas, konfigurowalne usuwanie absolwentów, opcjonalny reset ewidencji posiłków i podgląd statystyk na żywo.",
    content: `Zamknięcie starego roku szkolnego i przygotowanie bazy na wrzesień nie wymaga ręcznego przepisywania klas u setek dzieci. Dedykowany moduł administracyjny w Ustawieniach wykonuje całą procedurę automatycznie i bezbłędnie:

### 1. Automatyczne promowanie uczniów do kolejnych klas
Program inteligentnie rozpoznaje format zapisu i podnosi poziom klasy o 1 dla wszystkich roczników:
- **Cyfry arabskie**: klasa \`1A\` staje się \`2A\`, \`2b\` staje się \`3b\`, \`7c\` staje się \`8c\`.
- **Klasy zerowe / przedszkolne**: \`0\` przechodzi do klasy \`1\`, a \`0A\` do \`1A\`.
- **Cyfry rzymskie**: klasa \`I A\` przechodzi do \`II A\`, \`VII B\` do \`VIII B\`.
- **Pełne nazwy i prefiksy**: np. \`klasa 3B\` ➔ \`klasa 4B\`, \`kl. 7A\` ➔ \`kl. 8A\`.
- **Ochrona personelu**: Osoby bez przypisanej klasy lub o oznaczeniach nieliczbowych (np. \`Nauczyciele\`, \`Personel\`, \`Sekretariat\`) pozostają w 100% nienaruszone.

### 2. Konfigurowalne usuwanie uczniów kończących szkołę (absolwentów)
- Opcja trwałego usunięcia z kartoteki uczniów opuszczających placówkę wraz z ich ewidencją obiadów.
- **Domyślnie klasa 8** (szkoła podstawowa) z możliwością łatwej zmiany na dowolny inny poziom (np. klasa \`4\` dla liceum czy klasa \`5\` dla technikum).
- Możliwość wyłączenia usuwania – wówczas rocznik kończący szkołę pozostaje w bazie danych.

### 3. Opcjonalny reset ewidencji posiłków
- Możliwość zresetowania całej dotychczasowej ewidencji obiadów (plany, odwołania, wykonania) za jednym kliknięciem, co daje intendentowi czysty grafik gotowy na wrzesień.
- Możliwość zachowania historii posiłków, jeśli intendent potrzebuje wglądu w archiwalne rozliczenia.

### 4. Podgląd na żywo przed wykonaniem operacji i pełne bezpieczeństwo
- Karta w Ustawieniach na bieżąco kalkuluje i wyświetla dokładne statystyki:
  - 🟢 **Liczbę uczniów zakwalifikowanych do awansu**,
  - 🔴 **Liczbę absolwentów do usunięcia**,
  - 👥 **Liczbę osób bez zmian (personel / brak klasy)**.
- Przed modyfikacją danych program wyświetla czytelne okno potwierdzenia z dokładnym podsumowaniem wszystkich wybranych operacji.`,
    screenshots: [
      {
        src: "/screenshots/przejscie_na_nowy_rok_szkolny.png",
        caption: "Moduł przejścia na nowy rok szkolny: awans klas, usuwanie absolwentów oraz podgląd skutków operacji na żywo"
      }
    ],
    steps: [
      "Otwórz Ustawienia i rozwiń kartę „Nowy rok szkolny”.",
      "Sprawdź podgląd statystyk na żywo: liczbę uczniów do awansu, liczbę absolwentów do usunięcia oraz liczbę osób bez zmian.",
      "Dostosuj poziom klasy kończącej szkołę (domyślnie 8) lub odznacz usuwanie absolwentów, jeśli chcesz ich zachować.",
      "Zdecyduj, czy chcesz zresetować dotychczasową ewidencję posiłków na nowy rok szkolny.",
      "Kliknij przycisk „Przejdź na nowy rok szkolny” i zatwierdź operację w oknie potwierdzenia."
    ],
    faq: [
      {
        q: "Co się stanie z kontami nauczycieli i pracowników stołówki podczas przejścia na nowy rok?",
        a: "Osoby bez przypisanej klasy lub posiadające oznaczenia nieliczbowe (np. Nauczyciele, Personel, Sekretariat) są automatycznie chronione i pozostają bez zmian."
      },
      {
        q: "Czy program poradzi sobie z zerówkami (0A) lub klasami zapisanymi cyframi rzymskimi (III B)?",
        a: "Tak! Moduł rozpoznaje cyfry arabskie, zerówki (0 -> 1, 0A -> 1A), cyfry rzymskie (I A -> II A) oraz zapisy z prefiksami (klasa 3B -> klasa 4B)."
      },
      {
        q: "Czy mogę wykonać awans klas, ale zachować historię posiłków z poprzedniego roku?",
        a: "Tak, wystarczy odznaczyć opcję resetowania ewidencji posiłków przed uruchomieniem procedury."
      }
    ]
  },
  {
    id: "baza-danych-sqlite-postgres",
    number: "11",
    title: "Baza danych: Lokalna (SQLite) vs Sieciowa (PostgreSQL)",
    shortTitle: "Baza lokalna i sieciowa",
    category: "Architektura i IT",
    iconName: "Database",
    screenshotSize: "medium",
    description: "Praca na jednym komputerze lub w sieci szkolnej, kopiowanie ścieżki bazy, awaryjne przełączanie przy awarii sieci oraz dwukierunkowe przenoszenie danych.",
    content: `Program **Dinner App** sprawdza się zarówno na pojedynczym stanowisku intendenta, jak i w pracy wielostanowiskowej w sieci szkolnej:

### 1. Praca lokalna (SQLite) i szybka kopia zapasowa
- Domyślnie program działa całkowicie lokalnie na komputerze intendenta (baza SQLite w pliku \`dinner_app.db\`) i nie wymaga żadnych dodatkowych instalacji ani dostępu do internetu.
- **Kopiowanie ścieżki folderu z bazą**: Bezpośrednio obok ścieżki pliku bazy danych na dysku znajduje się poręczny przycisk kopiujący do schowka systemu Windows lokalizację folderu z bazą danych, co znacznie ułatwia tworzenie kopii zapasowych lub archiwizację.

### 2. Praca w sieci szkolnej (PostgreSQL) i ciągłość pracy
- Możliwość podłączenia programu do wspólnej szkolnej bazy danych (**PostgreSQL**), dzięki czemu kilku pracowników (np. intendent i księgowość) może pracować na tych samych danych jednocześnie.
- **Wbudowany test połączenia**: Dedykowany przycisk **„Testuj połączenie”** pozwala błyskawicznie sprawdzić poprawność konfiguracji serwera PostgreSQL przed rozpoczęciem pracy.
- **Awaryjne przełączanie na bazę lokalną (SQLite)**: W sytuacji, gdy przy uruchamianiu programu połączenie z serwerem PostgreSQL jest niedostępne (np. awaria sieci szkolnej), aplikacja wyświetla zapytanie o awaryjne przełączenie na lokalną bazę SQLite, gwarantując pełną ciągłość pracy intendenta.

### 3. Czysty podział danych (Baza współdzielona vs dane stacji roboczej)
- **Wspólna baza danych**: Przechowuje wyłącznie dane operacyjne stołówki (kartoteka uczniów, ewidencja obiadów, zdefiniowane diety, kalendarz dni wolnych, stawki za posiłki oraz numer konta szkoły).
- **Pamięć lokalna komputera**: Parametry sieciowe bazy (\`database_config.json\`) oraz konfiguracja poczty e-mail wraz z hasłami (\`email_config.json\`) pozostają wyłącznie na danym stanowisku roboczym.

### 4. Nowoczesne okno „Przenieś dane” (Dwukierunkowa migracja i synchronizacja)
Dedykowane okno dialogowe wywoływane przyciskiem **„Przenieś dane”** w karcie bazy danych umożliwia transfer w obu kierunkach (**SQLite ➔ PostgreSQL** oraz **PostgreSQL ➔ SQLite**) w dwóch trybach:
1. 🛡️ **Miękkie przeniesienie (Bezkonfliktowa synchronizacja – zalecane)**:
   - Inteligentne scalanie danych bez ryzyka utraty czegokolwiek. Jeśli w bazie docelowej uczeń posiada już zapisany adres e-mail, zarejestrowane posiłki czy ustawiony numer konta do wpłat, dane te bezwzględnie **nie są nadpisywane**.
   - Program wprowadza zmiany wyłącznie tam, gdzie nie ma konfliktu (dopisuje brakujących uczniów, uzupełnia puste pola, synchronizuje diety i dodaje nowe dni obiadów).
2. ⚠️ **Twarde przeniesienie (Pełne nadpisanie)**:
   - Całkowite wyczyszczenie bazy docelowej i wstawienie dokładnej kopii ze źródła (zabezpieczone oknem ostrzegawczym przed przypadkowym wykonaniem).
- **Pasek postępu i szczegółowy raport**: Wizualny wskaźnik postępu (\`0–100%\`) na żywo oraz pełne podsumowanie po zakończeniu (liczba dodanych uczniów, uzupełnionych pól, zachowanych bez zmian konfliktów, dodanych posiłków i dni wolnych). Lokalna konfiguracja poczty użytkownika pozostaje nienaruszona.`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 113955.png",
        caption: "Wybór trybu pracy bazy: Lokalna SQLite lub Sieciowa PostgreSQL oraz narzędzia synchronizacji"
      }
    ],
    steps: [
      "Otwórz Ustawienia i rozwiń sekcję „Baza danych”.",
      "W trybie lokalnym (SQLite) możesz jednym kliknięciem skopiować ścieżkę folderu z bazą do schowka Windows, aby łatwo wykonać kopię zapasową.",
      "Aby pracować w sieci, wybierz „Sieciowa baza (PostgreSQL)”, wpisz parametry serwera i kliknij „Testuj połączenie”.",
      "Aby przenieść lub zsynchronizować dane między komputerem a serwerem (w dowolną stronę), kliknij „Przenieś dane” i wybierz zalecane „Miękkie przeniesienie”."
    ],
    faq: [
      {
        q: "Co się stanie, jeśli rano w szkole nastąpi awaria sieci i serwer PostgreSQL będzie niedostępny?",
        a: "Przy uruchamianiu programu aplikacja wykryje brak połączenia z serwerem i zaproponuje awaryjne przełączenie na lokalną bazę SQLite, dzięki czemu możesz normalnie kontynuować pracę."
      },
      {
        q: "Jak szybko znaleźć plik lokalnej bazy danych, aby skopiować go na pendrive?",
        a: "W Ustawieniach w sekcji „Baza danych” kliknij przycisk kopiowania ścieżki obok lokalizacji pliku dinner_app.db – ścieżka folderu trafi od razu do schowka Windows."
      },
      {
        q: "Czym różni się Miękkie przeniesienie od Twardego przeniesienia danych?",
        a: "Miękkie przeniesienie bezpiecznie scala obie bazy (uzupełnia tylko braki i nie nadpisuje żadnych istniejących danych), natomiast Twarde przeniesienie całkowicie czyści bazę docelową i zastępuje ją dokładną kopią bazy źródłowej."
      }
    ]
  }
];
