# Procesverslag

Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door _open_ toe te voegen aan een _details_ element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.

<p>haha</p>

## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:

Zineb Ahaddout

#### Je startniveau:

Blauw

#### Je focus:

Responsive

</details>

## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:

https://nl.cowboy.com/

#### Screenshot(s) van de eerste pagina (small screen):

Homepage
<img src="readme-images/cowboyhome1.jpg" width="375px" alt="homepage fiets1">
<img src="readme-images/cowboyhome2.jpg" width="375px" alt="homepage fiets2">
<img src="readme-images/cowboyhome3.jpg" width="375px" alt="homepage fiets3">
<img src="readme-images/cowboyhome4.jpg" width="375px" alt="homepage footer">

#### Screenshot(s) van de tweede pagina (small screen):

Back to school
<img src="readme-images/testrit1.jpg" width="375px" alt="-kiesjemodel">
<img src="readme-images/testrit2.jpg" width="375px" alt="locatie">
<img src="readme-images/testrit3.jpg" width="375px" alt="adres">

</details>

## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

### Bevindingen

Lijst met je bevindingen die in de test naar voren kwamen:

- H1 staat niet goed, h2 komt eerst tijdens de screenreader en dat klopt niet

- 2 keer winkelwagen in de navigatie

- H3’s op de site worden door de screenreaders niet goed begrepen, zoals bij “Go Dutch” de screenreader weet niet dat dit een fiets is, dus mensen die de screenreader gebruiken ook niet. Dit geldt voor meerdere H’3 op de site.

- De knoppen zeggen ook niks behalve “ Ontdek “ en niet “Ontdek Go Dutch” zodat je weet over welke fiets het gaat.

- In de drop down menu zie je bij elke “pagina” alleen een a staan, en niet welke fiets dus als screenreader zou je niet kunnen weten welke fiets. Aan mij dus om elke pagina in de dropdown menu ook een individuele naam geven. Dit geldt ook voor de pagina zelf. Er is geen h1 dus de screenreader weet ook niet welke pagina dit is en dus ook niet welke fiets. Ik kan een visual hidden h1 maken of van de fiets titel een h1 maken.

- Je kan wel naar beneden en met tab navigeren maar je ziet het niet echt, dus je weet niet zo goed waar je klikt. Je ziet wel waar is heen gaat in de pagina, maar sommige knoppen zijn ontzichtbaar

Lees meer van mijn bevindingen in de screenshot van de WCAG checklist hieronder.

### screenshots WCAG Checklist

  <img src="readme-images/wcag1.png" width="375px" alt="wcagchecklist">
  <img src="readme-images/wcag2.png" width="375px" alt="wcagchecklist">
  <img src="readme-images/wcag3.png" width="375px" alt="wcagchecklist">

</details>

## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

### homepage:

  <img src="readme-images/homepage.png" width="375px" alt="header">

### product:

  <img src="readme-images/product.png" width="375px" alt="Product pagina, kies je fiets">

### navigatie - menu:

  <img src="readme-images/nav.png" width="375px" alt="dropdown menu">

### boek je testrit:

  <img src="readme-images/testrit.png" width="375px" alt="boek je testrit">

### ontmoet je match:

  <img src="readme-images/match.png" width="375px" alt="match">

### footer:

  <img src="readme-images/footer2.png" width="375px" alt="footer">

</details>

## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

### Stand van zaken

### Agenda voor meeting

samen met je groepje opstellen

Zineb Ahaddout:

- Hoe kun je iconen downloaden van de site?

- Er bestaat geen h1 op de homepage van Cowboy, ik heb er nu voor gekozen om een visually hidden h1 te kiezen voor de screenreader, maar eigenlijk zou er wel een zichtbare h1 moeten zijn. Dit kan niet Cruiser zijn of Go Dutch, want dan zou Cruiser ST of de andere slogan ook een h1 moeten zijn maar er is maar een h1 op een pagina.

- Wanneer gebruik ik section en wanneer <article?
  → Bijvoorbeeld bij de herhaalde productblokken (Cruiser, Cruiser ST).

- Wanneer gebruik ik figure en figcaption, en wanneer alleen een <img?

Bener:
1.⁠ ⁠Wanneer gebruik ik Ul en wanneer Ol?
2.⁠ ⁠⁠Ik heb lang niet gecodeerd. Hoe onderscheid ik een parent en een child? En wat betekenden ze?
3.⁠ ⁠⁠Op mijn website (lab111.nl) staat er op de homepage geen H1. Echter begint deze pagina met een grote logo. Mag deze als H1 worden gebruikt?

