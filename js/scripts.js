const $ = require('jquery');

$(document).ready(function() {
    console.log('ready');
    
    // links scroll to anchors
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if(target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 2000);
      }
    });
    
    // code for hamburger menu
    var icon = $('.icon'),
        menu = $('#navMenu');
        
    icon.on('click', function() {
      if (menu.className === 'navHeader') {
        menu.className += 'responsive';
      }
      else {
        menu.className = 'navHeader';
      }
    });

    // skillset
    $('.html').css('width', '90%');
    $('.css').css('width', '90%');
    $('.scss').css('width', '90%');
    $('.bourbon').css('width', '85%');
    $('.javascript').css('width', '90%');
    $('.jquery').css('width', '90%');
    $('.velocity').css('width', '75%');
    $('.rwd').css('width', '75%');
    $('.react').css('width', '70%');
    $('.node').css('width', '90%');
    $('.socket').css('width', '85%');
    $('.rethink').css('width', '70%');
    $('.git').css('width', '90%');
    
    // parallax
    if ($("#js-parallax-window1").length) {
        parallax();
    }
    
    if ($("#js-parallax-window2").length) {
        parallax();
    }
    
    $(window).scroll(function(e) {
      if ($("#js-parallax-window1").length) {
        parallax();
      }
      if ($("#js-parallax-window2").length) {
        parallax();
      }
    });
    
    function parallax(){
      var plxSpeed = 0.35;
      // this if statement deals with the first parallax window
      if( $("#js-parallax-window1").length > 0 ) {
        var plxBackground1 = $("#js-parallax-background1"),
            plxWindow1 = $("#js-parallax-window1"),
            plxWindowTopToPageTop1 = $(plxWindow1).offset().top,
            windowTopToPageTop1 = $(window).scrollTop(),
            plxWindowTopToWindowTop1 = plxWindowTopToPageTop1 - windowTopToPageTop1;
    
        plxBackground1.css('top', - (plxWindowTopToWindowTop1 * plxSpeed) + 'px');
      }
      // this if statement deals with the second parallax window
      if( $("#js-parallax-window2").length > 0 ) {
        var plxBackground2 = $("#js-parallax-background2"),
            plxWindow2 = $("#js-parallax-window2"),
            plxWindowTopToPageTop2 = $(plxWindow2).offset().top,
            windowTopToPageTop2 = $(window).scrollTop(),
            plxWindowTopToWindowTop2 = plxWindowTopToPageTop2 - windowTopToPageTop2;
    
        plxBackground2.css('top', - (plxWindowTopToWindowTop2 * plxSpeed) + 'px');
      }
    }
});