let closeBtn = document.querySelector('.fa-times');
let openBtn = document.querySelector('.fa-bars');
let sideBarMenu = document.querySelector('#sidenav');

//opening icon

openBtn.addEventListener('click', ()=>{
    sideBarMenu.style.width="250px";
})

//.close
closeBtn.addEventListener('click', ()=>{
    sideBarMenu.style.width="0";
})

var slideIndex =1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex +=n);
}

function currentSlide(n){
    showSlides(slideIndex =n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n> slides.length){slideIndex = 1}
    if(n<1){ slideIndex = slides.length}
    for(i=0; i< slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i=0; i<dots.length; i++){
        dots[i].classsName = dots[i].className.replace(" active", "");

    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className +=" active";
}