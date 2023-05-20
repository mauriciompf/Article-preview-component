const shareButton = document.querySelector(".main__author-icon");
const flex = document.querySelector(".main__author-flex")
const divs = document.querySelectorAll(".main__author-flex > div");

shareButton.addEventListener("click", () => {
    divs.forEach(div => div.classList.toggle("active"));
});