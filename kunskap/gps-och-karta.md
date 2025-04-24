---
author: efo
category: javascript
revision:
  "2023-03-20": (B, efo) Första utgåvan inför kursen webapp v5.
  "2018-03-02": (A, efo) Första utgåvan inför kursen webapp v3.
---
GPS och karta v3
==================================

[FIGURE src=/image/webapp/gps.png class="right"]

Vi ska i denna övning använda [leaflet.js](https://leafletjs.com) tillsammans med [OpenStreetMap](https://www.openstreetmap.org) och Web API:t `geolocation` för att visa positionsdata på en karta. Vi ska alltså titta på hur vi med hjälp av den inbyggda GPS'en kan visa användarens position på kartan.

Exempelprogrammet från denna övning finns i kursrepot [webapp-example/gps-v5](https://github.com/dbwebb-webapp/webapp-example/tree/main/gps-v5) och i `webapp-example/gps-v5`. Använd det gärna tillsammans med övningen för att se hur de olika delarna hänger ihop. En del kod utelämnas i exemplet för att det ska vara mer lättläst i artikeln.



En karta {#karta}
--------------------------------------

Vi kommer i detta exemplet använda leaflet.js för att visa upp en karta i vår mobila enhet och för att rita ut markörer på denna karta. Vi börjar med att skapar filerna för att få ihop grunden.

```bash
touch src/components/map-view.js
```

I `index.html` lägger vi in grunden som vi har haft i tidigare kursmoment. Men vi lägger till ett `main`-element och `map-view` som vi senare kommer att skapa som `customElement`.

I `map.scss` skapar vi en väldigt enkel grundstil. Viktigt att notera är att vi sätter en explicit höjd på det som kommer vara kart-elementet (`.map`), annars kommer det inte synas.

```css
.map {
    height: 50vh;
    width: 100%;
}
```

Låt oss då börja med vår web-component. I `main.js` definierar vi först elementet.

```javascript
import MapView from "./components/map-view.js";

customElements.define("map-view", MapView);
```

Vi börjar sedan `src/components/map-view.js` med att skapa en instansvariabel för kartan `this.map` och sedan skriver vi ut en rubrik bara för att se att allt fungerar som det ska.

```javascript
export default class MapView extends HTMLElement {
    constructor() {
        super();

        this.map = null;
    }

    connectedCallback() {
        this.innerHTML = `<h1>MapView</h1>`;
    }
}
```

Om du lägger till en route i din router bör du nu kunna se en rubrik om du går till routen.



Leaflet {#leaflet}
--------------------------------------

Låt oss lägga till modulen `leaflet` för att komma igång med kartan. Vi använder ett Content Delivery Network (CDN) för detta ändamålet. Vi ser på [Leaflets hemsida](https://leafletjs.com/download.html) hur vi kan göra detta.

Vi lägger dessa två rader i `<head>`-delen av vår `index.html`-fil.

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
```

Vi bör nu (efter en omladdning) ha tillgång till ett global objekt `L`. För att valideringen inte ska klaga lägger vi en kommentar längst upp i filen om att vi vet att globala variabeln finns. Vi lägger även till `<div id="map" class="map"></div>` som en del av `innerHTML` för vår komponent. I funktionen `renderMap` renderar vi sedan ut kartan och lägger till vilka **tiles** vi vill använda, **tiles** är de små kartbilder som tillsammans bygger ihop kartan i olika grader av in-zoomning.

```javascript
/* global L */

export default class MapView extends HTMLElement {
    constructor() {
        super();

        this.map = null;
    }

    connectedCallback() {
        this.innerHTML = `<h1>MapView</h1><div id="map" class="map"></div>`;

        this.renderMap();
    }

    renderMap() {
        this.map = L.map('map').setView([56.18219, 15.59094], 11);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);
    }
}
```



Markörer {#markorer}
--------------------------------------

För att vi ska kunna visa olika specifika platser på kartan vill vi kunna rita ut markörer. För att vi ska kunna rita ut markörer behöver vi koordinater och det kan vi antingen skriva in manuellt eller så kan vi omvandla adresser till koordinater. Jag väljer först att skapa en modell för just omvandlingen till koordinater i filen `src/models/nominatim.js`. I den modellen använder vi tjänsten nominatim.openstreetmap.org för att göra om en adress till koordinater.

```javascript
export default async function getCoordinates(address) {
    const urlEncodedAddress = encodeURIComponent(address);
    const url = "https://nominatim.openstreetmap.org/search.php?format=jsonv2&q=";
    const response = await fetch(`${url}${urlEncodedAddress}`);
    const result = await response.json();

    return result;
}
```

Vi kan sedan importera denna funktion till vår komponent. Från `connectedCallback`-metoden anropar vi sedan `this.renderMarkers`-metoden som ritar ut en markör baserat på koordinater och en från en adress vi omvandlar med hjälp av modellen.

```javascript
/* global L */

import getCoordinates from "../models/nominatim.js";

export default class MapView extends HTMLElement {
    constructor() {
        super();

        this.map = null;
    }

    connectedCallback() {
        this.innerHTML = `<h1>MapView</h1><div id="map" class="map"></div>`;

        this.renderMap();
    }

    renderMap() {
        this.map = L.map('map').setView([56.18219, 15.59094], 11);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);

        this.renderMarkers();
    }

    async renderMarkers() {
        let coordinates = [56.2345, 15.6034];

        L.marker(coordinates).addTo(this.map);

        let adress = "Stortorget 1, Karlskrona";

        const results = await getCoordinates(adress);

        L.marker([
            parseFloat(results[0].lat),
            parseFloat(results[0].lon)
        ]).addTo(this.map);
    }
}
```

Vi bör nu kunna se två markörer på kartan, en på Stortorget och en en bit norrom Karlskrona.



Användarens plats {#plats}
--------------------------------------

Sista pusselbiten vi behöver att få på plats är användarens position utritad på kartan. Vi kommer då använda oss av webbläsarens inbyggda möjlighet för att plocka ut användarens position. [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) beskriver hur det fungerar med att hämta ut användarens position.

Vi lägger till ytterligare en metod i vår komponent `renderLocation`, som vi anropar från `renderMap`. I metoden frågar vi först om `geolocation` är tillgängligt i `navigator`-objektet som är den webbläsare vi ser sidan via. Sedan frågar vi `navigator` om nuvarande position och får tillbaka ett result som vi sedan ritar ut som en markör. Vi väljer att ändra utseendet på markören bara för att visa att den ena är positionen och den andra en vanlig markör. `location.png`-bilden kn du hitta i `example/gps-v5`-katalogen.

```javascript
/* global L */

import getCoordinates from "../models/nominatim.js";

export default class MapView extends HTMLElement {
    constructor() {
        super();

        this.map = null;
    }

    connectedCallback() {
        this.innerHTML = `<h1>MapView</h1><div id="map" class="map"></div>`;

        this.renderMap();
    }

    renderMap() {
        this.map = L.map('map').setView([56.18219, 15.59094], 11);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);

        this.renderMarkers();

        this.renderLocation();
    }

    async renderMarkers() {
        let coordinates = [56.2345, 15.6034];

        L.marker(coordinates).addTo(this.map);

        let adress = "Stortorget 1, Karlskrona";

        const results = await getCoordinates(adress);

        L.marker([
            parseFloat(results[0].lat),
            parseFloat(results[0].lon)
        ]).addTo(this.map);
    }

    renderLocation() {
        let locationMarker = L.icon({
            iconUrl:      "location.png",
            iconSize:     [24, 24],
            iconAnchor:   [12, 12],
            popupAnchor:  [0, 0]
        });


        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                L.marker(
                    [position.coords.latitude,                  position.coords.longitude],
                    {icon: locationMarker}
                ).addTo(this.map);
            });
        }
    }
}
```



Avslutningsvis {#avslutning}
--------------------------------------

Vi har i denna artikel använt oss av OpenStreetMap och leaflet.js för att placera ut markörer på en karta på specifika platser. Vi har även tittat på hur vi kan använda `geolocation`-Web-API:t för att rita ut användarens position på kartan.
