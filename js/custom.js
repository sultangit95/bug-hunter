$(document).ready(function(){
  'use strict';
  //===== for banner slider =====
  $(".banner-slider").slick({
    prevArrow: '<span class="custom-arrow prev-arrow">Previous</span>',
    nextArrow: '<span class="custom-arrow next-arrow">Next</span>',
    slidesToShow: 1,
    speed: 1000,
    // fade: true,
  });
});