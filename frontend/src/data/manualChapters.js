export const MANUAL_CHAPTERS = [
  {
    id: "ekran-glowny",
    number: "01",
    title: "Ekran główny i nawigacja",
    shortTitle: "Ekran główny",
    category: "Podstawy",
    iconName: "LayoutDashboard",
    description: "Wszystko pod ręką w jednym, przejrzystym oknie – alfabetyczna lista uczniów, kalendarz posiłków i automatyczne podsumowania finansowe.",
    content: `Ekran główny programu **Dinner App** został zaprojektowany tak, aby cała codzienna praca stołówki odbywała się w jednym, czytelnym oknie:

### 1. Lewy panel boczny – Lista uczniów
- **Alfabetyczna lista dzieci**: Uporządkowana według polskich reguł językowych (uwzględnia litery Ą, Ć, Ę, Ł, Ń, Ó, Ś, Ź, Ż).
- **Automatyczne awatary**: Przy każdym nazwisku program wyświetla czytelną plakietkę z inicjałami dziecka, co ułatwia szybkie odszukanie ucznia wzrokiem.
- **Wyszukiwarka na żywo**: Pole wyszukiwania filtruje listę natychmiast podczas wpisywania tekstu, a przycisk \`×\` pozwala błyskawicznie wyczyścić filtr.
- **Plakietki dofinansowań posiłków**:
  - 🟢 **[SFCH]** – uczeń objęty dofinansowaniem fundacji/stowarzyszenia (jasnozielone tło).
  - 🟠 **[MOPS]** – uczeń objęty pomocą opieki społecznej (jasnopomarańczowe tło).
- **Przycisk szybkiego dodawania**: Rozwijany formularz nad listą pozwala dopisać nowego ucznia i zatwierdzić go klawiszem \`Enter\` bez otwierania dodatkowych okien.

### 2. Górny pasek narzędzi
- **Wybór miesiąca**: Szybkie przełączanie między miesiącami (np. wrzesień 2026).
- **Przyciski akcji**: Szybki dostęp do kluczowych funkcji (*Zmień dane*, *Eksport danych*, *Wyślij e-mail*).
- **Płynna nawigacja bez myszki**: Wygodne przyciski **„Poprzedni uczeń”** oraz **„Następny uczeń”** pozwalają przeglądać kolejne dzieci jedno po drugim.

### 3. Tabela ewidencji posiłków
- **Dni robocze miesiąca**: Tabela obejmuje wyłącznie dni nauki szkolnej (od poniedziałku do piątku).
- **Pionowe linie tygodni**: Wyraźne linie oddzielające poszczególne tygodnie (po każdym piątku) ułatwiają orientację w kalendarzu.
- **Przypięte kolumny boczne**: Podczas przewijania dni w prawo nazwy posiłków po lewej stronie oraz podsumowanie po prawej zawsze pozostają widoczne na ekranie.
- **Niezależne rozbicie**: Osobny wiersz dla **Zupy** i osobny dla **Drugiego dania**.

### 4. Cykl posiłków i czytelne kolory
- 🔵 **Niebieski (Planowane)**: posiłki zgłoszone do wydania w danym miesiącu.
- 🔴 **Czerwony (Odwołane)**: zgłoszone nieobecności dziecka (choroby, wyjazdy).
- 🟢 **Zielony (Wykonane / Do zapłaty)**: posiłki faktycznie zjedzone i ostateczna kwota do zapłaty (Planowane minus Odwołane).
- 🟡 **Żółty**: dni wolne od szkoły (święta, ferie, dni dyrektorskie).

> **Bezpieczeństwo logiczne**: Program nie pozwoli odwołać posiłku w dniu, w którym uczeń nie miał zaplanowanego obiadu.`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 113522.png",
        caption: "Widok ekranu głównego programu dla ucznia Dąbrowski Jakub (Klasa 5A)"
      }
    ],
    steps: [
      "Wybierz interesujący Cię miesiąc strzałkami przy polu wyboru daty na górnym pasku.",
      "Odszukaj ucznia na liście po lewej stronie lub wpisz nazwisko w wyszukiwarce.",
      "Sprawdź wiersze: Planowane, Odwołane oraz Wykonane dla zupy i drugiego dania.",
      "Użyj przycisków „Poprzedni uczeń” / „Następny uczeń”, aby wygodnie przejść do kolejnej osoby bez sięgania po myszkę."
    ],
    faq: [
      {
        q: "Czy po zamknięciu programu wprowadzone dane zostają zapisane?",
        a: "Tak, każda zmiana jest natychmiast automatycznie zapisywana. Nie musisz szukać przycisku „Zapisz plik” – dane są zawsze bezpieczne."
      },
      {
        q: "Co oznaczają kolorowe kwoty w kolumnie „Razem” po prawej stronie?",
        a: "Niebieska kwota to łączna wartość posiłków zaplanowanych na dany miesiąc, czerwona to suma odpisów za zgłoszone nieobecności, a zielona to ostateczna kwota do zapłaty przez rodzica."
      },
      {
        q: "Czy po przewinięciu tabeli w prawo nie zgubię nazwisk i posiłków?",
        a: "Nie. Zarówno kolumny po lewej stronie (nazwy dań i wierszy), jak i kolumna z podsumowaniem „Razem” po prawej stronie są trwale przypięte do krawędzi ekranu."
      }
    ]
  },
  {
    id: "baza-uczniow-kartoteki",
    number: "02",
    title: "Baza uczniów i kartoteki osobowe",
    shortTitle: "Baza uczniów i kartoteki",
    category: "Dane i uczniowie",
    iconName: "Database",
    description: "Zarządzanie kartotekami dzieci, kontakty do rodziców, szybkie wyszukiwanie oraz oznaczenia dofinansowań SFCH i MOPS.",
    content: `Koniec z gubiącymi się kartkami, zeszytami i podwójnie wpisanymi dziećmi. **Dinner App** gromadzi wszystkie dane uczniów w jednej, spójnej bazie:

### Kartoteka ucznia – co zawiera?
- **Dane podstawowe**: Imię i nazwisko oraz przypisana klasa lub grupa przedszkolna.
- **Kontakty do obojga rodziców**: Osobny numer telefonu do mamy oraz numer telefonu do taty.
- **Adres e-mail**: Adres poczty elektronicznej rodzica wykorzystywany do automatycznej wysyłki comiesięcznych rozliczeń.
- **Automatyczny awatar**: Program sam generuje czytelną plakietkę z inicjałami dziecka, co ułatwia wzrokowe rozpoznawanie uczniów na liście.

### Szybkie dodawanie i wyszukiwanie
- **Błyskawiczny formularz**: Rozwijany formularz bezpośrednio nad listą uczniów pozwala wpisać nowe dziecko w kilka sekund i zatwierdzić klawiszem \`Enter\` bez otwierania osobnych okien.
- **Wyszukiwarka na żywo**: Filtruje listę w ułamku sekundy podczas wpisywania tekstu. W pełni obsługuje polskie znaki diakrytyczne (ą, ć, ę, ł, ń, ó, ś, ź, ż), a przycisk \`×\` natychmiast czyści pole wyszukiwania.

### Oznaczenia dofinansowań posiłków (SFCH / MOPS)
Program pozwala natychmiast wyróżnić uczniów, których obiady są opłacane przez instytucje pomocowe:
- 🟢 **SFCH (Stowarzyszenie / Fundacja)**: Uczeń oznaczony jest jasnozielonym tłem kafelka oraz plakietką \`[SFCH]\`.
- 🟠 **MOPS (Opieka Społeczna)**: Uczeń oznaczony jest jasnopomarańczowym tłem kafelka oraz plakietką \`[MOPS]\`.
- Oznaczenia te wykluczają się wzajemnie. Dzięki nim intendent od razu widzi, za których uczniów rachunek należy wystawić rodzicom, a za których ośrodkowi pomocy lub fundacji.

### Bezpieczne usuwanie
Możliwość usunięcia profilu ucznia (np. po przeprowadzce do innej szkoły) jest zabezpieczona wyraźnym komunikatem potwierdzającym, co zapobiega przypadkowemu skasowaniu danych.`,
    screenshots: [
      {
        src: "/screenshots/kartoteka_ucznia_edycja.png",
        caption: "Karta danych osobowych i kontaktowych ucznia: klasa, telefony rodziców, e-mail oraz oznaczenia SFCH i MOPS"
      }
    ],
    steps: [
      "Odszukaj ucznia na liście lub wpisz nazwisko w polu wyszukiwarki na żywo.",
      "Kliknij ucznia, a następnie wybierz opcję edycji danych, aby uzupełnić telefony, e-mail lub klasę.",
      "Jeśli dziecko korzysta z dofinansowania, zaznacz opcję SFCH lub MOPS – profil natychmiast zyska kolorową plakietkę.",
      "Aby dodać nowego ucznia w trakcie roku, rozwiń formularz nad listą, wpisz dane i wciśnij klawisz Enter."
    ],
    faq: [
      {
        q: "Do czego służą plakietki MOPS i SFCH przy nazwiskach?",
        a: "Pozwalają natychmiast odróżnić uczniów, za których płaci ośrodek pomocy społecznej lub fundacja. Dzięki temu w zestawieniach od razu wiesz, które rachunki przekazać rodzicom, a które gminie."
      },
      {
        q: "Co jeśli uczeń zmieni klasę w trakcie roku szkolnego?",
        a: "Wystarczy wejść w edycję profilu ucznia i zmienić przypisaną klasę – wszystkie dotychczasowe posiłki, wpłaty i historia odpisów zostaną w 100% zachowane."
      },
      {
        q: "Czy mogę usunąć ucznia, który przeniósł się do innej placówki?",
        a: "Tak, program pozwala na bezpieczne usunięcie ucznia z bazy. Operacja zawsze wymaga potwierdzenia, co zapobiega pomyłkom."
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
    description: "Masowy import uczniów, kontaktów i grafików posiłków z pliku .xlsx, ochrona istniejących obiadów oraz aktualizacja bez ryzyka utraty danych.",
    content: `Import z pliku Excel to najszybszy sposób na uruchomienie programu we wrześniu oraz bieżącą aktualizację bazy w trakcie roku szkolnego. Program pozwala wgrać listę uczniów, kontakty do rodziców oraz tygodniowy grafik obiadów w kilka sekund.

### Pełna elastyczność formatu arkusza Excel (.xlsx)
Program automatycznie dopasowuje się do struktury Twojego pliku:
1. **Pełny arkusz obiadowy (15 kolumn)**:
   - **Kolumny A – E (Dane osobowe i kontakty)**: Klasa, Nazwisko i imię, Telefon do mamy, Telefon do taty, Adres e-mail.
   - **Kolumny F – O (Plan posiłków Pn – Pt)**: Pod każdym dniem roboczym kolumny *zupa* oraz *II danie* (wpisujesz \`1\` = posiłek wykupiony, \`0\` lub puste = brak posiłku).
2. **Starsze szablony szkolne (14 kolumn)**: Pełne wsparcie dla arkuszy bez kolumny adresu e-mail.
3. **Arkusze tylko z kontaktami (od 2 do 5 kolumn)**: Jeśli chcesz zaktualizować wyłącznie same telefony, e-maile czy klasy uczniów bez ruszania posiłków – program bez problemu odczyta taki plik!

---

### Dwuetapowy proces importu posiłków
Po kliknięciu przycisku *„Importuj .xlsx”* nad listą uczniów program prowadzi Cię przez dwa proste kroki:

- **Krok 1 – Wybór zakresu i opcji**:
  - **Wybór roku szkolnego i miesięcy**: Wskazujesz rok szkolny (np. *2026/2027*) oraz zaznaczasz miesiące obowiązywania planu (przyciski: *Bieżący miesiąc*, *Rok szkolny (IX–VI)*, *Wszystkie* / *Wyczyść*). Miesiące wakacyjne są wyraźnie wyróżnione.
  - Na dole okna konfigurujesz dwie kluczowe opcje bezpieczeństwa (szczegółowo opisane poniżej).

- **Krok 2 – Wskazanie pliku i czytelne podsumowanie**:
  - Wskazujesz przygotowany plik \`.xlsx\`. Program automatycznie rozpisuje obiady na dni robocze wybranych miesięcy (omijając weekendy i ferie).
  - Po zakończeniu wyświetla **dokładny raport z podsumowaniem**: liczbę dodanych uczniów, zaktualizowanych profili, pominiętych osób, zaktualizowanych grafików oraz obiadów zachowanych bez zmian.

---

### Opcja 1: 🛡️ Bezpieczny import danych [ZALECANE]
Ta opcja jest **domyślnie włączona** i stanowi główną tarczę chroniącą Twoje dotychczasowe dane:

- **Jak działa?**
  Gdy w importowanym pliku Excel którekolwiek kolumny są  puste, program **nie wyzeruje zapisanych danych ucznia w bazie**, lecz bezpiecznie zachowa dotychczasowe wpisy.
- **Ochrona kontaktów i posiłków**:
  Puste komórki w pliku Excel dla klasy, telefonów do rodziców lub adresu e-mail, czy planowanych posiłków **nigdy nie kasują** danych wprowadzonych wcześniej do programu.
- **Kiedy z niej korzystać?**
  Zawsze! Dzięki niej możesz w trakcie roku bezpiecznie zaimportować plik z nowymi numerami telefonów czy zaktualizowanymi adresami e-mail od rodziców bez obaw, że uczniom znikną zamówione obiady.

---

### Opcja 2: ⚡ Aktualizacja tylko istniejących uczniów [OPCJA]
Ta funkcja pozwala precyzyjnie kontrolować, kto trafia do Twojej bazy danych:

- **Jak działa?**
  Gdy zaznaczysz tę opcję, program naniesie zmiany **wyłącznie u dzieci, które już znajdują się w programie**. Wszystkie nowe nazwiska z pliku Excel zostaną zignorowane (żaden nowy uczeń nie zostanie dopisany).
- **Ochrona przed zaśmieceniem bazy**:
  Nic z bazy nie jest usuwane – Twoja dotychczasowa lista uczniów pozostaje w 100% nienaruszona.
- **Kiedy z niej korzystać?**
  Gdy otrzymujesz ze szkolnego sekretariatu zbiorczy plik obejmujący całą szkołę (np. 500 uczniów), a obiady jada tylko 160 zapisanych dzieci. Włączenie tej opcji zaktualizuje dane stołowników bez dodawania pozostałych 340 uczniów do bazy.`,
    screenshots: [
      {
        src: "/screenshots/ustawienia_importu_posilkow.png",
        caption: "Okno konfiguracji importu posiłków: wybór miesięcy oraz opcje 'Bezpieczny import danych' i 'Aktualizacja tylko istniejących uczniów'"
      }
    ],
    steps: [
      "Pobierz gotowy wzór pliku .xlsx (zielony przycisk poniżej) lub skopiuj nagłówki do pustego arkusza.",
      "Uzupełnij arkusz danymi uczniów (możesz wpisać pełne deklaracje obiadów lub same dane kontaktowe).",
      "W programie kliknij przycisk „Importuj .xlsx” w lewym panelu nad listą uczniów i wskaż przygotowany plik.",
      "W oknie ustawień zaznacz miesiące, na które ma obowiązywać grafik (np. „Rok szkolny (IX-VI)”).",
      "Pozostaw włączony „Bezpieczny import danych”, aby chronić dotychczasowe obiady przed przypadkowym wyzerowaniem.",
      "Jeśli aktualizujesz tylko obecnych stołowników bez dopisywania nowych osób, zaznacz opcję „Aktualizacja tylko istniejących uczniów”.",
      "Kliknij „Dalej ➔”. Program zaktualizuje bazę i wyświetli raport podsumowujący operację."
    ],
    faq: [
      {
        q: "Co daje opcja „Bezpieczny import danych”?",
        a: "Chroni Cię przed przypadkowym skasowaniem danych wpisanych w programie. Jeśli na przykład, w pliku Excel nie wypełnisz kolumn z posiłkami (bo chcesz zaktualizować np. tylko nowe telefony rodziców), program zachowa wszystkie dotychczasowe plany obiadów uczniów bez zmian."
      },
      {
        q: "Co się stanie, jeśli w pliku Excel komórka z telefonem jest pusta, a uczeń ma już telefon w bazie?",
        a: "Program inteligentnie chroni Twoje dane – pusta komórka w Excelu nie skasuje zapisanego wcześniej numeru telefonu ani adresu e-mail."
      },
      {
        q: "Czy mogę zaimportować plik z samymi kontaktami (bez kolumn z posiłkami)?",
        a: "Tak! Program obsługuje arkusze o różnej liczbie kolumn (od 2 do 15). Dzięki Bezpiecznemu importowi możesz wgrać same kontakty, a obiady dzieci pozostaną nienaruszone."
      },
      {
        q: "Kiedy włączyć opcję „Aktualizacja tylko istniejących uczniów”?",
        a: "Włącz ją, gdy dostajesz z sekretariatu plik obejmujący całą szkołę (np. 500 dzieci), a chcesz zaktualizować dane wyłącznie tych 180 uczniów, którzy są już zapisani na obiady w programie."
      }
    ]
  },
  {
    id: "ewidencja-posilkow",
    number: "04",
    title: "Ewidencja posiłków – planowanie i odpisy",
    shortTitle: "Ewidencja posiłków",
    category: "Codzienna praca",
    iconName: "CalendarCheck",
    description: "Szybkie planowanie szablonami tygodniowymi, precyzyjne nanoszenie odpisów oraz ochrona wcześniej zgłoszonych nieobecności.",
    content: `Codzienna ewidencja obiadów w programie **Dinner App** jest szybka, intuicyjna i eliminuje ryzyko pomyłek rachunkowych:

### Dwuskładnikowość i niezależne stawki
- Każdy posiłek składa się z dwóch niezależnych części: **Zupy** oraz **Drugiego dania**.
- Każda część ma własną, konfigurowalną stawkę cenową (np. zupa 5,00 zł, drugie danie 15,00 zł).
- Dziecko może jeść samą zupę, samo drugie danie lub pełne obiady w dowolne dni robocze.

### Trzy stany posiłku każdego dnia
1. **Planowane**: zadeklarowane zapotrzebowanie na dany miesiąc.
2. **Odwołane**: zgłoszone nieobecności dziecka (np. choroba, zwolnienie).
3. **Wykonane (Do zapłaty)**: posiłki faktycznie zjedzone i podlegające opłacie (Planowane minus Odwołane).

> **Wbudowane zabezpieczenie**: Program nie pozwala odwołać posiłku, który nie był wcześniej zaplanowany (pole odwołania jest wtedy zablokowane).

### Szablony tygodniowe jednym kliknięciem
Zamiast mozolnego klikania każdego dnia w miesiącu z osobna, w oknie *„Zmień dane”* korzystasz z gotowych szablonów:
- *Pełne obiady* (zupa + II danie od poniedziałku do piątku).
- *Tylko zupy* lub *Tylko drugie dania*.
- *Wyczyść* (reset wyboru).
- Przycisk **Wypełnij cały miesiąc szablonem** jednym ruchem nanosi ułożony grafik na wszystkie dni robocze miesiąca.

### Planowanie wielomiesięczne i ochrona odwołań
- **Na semestr lub cały rok**: Możesz przełączyć zakres edycji na *„Edytuj kilka miesięcy”* i zastosować stały plan posiłków na dowolny okres (np. IX–VI).
- **Inteligentna ochrona odwołań**: Zastosowanie planu na wiele miesięcy **nie niszczy wcześniej wprowadzonych zgłoszeń nieobecności (odwołań)** na konkretne dni! Wcześniejsze odpisy zostają w 100% zachowane.
- **Inteligentny start**: Po otwarciu okna edycji program sam podpowiada aktualny grafik ucznia z bieżącego miesiąca jako punkt wyjścia.`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 114147.png",
        caption: "Konfiguracja planowanych posiłków – seryjne szablony tygodniowe i kalendarz dni roboczych"
      },
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 114215.png",
        caption: "Moduł odwoływania posiłków – automatyczne wyliczanie wartości odpisów"
      }
    ],
    steps: [
      "Wybierz ucznia z listy i kliknij fioletowy przycisk „Zmień dane” na górnym pasku.",
      "Wybierz kategorię: „Planowane posiłki” (ustalenie grafiku) lub „Odwołane posiłki” (naniesienie nieobecności).",
      "Wybierz gotowy szablon lub zaznacz wybrane dni i kliknij „Wypełnij cały miesiąc szablonem”.",
      "Jeśli plan ma obowiązywać na dłużej, przełącz na „Edytuj kilka miesięcy” i wskaż zakres dat.",
      "Sprawdź podsumowanie kwot na dole okna i kliknij „Zapisz zmiany”."
    ],
    faq: [
      {
        q: "Co jeśli uczeń jada tylko drugie dania w wybrane dni tygodnia?",
        a: "W szablonie tygodniowym odznaczasz zupy i zaznaczasz „II danie” tylko przy wybranych dniach (np. wtorek i czwartek). Klikasz „Wypełnij cały miesiąc szablonem”, a program sam prawidłowo policzy należność."
      },
      {
        q: "Czy odwołanie posiłku natychmiast pomniejsza rachunek rodzica?",
        a: "Tak! Wartość odwołanego posiłku od razu pojawia się w czerwonym polu „Odliczenie” i pomniejsza ostateczną kwotę „Do zapłaty”."
      },
      {
        q: "Co się stanie z odwołaniami, gdy zmienię plan posiłków na cały semestr?",
        a: "Wcześniej wprowadzone odwołania są bezpieczne. Program zaktualizuje plan bazowy, ale zachowa wszystkie zgłoszone wcześniej nieobecności."
      }
    ]
  },
  {
    id: "odwolywanie-po-klasach",
    number: "05",
    title: "Grupowe odwoływanie dla klas (Wycieczki)",
    shortTitle: "Wycieczki i całe klasy",
    category: "Akcje masowe",
    iconName: "Bus",
    description: "Cała klasa wyjeżdża na wycieczkę lub do kina? Odwołaj obiady wszystkim uczniom jednym kliknięciem.",
    content: `Gdy cała klasa wyjeżdża na wycieczkę szkolną, dawniej intendent musiał otwierać kartę każdego dziecka z osobna i ręcznie kasować posiłek. W **Dinner App** zrobisz to błyskawicznie:

### Jak działa grupowe odwoływanie?
- **Wybór klasy i terminu**: Klikasz przycisk *„Zmień dane po klasach (Odwołania)”* i wybierasz klasę z listy (np. *Klasa 4B – 24 uczniów*).
- **Podgląd zapotrzebowania na żywo**: Przy każdym dniu kalendarza program wyświetla dokładną informację, ilu uczniów z danej klasy miało w tym dniu zaplanowany obiad.
- **Wybór rodzaju posiłku**: Możesz odwołać całe obiady, tylko drugie dania lub same zupy (np. gdy klasa wraca ze spektaklu przed obiadem i zje samą zupę).
- **Odwołanie na wiele dni**: Przycisk *„Odwołaj wszystkie”* pozwala jednym ruchem zaznaczyć np. 3 dni wycieczki trzydniowej.

### Sprawiedliwe rozliczenie uczniów
- **Tylko dla jedzących obiady**: Odwołanie zostaje zapisane wyłącznie u tych dzieci z klasy, które faktycznie miały na ten dzień zaplanowany posiłek. Ich miesięczny rachunek zostaje automatycznie pomniejszony o właściwy odpis.
- **Dzieci bez obiadów**: Program nie ingeruje w konta dzieci, które w ogóle nie korzystają ze stołówki.

### Błyskawiczne przywracanie
Jeśli wyjazd zostanie przełożony lub odwołany z powodu pogody, w tym samym oknie klikasz przycisk *„Przywróć wszystkie”* i zapisujesz zmiany. Wszyscy uczniowie odzyskują swoje pierwotne plany posiłków.`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 114037.png",
        caption: "Okno grupowego odwoływania posiłków po klasach dla wycieczek szkolnych"
      }
    ],
    steps: [
      "Przejdź do widoku „Dane zbiorcze” i kliknij niebieski przycisk „Zmień dane po klasach”.",
      "Z lewej listy wybierz klasę, która wyjeżdża ze szkoły.",
      "Zaznacz dni nieobecności i wskaż rodzaj odwoływanego posiłku (cały obiad, zupa lub drugie danie).",
      "Kliknij „Zapisz odwołania”. Program natychmiast zaktualizuje rozliczenia wszystkich wyjeżdżających dzieci."
    ],
    faq: [
      {
        q: "Co jeśli dwoje dzieci z tej klasy nie jedzie na wycieczkę i zostaje w świetlicy na obiedzie?",
        a: "Po grupowym odwołaniu dla klasy wejdź po prostu w kartę tego konkretnego ucznia i jednym kliknięciem przywróć mu obiad na ten dzień."
      },
      {
        q: "Czy odpis zostanie naliczony uczniowi, który nie jada obiadów w szkole?",
        a: "Nie. Program odwołuje posiłki wyłącznie tym dzieciom, które miały zaplanowany obiad na dany dzień."
      },
      {
        q: "Co zrobić, gdy wycieczka została odwołana i dzieci jednak zjedzą obiad?",
        a: "W tym samym oknie klikasz przycisk „Przywróć wszystkie” i zapisujesz zmiany. Wszyscy uczniowie odzyskują swoje pierwotne obiady."
      }
    ]
  },
  {
    id: "dane-zbiorcze-kuchnia",
    number: "06",
    title: "Dane zbiorcze i raporty dla kuchni",
    shortTitle: "Dane zbiorcze dla kuchni",
    category: "Kuchnia i raporty",
    iconName: "ChefHat",
    description: "Codzienne zapotrzebowanie stołówki dla kucharek i magazynu. Dokładna liczba zup i drugich dań na każdy dzień roboczy.",
    content: `Kluczowe narzędzie codziennej pracy intendenta i personelu kuchennego. Przycisk **„Dane zbiorcze (Wszyscy)”** przełącza widok z pojedynczego ucznia na podsumowanie całej szkoły:

### Dzienna liczba porcji na każdy dzień roboczy
Dla każdego dnia miesiąca tabela wyświetla precyzyjne podsumowanie:
- **Zupy do przygotowania**: Ile zup ugotować danego dnia (np. 182 zupy).
- **Drugie dania do przygotowania**: Ile drugich dań wydać (np. 210 dań).
- **Suma posiłków łącznie**: Całkowita liczba wydawanych dań.
- **Liczba odwołań**: Ile nieobecności zgłoszono na ten dzień.
- **Posiłki wykonane**: Liczba posiłków faktycznie do ugotowania przez kuchnię.

### Aktualizacja na bieżąco w czasie rzeczywistym
Gdy rodzic rano zadzwoni ze zgłoszeniem choroby i intendent naniesie odwołanie, tabela zbiorcza **natychmiast pomniejsza liczbę porcji na dany dzień**. Kucharki otrzymują zawsze aktualną informację i nie gotują zbędnych obiadów.

### Ułatwienie dla magazynu i kontrola kosztów
- **Planowanie zakupów**: Znając zapotrzebowanie na kolejne dni tygodnia, intendent zamawia dokładnie tyle mięsa, warzyw czy nabiału, ile potrzeba.
- **Koniec z marnowaniem żywności**: Zero wyrzucanych porcji i zero sytuacji, w których dla kogoś zabraknie drugiego dania.
- **Podsumowanie finansowe miesiąca**: Po prawej stronie widać całościowe zestawienie stołówki (łączna kwota planowana, suma odliczeń i rzeczywiste wykonanie) – gotowe do uzgodnienia z księgowością.`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 113544.png",
        caption: "Widok 'Dane zbiorcze' – sumy zup i drugich dań dla każdego dnia miesiąca oraz łączne finanse stołówki"
      }
    ],
    steps: [
      "W lewym panelu nad listą uczniów kliknij przycisk „Dane zbiorcze (Wszyscy)”.",
      "W głównej tabeli odszukaj kolumnę z dzisiejszą datą.",
      "Odczytaj liczbę zup i drugich dań do ugotowania i przekaż informację kucharkom.",
      "Na koniec miesiąca sprawdź prawe podsumowanie finansowe, aby uzgodnić kwoty z księgowością szkoły."
    ],
    faq: [
      {
        q: "O której godzinie dane zbiorcze są aktualne?",
        a: "Dane aktualizują się natychmiast w czasie rzeczywistym. Każde zgłoszenie nieobecności wprowadzone rano od razu koryguje liczbę porcji."
      },
      {
        q: "Czy mogę wydrukować to zestawienie dla kuchni na kartce?",
        a: "Tak! Kliknij przycisk „Eksport danych” i wybierz „Szczegółowy rozkład na dni” – otrzymasz gotowy arkusz Excel do wydrukowania i powieszenia w kuchni."
      },
      {
        q: "Czy widać różnicę między liczbą zup a drugich dań?",
        a: "Tak, w każdym dniu zupy i drugie dania są wykazywane w osobnych wierszach, co eliminuje zgadywanie w kuchni."
      }
    ]
  },
  {
    id: "seryjna-wysylka-email",
    number: "07",
    title: "Seryjna wysyłka wiadomości e-mail",
    shortTitle: "Seryjna wysyłka e-mail",
    category: "Komunikacja i rozliczenia",
    iconName: "Mail",
    description: "Automatyczne wysyłanie spersonalizowanych rozliczeń do rodziców jednym kliknięciem. Ogromna oszczędność czasu każdego miesiąca.",
    content: `Ręczne przepisywanie kwot i pisanie setek maili co miesiąc zabierało intendentom wiele godzin. W **Dinner App** zrobisz to kilkoma kliknięciami:

### Pełna personalizacja wiadomości (Zgodność z RODO)
Wiadomość nie jest ogólnym ogłoszeniem – każdy rodzic otrzymuje w 100% osobną, prywatną wiadomość dotyczącą wyłącznie jego dziecka. Program sam wstawia w treść:
- Imię i nazwisko ucznia oraz klasę.
- Wyliczoną kwotę do zapłaty (po odliczeniu wszystkich zgłoszonych odpisów).
- Termin płatności oraz numer konta bankowego szkoły (IBAN).
- Liczbę wydanych obiadów i zgłoszonych odwołań.

### Dwa warianty wysyłki
- **Wysyłka indywidualna**: Wysłanie rozliczenia do rodzica konkretnego dziecka z poziomu jego karty.
- **Masowa wysyłka (Hurtowy mailing)**: Rozebranie rozliczeń do wszystkich rodziców w szkole lub wybranej klasy za jednym zamachem.

### 4 gotowe szablony pism
1. *Zbliżający się termin płatności* (standardowe comiesięczne przypomnienie z kwotą).
2. *Powiadomienie o zaległej płatności* (upomnienie o przekroczeniu terminu).
3. *Miesięczne rozliczenie obiadów* (pełne zestawienie wydanych posiłków, odwołań i stawek).
4. *Własna wiadomość* (dowolna treść z automatycznym nagłówkiem i podpisem intendenta).

### Wygodne filtry i podgląd na żywo
- **Szybkie filtry**: Wybór konkretnej klasy, wyszukiwarka po nazwisku oraz przycisk *„Zaznacz tylko z e-mailem”*.
- **Pasek postępu na żywo**: Licznik wysyłki (np. \`45 / 120\`) oraz bieżący status każdego rodzica (*Oczekuje*, *Wysyłanie...*, *Wysłano*, *Błąd* z dymkiem wyjaśniającym przyczynę).
- **Przycisk „Przerwij wysyłanie”**: Pozwala w bezpieczny sposób zatrzymać proces w dowolnym momencie.

### Dwa tryby wysyłki i pełne bezpieczeństwo
1. **Tryb Półautomatyczny (Microsoft Outlook na komputerze)**:
   - Program przygotowuje wiadomości i korzysta ze szkolnego Outlooka.
   - **Zero wpisywania haseł do skrzynki w programie** – w 100% bezpieczne dla szkolnych kont Office 365. Outlook sam archiwizuje pocztę w profilu użytkownika.
2. **Tryb W Pełni Automatyczny (Wysyłka w tle: SMTP lub Microsoft 365)**:
   - Wysyłka w tle przez szkolny serwer SMTP (lub Gmail z hasłem aplikacji) albo przez Microsoft 365 (Microsoft Graph API).
   - **Ściśle lokalne bezpieczeństwo haseł**: Dane logowania do poczty są zapisywane **wyłącznie lokalnie na Twoim komputerze** (\`email_config.json\`) – **nigdy nie trafiają do wspólnej bazy danych szkoły**, więc inni pracownicy nie mają dostępu do Twojej skrzynki.
   - Obsługa zapisu w folderze *Elementy wysłane* (IMAP), ukrytej kopii (BCC) oraz testów połączenia.`,
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
      "Kliknij przycisk „Wyślij e-mail” na górnym pasku ewidencji.",
      "Zaznacz odbiorców (np. przyciskiem „Zaznacz tylko z e-mailem” lub wybierając klasę).",
      "Wybierz gotowy szablon (np. „Zbliżający się termin płatności”) i wskaż termin wpłaty.",
      "Sprawdź treść wiadomości i kliknij fioletowy przycisk „Wyślij e-mail”. Program wyśle spersonalizowane maile do wszystkich rodziców."
    ],
    faq: [
      {
        q: "Czy rodzice widzą adresy e-mail innych rodziców?",
        a: "Absolutnie nie. Każdy rodzic otrzymuje w 100% osobną, indywidualną wiadomość z danymi wyłącznie swojego dziecka. Pełna zgodność z RODO."
      },
      {
        q: "Czy muszę konfigurować serwery pocztowe, jeśli mamy w szkole program Outlook?",
        a: "Nie! Wystarczy wybrać tryb „Półautomatyczna (Outlook)” – program wykorzysta bezpiecznie Twojego szkolnego Outlooka bez wpisywania żadnych haseł."
      },
      {
        q: "Czy mogę zmienić treść wiadomości przed wysłaniem?",
        a: "Tak, treść tematu i wiadomości można w każdej chwili swobodnie edytować bezpośrednio w oknie wysyłki."
      }
    ]
  },
  {
    id: "eksport-excel",
    number: "08",
    title: "Eksport ewidencji do pliku Excel (.xlsx)",
    shortTitle: "Eksport do Excela",
    category: "Księgowość i finanse",
    iconName: "Download",
    screenshotLayout: "grid",
    description: "Generowanie gotowych zestawień w arkuszach Excel (.xlsx) – indywidualnie dla ucznia oraz zbiorczo dla całej szkoły.",
    content: `Wiemy, że urzędy gmin i księgowość szkolna wymagają rozliczeń w arkuszu kalkulacyjnym. **Dinner App** generuje gotowe pliki Excel (.xlsx) jednym kliknięciem:

### Trzy warianty raportów do wyboru
1. **Raport indywidualny ucznia (Wierne odwzorowanie 1:1)**:
   - Elegancka kopia karty ewidencyjnej z programu.
   - Zawiera dane dziecka, klasę, rozbicie na zupę i drugie danie, wiersze: *Planowane*, *Odwołane* i *Wykonane*, żółte wyróżnienie dni wolnych oraz podsumowanie kosztów.
   - Automatyczna, czytelna nazwa pliku: \`nazwisko_imie_MM.rrrr.xlsx\`.

2. **Raport zbiorczy – Podsumowanie łączne (Cała szkoła)**:
   - Tabela zawierająca wszystkich uczniów szkoły w podziale na klasy.
   - Wykaz liczby zjedzonych zup, drugich dań oraz łącznej kwoty do zapłaty.
   - Na dole arkusza znajduje się wiersz podsumowania finansowego i ilościowego całej placówki – gotowy dokument dla księgowości i gminy.

3. **Raport zbiorczy – Szczegółowy rozkład na dni**:
   - Pełna macierz: uczniowie w wierszach, wszystkie dni robocze miesiąca w kolumnach z rozbiciem na zupę i drugie danie.
   - Oznaczenie dni wolnych oraz dzienne sumy zapotrzebowania na dole tabeli – idealne dla personelu kuchni i do archiwum stołówki.

### Zgodność i gotowość do druku
Pliki generowane są w uniwersalnym formacie \`.xlsx\`, w pełni zgodnym z programami Microsoft Excel, LibreOffice Calc oraz Arkuszami Google. Arkusze posiadają wyraźne obramowania, czytelne nagłówki i formatowanie walutowe (zł).`,
    screenshots: [
      {
        src: "/screenshots/eksport_indywidualny_excel.png",
        caption: "Okno eksportu danych indywidualnego ucznia do pliku Excel"
      },
      {
        src: "/screenshots/eksport_zbiorczy_excel.png",
        caption: "Eksport danych zbiorczych: wybór podsumowania łącznego lub rozkładu na dni"
      }
    ],
    steps: [
      "W widoku ucznia lub danych zbiorczych kliknij przycisk „Eksport danych”.",
      "Wybierz wariant eksportu (np. Pełna ewidencja obiadów lub Podsumowanie łączne).",
      "Kliknij „Eksportuj do pliku Excel”.",
      "Plik zostanie zapisany na Twoim komputerze i jest od razu gotowy do otwarcia lub wydrukowania."
    ],
    faq: [
      {
        q: "Czy wygenerowany plik otworzy się w programie Excel lub LibreOffice?",
        a: "Tak, generowane pliki to standardowy format .xlsx zgodny z Microsoft Excel (wszystkie wersje), LibreOffice Calc oraz Arkuszami Google."
      },
      {
        q: "Czy plik zawiera estetyczne formatowanie tabeli?",
        a: "Tak, arkusz jest czytelnie pokolorowany, posiada wyraźne nagłówki, obramowania tabel i formatowanie walutowe (zł)."
      },
      {
        q: "Gdzie domyślnie zapisują się wyeksportowane pliki?",
        a: "W folderze „Pobrane” na Twoim komputerze lub w lokalizacji wskazanej podczas zapisu."
      }
    ]
  },
  {
    id: "ustawienia-cennik-dni-wolne",
    number: "09",
    title: "Cennik, rachunek bankowy i dni wolne",
    shortTitle: "Cennik i dni wolne",
    category: "Konfiguracja",
    iconName: "Settings",
    description: "Konfiguracja stawek cennika, numeru konta szkoły, kalendarza przerw i ferii oraz opcji przejścia na nowy rok szkolny.",
    content: `Wszystkie parametry finansowe i organizacyjne szkoły konfigurujesz w oknie **Ustawienia** (ikona koła zębatego w lewym górnym rogu). Panel podzielony jest na czytelne, rozwijane sekcje:

### 1. Ustawienia cennika obiadów
- Definiowanie stawek za **zupę** oraz **drugie danie** z dokładnością do grosza (np. zupa 5,00 zł, drugie danie 15,00 zł).
- Wprowadzone stawki są automatycznie stosowane przy wszystkich nowych kalkulacjach posiłków.

### 2. Dane do przelewu i płatności
- **Numer rachunku bankowego szkoły (IBAN)**: wstawiany automatycznie do generowanych wiadomości mailowych do rodziców.
- **Domyślny dzień miesiąca na płatność**: np. wpłaty do 10. lub 25. dnia miesiąca.

### 3. Globalny kalendarz dni wolnych od szkoły
- Kalendarz obejmujący całą placówkę: ferie zimowe, przerwy świąteczne, święta państwowe oraz dni dyrektorskie.
- Oznaczenie dnia jako wolnego wymaga zaledwie jednego kliknięcia w kalendarzu.
- **Inteligentna i nieniszcząca „Wirtualna Maska”**:
  - Oznaczenie dnia jako wolnego automatycznie blokuje posiłki, zeruje naliczanie opłat i wyróżnia kolumnę na żółto.
  - **Plany uczniów nie są kasowane**: Jeśli dzień wolny oznaczono omyłkowo lub termin uległ zmianie, jego odznaczenie natychmiast przywraca oryginalne plany posiłków wszystkich uczniów bez konieczności ponownego wpisywania!

### 4. Bezpieczeństwo i resetowanie
- W ustawieniach znajduje się moduł przygotowania bazy do nowego roku szkolnego (promowanie klas, usuwanie absolwentów i reset obiadów), który szczegółowo opisujemy w osobnym **Rozdziale 10: Przejście na nowy rok szkolny**.
- Dostępne jest również bezpieczne przywracanie ustawień fabrycznych zabezpieczone ostrzeżeniami przed przypadkowym wykonaniem.`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 113627.png",
        caption: "Główny panel ustawień programu Dinner App"
      },
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 113716.png",
        caption: "Ustawienia stawek cennika oraz numeru konta bankowego szkoły"
      }
    ],
    steps: [
      "Kliknij ikonę koła zębatego w lewym panelu nad listą uczniów.",
      "Rozwiń sekcję „Ustawienia cennika obiadów” i wpisz aktualne stawki za zupę oraz drugie danie.",
      "W sekcji „Dane do przelewu” podaj numer rachunku bankowego szkoły oraz termin wpłat.",
      "W sekcji „Dni wolne od szkoły” zaznacz w kalendarzu święta i ferie, a następnie kliknij „Zamknij i zapisz”."
    ],
    faq: [
      {
        q: "Co jeśli w trakcie roku szkolnego wzrośnie cena obiadów?",
        a: "Zmieniasz stawkę w cenniku. Nowe kalkulacje uwzględnią nową cenę od kolejnego miesiąca, a historia minionych miesięcy zachowa ówczesne stawki."
      },
      {
        q: "Czy muszę pamiętać o odwoływaniu obiadów w ferie dla każdego dziecka?",
        a: "Nie! Wystarczy zaznaczyć ferie w kalendarzu dni wolnych – program sam wykluczy te dni ze wszystkich planów posiłków w całej szkole."
      },
      {
        q: "Co jeśli przez pomyłkę zaznaczę dzień wolny w normalny dzień nauki?",
        a: "Kliknij ten dzień ponownie w kalendarzu, aby go odznaczyć. Oryginalne plany posiłków wszystkich uczniów wrócą natychmiast na swoje miejsce."
      }
    ]
  },
  {
    id: "nowy-rok-szkolny",
    number: "10",
    title: "Przejście na nowy rok szkolny",
    shortTitle: "Nowy rok szkolny",
    category: "Administracja",
    iconName: "GraduationCap",
    description: "Automatyczny awans uczniów do kolejnych klas, bezpieczne usuwanie absolwentów oraz przygotowanie czystego grafiku na wrzesień.",
    content: `Zamknięcie starego roku szkolnego i przygotowanie bazy na wrzesień bywało w szkołach pracochłonne. Zamiast ręcznie zmieniać klasę każdemu dziecku z osobna (np. 1A na 2A u setek uczniów) lub pojedynczo kasować absolwentów, moduł **Przejście na nowy rok szkolny** wykonuje całą procedurę automatycznie za jednym kliknięciem:

### 1. Automatyczny awans klas do wyższego poziomu
Program inteligentnie rozpoznaje oznaczenia klas w bazie i automatycznie podnosi ich poziom o 1 dla wszystkich roczników:
- **Cyfry arabskie**: klasa \`1A\` staje się \`2A\`, \`2b\` staje się \`3b\`, \`7c\` staje się \`8c\`.
- **Oddziały przedszkolne i zerówki**: zerówka \`0\` przechodzi do klasy \`1\`, a \`0A\` do \`1A\`.
- **Cyfry rzymskie**: klasa \`I A\` przechodzi do \`II A\`, \`VII B\` do \`VIII B\`.
- **Zapisy słowne i prefiksy**: \`klasa 3B\` przechodzi w \`klasa 4B\`, a \`kl. 7A\` w \`kl. 8A\`.
- **Ochrona nauczycieli i pracowników**: Osoby bez przypisanej klasy lub o nazwach nieliczbowych (np. *Nauczyciele*, *Personel*, *Sekretariat*) pozostają w 100% nienaruszone.

### 2. Usuwanie uczniów kończących szkołę (absolwentów)
- **Czysta kartoteka**: Zaznaczenie opcji *„Usuń uczniów kończących szkołę (absolwentów)”* trwale usuwa z bazy rocznik opuszczający placówkę wraz z ich ewidencją posiłków.
- **Konfigurowalny poziom**: Domyślnie ustawiona jest klasa **8** (szkoła podstawowa), ale pole możesz łatwo zmienić na dowolny inny poziom (np. klasa \`4\` dla liceum czy klasa \`5\` dla technikum).
- **Opcjonalność**: Jeśli chcesz zachować absolwentów w bazie, wystarczy odznaczyć to pole.

### 3. Zresetowanie posiłków na nowy rok
- Zaznaczenie opcji *„Zresetuj posiłki dla wszystkich uczniów”* (zalecane przy przejściu na nowy rok) czyści dotychczasowe obiady (planowane, odwołane i wykonane) ze wszystkich miesięcy.
- Daje to intendentowi całkowicie czysty grafik gotowy na przyjęcie nowych deklaracji obiadowych we wrześniu.
- Jeśli szkoła potrzebuje historii minionego roku, przed wykonaniem operacji wystarczy zapisać roczne raporty do plików Excel.

### 4. Podgląd skutków operacji na żywo przed wykonaniem
Program na bieżąco analizuje bazę danych i w czytelnej ramce wyświetla dokładne statystyki przed uruchomieniem procedury:
- 🟢 **Awans do wyższej klasy**: dokładna liczba uczniów, którzy przejdą do kolejnej klasy (np. *9 uczniów*).
- 🔴 **Absolwenci (do usunięcia)**: dokładna liczba dzieci z rocznika kończącego szkołę (np. *1 uczeń*).
- 👥 **Bez zmian (brak klasy / personel)**: liczba kont pracowniczych, które nie ulegną żadnej modyfikacji (np. *0 osób*).

### 5. Bezpieczeństwo i potwierdzenie
Po kliknięciu przycisku **„Przejdź na nowy rok szkolny”** program wyświetla czytelne okno z podsumowaniem wszystkich operacji i wymaga wyraźnego potwierdzenia intendenta, co w 100% chroni przed przypadkowym wykonaniem.`,
    screenshots: [
      {
        src: "/screenshots/przejscie_na_nowy_rok_szkolny.png",
        caption: "Moduł przejścia na nowy rok szkolny: awans klas, usuwanie absolwentów oraz podgląd skutków operacji na żywo"
      }
    ],
    steps: [
      "Otwórz Ustawienia (ikona koła zębatego w lewym panelu) i rozwiń kartę „Przejście na nowy rok szkolny”.",
      "Sprawdź podgląd na żywo: liczbę uczniów zakwalifikowanych do awansu oraz liczbę absolwentów.",
      "Upewnij się, jaka klasa jest wpisana jako kończąca szkołę (domyślnie 8 dla szkoły podstawowej).",
      "Zaznacz opcję zresetowania posiłków, aby rozpocząć wrzesień z czystym grafikiem obiadów.",
      "Kliknij fioletowy przycisk „Przejdź na nowy rok szkolny” i potwierdź wykonanie operacji w oknie dialogowym."
    ],
    faq: [
      {
        q: "Co się stanie z kontami nauczycieli i pracowników stołówki?",
        a: "Konta o oznaczeniach nieliczbowych (np. Nauczyciele, Personel) są bezpieczne – program nie zmienia ich przypisania ani ich nie usuwa."
      },
      {
        q: "Czy mogę promować klasy bez usuwania absolwentów?",
        a: "Tak! Wystarczy odznaczyć pole „Usuń uczniów kończących szkołę (absolwentów)”. Wtedy rocznik opuszczający szkołę pozostanie w bazie danych."
      },
      {
        q: "Co zrobić przed przejściem na nowy rok, aby zachować archiwalne rozliczenia?",
        a: "Przed wykonaniem resetu warto wejść w moduł „Eksport danych” i wyeksportować raport roczny do pliku Excel lub zachować kopię pliku bazy danych."
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
    description: "Praca na jednym komputerze lub współdzielenie danych w sieci z sekretariatem i księgowością oraz bezkonfliktowa synchronizacja.",
    content: `Program **Dinner App** idealnie dopasowuje się do potrzeb małych szkół, jak i dużych zespołów szkolno-przedszkolnych:

### 1. Lokalna baza danych (SQLite) – tryb domyślny
- Wszystkie dane zapisywane są bezpośrednio w pliku na dysku Twojego komputera (\`dinner_app.db\`).
- Zero konfiguracji serwerów, zero skomplikowanych haseł.
- Program działa w 100% offline – możesz swobodnie pracować nawet wtedy, gdy w szkole nie ma internetu.

### 2. Sieciowa baza danych (PostgreSQL) – praca zespołowa
- Rozwiązanie wielostanowiskowe: intendent w gabinecie przyjmuje zgłoszenia i odwołania, a księgowa w sekretariacie jednocześnie rozlicza wpłaty.
- Obie osoby pracują na tych samych, aktualnych danych na żywo bez konieczności przenoszenia plików na pendrive.

### 3. Czysty podział danych i ochrona prywatności
- **Wspólna baza sieciowa**: przechowuje wyłącznie dane operacyjne stołówki (kartoteka uczniów, ewidencja obiadów, kalendarz dni wolnych i cennik).
- **Pamięć lokalna Twojego komputera**: przechowuje prywatne hasła do Twojej skrzynki pocztowej (\`email_config.json\`). Dzięki temu inni pracownicy korzystający z programu nie mają wglądu w Twoje hasła ani prywatne ustawienia.

### 4. Okno „Przenieś dane” (Dwukierunkowa synchronizacja)
Program posiada dedykowane narzędzie do bezpiecznego przenoszenia danych między komputerem a serwerem sieciowym (SQLite ⇄ PostgreSQL):
- 🛡️ **Miękkie przeniesienie (Zalecane – bezkonfliktowe)**: Inteligentne scalanie danych. Jeśli w bazie docelowej uczeń ma już zapisany adres e-mail, zarejestrowane posiłki czy odwołania, dane te **nie są nadpisywane**. Program dopisuje wyłącznie brakujących uczniów i nowe dni.
- ⚠️ **Twarde przeniesienie**: Całkowite wyczyszczenie bazy docelowej i wstawienie dokładnej kopii ze źródła (zabezpieczone oknem ostrzegawczym).
- **Pasek postępu i raport**: Wskaźnik postępu (0–100%) na żywo oraz pełne podsumowanie po zakończeniu operacji.`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 113955.png",
        caption: "Wybór trybu pracy bazy: Lokalna SQLite lub Sieciowa PostgreSQL"
      }
    ],
    steps: [
      "Otwórz Ustawienia i rozwiń sekcję „Baza danych”.",
      "Wybierz „Lokalna baza (SQLite)”, jeśli pracujesz na jednym komputerze w szkole.",
      "Wybierz „Sieciowa baza (PostgreSQL)”, jeśli chcesz połączyć kilka komputerów w szkole.",
      "Aby zsynchronizować dane między komputerem a siecią, kliknij przycisk „Przenieś dane” i wybierz bezpieczne „Miękkie przeniesienie”."
    ],
    faq: [
      {
        q: "Czy do korzystania z programu potrzebuję informatyka?",
        a: "W trybie lokalnym nie – program działa od razu po instalacji. W trybie sieciowym szkolny informatyk może skonfigurować połączenie w kilka minut."
      },
      {
        q: "Czy dane dzieci są bezpieczne pod kątem RODO?",
        a: "W trybie lokalnym dane nigdy nie opuszczają dysku komputera w szkole. W trybie sieciowym połączenie jest w pełni szyfrowane (SSL)."
      },
      {
        q: "Jak zrobić kopię zapasową bazy danych?",
        a: "W trybie lokalnym wystarczy skopiować plik bazy danych (np. na bezpieczny szkolny pendrive). W trybie PostgreSQL kopie zapasowe mogą wykonywać się automatycznie na serwerze."
      }
    ]
  }
];
