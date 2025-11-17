// JavaScript Document
console.log("hi"); // check of script werkt

// stap 1: zoek de menu-button op en sla die op in een variabele
var openButton = document.querySelector(".hamburger-menu-button-closed"); // selecteert de gesloten hamburgerknop
var body = document.body; // pakt de <body> om later scroll te blokkeren

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
if (openButton) {
  // check of element bestaat
  openButton.onclick = openMenu; // klik opent menu
}

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
  var deNav = document.querySelector("nav"); // pakt de navigatiebalk
  deNav.classList.add("toonMenu"); // maakt nav zichtbaar via CSS-class
  body.classList.add("no-scroll"); // voorkomt scrollen op achtergrond
  body.classList.add("menu-open"); // algemene class om styling aan te passen

  var closeButton = document.querySelector(".hamburger-menu-button-open"); // selecteert open-knop
  if (closeButton) {
    closeButton.classList.remove("hidden"); // zorgt dat open-knop zichtbaar wordt
  }

  // Toon menu header
  var menuHeader = document.querySelector(".menu-header"); // pakt menu-header sectie
  if (menuHeader) {
    menuHeader.setAttribute("aria-hidden", "false"); // maakt de header toegankelijk voor screenreaders
  }
}

/************************************/
/* menu sluiten met de sluit button */
/************************************/

// stap 1 - zoek sluiten button op
var sluitButton = document.querySelector(".hamburger-menu-button-open"); // selecteert de open hamburgerknop

// stap 2 - laat die button luisteren naar kliks
if (sluitButton) {
  sluitButton.onclick = sluitMenu; // klik sluit menu
}

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav"); // pakt navigatie
  if (deNav) {
    deNav.classList.remove("toonMenu"); // verbergt menu via CSS
  }
  body.classList.remove("no-scroll"); // gebruiker kan weer scrollen
  body.classList.remove("menu-open"); // verwijdert open-styling

  // Verberg menu header
  var menuHeader = document.querySelector(".menu-header"); // pakt menu-header weer
  if (menuHeader) {
    menuHeader.setAttribute("aria-hidden", "true"); // verbergt header voor screenreaders
  }
}

/* MELDINGSBALK */

var messages = [
  'Welke Cowboy is geschikt voor jou? <a href="quiz.html">Doe de quiz</a>', // bericht 1
  "Boek een gratis testrit!", // bericht 2
  "Schrijf je in voor de nieuwsbrief en ontvang 10% korting!", // bericht 3
];

var index = 0; // startindex voor berichten
var bannerText = document.querySelector(
  "body > section > section:first-of-type p"
); // pakt de tekst binnen de banner

if (bannerText) {
  setInterval(() => {
    // draait elke paar seconden
    index = (index + 1) % messages.length; // gaat naar volgende bericht en begint opnieuw
    bannerText.innerHTML = messages[index]; // plaatst nieuw bericht in banner
  }, 10000); // verandert elke 10 seconden
}

// stap 1 - zoekt de sluiten button van de banner op
var sluitButtonBanner = document.querySelector(
  "body > section > section:first-of-type button"
); // pakt banner-sluitknop

// stap 2 - laat die button luisteren naar onclick
if (sluitButtonBanner) {
  sluitButtonBanner.onclick = sluitBanner; // klik sluit banner
}

// stap 3 - in functie wordt class toegevoegd aan de banner zodat hij verdwijnt
function sluitBanner() {
  var banner = document.querySelector("body > section > section:first-of-type"); // selecteert hele banner
  if (banner) {
    banner.classList.add("hidden"); // verbergt banner via CSS
  }
}

/************************************/
/* menu sluiten met menu header close button */
/************************************/

// Zoek de close button in de menu header op
var menuCloseButton = document.querySelector(".menu-close-button"); // extra sluitknop bovenin menu

// Laat die button luisteren naar kliks
if (menuCloseButton) {
  menuCloseButton.onclick = sluitMenu; // hergebruikt bestaande sluitfunctie
}
