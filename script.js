// =============================
// MOBILE MENU
// =============================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


// Close menu when clicking a link

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});


// =============================
// CURRENT YEAR
// =============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =============================
// CONTACT FORM
// =============================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }


    formMessage.textContent =
        "Thank you, " + name + "! Your message is ready.";


    contactForm.reset();

});