/* SWIPER SLIDER */

var swiper = new Swiper(".swiper", {
loop: true,

autoplay: {
delay: 3000,
disableOnInteraction: false
},

pagination: {
el: ".swiper-pagination",
clickable: true
}

});


/* MOBILE MENU */

function toggleMenu(){

let menu = document.querySelector(".menu");

menu.classList.toggle("active");

}


/* PROJECT FILTER */

function filterProject(type){

let projects = document.querySelectorAll(".project-grid img");

projects.forEach(project => {

if(type === "all"){

project.style.display = "block";

}

else if(project.classList.contains(type)){

project.style.display = "block";

}

else{

project.style.display = "none";

}

});

}