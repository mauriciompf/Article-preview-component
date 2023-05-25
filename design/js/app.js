const shareButton = document.querySelector(".main__author-icon");
// rename
const flexParent = flex.parentNode;
const flex = document.querySelector(".main__author-flex")

// how to get all children in .main__author-flex
const divs = document.querySelectorAll(".main__author-flex > div");

const shareSpan = document.createElement("span");
const iconsSpan = document.createElement("div");

const authorParent = document.createElement("div");

shareButton.addEventListener("click", () => {
    divs.forEach(div => div.classList.toggle("divs-active"));
    flexParent.classList.toggle("author_active");

    // `
    //     <span>
    //         <a href="#"><strong>share</strong></a>
    //     </span>
    //     <div>
    //         <a href="#" aria-label="Enter our facebook"><i class="fa-brands fa-square-facebook"></i></a>
    //         <a href="#" aria-label="Enter our twitter"><i class="fa-brands fa-twitter"></i></a>
    //         <a href="#" aria-label="Enter our pinterest"><i class="fa-brands fa-pinterest"></i></a>
    //     </div>
    // `;

    shareSpan.innerHTML = `<a href="#"><strong>share</strong></a>`;
    iconsSpan.innerHTML = `
        <a href="#" aria-label="Enter our facebook"><i class="fa-brands fa-square-facebook"></i></a>
        <a href="#" aria-label="Enter our twitter"><i class="fa-brands fa-twitter"></i></a>
        <a href="#" aria-label="Enter our pinterest"><i class="fa-brands fa-pinterest"></i></a>`;

    flex.appendChild(shareSpan);
    flex.appendChild(iconsSpan);
    iconsSpan.setAttribute("class", "main__author-icons");

    if (!flexParent.classList.contains("author_active")) {
        shareSpan.remove();
        iconsSpan.remove();
    }
});