Phon:
Mijn 1ste vraag is in iedergeval of je ook (meerdere) section in je footer mag hebben, 2e wat is de html element die ik moet gebruiken voor de beoordeling onderaan (img?) en 3e moet er in de head een header of is dat onnodig (moet er een header zijn).

Samya:
1ste vraag:
Kan ik in een section andere html elementen stoppen zonder een article om de section heen te zetten?

2e vraag: moet je een section zetten om de header als er een img in zit en een link?

### Verslag van meeting

hier na afloop snel de uitkomsten van de meeting vastleggen

Zineb: 3 stylesheets (algemeen, specifiek en 2e pagina)

Geen classes gebruiken maar parent, child enth of type

Buttons of links, dus niet beide vooral als het een actie is

Button ziet eruit als een link, dus eigenlijk a gebruiken (link)

Buttons zijn acties zoals iets kopen, hakburger menu klikken

Figure mag weg want dat is overbodig want het is gewoon een img, pas als er een bijschrift bij de afbeeldingen staan dan mag figure als optie

Pijltjes en andere decoratie is CSS Bijvoorbeeld content: “>”

Bener:

Header is iets wat elke pagina terug komt zoals logo, navi, profiel, winkelwagen

Samya:

Als een foto decoratie is dan moet het in de CSS en alleen als het informatief is dan moet het in de html

Phon:Nav kan ook in de main of in de footer

Detail summery (dat is wanneer je een tabje open klapt)

</details>

## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

### Stand van zaken

Dit ging lastig:

Alle SVG’s vinden van de website en deze in mijn eigen HTML zetten. Uiteindelijk heb ik online gevonden hoe ik de SVG-codes kan kopiëren en daar mijn eigen SVG’s van kan maken. Tot nu toe heb ik alle iconen kunnen krijgen, behalve die van de USP’s.

Het formulier maken voor mijn tweede pagina “testrit”. Ik vond deze HTML-elementen wat lastiger. Ik heb online gekeken hoe ik een formulier maak en moest de elementen opzoeken om te begrijpen wat ze doen. Dit waren nieuwe elementen voor mij.

Wat ging goed:

Beginnen aan de CSS en een hiërarchie aanbrengen, zoals common, index en testrit, om het overzichtelijk te houden. Dit is overzichtelijk, maar tegelijkertijd ook een beetje uitdagend, want je moet steeds heen en weer schakelen.

Ik heb van tevoren een lijstje gemaakt met wat sowieso in common hoort:

Balk

Navigatie incl.

Footer

Buttons

Lettertype

### Agenda voor meeting

samen met je groepje opstellen

Zineb:

- Waarom zie ik niet alle html elementen van mijn footer?
- Klopt mijn css hyrargie: common, index en testrit
- Hoe kan ik de kleur van mijn iconen aanpassen
- Ik heb in mijn navigatie a gebruikt ipv buttons. Kan ik dit in javascript makkelijk gebruiken, omdat het dus niet echt wordt gelinkt naar een pagina maar op de pagina blijft.

Samya:
1.⁠ ⁠Hoe zet ik iconen in de footer naast elkaar?
2.⁠ ⁠⁠Mijn sluit knop van de hamburger menu doet het niet, waar kan dat aan liggen?
3.⁠ ⁠⁠hoe style ik foto’s in een bepaalde vorm?

Bener:
1.⁠ ⁠Hoe maak je ook alweer een foto carousel/slider? (Automatisch)
2.⁠ ⁠Hoe maak ik hover animaties in die carousel?
3.⁠ ⁠Hoe maak ik die blauwe lijntjes tussendoor mijn sections in mijn website? (lab111.nl)
4.⁠ ⁠Specials img of banner?
5.⁠ ⁠Hoe verstop ik de rest van tekst in mijn captions?
6.⁠ ⁠Icoontjes in footer. Hover, linkjes, svg?

Phon:
1.⁠ ⁠Hoe kan ik in 1x dark mode via root coderen?
2.⁠ ⁠Wat heb ik gedaan dat mijn kleuren van mijn root niet toe gepassen kunnen worden?
3.⁠ ⁠Moet ik elke button in mijn site werkend maken?
4.⁠ ⁠Hoe krijg ik 1 versie van de beoordeling afbeelding in css ipv deze afbeelding meerdere keren achter elkaar?
5.⁠ ⁠Hoe moet ik de favorieten hartje bij de producten aan spreken in css.?
6.⁠ ⁠Hoe kan ik alleen de social media bij de beoordeling naast elkaar krijgen?
7.⁠ ⁠Hoeveel js moeten we hebben, 1 toch?

