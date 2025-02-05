
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // Add event listener for slide change
  on: {
    slideChange: function () {
      const colors = ['#F4A764', '#ADB0B0', '#30A357', '#F24F4F'];
      const activeSlideIndex = this.realIndex;
      document.body.style.backgroundColor = colors[activeSlideIndex % colors.length];
    }
  }
});
