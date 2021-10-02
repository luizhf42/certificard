var indiceSlide = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    indiceSlide++;
    
    if (indiceSlide > slides.length) {
        indiceSlide = 1;
    }

    slides[indiceSlide-1].style.display = "block";  
    setTimeout(showSlides, 4000); 
}