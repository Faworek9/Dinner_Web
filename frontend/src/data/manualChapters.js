export const MANUAL_CHAPTERS = [
  {
    id: "ekran-glowny",
    number: "01",
    title: "Ekran główny i nawigacja",
    shortTitle: "Ekran główny",
    category: "Podstawy",
    iconName: "LayoutDashboard",
    description: "Wszystko pod ręką w jednym, przejrzystym oknie – bez konieczności przełączania się między wieloma programami czy arkuszami.",
    content: `Ekran główny aplikacji **Dinner App - Ewidencja Obiadów** został zaprojektowany z myślą o maksymalnej prostocie i czytelności. Składa się z trzech intuicyjnych paneli:
    
1. **Lewy panel boczny**: Alfabetyczna lista wszystkich uczniów w szkole, szybka wyszukiwarka po nazwisku lub imieniu, przycisk dodawania nowej osoby oraz importu z pliku Excel.
2. **Górna belka narzędziowa**: Wybór miesiąca (np. 09.2026), przyciski szybkiej akcji (*Zmień dane*, *Eksport danych*, *Wyślij e-mail*) oraz podgląd aktualnie zaznaczonego ucznia.
3. **Główny arkusz ewidencji**: Czytelna tabela z podziałem na każdy dzień roboczy w danym miesiącu oraz rozbiciem na **Zupę** i **Drugie danie (II danie)**.
4. **Pasek podsumowania (po prawej)**: Błyskawiczne kwoty i sumy w trzech kolorach:
   - **Niebieski (Planowane)**: Wartość wszystkich zaplanowanych posiłków w miesiącu.
   - **Czerwony (Odwołane)**: Wartość odpisów za zgłoszone nieobecności.
   - **Zielony (Wykonane / Do zapłaty)**: Rzeczywista kwota należności, jaką rodzic ma uiścić.`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 113522.png",
        caption: "Rzeczywisty widok ekranu głównego programu dla ucznia Dąbrowski Jakub (Klasa 5A)"
      }
    ],
    steps: [
      "Wybierz interesujący Cię miesiąc za pomocą strzałek przy polu miesiąca.",
      "Wyszukaj ucznia wpisując jego nazwisko w polu wyszukiwarki lub klikając na liście po lewej.",
      "Przejrzyj wiersze: Planowane, Odwołane oraz Wykonane posiłki na dany dzień.",
      "Użyj przycisku 'Następna osoba ▶' w prawym dolnym rogu, aby płynnie przechodzić między uczniami."
    ],
    faq: [
      {
        q: "Czy po zamknięciu programu wprowadzone dane zostają zapamiętane?",
        a: "Tak, każda zmiana jest natychmiast bezpiecznie zapisywana w bazie SQL. Nie musisz szukać przycisku 'Zapisz plik' – dane są bezpieczne."
      },
      {
        q: "Co oznaczają kolorowe liczby w kolumnie 'Razem' po prawej stronie?",
        a: "Niebieska kwota to suma posiłków zaplanowanych na dany miesiąc, czerwona to kwota odliczeń (odpisów za zgłoszone nieobecności), a zielona to ostateczna kwota do zapłaty po uwzględnieniu wszystkich odpisów."
      },
      {
        q: "Czy mogę cofnąć się do rozliczeń z poprzednich miesięcy lub lat?",
        a: "Tak, klikając strzałki przy polu wyboru miesiąca możesz w dowolnym momencie sprawdzić historię ewidencji i wydruków z ubiegłych miesięcy."
      }
    ]
  },
  {
    id: "zarzadzanie-uczniami-import",
    number: "02",
    title: "Baza uczniów i import z Excela",
    shortTitle: "Baza uczniów i Excel",
    category: "Dane i uczniowie",
    iconName: "FileSpreadsheet",
    description: "Koniec z ręcznym przepisywaniem setek dzieci z kartek. Zaimportuj całą listę uczniów szkoły jednym kliknięciem z pliku .xlsx.",
    content: `Wcześniej dane uczniów były porozrzucane po wielu plikach Excela i zeszytach, przez co łatwo było o pomyłkę lub wpisanie tego samego dziecka dwukrotnie.
    
W **Dinner App**:
- **Jedna centralna baza SQL**: Każdy uczeń posiada swój unikalny wpis. Nie ma ryzyka dublowania osób.
- **Błyskawiczny import z pliku Excel (.xlsx)**: Przycisk *Importuj .xlsx* w lewym panelu pozwala wczytać listę uczniów (imię, nazwisko, klasa, e-mail rodzica) w kilka sekund.
- **Oznaczenia specjalne (Tagi)**: Możesz łatwo przypisać uczniom etykiety, np. **MOPS** (obiady finansowane przez pomoc społeczną) lub **SFCH** (stypendia/fundacje). Tagi są widoczne kolorowymi plakietkami na liście uczniów, co ułatwia późniejsze osobne rozliczenia.`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 113522.png",
        caption: "Lista uczniów po lewej stronie z wyszukiwarką, przyciskiem importu .xlsx oraz oznaczeniami MOPS i SFCH"
      }
    ],
    steps: [
      "Kliknij przycisk 'Importuj .xlsx' w lewym górnym rogu nad listą osób.",
      "Wybierz plik Excela z listą uczniów wygenerowany np. z dziennika elektronicznego (Librus, Vulcan).",
      "Program automatycznie załaduje uczniów, przypisze ich do klas i zweryfikuje poprawność danych.",
      "Jeśli potrzebujesz dodać pojedynczego ucznia w trakcie roku, kliknij '+ Dodaj nową osobę'."
    ],
    faq: [
      {
        q: "Jakie kolumny powinien zawierać plik Excela do importu?",
        a: "Wystarczą standardowe kolumny: Imię, Nazwisko, Klasa oraz opcjonalnie Adres e-mail do powiadomień. Program jest elastyczny i rozpoznaje typowe formaty eksportu z dzienników elektronicznych."
      },
      {
        q: "Co jeśli uczeń o danym nazwisku już istnieje w bazie?",
        a: "Program posiada zabezpieczenie przed duplikatami – weryfikuje imię, nazwisko i klasę, dzięki czemu nie ma obawy, że jedno dziecko pojawi się na liście podwójnie."
      },
      {
        q: "Do czego służą plakietki MOPS i SFCH przy nazwiskach?",
        a: "Pozwalają natychmiast odróżnić uczniów, za których płaci ośrodek pomocy społecznej lub fundacja. Dzięki temu w zestawieniach finansowych od razu wiesz, które rachunki wystawić rodzicom, a które gminie."
      }
    ]
  },
  {
    id: "ewidencja-posilkow",
    number: "03",
    title: "Ewidencja posiłków – planowanie i odpisy",
    shortTitle: "Ewidencja posiłków",
    category: "Codzienna praca",
    iconName: "CalendarCheck",
    description: "Seryjne planowanie i precyzyjne odwoływanie posiłków z osobnym podziałem na zupę i drugie danie.",
    content: `Codzienna ewidencja w arkuszu kalkulacyjnym była koszmarem. W **Dinner App** masz do dyspozycji inteligentne narzędzie konfiguracji posiłków (*Zmień dane*):

- **Podział na Zupę i II Danie**: Każdy dzień roboczy ma niezależne oznaczenie zupy i drugiego dania. Jeśli uczeń jada tylko zupy – program policzy dokładnie stawkę za zupę.
- **Seryjne szablony tygodniowe**: Zamiast klikać każdy dzień w miesiącu z osobna, wybierasz gotowy szablon:
  - *Pełne obiady (Pn-Pt)*
  - *Tylko zupy*
  - *Tylko II dania*
  - Albo zaznaczasz wybrane dni tygodnia (np. tylko poniedziałki i środy) i klikasz **Wypełnij cały miesiąc szablonem**.
- **Planowanie na wiele miesięcy**: Możesz zaplanować posiłki nie tylko na bieżący miesiąc, ale jednym ruchem na cały semestr lub rok szkolny.
- **Seryjne i pojedyncze odwoływanie**: Gdy rodzic zgłasza chorobę, odznaczasz konkretne dni robocze. Program od razu podsumowuje kwotę zwrotu (*Wartość odwołań*).`,
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
      "Wybierz ucznia z listy i kliknij fioletowy przycisk 'Zmień dane' na górnym pasku.",
      "Wybierz kategorię: 'Planowane posiłki' (aby ustalić co dziecko jada) lub 'Odwołane posiłki' (aby nanieść nieobecności).",
      "Wybierz gotowy szablon (np. Pełne obiady Pn-Pt) i kliknij 'Wypełnij cały miesiąc szablonem'.",
      "Sprawdź podsumowanie na dole (liczba zup, drugich dań i łączny koszt) i kliknij 'Zapisz zmiany'."
    ],
    faq: [
      {
        q: "Co jeśli dziecko jada tylko drugie dania w wybrane dni tygodnia?",
        a: "W szablonie tygodniowym odznaczasz zupy i zaznaczasz 'II danie' tylko przy wybranych dniach (np. Wtorek, Czwartek). Program automatycznie wypełni tak cały miesiąc."
      },
      {
        q: "Czy odwołanie posiłku natychmiast przelicza rachunek rodzica?",
        a: "Tak! Wartość odwołanego posiłku od razu pojawia się w czerwonym polu 'Odliczenie' i pomniejsza zieloną kwotę 'Do zapłaty'."
      },
      {
        q: "Czy mogę zaplanować posiłki od razu na 3 miesiące do przodu?",
        a: "Tak, w oknie edycji wystarczy przełączyć zakres edycji z 'Edytuj aktualny miesiąc' na 'Edytuj kilka miesięcy' i wybrać interesujący Cię przedział czasowy."
      }
    ]
  },
  {
    id: "odwolywanie-po-klasach",
    number: "04",
    title: "Grupowe odwoływanie dla klas (Wycieczki)",
    shortTitle: "Wycieczki i całe klasy",
    category: "Akcje masowe",
    iconName: "Bus",
    description: "Cała klasa wyjeżdża na wycieczkę lub do teatru? Odwołaj obiady wszystkim uczniom jednym kliknięciem.",
    content: `Jedna z najbardziej lubianych funkcji przez intendentów. Gdy klasa wyjeżdża na wycieczkę, dawniej trzeba było otwierać kartę każdego ucznia z osobna i ręcznie kasować obiad.
    
W **Dinner App**:
- Klikasz przycisk **Zmień dane po klasach (Odwołania)**.
- Wybierasz klasę (np. *Klasa 1A - 24 uczniów*).
- Widzisz kalendarz dni roboczych z informacją, ilu uczniów ma zaplanowane obiady w danym dniu.
- Zaznaczasz checkbox **Odwołaj obiad** przy dacie wycieczki.
- Możesz też użyć przycisku **Odwołaj wszystkie** (np. dla wycieczek trzydniowych).
- Klikasz **Zapisz odwołania** – w ułamku sekundy posiłki zostają odwołane dla każdego dziecka z tej klasy, a ich rachunki odpowiednio pomniejszone!`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 114037.png",
        caption: "Okno grupowego odwoływania posiłków po klasach dla wycieczek szkolnych"
      }
    ],
    steps: [
      "Przejdź do widoku 'Dane zbiorcze' i kliknij niebieski przycisk 'Zmień dane po klasach'.",
      "Z lewej listy wybierz klasę, która wyjeżdża na wycieczkę.",
      "Zaznacz dni, w których klasa nie będzie jadła obiadów w szkole.",
      "Kliknij 'Zapisz odwołania'. Program zaktualizuje konta wszystkich dzieci z tej klasy."
    ],
    faq: [
      {
        q: "Co jeśli dwoje dzieci z tej klasy nie jedzie na wycieczkę i zostaje w świetlicy na obiedzie?",
        a: "Po grupowym odwołaniu dla klasy możesz po prostu wejść w kartę tego konkretnego ucznia i jednym kliknięciem przywrócić mu obiad na ten dzień."
      },
      {
        q: "Czy wycieczka zostanie odwołana tylko dzieciom, które miały wykupione posiłki?",
        a: "Dokładnie tak – program odwołuje obiady wyłącznie tym uczniom, którzy mieli zaplanowany posiłek. Nie ingeruje w konta dzieci, które nie korzystają ze stołówki."
      },
      {
        q: "Co jeśli wycieczka została odwołana i dzieci jednak zjedzą obiad?",
        a: "W tym samym oknie klikasz przycisk 'Przywróć wszystkie' i zapisujesz zmiany. Wszyscy uczniowie odzyskują swoje pierwotne plany posiłków."
      }
    ]
  },
  {
    id: "dane-zbiorcze-kuchnia",
    number: "05",
    title: "Dane zbiorcze i raporty dla kuchni",
    shortTitle: "Dane zbiorcze dla kuchni",
    category: "Kuchnia i raporty",
    iconName: "ChefHat",
    description: "Koniec z pomyłkami przy liczeniu porcji. Rzetelne podsumowanie zup i drugich dań na każdy dzień roboczy.",
    content: `Kluczowe narzędzie dla kucharek i intendenta. Przycisk **Dane zbiorcze (Wszyscy)** przełącza widok tabeli z pojedynczego ucznia na całą szkołę:

- **Dzienna liczba porcji**: Dla każdego dnia roboczego w miesiącu tabela pokazuje dokładną sumę:
  - Ile **zup** ugotować (np. 176 zup).
  - Ile **drugich dań** przygotować (np. 198 drugich dań).
- **Trzy poziomy informacji na dany dzień**:
  - *Planowane*: Ile posiłków pierwotnie zamówiono.
  - *Odwołane*: Ile dzieci zgłosiło nieobecność (podświetlone czytelnym kolorem).
  - *Wykonane*: Dokładna liczba posiłków do wydania przez kuchnię.
- **Podsumowanie finansowe miesiąca**: Po prawej stronie widać całościowe podsumowanie stołówki: suma planowana, suma odliczeń i suma rzeczywistego wykonania. Zero pomyłek w słupkach.`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 113544.png",
        caption: "Widok 'Dane zbiorcze' – sumy zup i drugich dań dla każdego dnia miesiąca oraz łączne finanse"
      }
    ],
    steps: [
      "W lewym panelu kliknij przycisk 'Dane zbiorcze (Wszyscy)'.",
      "W głównej tabeli pojawi się podsumowanie wszystkich uczniów z całej szkoły.",
      "Odczytaj liczbę zup i drugich dań na dzisiejszy dzień i przekaż informację paniom kucharkom.",
      "Sprawdź prawe podsumowanie finansowe na koniec miesiąca, aby uzgodnić kwoty z księgowością."
    ],
    faq: [
      {
        q: "O której godzinie dane zbiorcze są aktualne?",
        a: "Dane aktualizują się w czasie rzeczywistym. Jeśli rodzic zadzwoni o 8:00 rano i naniesiesz odpis, tabela zbiorcza natychmiast zmniejszy liczbę porcji na dany dzień o 1."
      },
      {
        q: "Czy mogę wydrukować to zestawienie na papierze dla kuchni?",
        a: "Tak! Program pozwala wyeksportować dane zbiorcze do pliku Excel jednym kliknięciem, skąd możesz je błyskawicznie wydrukować."
      },
      {
        q: "Czy widać podział na posiłki nauczycielskie i uczniowskie?",
        a: "W tabeli zbiorczej widać całościową liczbę porcji, a dzięki filtracji po klasach/grupach możesz wyodrębnić pracowników i uczniów."
      }
    ]
  },
  {
    id: "seryjna-wysylka-email",
    number: "06",
    title: "Seryjna wysyłka wiadomości e-mail",
    shortTitle: "Seryjna wysyłka e-mail",
    category: "Komunikacja i rozliczenia",
    iconName: "Mail",
    description: "Największa rewolucja w programie. Automatyczne wysyłanie spersonalizowanych rozliczeń do wszystkich rodziców jednym kliknięciem.",
    content: `Ręczne wysyłanie maili lub SMS-ów z kwotami do 150 czy 300 rodziców zajmowało intendentom dziesiątki, a w skali roku **setki godzin żmudnej pracy**.
    
W **Dinner App** zrobisz to jednym przyciskiem:
- **Pełna personalizacja wiadomości**: Wiadomość nie jest ogólnym ogłoszeniem! Każdy rodzic otrzymuje wiadomość przygotowaną specjalnie dla swojego dziecka.
- **Inteligentne znaczniki automatyczne**: Program sam wstawia w treść:
  - \`[nazwisko i imię ucznia]\`
  - \`[klasa]\`
  - \`[kwota do zapłaty]\` (wyliczona co do grosza po odpisach)
  - \`[termin płatności]\` (np. do 28.09.2026)
  - \`[numer konta]\` (numer IBAN szkoły z ustawień)
  - \`[liczba wydanych posiłków]\` oraz \`[liczba odwołanych posiłków]\`
- **Dwa tryby wysyłki do wyboru**:
  1. **Półautomatyczna przez Microsoft Outlook**: Aplikacja generuje wiadomości i korzysta z programu Outlook na komputerze szkolnym. 100% bezpieczne dla kont szkolnych, bez podawania haseł w aplikacji.
  2. **W pełni automatyczna w tle**: Przez tradycyjny serwer SMTP (np. Gmail) lub bezpośrednio przez konto Microsoft 365 (Microsoft Graph API).`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 114642.png",
        caption: "Moduł seryjnej wysyłki e-mail z podglądem szablonu, znacznikami i listą odbiorców"
      },
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 113810.png",
        caption: "Ustawienia poczty: wybór trybu Outlook vs SMTP / Microsoft 365"
      }
    ],
    steps: [
      "Kliknij przycisk 'Wyślij e-mail seryjnie' na górnym pasku ewidencji.",
      "Zaznacz odbiorców (możesz zaznaczyć wszystkich jednym kliknięciem lub przefiltrować po wybranej klasie).",
      "Wybierz gotowy wzór szablonu (np. 'Zbliżający się termin płatności') i ustaw termin płatności.",
      "Kliknij fioletowy przycisk 'Wyślij e-mail'. Program wyśle spersonalizowane maile w tle!"
    ],
    faq: [
      {
        q: "Czy rodzice widzą adresy e-mail innych rodziców?",
        a: "Absolutnie nie. Każdy rodzic otrzymuje w 100% osobną, indywidualną wiadomość skierowaną tylko do niego, z danymi wyłącznie jego dziecka. Pełna zgodność z RODO."
      },
      {
        q: "Czy muszę konfigurować serwery pocztowe, jeśli mamy w szkole program Outlook?",
        a: "Nie! Wystarczy wybrać tryb 'Półautomatyczna (Outlook)' – program wykorzysta bezpiecznie Twojego szkolnego Outlooka bez wpisywania żadnych haseł."
      },
      {
        q: "Czy mogę zmienić treść wiadomości lub dopisać własną informację (np. o zebraniu)?",
        a: "Tak, treść tematu i wiadomości można w każdej chwili edytować bezpośrednio w oknie wysyłki."
      }
    ]
  },
  {
    id: "eksport-excel",
    number: "07",
    title: "Eksport ewidencji do pliku Excel (.xlsx)",
    shortTitle: "Eksport do Excela",
    category: "Księgowość i finanse",
    iconName: "Download",
    description: "Wygeneruj gotowe zestawienia do plików .xlsx – zarówno dla pojedynczego ucznia, jak i zbiorczo dla całej szkoły.",
    content: `Choć program posiada własną bazę danych, wiemy, że księgowość w gminie często wymaga plików Excela. **Dinner App** posiada dedykowany moduł eksportu:

- **Eksport indywidualny ucznia**:
  - Tabela 1:1 z rozkładem na dni robocze miesiąca (zupy, drugie dania).
  - Wyliczona wartość planowana, suma odliczeń i kwota do zapłaty.
  - Generuje gotowy, sformatowany plik z automatyczną nazwą: \`nazwisko_imie_MM.rrrr.xlsx\`.
- **Eksport danych zbiorczych**:
  - Dwa warianty do wyboru: **Podsumowanie łączne** (do sprawozdań budżetowych) lub **Szczegółowy rozkład na dni** (dla kuchni i intendenta).
  - Możliwość osobnego wyeksportowania sumy planowanych posiłków oraz sumy odliczeń.`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 114757.png",
        caption: "Okno eksportu danych indywidualnego ucznia do pliku Excel"
      },
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 114841.png",
        caption: "Eksport danych zbiorczych z wyborem wariantu: podsumowanie łączne lub rozkład na dni"
      }
    ],
    steps: [
      "W widoku ucznia lub danych zbiorczych kliknij przycisk 'Eksport danych'.",
      "Wybierz wariant eksportu (np. Pełna ewidencja obiadów lub Podsumowanie łączne).",
      "Kliknij 'Eksportuj do pliku Excel'.",
      "Plik zostanie zapisany na Twoim dysku i jest gotowy do otwarcia lub wydrukowania."
    ],
    faq: [
      {
        q: "Czy wygenerowany plik otworzy się w starszych wersjach programu Excel lub LibreOffice?",
        a: "Tak, generowane pliki to standardowy format .xlsx zgodny z Microsoft Excel (2007-2024), Office 365, LibreOffice Calc oraz Arkuszami Google."
      },
      {
        q: "Czy plik zawiera estetyczne formatowanie i nagłówki?",
        a: "Tak, arkusz jest czytelnie pokolorowany, posiada wyraźne nagłówki, obramowania tabel i formatowanie walutowe (zł)."
      },
      {
        q: "Gdzie domyślnie zapisują się wyeksportowane pliki?",
        a: "W folderze 'Pobrane' na Twoim komputerze lub w wybranej przez Ciebie lokalizacji."
      }
    ]
  },
  {
    id: "ustawienia-cennik-dni-wolne",
    number: "08",
    title: "Cennik, rachunek bankowy i dni wolne",
    shortTitle: "Cennik i dni wolne",
    category: "Konfiguracja",
    iconName: "Settings",
    description: "Dostosuj globalne stawki za zupy i drugie dania, numer konta do przelewów oraz zablokuj ferie w kalendarzu.",
    content: `Wszystkie parametry finansowe szkoły konfigurujesz w przejrzystym oknie **Ustawienia** (dostępnym przez ikonę koła zębatego w lewym górnym rogu):

1. **Ustawienia cennika obiadów**:
   - Cena za zupę (PLN / zł) – np. 5,00 zł
   - Cena za drugie danie (PLN / zł) – np. 15,00 zł
   - Stawki te są automatycznie stosowane przy wszystkich nowych kalkulacjach.
2. **Dane do przelewu i płatności**:
   - Numer rachunku bankowego do wpłat (IBAN) – wstawiany automatycznie do generowanych wiadomości mailowych.
   - Domyślny dzień miesiąca na płatność (np. 10. lub 25. dzień).
3. **Dni wolne od szkoły (święta i ferie)**:
   - Kalendarz, w którym zaznaczasz dni wolne od nauki (przerwy świąteczne, ferie zimowe, dni dyrektorskie).
   - W te dni program automatycznie blokuje i zeruje posiłki dla wszystkich uczniów naraz, więc nikt nie zostanie błędnie obciążony opłatą!`,
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
      "Rozwiń sekcję 'Ustawienia cennika obiadów' i wpisz aktualne stawki.",
      "W sekcji 'Dane do przelewu' podaj numer rachunku bankowego szkoły.",
      "W sekcji 'Dni wolne od szkoły' zaznacz terminy ferii i świąt, a następnie kliknij 'Zamknij i zapisz'."
    ],
    faq: [
      {
        q: "Co jeśli w trakcie roku szkolnego gmina podniesie stawkę za obiady?",
        a: "Zmieniasz stawkę w cenniku – nowe wyliczenia od kolejnego miesiąca będą uwzględniać nową cenę, a historia minionych miesięcy zachowa ówczesne stawki."
      },
      {
        q: "Czy muszę pamiętać o odwoływaniu obiadów w Boże Narodzenie i Wielkanoc?",
        a: "Nie! Wystarczy zaznaczyć te dni w sekcji 'Dni wolne od szkoły'. Program sam wykluczy je ze wszystkich planów posiłków dla całej szkoły."
      },
      {
        q: "Czy można zresetować dane przed nowym rokiem szkolnym?",
        a: "W ustawieniach znajduje się bezpieczna sekcja resetowania i archiwizacji bazy, zabezpieczona ostrzeżeniem przed przypadkowym kliknięciem."
      }
    ]
  },
  {
    id: "baza-danych-sqlite-postgres",
    number: "09",
    title: "Baza danych: Lokalna (SQLite) vs Sieciowa (PostgreSQL)",
    shortTitle: "Baza lokalna i sieciowa",
    category: "Architektura i IT",
    iconName: "Database",
    description: "Pracuj na jednym komputerze w gabinecie intendenta lub współdziel dane z sekretariatem i księgowością w sieci.",
    content: `Aplikacja **Dinner App** została zaprojektowana tak, aby idealnie pasować zarówno do małej wiejskiej szkoły, jak i wielkiego zespołu szkolno-przedszkolnego:

- **Lokalna baza (SQLite)** – domyślny tryb pracy:
  - Wszystkie dane zapisywane są bezpośrednio w bezpiecznym pliku na Twoim komputerze.
  - Zero konfiguracji serwerów, zero skomplikowanych haseł.
  - Program działa w 100% offline, nawet jeśli w szkole padnie internet.
- **Sieciowa baza (PostgreSQL / Supabase)** – praca zespołowa (wielostanowiskowa):
  - Idealne rozwiązanie, gdy nad obiadami pracują np. dwie osoby: intendent przyjmujący zgłoszenia w gabinecie oraz księgowa rozliczająca wpłaty w sekretariacie.
  - Baza może znajdować się na lokalnym serwerze szkolnym lub w bezpiecznej chmurze (np. Supabase).
  - Obie osoby widzą te same dane na żywo bez konieczności przesyłania plików pendrivem!`,
    screenshots: [
      {
        src: "/screenshots/Zrzut ekranu 2026-09-21 113955.png",
        caption: "Wybór trybu pracy bazy: Lokalna SQLite lub Sieciowa PostgreSQL"
      }
    ],
    steps: [
      "Otwórz Ustawienia i rozwiń sekcję 'Baza danych (Lokalna SQLite / Sieciowa PostgreSQL)'.",
      "Wybierz 'Lokalna baza (SQLite)', jeśli pracujesz na jednym komputerze.",
      "Wybierz 'Sieciowa baza (PostgreSQL)', jeśli chcesz połączyć kilka komputerów w szkole.",
      "Wpisz parametry połączenia (host, baza, użytkownik) i kliknij 'Połącz i zapisz'."
    ],
    faq: [
      {
        q: "Czy do korzystania z programu potrzebuję informatyka?",
        a: "W trybie lokalnym (SQLite) absolutnie nie – program instaluje się w 15 sekund i działa od razu. W trybie sieciowym (PostgreSQL) szkolny informatyk może podłączyć bazę w kilka minut."
      },
      {
        q: "Czy dane dzieci są bezpieczne pod kątem RODO?",
        a: "W trybie lokalnym dane nigdy nie opuszczają dysku komputera w szkole. W trybie sieciowym połączenie jest szyfrowane (SSL), co gwarantuje pełną zgodność z normami oświatowymi."
      },
      {
        q: "Jak zrobić kopię zapasową bazy danych?",
        a: "W trybie lokalnym wystarczy skopiować plik bazy danych (np. na bezpieczny pendrive szkolny). W trybie PostgreSQL kopie zapasowe mogą wykonywać się automatycznie."
      }
    ]
  }
];
