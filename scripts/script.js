// JavaScript Document
console.log("hi");

// stap 1: zoek de menu-button op en sla die op in een variabele
var openButton = document.querySelector("header ul li button");
var body = document.body;

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
  body.classList.add("no-scroll");
}

/************************************/
/* menu sluiten met de sluit button */
/************************************/

// stap 1 - zoek sluiten button op
var sluitButton = document.querySelector("nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
  body.classList.remove("no-scroll");
}

/**********************************/
/* bonus: menu sluiten met escape */
/**********************************/
// window.onkeydown = handleKeydown;

// function handleKeydown(event) {
//   if (event.key == "Escape") {
//     var deNav = document.querySelector("nav");
//     deNav.classList.remove("toonMenu");
//   }
// }

/* MELDINGSBALK */

var messages = [
  'Welke Cowboy is geschikt voor jou? <a href="quiz.html">Doe de quiz</a>',
  "Nieuw: onze duurzame collectie is binnen!",
  "Schrijf je in voor de nieuwsbrief en ontvang 10% korting!",
];

var index = 0;
var bannerText = document.querySelector(
  "body > section > section:first-of-type p"
);

setInterval(() => {
  index = (index + 1) % messages.length;
  bannerText.innerHTML = messages[index];
}, 10000);

// stap 1 - zoekt de sluiten button vanm de banner op
var sluitButtonBanner = document.querySelector(
  "body > section > section:first-of-type button"
);

// stap 2 - laat die button luisteren naar een onclick
sluitButtonBanner.onclick = sluitBanner;

// stap 3 - in de functie wordt de class toegevoegd aan de banner, zodat ie niet meer zichtbaar is
function sluitBanner() {
  var banner = document.querySelector("body > section > section:first-of-type");
  banner.classList.add("hidden");
}
