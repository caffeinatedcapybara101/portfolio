// ****************** storyboard ******************
let slideIndexStoryboard = 1;
showSlidesStoryboard(slideIndexStoryboard);

// Next/previous controls
function plusSlidesStoryboard(n) {
    showSlidesStoryboard(slideIndexStoryboard += n);
}

// Thumbnail image controls
function currentSlideStoryboard(n) {
    showSlidesStoryboard(slideIndexStoryboard = n);
}

function showSlidesStoryboard(n) {
    let i;
    let slides = document.getElementById("storyboard-slides").getElementsByClassName("slides");
    let dots = document.getElementById("storyboard-dots").getElementsByClassName("dot");
    if (n > slides.length) { slideIndexStoryboard = 1 }
    if (n < 1) { slideIndexStoryboard = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexStoryboard - 1].style.display = "block";
    dots[slideIndexStoryboard - 1].className += " active";
}

// ****************** interface ******************
let slideIndexInterface = 1;
showSlidesInterface(slideIndexInterface);

// Next/previous controls
function plusSlidesInterface(n) {
    showSlidesInterface(slideIndexInterface += n);
}

// Thumbnail image controls
function currentSlideInterface(n) {
    showSlidesInterface(slideIndexInterface = n);
}

function showSlidesInterface(n) {
    let i;
    let slides = document.getElementById("interface-slides").getElementsByClassName("slides");
    let dots = document.getElementById("interface-dots").getElementsByClassName("dot");
    if (n > slides.length) { slideIndexInterface = 1 }
    if (n < 1) { slideIndexInterface = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexInterface - 1].style.display = "block";
    dots[slideIndexInterface - 1].className += " active";
}