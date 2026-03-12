document.addEventListener("DOMContentLoaded", () => {
    // Get the current URL path
    const currentLocation = location.pathname.split("/").pop() || "index.html";
    
    // Select all navigation links
    const navLinks = document.querySelectorAll(".main-nav a");
    
    // Loop through links and add the 'active' class to the current page
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        }
    });
});