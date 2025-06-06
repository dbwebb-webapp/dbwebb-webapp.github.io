---
title: kmom01
author:
  - efo
revision:
  "2023-03-01": (A, efo) Första utgåvan v5.
layout: default
---
Kmom01: Web Components
==================================

Tanken är att komma igång med utveckling av mobila applikationer. De mobila applikationerna utvecklar vi med tekniker baserade på HTML, CSS och JavaScript. Vi ser hur vi kan utnyttja dessa tekniker för att ändra innehållet utan att ladda om applikationen. Som ett första steg så läser vi på om grunderna och börjar så smått med det löpande projektet för alla sex kursmoment.

Vi har i tidigare kurser sett hur vi man kan skapa applikationer i webbläsaren där vi aldrig laddar om sidan. Vi ska fortsätta på det spåret och bygga vidare på detta med webbens inbyggda teknologier för till exempel hämtning av data från ett API.

Som ett första steg ska vi börja med en löpande uppgift där vi i detta kursmoment skapar början till en lagerhanteringsapp. Nedan finns en liten video som visar hur det kan se ut när man är klar med Lager appen del 1.

[YOUTUBE src=DxGlC-MUwJo width=630 caption="Lager appen del 1."]



<small><i>(Detta är instruktionen för kursmomentet och omfattar det som skall göras inom ramen för kursmomentet. Momentet omfattar cirka **20 studietimmar** inklusive läsning, arbete med övningar och uppgifter, felsökning, problemlösning, redovisning och eftertanke. Läs igenom hela kursmomentet innan du börjar jobba. Om möjligt -- planera och prioritera var du vill lägga tiden.)</i></small>



