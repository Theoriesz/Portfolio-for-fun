const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const links = nav.querySelectorAll("a");

toggle.addEventListener("click", () => {
    
    nav.classList.toggle("open");

});

links.forEach((link) => {

    link.addEventListener("click", () => {
        nav.classList.remove("open")
        
    });

});