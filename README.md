Redesigna Zooms hemsida
I dagens uppgift ska ni designa om förstasidan på zoom.us för att göra den mer användarvänlig.

Sätt upp projektet
Öppna en terminal och gå med cd där du vill skapa projektet.
Skriv npm create vite@latest zoom-redesign.
I följande frågor välj React och sen Javascript.
Installera tailwind genom att följa dessa instruktioner.
Hur du klarar uppgiften
Ni skapar en förenklad version av zooms hemsida så inga animationer krävs och endast dessa delar behöver vara med:

Navigering
Navigeringen ska bara vara på en rad.
Knapparna i navigeringen ska tonas ner så att dom inte konkurrerar med knappen i Main Lockup. Använd t.ex. en knapp som inte är ifylld utan har en border istället.
Hero-sektionen
Behåll nuvarande Main Lockup men ersätt grafiken på höger sida med en passande bild. Använd t.ex. någon av Zooms egna bilder.
Övriga delar kan tas bort från hero-sektionen.
"Make work less work"-sektionen
Brödtexten ska ha en ljusblå färg för att minska kontrasten mot bakgrundsfärgen.
"Discover the Possibilities" ska se ut som en länk och ändra färg på mouse over.
"Powering organizations across industries and geographies"-sektionen
Brödtexten ska vara grå, inte svart.
Korten på höger sida ska använda en React-komponent med props: title och icon för att inte behöva skriva om html-koden för varje kort.
Gör sajten responsiv så att den funkar både på mobil och desktop.

För att göra sidan tillgänglig använd landmarks och semantic html.

Hur du lämnar in
Skapa ett repo på github.
Ladd up dina filer till github:
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <Adressen till ditt repo>
git push -u origin main
Klicka på uppgiften i canvas och ange länken till ditt repo.
💥 Success!
Efter denna uppgift ska ni kunna analysera en hemsida och komma med förslag på förbättringar.

🏃 Extrauppgifter
Klar? Här är lite mer att göra:

Lägg till "Ready to get started?"-sektionen.
Lägg till en footer med valfritt innehåll.
Skapa sidor till alla länkar med valfritt innehåll.
