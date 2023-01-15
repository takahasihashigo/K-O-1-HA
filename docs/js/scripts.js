/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


let fadeInTarget = document.querySelectorAll('.fade-in');

for (let i = 0; i < fadeInTarget.length; i++){

    window.addEventListener('scroll', function(){
        
        
        //ここから追加
        const rect = fadeInTarget[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; 
        
        if(scroll > offset - windowHeight + 150){
            fadeInTarget[i].classList.add('scroll-in');
        }
        //ここまで追加
        
        
    });
}


let fadeInTarget2 = document.querySelectorAll('.fade-in-second');

for (let i = 0; i < fadeInTarget2.length; i++){

    window.addEventListener('scroll', function(){
        
        
        //ここから追加
        const rect = fadeInTarget2[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; 
        
        if(scroll > offset - windowHeight + 150){
            fadeInTarget2[i].classList.add('scroll-in-2');
        }
        //ここまで追加
        
        
    });
}





let fadeInTarget3 = document.querySelectorAll('.fade-in-sun');

for (let i = 0; i < fadeInTarget3.length; i++){

    window.addEventListener('scroll', function(){
        
        
        //ここから追加
        const rect = fadeInTarget3[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; 
        
        if(scroll > offset - windowHeight + 150){
            fadeInTarget3[i].classList.add('scroll-in-3');
        }
        //ここまで追加
        
        
    });
}