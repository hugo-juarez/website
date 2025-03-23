document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector("#container"); // Scrollable div
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function changeActiveSection() {
        let currentSection = "";

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= container.clientHeight / 2 - 100&& rect.bottom >= container.clientHeight / 2) {
                currentSection = section.getAttribute("id");
            }
        });

        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove("active"));

        // Add active class to the correct nav link
        const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }
    
    container.addEventListener("scroll", changeActiveSection);
    changeActiveSection(); // Run on load
});
