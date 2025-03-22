

document.addEventListener("DOMContentLoaded", function () {
    
    const navbar = document.getElementById("navbar");
    const toggler = document.getElementById("navbar-toggler-button");

    function updateNavbar() {
        if (window.scrollY > 50 || navbar.classList.contains("nav-open")) {
            navbar.style.background = "linear-gradient(135deg, #1EB2CC, #006EBC)";
        } else {
            navbar.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))";
        }
    }

    // Toggle navbar gradient when clicking the navbar toggler
    toggler.addEventListener("click", function () {
        navbar.classList.toggle("nav-open");
        updateNavbar();
    });

    // Change navbar gradient when scrolling
    window.addEventListener("scroll", updateNavbar);

    // Initial state
    updateNavbar();
});
