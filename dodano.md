1. Speculation Rules (BaseLayout.astro)
Prerendira stranice u pozadini dok korisnik čita trenutnu stranicu. Kad klikne link, stranica se učita trenutačno jer je već bila pripremljena. moderate eagerness čeka hover prije nego krene — balans između brzine i trošenja resursa. Utjecaj: drastično poboljšava perceived load time i Time to First Byte (TTFB).

2. System Font Stack (BaseLayout.astro)
Koristi fontove koji već postoje na uređaju korisnika — nula dodatnih HTTP requestova za preuzimanje fontova. Google Fonts npr. dodaje 200-500ms na load time. CSS varijable --font-header i --font-body omogućuju lako mijenjanje na jednom mjestu. Utjecaj: eliminira font-related layout shift (CLS) i ubrzava First Contentful Paint (FCP).

3. HTML kompresija i minifikacija (astro.config.mjs)
compressHTML: true uklanja whitespace i komentare iz HTML outputa. lightningcss minificira CSS brže od defaultnog alata. terser agresivnije minificira JS i briše console.log iz produkcije. Utjecaj: manji fileovi = brže preuzimanje = bolji Lighthouse score.

4. Logo u header i footer
Inline SVG ikone za društvene mreže — bez dodatnih HTTP requestova. Logo u public/ folderu s loading="eager" i fetchpriority="high" jer je uvijek vidljiv pri učitavanju. aria-label na svim linkovima za accessibility. Utjecaj: poboljšava Core Web Vitals LCP jer browser prioritizira logo, accessibility score u Lighthouseu.

5. Dinamički meta title i description
Svaka stranica ima jedinstven title i description koji se proslijeđuju kroz props. Utjecaj: direktan ranking faktor — Google koristi title tag kao jedan od najvažnijih on-page SEO signala.

6. Schema markup
Više tipova schema dodan kroz cijeli projekt:

EducationalOrganization u BaseLayout — Google prepoznaje stranicu kao obrazovnu platformu
WebPage na svakoj stranici — opisuje konkretnu stranicu
WebSite s SearchAction samo na homepageu — može prikazati search box direktno u Google rezultatima
WebApplication s author u CalculatorLayout — E-E-A-T signal za nastavnike koji izrađuju kalkulatore
BreadcrumbList na dinamičkim stranicama — prikazuje putanju direktno u search rezultatima

Utjecaj: rich results u Googleu, bolji CTR, E-E-A-T signali koji su posebno važni za obrazovni sadržaj.

7. Meta tagovi (BaseLayout.astro)
Dodano:

theme-color — boja browsera na mobitelu, brand dojam
og:locale i og:site_name — bolji preview kad se dijeli na društvenim mrežama
apple-touch-icon — ikona kad se doda na iPhone homescreen
language i author — dodatni signali crawlerima
robots: index, follow — eksplicitna dozvola za indeksiranje

Utjecaj: bolji CTR kroz kvalitetnije social previews, manji bounce rate korisnika koji dolaze sa društvenih mreža.

8. robots.txt
Blokira /api/ od indeksiranja i navodi lokaciju sitemapa. Bez robots.txt Google indeksira sve uključujući tehničke rute koje ne trebaju biti u rezultatima pretrage.

9. Sitemap (astro.config.mjs + @astrojs/sitemap)
Automatski se generira pri buildu s listom svih stranica, frekvencijom ažuriranja i prioritetima. Prijavljen u robots.txt i Google Search Consoleu. Utjecaj: Google brže otkriva nove stranice, posebno važno za dinamičke rute poput /instrukcije/zagreb/matematika.

10. Breadcrumb komponenta
Vizualni breadcrumb na stranici + BreadcrumbList schema. Google prikazuje putanju ispod naslova u search rezultatima, npr. stem-online.hr › instrukcije › zagreb › matematika. Utjecaj: povećava CTR jer korisnik odmah vidi kontekst stranice, poboljšava navigaciju što smanjuje bounce rate.

11. aria-current="page" u navigaciji
Screen readeri i assistive tehnologije znaju na kojoj stranici se korisnik nalazi. Dva odvojena aria-label na header i footer navigaciji jer stranica ima više <nav> elemenata. Utjecaj: accessibility score u Lighthouseu, Google uzima accessibility kao ranking signal.

Ukupni efekt na Core Web Vitals:

LCP (Largest Contentful Paint) — poboljšan kroz fetchpriority="high" na logu i speculation rules
CLS (Cumulative Layout Shift) — poboljšan kroz definirane width i height na slikama i system fontove koji ne uzrokuju FOUT
FID/INP (Interaction to Next Paint) — poboljšan kroz terser minifikaciju i partytown koji third-party skripte prebacuje u Web Worker