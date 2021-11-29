var bekijkMeerButton = document.querySelector("article:nth-of-type(3) button");

function verplaatsDeSections(){
    let hetDerdeArticle = document.querySelector("article:nth-of-type(3)");
    hetDerdeArticle.classList.toggle("anders");
}
bekijkMeerButton.addEventListener("click", verplaatsDeSections);