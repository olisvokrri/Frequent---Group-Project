
/* HERO ANIMATION */

const hero = document.querySelector(".hero-content");

window.addEventListener("load", function() {

    hero.classList.add("show");

});


/* SECTION ANIMATIONS */

const sections = document.querySelectorAll(
    ".featured, .section-heading, .event-card, .details-box, .cta"
);

sections.forEach(function(section) {

    section.classList.add("reveal");

});


window.addEventListener("load", function() {

    setTimeout(function() {

        sections.forEach(function(section) {

            section.classList.add("show");

        });

    }, 100);

});


/* EVENT CARD HOVER ANIMATION */

const eventCards = document.querySelectorAll(".event-card");

eventCards.forEach(function(card) {

    card.addEventListener("mouseenter", function() {

        card.classList.add("card-hover");

    });


    card.addEventListener("mouseleave", function() {

        card.classList.remove("card-hover");

    });

});


/* BUTTON HOVER ANIMATION */

const buttons = document.querySelectorAll(".main-btn, .hero-btn");

buttons.forEach(function(button) {

    button.addEventListener("mouseenter", function() {

        button.classList.add("button-hover");

    });


    button.addEventListener("mouseleave", function() {

        button.classList.remove("button-hover");

    });

});
