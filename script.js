let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav-links')
let navLinks = document.querySelectorAll('.nav-links li')


burger.addEventListener('click', function(){
    //TOGGLE NAV
    nav.classList.toggle('nav-active');
    
    // ANIMATE LINKS 
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation ='';
        } else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
        }
    });
    //BURGER ANIMATION
    burger.classList.toggle('toggle')
});

