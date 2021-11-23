var bekijkMeerButton = document.querySelector("article:nth-of-type(3) button");

bekijkMeerButton.addEventListener("click", verplaatsDeSections);

function verplaatsDeSections(){
    let hetDerdeArticle = document.querySelector("article:nth-of-type(3)");
    hetDerdeArticle.classList.toggle("anders");
}  