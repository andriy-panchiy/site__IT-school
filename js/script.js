scrollSpy('.nav', {
  offset: 120,
  menuActiveTarget: '.list-link',
  sectionClass: '.scrollspy',
  activeClass: 'active',
  scrollContainer: '',
});

const twenty_years_slider = new Swiper('.twenty-years-slider', {
  navigation: {
    nextEl: '.twenty-years-button-next',
    prevEl: '.twenty-years-button-prev',
  },
  scrollbar: {
    snapOnRelease: true,
    el: '.twenty-years-scrollbar',
    hide: false,
    draggable: true,
  },
});

const story_slider = new Swiper('.story-slider', {
  navigation: {
    nextEl: '.story-button-next',
    prevEl: '.story-button-prev',
  },
  rewind: true,
  slidesPerView: 2,
  spaceBetween: 18,
});

const students_slider = new Swiper('.students-slider', {
  spaceBetween: 30,
  rewind: true,
  scrollbar: {
    el: '.students-scrollbar',
    hide: false,
    draggable: true,
  },
});

const reviews = new Swiper('.reviews-slider', {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  breakpoints: {
    0: { slidesPerView: 1 },
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
  },
});

const collective = new Swiper('.collective', {
  spaceBetween: 20,
  slidesPerView: 4,
  navigation: {
    nextEl: '.collective-button-next',
    prevEl: '.collective-button-prev',
  },
  scrollbar: {
    snapOnRelease: true,
    el: '.collective-scrollbar',
    hide: false,
    draggable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1120: { slidesPerView: 4 },
  },
});

const swiper = new Swiper('.mySwiper', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    snapOnRelease: true,
    el: '.gallery-scrollbar',
    hide: false,
    draggable: true,
  },
  thumbs: {
    swiper: swiper,
  },
});

const curriculumMixContainer = document.querySelector('#curriculum');
const reviewsMixContainer = document.querySelector('#reviews');

const mixerCurriculum = mixitup(curriculumMixContainer, {
  load: {
    filter: '.filter-1',
  },
  controls: {
    scope: 'local',
  },
});

const mixerReviews = mixitup(reviewsMixContainer, {
  load: {
    filter: 'all',
  },
  controls: {
    scope: 'local',
  },
  callbacks: {
    onMixStart: function () {
      reviews.update();
      reviews.allowSlideNext = false;
      reviews.allowSlidePrev = false;
      reviews.allowTouchMove = false;
    },
    onMixEnd: function () {
      reviews.update();
      reviews.allowSlideNext = true;
      reviews.allowSlidePrev = true;
      reviews.allowTouchMove = true;
    },
  },
});
