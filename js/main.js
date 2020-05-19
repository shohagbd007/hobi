(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        // Meanmenu JS Here
        $('#nav-menu').meanmenu({
            meanMenuContainer: '.nav-mobile-menu',
            meanScreenWidth: "1200",
            onePage: true
        });
        // Navbar Menu Active JS Here
        $('.main-menu ul li a').on('click',function () {
            $('.main-menu ul li a').removeClass("active");
            $(this).addClass("active");
        });
        // Sticky Nav JS Here
        $(window).on("scroll", function(){
            if($(window).scrollTop()){
                $('.header-area').addClass('sticky-nav');
            }
            else{
                $('.header-area').removeClass('sticky-nav');
            }
        });
        // Navbar Mobile Menu JS Here
        $("a.nav-link").on('click', function(){
            $(".navbar-collapse").removeClass("show");
        });
        // Siderbar Menu JS Here
        $("#sidebar-open-btn").on('click', function(e){
            e.preventDefault();
            $("#sidebar-menu").css("transform","translateX(0)");
        });
        $("#sidebar-close-btn").on('click', function(e){
            e.preventDefault();
            $("#sidebar-menu").css("transform","translateX(100%)");
        });
        // Active Nav Menu Spy JS Here
        window.onload = function () {
            scrollSpy('#main-menu', {
              offset: 100, // in pixels
              menuActiveTarget: 'ul li > a',
              sectionClass: '.scrollspy',
              activeClass: 'active',
            })
        }
        // Navbar Scroll Spy JS Here
        $('.main-menu ul li a').click(function(e){
            e.preventDefault();
            var hash = this.hash;
            var headerH = '80';
            var position = $(hash).offset().top - headerH;
            $('html').animate({
                scrollTop: position
            }, 100);            
        });
        // Magnific Popup JS Here
        $(".slider-video-btn").magnificPopup({
            type: 'iframe'
            // other options
        });
        // Isotope Portfolio Gallery JS Here
        // init Isotope
        var $grid = $('.grid').isotope({
            // options
        });
        $('.grid').isotope({
            // options
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1
            }
        });
        // Isotope Portfolio Menu Active
        $(".portfolio-buttons button").on('click', function(){
            $(".portfolio-buttons button").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr("data-filter");
        });
        // filter items on button click
        $('.portfolio-buttons').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });        
        // Team Carousel JS Here
        $("#team-carousel").owlCarousel({
            items: 1,
            loop: true,
            margin:30,
            autoplay: true,
            nav: false,
            dots: false,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            responsive:{
                0:{
                    items:1,
                    nav: false
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                }
            }
        });
        // Counter UP JS Here
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        // Testimonial Carousel JS Here
        $("#testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            margin:30,
            autoplay: true,
            navText : ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplayTimeout: 5000,
            responsive:{
                0:{
                    items:1,
                    nav: false
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                }
            }            
        });    
        // WOW JS Here
        new WOW().init();
        // Scroll Top JS Here
        $(window).on('scroll', function(){
            if($(this).scrollTop()>100){
                $(".scrolltopsec").fadeIn();
                $('.scrolltopsec').css('opacity','1');
            }
            else{
                $(".scrolltopsec").fadeOut();
            }
        });
        $(".scrolltopsec").on('click', function(){
            $("html, body").animate(
                {
                    scrollTop:0
                },
                100
            );            
        });            
    });
}(jQuery));