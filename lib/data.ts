export const business = {
  name: "AUTOELEKTRIKA BERDIK",
  subtitle: "Dijagnostika • Autoelektrika • Velika Gorica",
  tagline: "Dijagnostika i autoelektrika u Velikoj Gorici",
  address: "Pleška 92, Velika Gorica",
  phone: "+385 91 254 6637",
  phoneHref: "tel:+385912546637",
  landline: "01 / 626 5708",
  landlineHref: "tel:+38516265708",
  // TODO: provjeriti s vlasnikom
  facebook: "https://web.facebook.com/autoelektrika.berdik",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ple%C5%A1ka+92,+Velika+Gorica",
};

export const navLinks = [
  { label: "Usluge", href: "#usluge" },
  { label: "Dijagnostika", href: "#dijagnostika" },
  { label: "Kako radi", href: "#kako-radi" },
  { label: "Lokacija", href: "#kontakt" },
  { label: "Kontakt", href: "#kontakt" },
];

export const hero = {
  badge: "Autoelektrika • Dijagnostika • Velika Gorica",
  headline: "Ne nagađamo kvar. Dijagnosticiramo ga.",
  subheadline:
    "Električne instalacije, anlaseri, alternatori, rasvjeta, centralno zaključavanje i dijagnostika kvarova — uz digitalnog pomoćnika koji prima upit dok je majstor fokusiran na vozilo.",
  primaryCta: "Opišite kvar",
  secondaryCta: "Nazovi servis",
  microcopy:
    "Servis po dogovoru • Velika Gorica • Upiti 0–24 preko digitalnog pomoćnika",
  diagnosticCard: {
    title: "UPIT KLIJENTA",
    vehicle: "VW Golf 7, 2016",
    problem: "ne pali, čuje se klik",
    symptoms: "lampice rade, akumulator mijenjan prošle godine",
    recommendation: "termin za dijagnostiku startera/anlasera i napajanja",
  },
};

export const problemSection = {
  title: 'Najgori kvarovi počinju rečenicom: "Nešto mi ne radi."',
  description:
    "Klijenti često ne znaju opisati autoelektrični kvar. Majstor gubi vrijeme na dodatna pitanja, prekida posao i prima neuredne poruke.",
  cards: [
    {
      id: "no-start",
      title: "Auto ne pali",
      description: "Klik, spor start ili potpuni prekid — prvi korak je dijagnostika paljenja.",
      icon: "ZapOff",
      quickMessage: "Auto neće upaliti, samo klikne kad okrenem ključ.",
    },
    {
      id: "warning-light",
      title: "Svijetli lampica",
      description: "Lampica akumulatora, motora ili druga upozorenja tijekom vožnje.",
      icon: "AlertTriangle",
      quickMessage: "Svijetli mi lampica akumulatora dok vozim.",
    },
    {
      id: "lights",
      title: "Ne radi rasvjeta",
      description: "Farovi, žmigavci, stop svjetla ili LED/Xenon problemi.",
      icon: "Lightbulb",
      quickMessage: "Ne rade mi farovi / žmigavci.",
    },
    {
      id: "battery",
      title: "Ne puni akumulator",
      description: "Prazni se akumulator, nestabilan napon ili slabo punjenje.",
      icon: "BatteryWarning",
      quickMessage: "Akumulator se prazni, lampica punjenja svijetli.",
    },
    {
      id: "lock",
      title: "Ne radi centralno zaključavanje",
      description: "Daljinski, ključ ili tipka iznutra ne reagiraju.",
      icon: "Lock",
      quickMessage: "Ne radi mi daljinsko zaključavanje.",
    },
    {
      id: "comfort",
      title: "Ne rade brisači / ventilacija",
      description: "Električni sustavi komfora i sigurnosti u vozilu.",
      icon: "Wind",
      quickMessage: "Ne rade brisači ili ventilacija.",
    },
  ],
};

