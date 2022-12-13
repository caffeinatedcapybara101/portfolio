// ****************** sketches ******************
let slideIndexSketch = 1;
showSlidesSketch(slideIndexSketch);

// Next/previous controls
function plusSlidesSketch(n) {
    showSlidesSketch(slideIndexSketch += n);
}

// Thumbnail image controls
function currentSlideSketch(n) {
    showSlidesSketch(slideIndexSketch = n);
}

function showSlidesSketch(n) {
    let i;
    let slides = document.getElementById("sketches-slides").getElementsByClassName("slides");
    let dots = document.getElementById("sketches-dots").getElementsByClassName("dot");
    if (n > slides.length) { slideIndexSketch = 1 }
    if (n < 1) { slideIndexSketch = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexSketch - 1].style.display = "block";
    dots[slideIndexSketch - 1].className += " active";
}

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

// ****************** high-fidelity ******************
let slideIndexHigh = 1;
showSlidesHigh(slideIndexHigh);

// Next/previous controls
function plusSlidesHigh(n) {
    showSlidesHigh(slideIndexHigh += n);
}

// Thumbnail image controls
function currentSlideHigh(n) {
    showSlidesHigh(slideIndexHigh = n);
}

function showSlidesHigh(n) {
    let i;
    let slides = document.getElementById("high-fidelity-slides").getElementsByClassName("slides");
    let dots = document.getElementById("high-fidelity-dots").getElementsByClassName("dot");
    if (n > slides.length) { slideIndexHigh = 1 }
    if (n < 1) { slideIndexHigh = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexHigh - 1].style.display = "block";
    dots[slideIndexHigh - 1].className += " active";
}

// ****************** updated-high-fidelity ******************
let slideIndexUpdatedHigh = 1;
showSlidesUpdatedHigh(slideIndexUpdatedHigh);

// Next/previous controls
function plusSlidesUpdatedHigh(n) {
    showSlidesUpdatedHigh(slideIndexUpdatedHigh += n);
}

// Thumbnail image controls
function currentSlideUpdatedHigh(n) {
    showSlidesUpdatedHigh(slideIndexUpdatedHigh = n);
}

function showSlidesUpdatedHigh(n) {
    let i;
    let slides = document.getElementById("updated-high-fidelity-slides").getElementsByClassName("slides");
    let dots = document.getElementById("updated-high-fidelity-dots").getElementsByClassName("dot");
    if (n > slides.length) { slideIndexUpdatedHigh = 1 }
    if (n < 1) { slideIndexUpdatedHigh = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexUpdatedHigh - 1].style.display = "block";
    dots[slideIndexUpdatedHigh - 1].className += " active";
}

// ****************** user-testing ******************
let slideIndexUser = 1;
showSlidesUser(slideIndexUser);

// Next/previous controls
function plusSlidesUser(n) {
    showSlidesUser(slideIndexUser += n);
}

// Thumbnail image controls
function currentSlideUser(n) {
    showSlidesUser(slideIndexUser = n);
}

function showSlidesUser(n) {
    let i;
    let slides = document.getElementById("user-testing-slides").getElementsByClassName("slides");
    let dots = document.getElementById("user-testing-dots").getElementsByClassName("dot");
    if (n > slides.length) { slideIndexUser = 1 }
    if (n < 1) { slideIndexUser = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexUser - 1].style.display = "block";
    dots[slideIndexUser - 1].className += " active";
}