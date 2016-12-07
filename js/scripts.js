'use strict';

import $ from 'jquery';
import jQuery from 'jquery';

window.$ = $;
window.jQuery = jQuery;

import 'jquery-ui';
import {Velocity as velocity} from 'velocity-animate';
import 'velocity-ui-pack';

$(() => {
    console.log('ready');
    
    // links scroll to anchors
    const topLink = $('#top-link'),
          aboutLink = $('#about-link'),
          skillsetLink = $('#skillset-link'),
          projectsLink = $('#projects-link');
    
    topLink.on('click', scrollToAnchor('#spaceDivTop'));
    aboutLink.on('click', scrollToAnchor('#spaceDivAbout'));
    skillsetLink.on('click', scrollToAnchor('#spaceDivSkills'));
    projectsLink.on('click', scrollToAnchor('#spaceDivProjects'));
    
    function scrollToAnchor(target) {
      target.velocity('scroll', {
        duration: 2000,
        easing: 'easeInCirc'
      });
    }
    
    // this code block stopped working after webpack was added
    // $('a[href^="#"]').on('click', event => {
    //   let target = $(this.getAttribute('href'));
    //   if(target.length) {
    //       event.preventDefault();
    //       $('html, body').stop().animate({
    //           scrollTop: target.offset().top
    //       }, 2000);
    //   }
    // });
    
    // code for hamburger menu
    const menu = $('#navMenu'),
        icon = $('#icon'),
        item = $('.nav-item');
        
    menu.data('clicked', false);
        
    menu.on('click', () => {
      const $this = $(this);
      $this.toggle($this.data('clicked', true));
      // we only want this to toggle on mobile screens
      if (window.matchMedia("(max-width: 680px)").matches) {
        icon.toggle();
        item.toggle();
      }
    });
    
    $(window).resize(() => {
      // first check to make sure screen size is bigger than mobile
      if (window.matchMedia("(min-width: 681px)").matches) {
        // we want to make sure that item and icon show or hide properly
        if (item.hasClass('hidden')) {
          // removing the class messes with the mobile display
          item.toggleClass('hidden');
          // apparently, we have to force it to show to make sure it works
          item.show();
        }
        icon.hide();
      }
      else {
        // on a mobile display, we want the opposite of above, but the same thing on the whole
        if (!(item.hasClass('hidden'))) {
          item.toggleClass('hidden');
          icon.show();
          // to make sure this works on continually resizing the window we have to force the two to be opposite
          if (icon.show()) {
            item.hide();
          }
        }
        if (icon.hasClass('hidden')) {
          icon.toggleClass('hidden');
          item.show();
          // to make sure this works on continually resizing the window we have to force the two to be opposite
          if (item.show()) {
            icon.hide();
          }
        }
      }
    });

    // skillset
    // this code block stopped working after webpack was added
    $('.html').css('width', '90%');
    $('.css').css('width', '90%');
    $('.scss').css('width', '90%');
    $('.bourbon').css('width', '85%');
    $('.javascript').css('width', '90%');
    $('.jquery').css('width', '85%');
    $('.velocity').css('width', '75%');
    $('.rwd').css('width', '85%');
    $('.react').css('width', '70%');
    $('.node').css('width', '85%');
    $('.socket').css('width', '65%');
    $('.rethink').css('width', '50%');
    $('.git').css('width', '90%');
    
    // parallax
    // this code block stopped working after webpack was added
    const paraWindow1 = $("#js-parallax-window1"),
          paraWindow2 = $("#js-parallax-window2");
    
    if (paraWindow1.length) {
        parallax();
    }
    
    if (paraWindow2.length) {
        parallax();
    }
    
    $(window).scroll(function(e) {
      if (paraWindow1.length) {
        parallax();
      }
      if (paraWindow2.length) {
        parallax();
      }
    });
    
    function parallax(){
      const plxSpeed = 0.35;
      // this if statement deals with the first parallax window
      if(paraWindow1.length > 0) {
        const plxBackground1 = $("#js-parallax-background1"),
            plxWindow1 = $("#js-parallax-window1"),
            plxWindowTopToPageTop1 = $(plxWindow1).offset().top,
            windowTopToPageTop1 = $(window).scrollTop();
            
        let plxWindowTopToWindowTop1 = plxWindowTopToPageTop1 - windowTopToPageTop1;
    
        plxBackground1.css('top', - (plxWindowTopToWindowTop1 * plxSpeed) + 'px');
      }
      // this if statement deals with the second parallax window
      if(paraWindow2.length > 0) {
        const  plxBackground2 = $("#js-parallax-background2"),
            plxWindow2 = $("#js-parallax-window2"),
            plxWindowTopToPageTop2 = $(plxWindow2).offset().top,
            windowTopToPageTop2 = $(window).scrollTop();
            
        let plxWindowTopToWindowTop2 = plxWindowTopToPageTop2 - windowTopToPageTop2;
    
        plxBackground2.css('top', - (plxWindowTopToWindowTop2 * plxSpeed) + 'px');
      }
    }
});