export const services = {
  title: "Autoelektrika i dijagnostika — od simptoma do rješenja",
  items: [
    {
      title: "Autodijagnostika",
      description:
        "Očitanje grešaka, analiza simptoma, prvi korak prije popravka.",
      symptoms: "Check engine, nestabilan rad, nepoznat kvar",
    },
    {
      title: "Anlaseri / elektropokretači",
      description: "Problemi s paljenjem, klikovi, prekidi, spor start.",
      symptoms: "Klik pri paljenju, spor start, potpuni prekid",
    },
    {
      title: "Alternatori i punjenje",
      description:
        "Akumulator se prazni, lampica punjenja, nestabilan napon.",
      symptoms: "Lampica akumulatora, prazni akumulator, slaba svjetla",
    },
    {
      title: "Električne instalacije",
      description: "Kvarovi u instalacijama, kontakti, osigurači, vodovi.",
      symptoms: "Prekidi struje, pregrijavanje, neispravni kontakti",
    },
    {
      title: "Rasvjeta i signalizacija",
      description: "Farovi, žmigavci, stop svjetla, LED/Xenon, signalizacija.",
      symptoms: "Ne rade farovi, žmigavci, stop svjetla",
    },
    {
      title: "Centralno zaključavanje i alarmi",
      description: "Daljinsko zaključavanje, auto alarmi, Meta alarmi.",
      symptoms: "Ne radi daljinski, alarm se ne aktivira",
    },
    {
      title: "Brisači, ventilacija i auto klima",
      description: "Električni sustavi komfora i sigurnosti.",
      symptoms: "Ne rade brisači, ventilator, klima",
    },
    {
      title: "Novi autodijelovi za autoelektriku",
      description: "Informativna stavka — dijelovi se nabavljaju po potrebi.",
      symptoms: "Zamjena anlasera, alternatora, releja",
    },
  ],
};

export const premiumSection = {
  title: "Servis po dogovoru. Fokus na vozilo. Bez nepotrebnog čekanja.",
  description:
    "Dobar autoelektričarski posao traži koncentraciju. Zato je cilj da svaki upit dođe s jasnim informacijama: koji auto, koji problem, kada se događa i koliko je hitno. Digitalni pomoćnik prikuplja osnovne podatke prije dolaska, a majstor dobiva bolji pregled prije nego auto uđe u radionicu.",
  principles: [
    {
      title: "Precizna dijagnostika",
      description: "Prvo se razumije problem, tek onda se radi.",
      icon: "ScanLine",
    },
    {
      title: "Rad po dogovoru",
      description: "Manje čekanja, više fokusa na vozilo.",
      icon: "CalendarCheck",
    },
    {
      title: "Jasna komunikacija",
      description: "Klijent zna što poslati, servis zna što očekivati.",
      icon: "MessageSquare",
    },
  ],
};

export const digitalAssistant = {
  title: "Digitalni pomoćnik koji prima upit dok je majstor ispod auta.",
  subheadline:
    'Umjesto poruke "auto mi ne pali", sustav vodi klijenta kroz prava pitanja i servisu šalje uredan opis kvara.',
  disclaimer:
    "Demo prikazuje koncept. Pravi termini i WhatsApp povezivanje spajaju se nakon dogovora s vlasnikom.",
  steps: [
    {
      step: 1,
      title: "Klijent opiše problem",
      description: "Kratki opis simptoma — bez tehničkog žargona.",
    },
    {
      step: 2,
      title: "Pomoćnik pita podatke o vozilu",
      description: "Model, godište, lampice, zvukovi, kada se kvar javlja.",
    },
    {
      step: 3,
      title: "Sustav procijeni hitnost i tip kvara",
      description: "Grupiranje simptoma u jasnu kategoriju za servis.",
    },
    {
      step: 4,
      title: "Servis dobije uredan upit",
      description: "Predloženi termin i sve informacije na jednom mjestu.",
    },
  ],
};

