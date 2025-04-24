---
title: kmom06
author:
    - mos
    - efo
revision:
  "2024-04-24": (F, aar) Ny genomgångs video.
  "2023-04-03": (E, efo) Nytt i och med VT24.
  "2023-04-03": (E, efo) Nytt i och med webapp-v5.
  "2017-04-21": (D, efo) Förberedelser för webapp-v3.
  "2017-04-21": (C, efo) Ändringar inför släpp av kmom.
  "2017-03-17": (B, efo) Förberedelser för webapp-v2.
  "2015-12-11": (A, mos) Första utgåvan för kursen.
layout: default
---
Kmom06: Real-tids kommunikation
==================================

I detta kmom tittar vi på hur vi med hjälp av websockets kan kommunicera i real-tid mellan flera olika klienter. Vi gör det genom att bygga en kundtjänst chatt, där alla i kursen kan prata tillsammans.

Så här kan det se ut när vi är klara med kursmoment 06.

[YOUTUBE src=5i44jkizxgU width=630 caption="Lager appen i kursmoment 6."]



<small><i>(Detta är instruktionen för kursmomentet och omfattar det som skall göras inom ramen för kursmomentet. Momentet omfattar cirka **20 studietimmar** inklusive läsning, arbete med övningar och uppgifter, felsökning, problemlösning, redovisning och eftertanke. Läs igenom hela kursmomentet innan du börjar jobba. Om möjligt -- planera och prioritera var du vill lägga tiden.)</i></small>



Starta igång veckan {#uppstart}
----------------------------------------------

Starta igång veckan genom att skapa en `branch` för att jobba med kmom06 genom följande kommandon.

```shell
cd $HOME/dbwebb-kurser/webapp/webapp-lager
git checkout -b kmom06
```



Veckans genomgång  {#genomgang}
---------------------------------

Emil har genomgånger måndagar kl 13:15, efter genomgången uppdateras denna delen av sidan med veckans genomgång.



Veckans föreläsning  {#forelasning}
---------------------------------

Emil har föreläsningar onsdagar kl 10:15, efter föreläsningen uppdateras denna delen av sidan med veckans föreläsning.



Läsanvisningar  {#lasanvisningar}
---------------------------------

*(ca: 6-10 studietimmar)*

### Artiklar {#artiklar}

Läs följande artiklar för att få bakgrunden till övningar och uppgifter.

1. Bekanta dig översiktligt med [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

1. Bekanta dig med [socket.io](https://socket.io/).

Du kan även med fördel titta på denna video:

[YOUTUBE src=1BfCnjr_Vjg width=630 caption="WebSockets in 100 seconds and beyond."]



Övningar & Uppgifter  {#ovningar_uppgifter}
-------------------------------------------

*(ca: 8-16 studietimmar)*



### Övningar {#ovningar}

1. Jobba igenom övningen "[Real-tids chatt](kunskap/real-tids-chatt)". Utöka din app i webbapp-lager repot.



### Uppgifter {#uppgifter}

Dessa uppgifter skall utföras och redovisas.

1. Gör uppgiften "[Lager appen del 6](uppgift/lager-appen-del-6)". Spara dina filer i webapp-lager repot.



Resultat & Redovisning  {#resultat_redovisning}
-----------------------------------------------

*(ca: 1-2 studietimmar)*

Se till att följande frågor besvaras i redovisningstexten.

* Hur kändes det att jobba med WebSockets?
* Fick du till ett bra gränssnitt för att chatta med kundtjänsten?
* Vilken är din TIL för detta kmom?
* Vilken är din "In This Course I Learned" (ITCIL) för kursen, välj ut den ena sak du anser mest viktig?
