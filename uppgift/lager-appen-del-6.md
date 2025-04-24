---
author: efo
category: javascript
title: Lager Appen del 6
revision:
  "2024-02-16": (A, efo) Första utgåvan i samband med kursen webapp VT24.
---
Lager appen del 6
==================================

Vi avslutar vår Lager-app med en kundservice chatt.



Förkunskaper {#forkunskaper}
-----------------------
Du har gjort uppgiften [Lager appen del 5](../uppgift/lager-appen-del-5). Du har jobbat dig igenom övningen "[Real-tids chatt](../kunskap/real-tids-chatt)".



Krav {#krav}
-----------------------

1. Skapa möjlighet för att chatta i real-tid via chatt-servern lager-chat.emilfolino.se

2. Först ska användaren skriva in ett användarenamn och sedan kunna skicka meddelanden via chatten. Skicka data till chatt servern i JSON format med följande struktur, så alla vet hur data ska hanteras:

```json
{
  "name": "efo",
  "message": "hejsan"
}
```

1. Din chatt-klient bör dock vara såpass robust att den inte kraschar om data som kommer från servern inte uppfyller ovanstående format. Se till att ha någon form av felhantering.

1. Alla meddelanden tillsammans med användarenamn som kommer in via webbsocketen ska visas upp i chatten i din app.
