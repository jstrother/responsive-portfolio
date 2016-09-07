const $ = require('jquery');
const velocity = require('velocity-animate');

$(document).ready(function() {
    console.log('ready');
    
    // skillset
    $(document).ready(function() {
        $('.html').css('width', '100%');
        $('.css').css('width', '100%');
        $('.scss').css('width', '95%');
        $('.bourbon').css('width', '85%');
        $('.javascript').css('width', '95%');
        $('.jquery').css('width', '90%');
        $('.velocity').css('width', '65%');
        $('.rwd').css('width', '80%');
        $('.react').css('width', '70%');
        $('.node').css('width', '100%');
        $('.socket').css('width', '85%');
        $('.rethink').css('width', '70%');
        $('.git').css('width', '95%');
    });
    
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
      if( $("#js-parallax-window1").length > 0 ) {
        var plxBackground = $("#js-parallax-background1");
        var plxWindow = $("#js-parallax-window1");
    
        var plxWindowTopToPageTop = $(plxWindow).offset().top;
        var windowTopToPageTop = $(window).scrollTop();
        var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;
    
        var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
        var windowInnerHeight = window.innerHeight;
        var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
        var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
        var plxSpeed = 0.35;
    
        plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
      }
      if( $("#js-parallax-window2").length > 0 ) {
        var plxBackground = $("#js-parallax-background2");
        var plxWindow = $("#js-parallax-window2");
    
        var plxWindowTopToPageTop = $(plxWindow).offset().top;
        var windowTopToPageTop = $(window).scrollTop();
        var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;
    
        var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
        var windowInnerHeight = window.innerHeight;
        var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
        var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
        var plxSpeed = 0.35;
    
        plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
      }
    }
});