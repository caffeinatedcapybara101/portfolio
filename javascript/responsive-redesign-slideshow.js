// slideshow effect source:
//   https://www.w3schools.com/howto/howto_js_slideshow.asp

// ****************** low-fidelity ******************
let slideIndexLow = 1;
showSlidesLow(slideIndexLow);

// Next/previous controls
function plusSlidesLow(n) {
    showSlidesLow(slideIndexLow += n);
}

// Thumbnail image controls
function currentSlideLow(n) {
    showSlidesLow(slideIndexLow = n);
}

function showSlidesLow(n) {
    let i;
    let slides = document.getElementById("low-fidelity-slides").getElementsByClassName("slides");
    let dots = document.getElementById("low-fidelity-dots").getElementsByClassName("dot");
    if (n > slides.length) { slideIndexLow = 1 }
    if (n < 1) { slideIndexLow = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexLow - 1].style.display = "block";
    dots[slideIndexLow - 1].className += " active";
}

// ****************** high-fidelity-web ******************
let slideIndexHighWeb = 1;
showSlidesHighWeb(slideIndexHighWeb);

// Next/previous controls
function plusSlidesHighWeb(n) {
    showSlidesHighWeb(slideIndexHighWeb += n);
}

// Thumbnail image controls
function currentSlideHighWeb(n) {
    showSlidesHighWeb(slideIndexHighWeb = n);
}

function showSlidesHighWeb(n) {
    let i;
    let slides = document.getElementById("high-fidelity-web-slides").getElementsByClassName("slides");
    let dots = document.getElementById("high-fidelity-web-dots").getElementsByClassName("dot");
    if (n > slides.length) { slideIndexHighWeb = 1 }
    if (n < 1) { slideIndexHighWeb = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexHighWeb - 1].style.display = "block";
    dots[slideIndexHighWeb - 1].className += " active";
}

// ****************** high-fidelity-tablet ******************
let slideIndexHighTablet = 1;
showSlidesHighTablet(slideIndexHighTablet);

// Next/previous controls
function plusSlidesHighTablet(n) {
    showSlidesHighTablet(slideIndexHighTablet += n);
}

// Thumbnail image controls
function currentSlideHighTablet(n) {
    showSlidesHighTablet(slideIndexHighTablet = n);
}

function showSlidesHighTablet(n) {
    let i;
    let slides = document.getElementById("high-fidelity-tablet-slides").getElementsByClassName("slides");
    let dots = document.getElementById("high-fidelity-tablet-dots").getElementsByClassName("dot");
    if (n > slides.length) { slideIndexHighTablet = 1 }
    if (n < 1) { slideIndexHighTablet = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexHighTablet - 1].style.display = "block";
    dots[slideIndexHighTablet - 1].className += " active";
}

// ****************** high-fidelity-phone ******************
let slideIndexHighPhone = 1;
showSlidesHighPhone(slideIndexHighPhone);

// Next/previous controls
function plusSlidesHighPhone(n) {
    showSlidesHighPhone(slideIndexHighPhone += n);
}

// Thumbnail image controls
function currentSlideHighPhone(n) {
    showSlidesHighPhone(slideIndexHighPhone = n);
}

function showSlidesHighPhone(n) {
    let i;
    let slides = document.getElementById("high-fidelity-phone-slides").getElementsByClassName("slides");
    let dots = document.getElementById("high-fidelity-phone-dots").getElementsByClassName("dot");
    if (n > slides.length) { slideIndexHighPhone = 1 }
    if (n < 1) { slideIndexHighPhone = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexHighPhone - 1].style.display = "block";
    dots[slideIndexHighPhone - 1].className += " active";
}

// ****************** annotations ******************
let slideIndexAnnotations = 1;
showSlidesAnnotations(slideIndexAnnotations);

// Next/previous controls
function plusSlidesAnnotations(n) {
    showSlidesAnnotations(slideIndexAnnotations += n);
}

// Thumbnail image controls
function currentSlideAnnotations(n) {
    showSlidesAnnotations(slideIndexAnnotations = n);
}

function showSlidesAnnotations(n) {
    let i;
    let slides = document.getElementById("annotations-slides").getElementsByClassName("slides");
    let dots = document.getElementById("annotations-dots").getElementsByClassName("dot");
    if (n > slides.length) { slideIndexAnnotations = 1 }
    if (n < 1) { slideIndexAnnotations = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexAnnotations - 1].style.display = "block";
    dots[slideIndexAnnotations - 1].className += " active";
}