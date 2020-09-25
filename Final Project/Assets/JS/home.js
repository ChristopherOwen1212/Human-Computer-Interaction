var slideIndex = 0;
function runSlider() {
    var i;
    var slides = document.getElementsByClassName("slider");
    var bullet = document.getElementsByClassName("bullet");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < bullet.length; i++) {
        bullet[i].className = bullet[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    bullet[slideIndex-1].className += " active";
    setTimeout(runSlider, 5000);
}

function plusDivs(n) {
    showImage(slideIndex += n);
}

function currentImage(n) {
    showImage(slideIndex = n);
}

function showImage(n) {
    var i;
    var x = document.getElementsByClassName("slider");
    var dots = document.getElementsByClassName("bullet");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

$( document ).ready(function() {
    runSlider();
    $("#bullet1").click(function() {
        currentImage(1);
    });
    $("#bullet2").click(function() {
        currentImage(2);
    });
    $("#bullet3").click(function() {
        currentImage(3);
    });
    $("#bullet4").click(function() {
        currentImage(4);
    });
});