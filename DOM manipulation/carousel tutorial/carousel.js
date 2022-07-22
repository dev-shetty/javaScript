const buttons = document.querySelectorAll("[data-carousel-button]");   // Something fancy which avoids overlap between classes and javaScript

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;   // Checks whether the command is next or previous
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;  // ... converts it into array and makes us go around the images
        if(newIndex < 0) {
            newIndex = slides.children.length - 1;  // to go to last image if we click previous on first image
        }
        if(newIndex >= slides.children.length) {
            newIndex = 0;   // to go to first image if next is pressed on last image
        }

        // To change the active state of child
        slides.children[newIndex].dataset.active = true;    // Adds active slide to the next / previous image
        delete activeSlide.dataset.active;      // Removes active slide from the current image
    });
});