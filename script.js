const hamburger = document.getElementById('hamburger');
const nav_ul= document.getElementById("nav_ul")

hamburger.addEventListener('click',() => {
    nav_ul.classList.toggle('show');

});