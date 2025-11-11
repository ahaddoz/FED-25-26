// JavaScript Document
console.log("hi");

// stap 1: zoek de menu-button op en sla die op in een variabele
var openButton = document.querySelector(".hamburger-menu-button-closed");
var body = document.body;

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
if (openButton) {
  openButton.onclick = openMenu;
}

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
  body.classList.add("no-scroll");
  body.classList.add("menu-open");

  var closeButton = document.querySelector(".hamburger-menu-button-open");
  if (closeButton) {
    closeButton.classList.remove("hidden");
  }

  // Toon menu header
  var menuHeader = document.querySelector(".menu-header");
  if (menuHeader) {
    menuHeader.setAttribute("aria-hidden", "false");
  }
}

/************/
/* menu sluiten met de sluit button */
/************/

// stap 1 - zoek sluiten button op
var sluitButton = document.querySelector(".hamburger-menu-button-open");

// stap 2 - laat die button luisteren naar kliks
if (sluitButton) {
  sluitButton.onclick = sluitMenu;
}

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  if (deNav) {
    deNav.classList.remove("toonMenu");
  }
  body.classList.remove("no-scroll");
  body.classList.remove("menu-open");

  // Verberg menu header
  var menuHeader = document.querySelector(".menu-header");
  if (menuHeader) {
    menuHeader.setAttribute("aria-hidden", "true");
  }
}

/************/
/* bonus: menu sluiten met escape */
/************/
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
  "Boek een gratis testrit!",
  "Schrijf je in voor de nieuwsbrief en ontvang 10% korting!",
];

var index = 0;
var bannerText = document.querySelector(
  "body > section > section:first-of-type p"
);

if (bannerText) {
  setInterval(() => {
    index = (index + 1) % messages.length;
    bannerText.innerHTML = messages[index];
  }, 10000);
}

// stap 1 - zoekt de sluiten button vanm de banner op
var sluitButtonBanner = document.querySelector(
  "body > section > section:first-of-type button"
);

// stap 2 - laat die button luisteren naar een onclick
if (sluitButtonBanner) {
  sluitButtonBanner.onclick = sluitBanner;
}

// stap 3 - in de functie wordt de class toegevoegd aan de banner, zodat ie niet meer zichtbaar is
function sluitBanner() {
  var banner = document.querySelector("body > section > section:first-of-type");
  if (banner) {
    banner.classList.add("hidden");
  }
}

/************/
/* menu sluiten met menu header close button */
/************/

// Zoek de close button in de menu header op
var menuCloseButton = document.querySelector(".menu-close-button");

// Laat die button luisteren naar kliks
if (menuCloseButton) {
  menuCloseButton.onclick = sluitMenu;
}
