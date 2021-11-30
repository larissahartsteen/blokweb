var deButton = document.querySelector("nav button:last-of-type");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}


var bekijkMeerButton = document.querySelector("article:nth-of-type(3) button");

function verplaatsDeSections(){
    let hetDerdeArticle = document.querySelector("article:nth-of-type(3)");
    hetDerdeArticle.classList.toggle("anders");
}
bekijkMeerButton.addEventListener("click", verplaatsDeSections);