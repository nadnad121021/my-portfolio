
  // @ts-ignore
  $(function () {
    'use strict'

    // MENU
    // @ts-ignore
    $('.navbar .nav-link').on('click',function(){
        // @ts-ignore
        $(".navbar-collapse").collapse('hide');
    });

    // @ts-ignore
    $(window).on('scroll', function() {     
                                
        /*----------------------------------------------------*/
        /*  Navigtion Menu Scroll
        /*----------------------------------------------------*/    
        
        // @ts-ignore
        var b = $(window).scrollTop();
        
        if( b > 72 ){       
            // @ts-ignore
            $(".navbar").addClass("scroll");
        } else {
            // @ts-ignore
            $(".navbar").removeClass("scroll");
        }               
    });

    // TESTIMONIALS CAROUSEL
    // @ts-ignore
    $('#testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2,
            },
            1200:{
                items:3,
                loop:false
            }
        }
    })

    // SMOOTHSCROLL
    // @ts-ignore
    $(function() {
      // @ts-ignore
      $('.navbar .nav-link').on('click', function(event) {
        // @ts-ignore
        var $anchor = $(this);
        // @ts-ignore
        $('html, body').stop().animate({
            // @ts-ignore
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });   
     
  });
