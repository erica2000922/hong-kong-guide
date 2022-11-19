(() => {
    // Select HTML Elements
    const header = document.querySelector("header");
    const hamburger = document.querySelector(".hamburger");

    // Handles Mobile Navigation Bar
    const toggleNav = () => {
        header.classList.toggle("open");
    };

    // Event Listeners
    hamburger.addEventListener("click", toggleNav);
})();