### Verslag van meeting

Wat ik zelf heb geleerd:

- Buttons zijn essentieel in een carousel voor accessibility — niet iedereen kan swipen.

- CSS carousel configureren kan makkelijk via de Chrome Carousel Configurator.

- Een element met z-index:100 staat altijd boven alles met z-index 0 of lager.

- Mijn hele homepage bestaat uit één main, niet alleen de eerste productsectie.

- Nooit SVG's laden als plaatje,inline SVG in HTML geeft controle over kleur & styling.

- Media queries horen bij het element waarvoor je ze schrijft, zoals direct onder de header-CSS.

</details>

## Toegankelijkheidstest 2/2 (week 4)

Verbeteringen & bevindingen (WCAG + eigen analyse)

Tijdens het analyseren van de originele Cowboy-website kwamen meerdere toegankelijkheidsproblemen naar voren. Hieronder beschrijf ik welke problemen ik heb ontdekt, wat ik heb verbeterd en waarom deze verbeteringen belangrijk zijn volgens WCAG-richtlijnen.

1. Headings & pagina-structuur
   Bevindingen

-Veel pagina’s hadden geen H1, waardoor een screenreader niet weet waar de pagina eigenlijk over gaat.
-Sommige H2’s en H3’s waren niet logisch opgebouwd of werden overgeslagen.
-Slogans zoals “Go Dutch” werden als gewone H3 getoond, zonder context → een screenreader weet dan niet dat dit een slogan is.

Verbeteringen
-Ik heb elke pagina een unieke H1 gegeven (visually-hidden waar nodig).
-Headings opnieuw logisch opgebouwd (H1 → H2 → H3).
-Extra aria-labels toegevoegd aan titels zodat screenreaders begrijpen dat het om een fietsmodel gaat.

2. Buttons & links
   Bevindingen

-Veel knoppen waren eigenlijk <a>-links verkleed als buttons (“Ontdek”).
-De tekst van knoppen was niet beschrijvend genoeg → screenreader hoort alleen “Ontdek”, maar niet wat.
-Focus styles waren onduidelijk zichtbaar.
-Op mobiel gaven sommige knoppen geen duidelijke interactie-feedback.

Verbeteringen

-Knoppen betekenisvoller gemaakt → bv. “Ontdek Cruiser”.
-Knoppen groter gemaakt voor mobile touch

3. Navigatie & menu
   Bevindingen

-In het uitklapmenu stonden alleen algemene links (“Ontdek”), zonder context.
-Geen duidelijke aria-labels → screenreader weet niet welke fiets er bedoeld wordt.
-Er was geen skip-link aanwezig.
-Close-knoppen voor het menu hadden geen duidelijke tekst of aria-label.

Verbeteringen

- Elke link in het menu een unieke naam gegeven.
- Menu-iconen titels gegeven.

4. Formulieren
   Bevindingen

-Newsletter input had onvoldoende label-associatie.
-Niet zichtbaar dat het een form-field is.

Verbeteringen

- Input een duidelijke border voor toegankelijkheid.
- Button om te subscriben als echte <button> gebruikt i.p.v. <a>.

</details>

## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

### Stand van zaken

Wat ging goed:
Deze week ging het goed met het toepassen van semantische HTML en het beter begrijpen van de structuur in mijn pagina’s. Ik heb geleerd hoe de volgorde van CSS-bestanden invloed heeft op de styling en hoe ik met specifieke selectors conflicten kan oplossen.

Wat ging minder goed:
Ik liep vast op een aantal stylingconflicten tussen common.css en de pagina-specifieke stylesheets. Vooral het begrijpen waarom bepaalde regels voorrang kregen, kostte tijd. Ook heb ik gemerkt dat kleine fouten in de HTML-structuur (zoals een verkeerde sluit-tag) direct invloed hebben op de layout, wat soms frustrerend was.

### Agenda voor meeting

samen met je groepje opstellen

Zineb:

- Vlag in een span of niet? Want ik krijg hem niet mooi rond
- Hoe kan ik ervoor zorgen dat de achtergrond ook zwart word, mag ik een section in een section plaatsen zodat ik die achtergrond kleur kan veranderen.
- Welke selecteer gebruiken voor button op lease pagina, hij wordt overschreven door de common.css
- Dark mode staat niet in het beoordelingsformulier, hoe zwaar telt dit mee

