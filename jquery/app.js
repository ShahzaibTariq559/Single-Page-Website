
$(document).ready(function(){
    $('#main-slider').owlCarousel({
        loop:true,
        margin:10,
        autoplay : true,
        slideTransition: 'linear',
        items:1,  
        dots: false,
        navText:['PREV' , 'NEXT'], 
        // responsiveClass:true,
        smartSpeed: 1000,
        responsive:{
            0:{
                nav:false,
            },
            600:{
                nav:true,
            },
            1000:{
                nav:true,
            }
        }
    })
  });

  $(document).ready(function(){
    $('#project-slider').owlCarousel({
        loop:true,
        margin:10,
        items:1,
        autoplay : true,
        slideTransition: 'linear',
        dots: true,
        navText:['PREV' , 'NEXT'], 
        // responsiveClass:true,
        smartSpeed: 1000,
        responsive:{
            0:{
                items: 1,
            },
            600:{
                items:3,
            },
            1000:{
                items:3,
                center: true,
            }
        }
    })
  });

  $(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    donts: true,
    autoplay : true,
    slideTransition: 'linear',
    smartSpeed: 800,
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
});

// alert("Hello! I am an alert box!!");