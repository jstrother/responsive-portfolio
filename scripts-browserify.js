'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  console.log('ready');

  var navItem = (0, _jquery2.default)('.nav-item');

  // links scroll to anchors
  navItem.on('click', function (event) {
    var id = (0, _jquery2.default)(this.getAttribute('id')),
        target = '#' + id;

    if (target.length) {
      event.preventDefault();
      (0, _jquery2.default)('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 2000);
    }
  });

  // code for hamburger menu
  var minWidth769query = window.matchMedia('(min-width: 769px)'),
      clicked = false,
      icon = (0, _jquery2.default)('.icon');

  console.log('1clicked:', clicked);
  icon.on('click', function () {
    clicked = true;
    console.log('2clicked:', clicked);
  });
  (0, _jquery2.default)('.navMenu').on('click', function () {
    (0, _jquery2.default)('nav').toggleClass('responsive');
    icon.toggle();
    if (minWidth769query.matches) {
      icon.toggle();
    }
    if ((0, _jquery2.default)(window).resize() && !minWidth769query.matches && clicked) {
      navItem.toggle();
      clicked = false;
      console.log('3clicked:', clicked);
    }
  });

  // skillset
  (0, _jquery2.default)('.html').css('width', '90%');
  (0, _jquery2.default)('.css').css('width', '90%');
  (0, _jquery2.default)('.scss').css('width', '90%');
  (0, _jquery2.default)('.bourbon').css('width', '85%');
  (0, _jquery2.default)('.javascript').css('width', '90%');
  (0, _jquery2.default)('.jquery').css('width', '90%');
  (0, _jquery2.default)('.velocity').css('width', '75%');
  (0, _jquery2.default)('.rwd').css('width', '75%');
  (0, _jquery2.default)('.react').css('width', '70%');
  (0, _jquery2.default)('.node').css('width', '90%');
  (0, _jquery2.default)('.socket').css('width', '85%');
  (0, _jquery2.default)('.rethink').css('width', '70%');
  (0, _jquery2.default)('.git').css('width', '90%');

  // parallax
  if ((0, _jquery2.default)("#js-parallax-window1").length) {
    parallax();
  }

  if ((0, _jquery2.default)("#js-parallax-window2").length) {
    parallax();
  }

  (0, _jquery2.default)(window).scroll(function (e) {
    if ((0, _jquery2.default)("#js-parallax-window1").length) {
      parallax();
    }
    if ((0, _jquery2.default)("#js-parallax-window2").length) {
      parallax();
    }
  });

  function parallax() {
    var plxSpeed = 0.35;
    // this if statement deals with the first parallax window
    if ((0, _jquery2.default)("#js-parallax-window1").length > 0) {
      var plxBackground1 = (0, _jquery2.default)("#js-parallax-background1"),
          plxWindow1 = (0, _jquery2.default)("#js-parallax-window1"),
          plxWindowTopToPageTop1 = (0, _jquery2.default)(plxWindow1).offset().top,
          windowTopToPageTop1 = (0, _jquery2.default)(window).scrollTop(),
          plxWindowTopToWindowTop1 = plxWindowTopToPageTop1 - windowTopToPageTop1;

      plxBackground1.css('top', -(plxWindowTopToWindowTop1 * plxSpeed) + 'px');
    }
    // this if statement deals with the second parallax window
    if ((0, _jquery2.default)("#js-parallax-window2").length > 0) {
      var plxBackground2 = (0, _jquery2.default)("#js-parallax-background2"),
          plxWindow2 = (0, _jquery2.default)("#js-parallax-window2"),
          plxWindowTopToPageTop2 = (0, _jquery2.default)(plxWindow2).offset().top,
          windowTopToPageTop2 = (0, _jquery2.default)(window).scrollTop(),
          plxWindowTopToWindowTop2 = plxWindowTopToPageTop2 - windowTopToPageTop2;

      plxBackground2.css('top', -(plxWindowTopToWindowTop2 * plxSpeed) + 'px');
    }
  }
});