### Verslag van meeting

Wat ik heb geleerd

- Het gebruik van select en option is de juiste aanpak voor een taal- of landenkeuze. Dit geeft dezelfde functionaliteit als Cowboy en is semantisch correct.
  Afbeeldingen in option-tags worden door mijn Chrome-versie niet ondersteund, dus ik heb emoji-vlaggen gebruikt als alternatief.

- Pseudo-elementen zoals ::before en ::after kunnen worden ingezet om een fake border of fake achtergrondvlak te creëren. Dit maakt het mogelijk om de achtergrond van een section te stylen zonder dat de footer of omliggende secties worden beïnvloed

</details>

## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

### Je uitkomst - karakteristiek screenshots:

Mobiel:
<img src="readme-images/indexmobiel1.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/indexmobiel2.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/indexmobiel3.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/indexmobiel4.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/indexmobiel5.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/indexmobiel6.png" width="375px" alt="uitomst opdracht 1">

<img src="readme-images/leasenmobiel1.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/leasenmobiel2.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/leasenmobiel3.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/leasenmobiel4.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/leasenmobiel5.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/leasenmobiel6.png" width="375px" alt="uitomst opdracht 1">

Desktop:
<img src="readme-images/leasendesktop1.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/leasendesktop2.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/leasendesktop3.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/leasendesktop4.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/leasendesktop5.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/leasendesktop6.png" width="375px" alt="uitomst opdracht 1">

<img src="readme-images/indexdesktop1.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/indexdesktop2.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/indexdesktop3.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/indexdesktop4.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/indexdesktop5.png" width="375px" alt="uitomst opdracht 1">
<img src="readme-images/indexdesktop6.png" width="375px" alt="uitomst opdracht 1">

### Dit ging goed/Heb ik geleerd:

De afgelopen weken heb ik veel vooruitgang geboekt in mijn FED-project, maar ook ervaren dat mijn gekozen website technisch uitdagender was dan ik dacht. Ik had verwacht dat Cowboy een “makkelijke” site zou zijn, maar er zaten toch veel elementen in die intensief gestyled moesten worden. Het responsive maken van elke pagina kostte eveneens meer tijd dan vooraf ingeschat.

Wat goed ging
Ik heb grote stappen gezet in het begrijpen van HTML-semantiek, CSS-structuur en het inzetten van pseudo-elementen. Ik weet nu hoe ik inline SVG’s moet gebruiken, hoe ik een carousel toegankelijk opbouw met buttons en hoe ik media queries logisch plaats. Daarnaast heb ik mijn footer, select-dropdowns en verschillende sections visueel verbeterd. Ik wilde namelijk eerst een drop down maken, maar dit heeft ook veel JS nodig om het echt werkend te maken. Dit heb ik dus achteraf niet gedaan. Ook heb ik actief vragen gesteld, getest en veel nieuwe technieken toegepast die ik eerder niet kende.

### Dit was lastig/Is niet gelukt:

Korte omschrijving met plaatjes

Wat minder goed ging
Sommige onderdelen kostten meer tijd door overschreven CSS, foutieve selectors of te complexe code. Het responsive maken van de site verliep trager dan gepland, en sommige functies (zoals icoontjes in dropdowns of de buttons in de carrousel) werkten niet in één keer. Ook merkte ik dat ik soms te veel tijd verloor aan details voordat de basis helemaal stond.

Wat ik zou doen als ik meer tijd had
Ik zou mij volledig richten op het verder uitwerken van de dark mode. De originele Cowboy-site heeft zelf geen dark-mode functie, dus ik moest extra tijd besteden aan het onderzoeken hoe ik dit visueel en technisch kon vormgeven. Met meer tijd zou ik een complete, consistente dark-mode stijl ontwikkelen én een JS-toggle bouwen waarmee gebruikers de modus handmatig kunnen aan- of uitzetten.

## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).
Nb. ChatGpT en andere AI horen er ook bij.
Nb. Vermeld de bronnen ook in je code.

Bronnenlijst:

OpenAI. (z.d.). ChatGPT. https://chatgpt.com/

Google Developers. (2023). Carousels with CSS. https://developer.chrome.com/blog/carousels-with-css?hl=nl

ZinebCanCode. (z.d.). CSS test — CodePen. https://codepen.io/zinebcancode/pen/myVJeZJ

