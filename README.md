# Autoelektrika Berdik — Landing Page

Premium landing page s digitalnim pomoćnikom za **Autoelektrika Berdik**, autoelektričarski servis u Velikoj Gorici.

## Tech stack

- Next.js App Router + TypeScript
- Tailwind CSS v4
- shadcn/ui-style komponente (Button, Badge, Dialog)
- framer-motion animacije
- lucide-react + react-icons ikone

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Što je demo

Ova stranica je **demo/prototip** koji uključuje:

- Premium landing page s tamnim automotive dizajnom
- Mock digitalni pomoćnik (chat widget) s hardkodiranim odgovorima
- **Nema** pravog slanja poruka servisu
- **Nema** pravog bookinga termina
- Galerija i recenzije koriste placeholder sadržaj

## Struktura projekta

```
app/
  page.tsx          — glavna landing stranica
  layout.tsx        — root layout + metadata
  globals.css       — tamna premium tema
components/
  navbar.tsx
  hero.tsx
  problem-section.tsx
  services-section.tsx
  premium-section.tsx
  digital-assistant-section.tsx
  chat-widget.tsx
  chat-provider.tsx
  how-it-works.tsx
  about-section.tsx
  gallery-section.tsx
  testimonials.tsx
  contact-section.tsx
  footer.tsx
  ui/               — shadcn-style komponente
lib/
  data.ts           — svi tekstovi i podaci (lako za prilagodbu)
  chat-logic.ts     — mock logika odgovora chata
  utils.ts
```

## Kako spojiti pravi sustav

### 1. Baza podataka (Supabase)

- Tablice: `inquiries`, `appointments`, `customers`
- Spremanje upita iz chata s podacima o vozilu i simptomima

### 2. LLM API route

```typescript
// app/api/chat/route.ts
// TODO: Replace mock response logic with real LLM API route + WhatsApp Business integration.
```

Preporučeni provideri: Groq, xAI, OpenAI — za generiranje follow-up pitanja i sažetka upita.

### 3. WhatsApp Business

- WhatsApp Business Cloud API ili legalni WhatsApp provider (Twilio, 360dialog)
- Slanje potvrde termina klijentu
- Obavijest vlasniku o novom upitu

### 4. Kalendar

- Google Calendar API ili Cal.com za termine
- Admin panel za potvrdu/odbijanje termina

### 5. Admin panel

- Pregled upita
- Potvrda termina
- Povijest komunikacije

## Sigurnosne napomene

Digitalni pomoćnik **ne smije**:

- Davati tehničke garancije ili obećavati popravak
- Zaključivati konačnu dijagnozu
- Samostalno potvrđivati termine

Pomoćnik **samo**:

- Prikuplja simptome i podatke o vozilu
- Priprema uredan upit za servis
- Predlaže termin (potvrđuje vlasnik/servis)

## TODO prije produkcije

- [ ] Provjeriti kontakt podatke s vlasnikom (`lib/data.ts`)
- [ ] Zamijeniti placeholder fotografije pravim slikama iz radionice
- [ ] Zamijeniti placeholder recenzije stvarnim (Facebook/Google)
- [ ] Spojiti WhatsApp i LLM API
- [ ] Dodati Google Analytics / cookie banner ako treba

## Deployment (Vercel)

1. Push na GitHub
2. Import projekta u Vercel
3. Deploy — nema dodatne konfiguracije

## Kontakt (placeholder)

- **Adresa:** Pleška 92, Velika Gorica
- **Mobitel:** +385 91 254 6637
- **Fiksni:** 01 / 626 5708
- **Facebook:** [autoelektrika.berdik](https://web.facebook.com/autoelektrika.berdik)
