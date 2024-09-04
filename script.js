// !    navbar menu js
let navbar = document.querySelectorAll(".nav-link");
let menuClose = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click",() => {
        menuClose.classList.remove("show");
    })
})

let preloader = document.querySelector("#preloader");

function preloading(){
    preloader.style.opacity = 0;
    preloader.style.display = 'none';
}


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    navLinks.forEach((otherLink) => {
      otherLink.classList.remove('active');
    });
    e.target.classList.add('active');
  });
});



// !     countDown timer js
var day = document.querySelector("#days");
var hour = document.querySelector("#hours");
var min = document.querySelector("#min");
var sec = document.querySelector("#sec");

    var nextdate = new Date("July 20, 2025 00:00:00").getTime();
    
    var countdown = setInterval(() => {
        var currentdate = new Date().getTime();
        var mydate = nextdate - currentdate;

        var days = Math.floor(mydate / (1000 * 60 * 60 * 24));
        var hours = Math.floor((mydate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((mydate % (1000 * 60 * 60)) / (1000 * 60));
        var secs = Math.floor((mydate % (1000 * 60)) / 1000)

        day.innerHTML = days;
        hour.innerHTML = hours;
        min.innerHTML = mins;
        sec.innerHTML = secs;

    }, 1000);



// !   SCROLL TO TOP JS
function scrollTop() {
    let scrollTopBtn = document.querySelector("#scrollUp");
    window.onscroll = function () {
        var scroll = document.documentElement.scrollTop;
        if(scroll >= 600){
            scrollTopBtn.classList.add("active")
        }
        else{
            scrollTopBtn.classList.remove("active")
        }
    }
}
scrollTop();