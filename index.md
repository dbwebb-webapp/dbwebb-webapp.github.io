---
layout: default
author:
    - efo
revision:
    "2023-03-01": (A, efo) Första versionen inför VT23.
---
Webbapplikationer för mobila enheter
==================================

Kursen **Webbapplikationer för mobila enheter**, a.k.a. *webapp*, lär dig hur du bygger applikationer för mobila enheter och läsplattor med HTML, CSS och JavaScript.

Kursen syftar till att lära ut utveckling av webbapplikationer med HTML, CSS och JavaScript och fokuserar på mobila enheter och läsplattor.

Kursen går igenom konstruktioner i HTML, CSS och JavaScript som hjälper dig bygga applikationer som är oberoende av skärmens storlek och enhetens styrning (mus, touchscreen, penna, tangentbord).

Du bygger en applikation som använder sig av HTML, CSS och JavaScript på klientsidan och du jobbar med RESTful API:er och JSON-data för att bygga webappar.

Via litteraturstudier och praktiska övningar förkovrar du dig i området. I slutet av kursen får du visa dina färdigheter i ett praktiskt programmeringsprojekt där allt integreras.



Förkunskaper {#forkunskaper}
------------------------

Det formella förkunskapskravet är:

> För tillträde till kursen krävs genomgångna kurser motsvarande 15 hp i programmering och webbteknologier varav 6 hp ska vara programmering med JavaScript.



Innehåll {#innehall}
------------------------

Kursen omfattar följande områden:

* HTML5, CSS3, JavaScript med mobilt fokus.
* CSS3 för att styla webbapp som en "native app".
* Mobilen och läsplattan som test och utvecklingsmiljö.
* Touch-event.
* Responsive design, storlekar, landskap, portätt.
* Jobba med RESTful API:er och JSON.
* Mobil prestanda och tillgänglighet.
* Att använda hårdvarufunktioner som är specifika på mobila enheter, tex splash-screens, logotyper och filhantering.
* Jobba med webappar och hybrid webapp för att komma åt hårdvarunära funktioner.
* Felsökning och tekniker att debugga sitt program.
* Utvecklingsmiljö och verktyg för utveckling av mobila appar.



Mål {#mal}
------------------------

### Kunskap och förståelse {#kunskap}

Efter genomförd kurs skall studenten:

* påvisa grundläggande förståelse för utveckling av mobila applikationer med valda tekniker genom att skriftligen beskriva och sammanfatta erfarenheter och observationer från övningar och projekt.
* påvisa god förståelse för mobila enheters begränsningar och styrkor samt anpassa mobila applikationer för tillgänglighet och användbarhet.
* påvisa goda kunskaper i att skapa mobila appar, med HTML, CSS och JavaScript, genom att tillämpa dessa tekniker i praktiska övningar och projekt.
* påvisa goda kunskaper i att använda JSON API:er för att hämta, skapa, uppdatera och ta bort data genom att använda JSON API:er i praktiska övningar och projekt.


### Färdighet och förmåga {#fardighet}

Efter genomförd kurs skall studenten:

* självständigt utveckla, dokumentera och presentera ett projekt baserat på utveckling av en mobil app.
* ha god praktisk förmåga att hantera de verktyg och miljöer som används vid utveckling och felsökning av mobila appar med valda tekniker.



Kursmoment {#kursmoment}
------------------------

Kursen är uppdelad i kursmoment där varje kursmoment uppskattas till 20h studerande i form av programmering, undersökning, läsande, övningar, uppgifter, redovisning och eftertanke. Alla kursmoment skall redovisas och du samlar alla redovisningar i din me-sida.


### Kmom01: Web Components {#kmom01}

Tanken är att komma igång med utveckling av mobila applikationer. De mobila applikationerna utvecklar vi med tekniker baserade på HTML, CSS och JavaScript. Vi ser hur vi kan utnyttja dessa tekniker för att ändra innehållet utan att ladda om applikationen. Som ett första steg så läser vi på om grunderna och börjar så smått med det löpande projektet för alla sex kursmoment.

[Instruktion till kursmoment 01](kmom01).



### Kmom02: En router {#kmom02}

Vi tar en titt på vilka begränsningar och utmaningar man står inför som användare av en mobil enhet. Vi brytar ut CSS koden från kmom01 till ett GUI komponentbaserad ramverk och lägger till fler GUI komponenter till vårt ramverk.

Vi fortsätter med vår applikation från kmom01 och använder tekniker för skapa en egen router så vi kan navigera runt i vår applikation.

Innan vi gör detta tittar vi på ett verktyg som hjälper oss att söka och visa information i JSON-filer.

[Instruktion till kursmoment 02](kmom02).



### Kmom03: Formulär och CRUD {#kmom03}

I detta kursmoment fortsätter vi med att utveckla våra GUI komponenter från tidigare kursmoment. Vi skapar lättanvända formulärfält med hjälp av HTML5 och kopplar ihop fälten i formulär som är lätta att använda på små skärmar där kontext och möjligheten att skriva snabbt och enkelt saknas.

I vår applikation lägger vi till möjligheten att skapa, uppdatera och ta bort data via formulär.

[Instruktion till kursmoment 03](kmom03).



### Kmom04: Autentisering med JWT {#kmom04}

Vi fortsätter med Lager appen och lägger till en funktion för att skapa fakturor utifrån en order. Alla ska inte kunna skapa fakturor så innan vi skapar faktura funktionen skapar vi inloggning och tittar på JSON Web Tokens för autentisering.

När man skapar en faktura är det bra att ha snygga och responsiva tabeller. Så kursmomentets GUI-komponent är just tabeller och hur vi optimerar dessa för mobila enheter.

[Instruktion till kursmoment 04](kmom04).



### Kmom05: Mobila enheters styrkor {#kmom05}

Vi tar en titt på hur vi kan använda externa npm-moduler direkt i applikation när vi bygger en karta i appen. Sedan tittar vi på hur vi kan använda webbens inbyggda API:er för att hämta användarens GPS-position.

[Instruktion till kursmoment 05](kmom05).



### Kmom06: Real-tids kommunikation {#kmom06}

I detta kursmoment fortsätter vi att utnyttja styrkorna i våra mobila enheter. Vi tittar vidare på webbens inbyggda API:er och hur vi kan använda dessa för att skapa mer fullvärdiga webb applikationer.

[Instruktion till kursmoment 06](kmom06).



### Kmom07/10: Projekt och examination {#kmom10}

Avslutningsvis gör du ett projekt enligt en specifikation. Projektet är det sista som du gör och används som underlag för att examinera dig från kursen.

Projektet bygger på tidigare kursmoment och med dina nya erfarenheter skapar du en tillgänglig och användbar mobil applikation enligt specifikationen.

[Instruktion till kursmoment 10](kmom10).



Kurslitteratur {#litteratur}
----------------------------

[Måste jag skaffa kurslitteraturen](kurser/maste-jag-skaffa-kurslitteraturen)?



### Referenslitteratur {#referenslitteratur}

Följande böcker har jag valt som referenslitteratur. De kan vara bra att ha tillhands och ger lite extra läsmöjligheter. De behövs inte för att klara kursen men vill du bemästra kursens område så är dessa böcker bra startpunkter.

* **[JavaScript: The Good Parts](kunskap/boken-javascript-the-good-parts)** -- D. Crockford
  En genomgång av JavaScript Core och hur man ska, och inte ska, skriva sin kod.

* **[You Don't Know JS](kunskap/boken-you-dont-know-javascript)** -- K. Simpson (@getify)
  Om du vill förstå JavaScript på djupet och därigenom bli kung på JavaScript, men samtidigt en bättre programmerare rekommenderas You Don't Know JS starkt.



### Extra video material

Vårterminerna VT23 och VT24 hade Emil ett inslag i kursen som hette myskodning. Emil kodade oförberedd en applikation som använder sig av liknande tekniker och konstruktioner som i kursmomentet. Om ni vill titta på de videos finns de i nedanstående spellista. Målet med myskodningen var att visa hur en erfaren programmerare använder kontruktioner i ett större sammanhang.

<div class='embed-container'><iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=NFIhAKNw2kSlLTvA&amp;list=PLKtP9l5q3ce-fLewSShTtxq6w_4dHtPO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>



Rekommenderad studieplan {#studieplan}
---------------------------------------------

Kursen har en [rekommenderad studieplan](https://docs.google.com/spreadsheets/d/1F6zSLaDAXLmPgHxrmsiygJxOXbPhZuB69pd0WXhZsUQ/edit?usp=sharing){:target="_blank"} som visar en översikt över kursens olika moment och när de i tiden bör utföras för att studenten skall ligga i fas med kursens planering.

I studieplanen visas när rättning sker av respektive inlämnat moment samt när det finns möjligheter att göra restinlämningar.

Läs mer om den [rekommenderade studieplanen](https://dbwebb.se/kurser/faq/rekommenderad-studieplan){:target="_blank"}.



Lektionsplan {#lektionsplan}
---------------------------------------------

Det finns en [lektionsplan](https://docs.google.com/spreadsheets/d/1imZXLGYFsyFP6Bd9OP55cTikqz9HzoJgemxtwbfeYNU/edit?usp=sharing){:target="_blank"} som visar en detaljplanering för undervisningen i kursen, vecka för vecka.

Läs mer om [lektionsplanen](https://dbwebb.se/kurser/faq/rekommenderad-studieplan){:target="_blank"}.



Lärarstöd och handledning {#handledning}
----------------------------------------

Schemalagda labbtillfällen, hangouts samt forum och chatt de viktigaste källorna för handledning. Läs om [handledning och hjälp-till-självhjälp](https://dbwebb.se/kurser/faq/lararstod-och-handledning){:target="_blank"}.

Ofta ställda frågor (FAQ) finns på [GitHub issues](https://github.com/dbwebb-se/webapp/issues?q=is%3Aopen+is%3Aissue+label%3Afaq){:target="_blank"}.



Betygsättning {#betyg}
------------------------

Det finns ett särskilt dokument som beskriver [hur bedömning och betygsättning sker](https://dbwebb.se/kurser/faq/bedomning-och-betygsattning){:target="_blank"}.



Ladok {#ladok}
------------------------

Enligt kursplanen finns ett antal ladokmoment och de är kopplade till kursens kursmoment enligt följande.

| Kursens moment  | Ladok moment enligt kursplan  |
|-----------------|-------------------------------|
| Kmom01 + kmom02 | Uppgift 1 á 2.5hp             |
| Kmom03 + kmom04 | Uppgift 2 á 2.5hp             |
| Kmom05 - kmom10 | Projekt á 2.5hp               |

Läs mer om [rapportering av resultat](https://dbwebb.se/kurser/faq/resultatrapportering){:target="_blank"}.



Kursutvärdering och kursutveckling {#kursutvardering}
-----------------------------------------------------

Det finns ett särskilt dokument som beskriver hur arbetet med kursutvärderingar och kursutveckling sker. Det är oerhört viktigt för mig att du säger till vad du tycker om kurs och kursmaterial, du kan alltid hojta till i både forum, chatt eller mail.

Läs om hur [jag jobbar med kursutvärdering och kursutveckling](https://dbwebb.se/kurser/faq/kursutvardering-och-kursutveckling){:target="_blank"}.



Kursplan {#kursplan}
-----------------------------------------------------

Kursplanen är kursens formella dokument som fastställts av högskolan. När kursen utvärderas görs det mot kursplanen. I kursplanen kan du läsa om kursens klassificering, syfte, innehåll, mål, generella förmågor, lärande och undervisning, bedömning och examination, litteratur, mm.

Kursens namn är "Webbapplikationer för mobila enheter".

Från och med våren 2019 hittar du [kursplanen genom att söka på kurskoden DV1609 via BTH's hemsida](http://edu.bth.se/utbildning/utb_kursplaner.asp?KKurskod=DV1609){:target="_blank"}.