export const howItWorks = {
  title: "Od kaotične poruke do urednog servisnog upita",
  steps: [
    {
      title: "Opišite simptom",
      description: '"Auto ne pali", "svijetli lampica", "ne radi rasvjeta"',
      icon: "PenLine",
    },
    {
      title: "Pomoćnik pita prava pitanja",
      description: "Vozilo, godište, lampice, zvukovi, kada se kvar javlja.",
      icon: "MessagesSquare",
    },
    {
      title: "Servis dobiva bolji upit",
      description: "Manje dopisivanja, manje prekidanja, bolja priprema.",
      icon: "ClipboardCheck",
    },
    {
      title: "Dogovara se termin",
      description: "Nakon pregleda upita vlasnik/servis potvrđuje termin.",
      icon: "Calendar",
    },
  ],
  cta: "Pokreni upit",
};

export const aboutSection = {
  title:
    "Autoelektrika Berdik — lokalni servis za kvarove koji traže preciznost",
  description:
    "Autoelektrika Berdik u Velikoj Gorici bavi se autoelektrikom, dijagnostikom i popravcima električnih sustava vozila. Od problema s paljenjem, punjenjem i rasvjetom do centralnog zaključavanja, brisača, ventilacije i auto alarma — fokus je na jasnom otkrivanju uzroka, ne na nagađanju.",
  note:
    "Lokalni servis s javno vidljivim iskustvom i bazom klijenata na Facebooku.",
  badges: [
    "Velika Gorica",
    "Autoelektrika",
    "Dijagnostika",
    "Rad po dogovoru",
    "Električni kvarovi",
    "Novi dijelovi",
  ],
};

// TODO: zamijeniti pravim fotografijama iz radionice / Facebook stranice uz dopuštenje vlasnika
export const gallery = {
  title: "Radionica, dijagnostika i električni sustavi",
  images: [
    {
      alt: "Motorni prostor",
      url: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    },
    {
      alt: "Dijagnostički uređaj",
      url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    },
    {
      alt: "Instrument tabla",
      url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    },
    {
      alt: "Alternator i anlaser",
      url: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80",
    },
    {
      alt: "Automobilska rasvjeta",
      url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    },
    {
      alt: "Električne instalacije",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
  ],
};

// TODO: zamijeniti stvarnim recenzijama s Facebooka/Googlea ako vlasnik odobri
export const testimonials = {
  title: "Klijenti dolaze zbog kvara. Vraćaju se zbog povjerenja.",
  items: [
    {
      initials: "M.K.",
      text: "Brzo pronađen kvar koji drugi nisu uspjeli riješiti.",
    },
    {
      initials: "A.P.",
      text: "Jasna komunikacija i pošten pristup.",
    },
    {
      initials: "D.S.",
      text: "Auto nije palio, nakon dijagnostike sve objašnjeno konkretno.",
    },
  ],
};

export const contactSection = {
  title: "Pošaljite upit prije dolaska",
  note: "Za točan termin i dolazak pričekajte potvrdu servisa.",
  ctas: {
    describe: "Opišite kvar",
    call: "Nazovi servis",
    facebook: "Pošalji poruku na Facebook",
  },
};

export const chat = {
  fabLabel: "Opišite kvar",
  title: "Digitalni pomoćnik",
  subtitle: "Autoelektrika Berdik",
  footerNote:
    "Digitalni pomoćnik • Demo mode • WhatsApp i stvarni termini spajaju se nakon dogovora",
  welcomeMessage: `Pozdrav! Ja sam digitalni pomoćnik servisa Autoelektrika Berdik.

Mogu vam pomoći pripremiti upit za dijagnostiku ili popravak autoelektrike.

Za početak: koji auto vozite i što se događa?`,
  quickReplies: [
    "Auto ne pali",
    "Svijetli lampica",
    "Ne radi zaključavanje",
    "Trebam termin",
  ],
};

export const footer = {
  disclaimer: "Digitalni pomoćnik trenutno je demo koncept.",
};