ZinebCanCode. (z.d.). Responsive section test — CodePen. https://codepen.io/zinebcancode/pen/RNrmWxX

StackOverflow Community. (2010). How to include images for selection/option. https://stackoverflow.com/questions/2671563/how-to-include-images-for-selectionoption

W3Schools. (z.d.). CSS pseudo-elements. https://www.w3schools.com/css/css_pseudo_elements.asp

Mozilla Developer Network. (z.d.). CSS overflow & carousels guide. https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overflow/Carousels

W3Schools. (z.d.). CSS z-index property. https://www.w3schools.com/cssref/pr_pos_z-index.php

ljcdev. (2020). Easy hamburger menu with JS. https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0

Swink. (z.d.). Wat WCAG betekent voor digitale toegankelijkheid. https://swink.nl/blog/wat-wcag-betekent-digitale-toegankelijkheid/

Coding Artist. (2021). CSS Carousel Tutorial [YouTube-video]. YouTube. https://www.youtube.com/watch?v=GteJWhCikCk

Mr. Web Designer. (2022). HTML CSS Carousel Build [YouTube-video]. YouTube. https://www.youtube.com/watch?v=dMxOojFq2ho

Shooft. (z.d.). CSS voorbeelden — CodePen. https://codepen.io/shooft/pen/QwjQGZe

Mozilla Developer Network. (z.d.). :not selector. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:not

Mozilla Developer Network. (z.d.). flex-flow property. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/flex-flow

Mozilla Developer Network. (z.d.). flex-shrink property. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/flex-shrink

Mozilla Developer Network. (z.d.). flex-wrap property. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/flex-wrap

Shooft. (z.d.). Scroll-linked carousel concept — CodePen. https://codepen.io/shooft/pen/JoGrgYO

 <img src="readme-images/chat1.png" width="375px" alt="chatgpt nav bron">
Ik heb ChatGPT gebruikt omdat een deel van mijn website verkeerd gestyled werd. Mijn CSS-selector was te algemeen, waardoor meerdere <section>-elementen dezelfde height kregen en mijn menu vreemd ging doen. Met hulp van ChatGPT kwam ik erachter welke selector het probleem veroorzaakte en waarom dat gebeurde.

Ik heb het daarna zelf opgelost door de selector specifieker te maken met > en nth-of-type(). Daardoor wordt de styling nu alleen toegepast op het juiste onderdeel, en beïnvloedt het niet meer de andere secties. Sinds die aanpassing werkt mijn navigatie en menu weer normaal.

<img src="readme-images/chat2.png" width="375px" alt="chatgpt maxwidth bron">

Ik wilde weten hoe ik een max-width kon gebruiken, ik had alles al netjes gecentreerd met flexbox maar de teskt en h2 kwamen zowel links en rechts tegen het rand aan.

<img src="readme-images/chat3.png" width="375px" alt="chatgpt article bron">
<img src="readme-images/chat4.png" width="375px" alt="chatgpt article bron">
<img src="readme-images/chat5.png" width="375px" alt="chatgpt article bron">

Waarom ik een section in een section heb gebruikt

Bij mijn productblokken heb ik één grote <section> gebruikt voor het hele product (titel, tekst + afbeelding).
Daarbinnen heb ik een tweede <section> gezet speciaal voor het tekstblok.

De reden hiervoor is heel simpel:

de buitenste section = het hele product

de binnenste section = alleen de tekst en knoppen

dit maakt het veel makkelijker om de layout responsive te maken

op mobiel staat tekst bovenaan

op desktop kan de tekst naast de afbeelding komen

ik kan flexbox en order gebruiken zonder dat de content door elkaar raakt

Dus: deze structuur maakt de code logisch én flexibel voor alle schermgroottes.
Het is ook semantisch prima, want een section mag subsecties bevatten zolang ze samen één groter thema vormen (hier: één product).

✦ Waarom het laatste blok wél een <article> is

Het laatste blok (“We komen naar je toe – Ervaar het zelf – Boek een testrit”) heb ik een <article> gegeven omdat:

het een zelfstandig stukje content is

het ook los buiten de pagina kan bestaan (bijv. als promo, teaser, advertentie)

het voldoet aan de HTML-regels voor een article

Kort gezegd:

De productblokken bestaan uit meerdere onderdelen en vragen flexibele structuur > daarom sections.
De teaser is een losstaand item > daarom een article.

</details>
