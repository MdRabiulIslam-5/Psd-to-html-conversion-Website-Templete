$(function () {
    //preloader
    $(window).on('load', function (event) {
        $('.preloader').delay(1500).fadeOut(1500);
    });

    //===== Sticky
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".navbar").removeClass("sticky");
        } else {
            $(".navbar").addClass("sticky");
        }
    });

    //===== Mobile Menu
    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    var subMenu = $('.sub-menu-bar .navbar-nav .sub-menu');

    if (subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
        });

        var subMenuToggler = $('.sub-menu-bar .navbar-nav .sub-nav-toggler');

        subMenuToggler.on('click', function () {
            $(this).parent().parent().children('.sub-menu').slideToggle();
            return false;
        });

    }

    //tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // counter start
    $('.counter').counterUp({
        delay: 10,
        time: 2500
    });

    //slick slider
    $('.slide_active').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        pauseOnHover: false,
    });

    //SmoothScroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 200,
        offset: 80,
    });

    //Venobox active  
    $('.venobox').venobox({
        spinner: 'cube-grid',
        framewidth: '450px',
        frameheight: '500px',
        share: ['facebook', 'twitter', 'download'],
    });

    $('.video_Btn').venobox({
        spinner: 'three-bounce'
    });

    // Animation
    AOS.init();

    //mixitup js
    var mixer = mixitup('.mix_gal');

    //Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 800) {
            $('.back-to-top').fadeIn(300);
        } else {
            $('.back-to-top').fadeOut(300);
        }
    });

    //Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
});
