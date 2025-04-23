---
title: kmom04
author:
    - mos
    - efo
revision:
  "2023-03-28": (E, efo) Uppdaterad för webapp-v5.
  "2018-02-13": (D, efo) Förberedelser för webapp-v3.
  "2017-03-17": (C, efo) Förberedelser för webapp-v2.
  "2015-12-04": (B, mos) lade till läsanvisningar i boken samt rev c av artikeln.
  "2015-11-04": (A, mos) Första utgåvan för kursen.
layout: default
---
Kmom04: Autentisering med JWT
==================================

Vi fortsätter med Lager appen och lägger till en funktion för att skapa fakturor utifrån en order. Alla ska inte kunna skapa fakturor så innan vi skapar faktura funktionen skapar vi inloggning och tittar på JSON Web Tokens för autentisering.

När man skapar en faktura är det bra att ha snygga och responsiva tabeller. Så kursmomentets GUI-komponent är just tabeller och hur vi optimerar dessa för mobila enheter.



<!--more-->



Så här kan det se ut när vi är klara.

[YOUTUBE src=BPigfJ58JPI width=630 caption="Lager appen i kursmoment 4."]



<small><i>(Detta är instruktionen för kursmomentet och omfattar det som skall göras inom ramen för kursmomentet. Momentet omfattar cirka **20 studietimmar** inklusive läsning, arbete med övningar och uppgifter, felsökning, problemlösning, redovisning och eftertanke. Läs igenom hela kursmomentet innan du börjar jobba. Om möjligt -- planera och prioritera var du vill lägga tiden.)</i></small>



Starta igång veckan {#uppstart}
----------------------------------------------

Starta igång veckan genom att skapa en `branch` för att jobba med kmom04 genom följande kommandon.

```shell
cd $HOME/dbwebb-kurser/webapp/webapp-lager
git checkout -b kmom04
```



Veckans genomgång & föreläsning {#genomgang}
---------------------------------

Emil har genomgånger måndagar kl 13:15, efter genomgången uppdateras denna delen av sidan med veckans genomgång.

[YOUTUBE src=UALaFaipAi4 width=630 caption="Veckans föreläsning"]



Läsanvisningar  {#lasanvisningar}
---------------------------------

*(ca: 6-10 studietimmar)*



### Artiklar {#artiklar}

Läs följande artiklar för att få bakgrunden till övningarna.

1. Bekanta dig med [JSON Web Tokens](https://jwt.io).



### Video  {#video}

Se följande videor.

1. Det finns en [videoserie](https://www.youtube.com/playlist?list=PLKtP9l5q3ce_CbhJOudHjxkjYofM98kvh) kopplat till kursen, titta på videos som börjar på 4.



Övningar & Uppgifter {#ovningar_uppgifter}
-------------------------------------------

*(ca: 6-10 studietimmar)*



### Övningar {#ovningar}

Gör följande övningar för att träna inför uppgifterna.

1. Gör övningen [Tabeller i mobila enheter](kunskap/tabeller-i-mobila-enheter). Spara eventuella filer i ditt webapp-lager repo.

1. Gör övningen [Login med JWT](kunskap/login-med-jwt). Spara eventuella filer i ditt webapp-lager repo.

1. Gör övningen [Content Security Policy](kunskap/content-security-policy). Spara eventuella filer i ditt webapp-lager repo.



### Uppgifter {#uppgifter}

Dessa uppgifter skall utföras och redovisas.

1. Gör uppgiften "[Lager appen del 4](uppgift/lager-appen-del-4)". Spara dina filer i ditt webapp-lager repo.



Resultat & Redovisning  {#resultat_redovisning}
-----------------------------------------------

*(ca: 1-2 studietimmar)*

Se till att följande frågor besvaras i redovisningstexten i din inlämning.

* Vilka utmaningar finns med tabeller i mobila enheter?
* Vilka fördelar finns med JWT?
* Hur använde du din kunskap från tidigare kursmoment för att göra inloggningsformuläret?
* Vilken är din TIL för detta kmom?
