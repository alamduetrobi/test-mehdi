/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Common Scripts
Project:    Travnet Tech 
Author:     Travnet Tech Team
Author URI: http://www.ncltours.co.uk/
 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

$(function () {
	'use strict'; // use strict to start 

  $('.all-servicer').owlCarousel({
    loop:true,
    nav:true,
    autoplay:false,
    dots:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

  $('.slider-active').owlCarousel({
    loop:true,
    nav:true,
    autoplay:false,
    dots:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

   /* ---------------------------------------------
    scroll
 --------------------------------------------- */
$("#topscroll").click(function() {
     $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
}); 
	
}); 