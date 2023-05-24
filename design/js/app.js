const shareButton = document.querySelector(".main__author-icon");
const card = document.querySelector(".main__content");
const flex = document.querySelector(".main__author-flex")
const divs = document.querySelectorAll(".main__author-flex > div");

const shareSpan = document.createElement("span");
const iconsSpan = document.createElement("div");
const flexParent = flex.parentNode;

const authorParent = document.createElement("div");

card.appendChild(authorParent);
authorParent.appendChild(flexParent);

shareButton.addEventListener("click", () => {
    authorParent.setAttribute("class", "main__author-parent");

    flexParent.classList.toggle("author_active");
    divs.forEach(div => div.classList.toggle("divs-active"));


    shareSpan.innerHTML = `<strong>share</strong>`;
    iconsSpan.innerHTML = `
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-pinterest"></i>`;
    flex.appendChild(shareSpan);
    flex.appendChild(iconsSpan);
});