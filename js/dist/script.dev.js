"use strict";

var twenty_years_slider = new Swiper(".twenty-years-slider", {
  navigation: {
    nextEl: ".twenty-years-button-next",
    prevEl: ".twenty-years-button-prev"
  },
  scrollbar: {
    snapOnRelease: true,
    el: ".twenty-years-scrollbar",
    hide: false,
    draggable: true
  }
});
var story_slider = new Swiper(".story-slider", {
  navigation: {
    nextEl: ".story-button-next",
    prevEl: ".story-button-prev"
  },
  rewind: true,
  slidesPerView: 2,
  spaceBetween: 18
});
var students_slider = new Swiper(".students-slider", {
  spaceBetween: 30,
  rewind: true,
  scrollbar: {
    el: ".students-scrollbar",
    hide: false,
    draggable: true
  }
});