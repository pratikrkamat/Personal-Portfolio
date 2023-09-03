
// toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menyIcon.onclick=()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


let sections=document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=> {
        let top = window.scrollY;
        let offset = se.offsetTop -150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');

        if (top >=offst && top < offset + height){
        navLinks.forEach(navLinks => {
            navLinks.classList.remove('active');
            document.querySelector( 'header nav a[href*=' + id + ']').classList.add('active');
        });

      };

   });

//    sticky navbar
let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY >100);
// remove toggle

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};




