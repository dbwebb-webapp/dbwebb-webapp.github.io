---
title: Lager appen del 2
author: efo
category: javascript
revision:
  "2023-03-21": (B, efo) Första utgåvan i samband med kursen webapp v3.
  "2018-01-17": (A, efo) Första utgåvan i samband med kursen webapp v3.
---

![image/webapp/pick-list.png](https://dbwebb.se/image/webapp/pick-list.png)

I kursmoment 1 skapade vi grunden för vår lager app. Vi ska i detta kursmoment förbättra strukturen på vår CSS kod och bygga in en router. Vi ska bygga en plocklista vy där lagerarbetarna får en bra översikt över vart produkterna från en order finns. När varorna är plockade ska status ändras för ordern och lagersaldo ska minskas.



<!--more-->



Förkunskaper
-----------------------

Du har gjort uppgiften [Lager appen del 1](../uppgift/lager-appen-del-1). Du har jobbat dig igenom övningarna [Knappar för mobilen](../kunskap/knappar-for-mobilen) och [En router i JavaScript](../kunskap/en-router-i-javascript).



Introduktion
-----------------------

Använd lager [API:t](https://lager.emilfolino.se/v2) dokumentationen och speciellt sektionen om order. Här kan du hämta ut ordern och alla orderrader. När du ska uppdatera lagersaldot använder du dig av `PUT` HTTP-metoden för produkterna.



Krav
-----------------------

1. Strukturera din CSS kod, så du har olika moduler för dina komponenter med hjälp av CSS preprocessorn SASS .

2. Skapa en vy där lagerarbetarna ser alla ordrar redo för att packas, dvs. ordrar med status ny.

3. Vyn visar alla varor i en order, hur många som ska plockas och vart varan finns.

4. Gör en kontroll om det finns tillräckligt många av varan för att den kan packas.

5. Om det finns tillräckligt många produkter ska det finnas en möjlighet att byta status för ordern med en knapp. Byt till status Packad.

6. När status för ordern ändras måste även lagersaldot för de packade varorna minskas. Viktigt att du gör ändringar för en produkt (`products`-endpointen) och inte för orderraderna.

7. Gör ett medvetet val om du vill använda flat design eller ej.

8. Se till att det går att testa din app. Lägg till minst en order med en produkt som går att packa.
