const button = document.querySelector(".main__author-icon");
const authorBox = document.querySelector(".main__author-flex");
const infoBox = document.querySelector(".main__author-overlay");

// Toggle function
const toggleInfo = () => {
    authorBox.classList.toggle("no-active");
    infoBox.classList.toggle("active");
};

window.addEventListener("click", e => {
    const elementClicked = e.target;
    // User clicked in the info box
    if (button.contains(elementClicked)) {
        toggleInfo();
    // User clicked outside the info box
    } else if (infoBox.classList.contains("active")) {
        // User not clicked in info box
        if (infoBox !== elementClicked) {
            authorBox.classList.remove("no-active");
            infoBox.classList.remove("active");
        }
    }
});