Labbmiljön  {#labbmiljo}
---------------------------------

*(ca: 1 studietimme)*

Som i andra kurser bör du ha en lokal labbmiljö innehållande:

* Webbläsare (gärna flertalet olika)
* En bash-terminal (WSL2 för Windows)
* Visual Studio Code

I denna kursen använder vi Git och GitHub som utgångspunkt för vår labb- och studiemiljö.

Har du inte tidigare jobbat med Git rekommenderas denna guiden [Git](https://dbwebb.se/guide/git/introduktion){:target="_blank"}

Börja med att lämna in [uppgiften Github konto på Canvas](https://bth.instructure.com/courses/6413/assignments/56315){:target="_blank"} enligt videon nedan.

[YOUTUBE src=dv09UyTAnQk caption="Uppgiften GitHub Konto"]

Acceptera sedan inbjudan och använd SAML SSO inloggning för att knyta ditt GitHub konto mot ditt studentkonto.

[YOUTUBE src=keEGqOEdpbI caption="Acceptera inbjudan"]

 I nedanstående video visar Emil hur du kommer igång med kursen. Om du föredrar text kan du hoppa över videon, men den är starkt rekommenderat.

[YOUTUBE src=47fDUCRsVf0 caption="Kom igång med kursens infrastruktur"]

Du börjar kursen genom att skapa en `webapp` katalog i din `dbwebb-kurser`-katalog. Du kan sedan klona `example`-repot ([dbwebb-webapp/webapp-example](https://github.com/dbwebb-webapp/webapp-example){:target="_blank"}) till `webapp`-katalogen så du har tillgång till kursens exempel-kod.

```shell
cd $HOME/dbwebb-kurser
mkdir webapp
cd webapp
git clone https://github.com/dbwebb-webapp/webapp-example.git
```

Sedan vill du skapa en `fork` av repot [dbwebb-webapp/webapp-lager](https://github.com/dbwebb-webapp/webapp-lager){:target="_blank"}. Du klonar sedan repot till din `dbwebb-kurser/webapp` katalog. Se till att byta ut användarenamn mot ditt användarenamn i de två nedanstående URL'r.

```shell
git clone git@github.com:användarenamn/webapp-lager.git
```

Gå nu till sidan https://github.com/användarenamn/webapp-lager/actions och godkänn att Actions kan köras genom att klicka på stora gröna knappen: "I understand my workflows, go ahead and run them". Dessa workflows används för att köra tester, validering, driftsättning och rättning.

Avsluta veckans uppstart med att skapa en `branch` för att jobba med kmom01 genom följande kommando.

```shell
git checkout -b kmom01
```



Veckans genomgång  {#genomgang}
---------------------------------

Emil har genomgånger måndagar kl 13:15, efter genomgången uppdateras denna delen av sidan med veckans genomgång.

[YOUTUBE src=wc_c5LdvXMw width=630 caption="Veckans genomgång"]



Veckans föreläsning  {#forelasning}
---------------------------------

Emil har föreläsningar onsdagar kl 10:15, efter föreläsningen uppdateras denna delen av sidan med veckans föreläsning.

[YOUTUBE src=km8ea3-QHQw width=630 caption="Veckans föreläsning"]


Läsanvisningar  {#lasanvisningar}
---------------------------------

*(ca: 6-10 studietimmar)*



### Artiklar {#artiklar}

Läs följande artiklar för att få bakgrunden till övningarna.

1. Läs om viewport på MDN i artikeln "[Using the viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag){:target="_blank"}".

1. Bekanta dig med dokumentationen för [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API){:target="_blank"} som vi använder för att ladda data via JavaScript.

1. Bekanta dig översiktligt med _web components_ i artikeln "[Introduction](https://www.webcomponents.org/introduction){:target="_blank"}".



### Video {#video}

1. Det finns en [videoserie](https://www.youtube.com/playlist?list=PLKtP9l5q3ce_CbhJOudHjxkjYofM98kvh){:target="_blank"} kopplat till kursen, titta på videos som börjar på 0 och 1.



### Lästips {#lastips}

1. Läs översiktligt denna samling av "best-practices" för typografi på webben [Typography Handbook](https://web.archive.org/web/20231219201010/http://typographyhandbook.com/){:target="_blank"}. Spara den i dina bokmärken som en framtida referens.

1. För mer om tillgänglighet (accessibility, a11y) titta in på [The A11Y Project](https://a11yproject.com/){:target="_blank"}.



Övningar & Uppgifter  {#ovningar_uppgifter}
-------------------------------------------

*(ca: 6-10 studietimmar)*



### Övningar {#ovningar}

Gör följande övningar för att träna inför uppgifterna.

1. Läs igenom artikeln "[Typografi i mobila enheter](kunskap/typografi-i-mobila-enheter)". Du kan spara koden i ditt webapp-lager repo.

2. Skapa en API-nyckel och produkter i ditt egna lager med hjälp av artikeln "[Introduktion till Lager-API:t](kunskap/introduktion-till-lager-api)".

3. Gör övningen "[Web Components](kunskap/web-components)". Spara resultatet i ditt kursrepo i ditt webapp-lager repo.



### Uppgifter {#uppgifter}

Dessa uppgifter skall utföras och redovisas.

1. Gör uppgiften "[Lager appen del 1](uppgift/lager-appen-del-1)". Spara din kod i ditt kursrepo i ditt webapp-lager repo.

Emil visar i nedanstående video hur du gör en inlämning i webapp.

[YOUTUBE src=PqbkxMyUGY8 width=630 caption="En inlämning i webapp"]



Resultat & Redovisning  {#resultat_redovisning}
-----------------------------------------------

*(ca: 1-2 studietimmar)*

Skriv en redovisningstext och redovisa dina reflektioner från kursmomentet. Besvara de specifika frågor som finns för varje kursmoment. Reflektera över svårigheter, problem, lösningar, erfarenheter, lärdomar, resultatet, etc.

Se till att följande frågor besvaras i redovisningstexten som en del av din Pull Request, se videon nedan för hur du gör en inlämning.

* Är du sedan tidigare bekant med utveckling av mobila appar?
* Vilket är den viktigaste lärdomen du gjort om typografi för mobila enheter?
* Du har i kursmomentet hämtat data från ett stycken API. Hur kändes detta?

TIL är en akronym för “Today I Learned” vilket leksamt anspelar på att det finns alltid nya saker att lära sig, varje dag. Man brukar lyfta upp saker man lärt sig och där man kanske hajade till lite extra över dess nyttighet eller enkelhet, eller så var det bara en ny lärdom för dagen som man vill notera.

* Vilken är din TIL för detta kmom?

I artikeln "[Att skriva en bra redovisningstext](https://dbwebb.se/kurser/faq/att-skriva-en-bra-redovisningstext)" finns exempel och goda råd kring att skriva bra redovisningstexter.


