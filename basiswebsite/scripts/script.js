var deButton = document.querySelector("nav button:last-of-type");
var bekijkMeerButton = document.querySelector("article:nth-of-type(3) button");


function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}
deButton.addEventListener("click", toggleMenu);


function verplaatsDeSections(){
    let hetDerdeArticle = document.querySelector("article:nth-of-type(3)");
    hetDerdeArticle.classList.toggle("anders");
}
bekijkMeerButton.addEventListener("click", verplaatsDeSections);
