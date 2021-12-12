var deButton = document.querySelector("nav button:last-of-type"); //zoekt de button in de html en wordt opgeslagen in een variabel - var is een container voor het opslaan van gegevens (waarden)
var bekijkMeerButton = document.querySelector("article:nth-of-type(3) button");

function toggleMenu(event){ //deze function zorgt ervoor dat als je op de menu knop klikt je het menu krijgt te zien
  deNav = event.target.parentNode; 
  deNav.classList.toggle("toonMenu"); 
}
deButton.addEventListener("click", toggleMenu); //zegt dat de button de functie toggleMenu moet uitvoeren wanneer er op geklikt wordt


function verplaatsDeSections(){ //deze function zorgt ervoor dat de sections opzij schuiven 
    let hetDerdeArticle = document.querySelector("article:nth-of-type(3)"); //variabelen gedefinieerd met 'let' kunnen niet opnieuw worden gedeclareerd
    hetDerdeArticle.classList.toggle("verplaats"); //na het klikken op de knop wordt de class .verplaats toegevoegd aan de html, de class in de HTML kan in de CSS gebruikt worden om het element aan te passen
}
bekijkMeerButton.addEventListener("click", verplaatsDeSections); //zegt dat de button de functie verplaatsDeSections moet uitvoeren wanneer er op geklikt wordt