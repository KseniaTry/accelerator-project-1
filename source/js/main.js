// https://swiperjs.com/get-started#installation
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';


// слайдер блок Отзывы
const reviewsSlider = document.querySelector('.reviews__swiper');

new Swiper(reviewsSlider, {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  loop: false,
  navigation: {
    prevEl: '.reviews__button--prev',
    nextEl: '.reviews__button--next',
    clickable: true,
  },
  breakpoints: {
    769: {
        allowTouchMove: false,
    },
    1366: {
        allowTouchMove: false,
    },
}
});



// слайдер блок Жюри
const juriSlider = document.querySelector('.juri__swiper');

new Swiper(juriSlider, {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  navigation: {
    prevEl: '.juri__button--prev',
    nextEl: '.juri__button--next',
    clickable: true,
  },
  breakpoints: {
    769: {
        slidesPerView: 2,
        spaceBetween: 40,
        allowTouchMove: false,
    },
    1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false,
    },
}
});

// блок FAQ
const faqButtonsContainer = document.querySelector(".faq__buttons-container");
const faqTabItems = document.querySelectorAll(".faq__tab-item");

// нажатие кнопок с выбором категории (центр, абонемент и тд)
faqButtonsContainer.addEventListener('click', evt => {
  const faqTabPaneId = evt.target.dataset.tab;
  const faqTabPane = document.getElementById(faqTabPaneId);
  const faqEvtButton = evt.target;
  const faqButtonActive = faqButtonsContainer.querySelector('.faq__tab-button--active');
  const faqTabPaneActiveId = document.getElementById(faqButtonActive.dataset.tab);

  faqButtonActive.classList.remove('faq__tab-button--active');
  faqTabPaneActiveId.classList.remove('faq__tab-pane--active');

  if (faqEvtButton.className === 'faq__tab-button faq__tab-button--active') {
    faqEvtButton.classList.remove('faq__tab-button--active');
    faqTabPane.classList.remove('faq__tab-pane--active');
  } else {
    faqEvtButton.classList.add('faq__tab-button--active');
    faqTabPane.classList.add('faq__tab-pane--active');
  }
});

// нажатие кнопки + для открытия ответа на вопрос
faqTabItems.forEach((faqTabItem) => {
  const faqButton = faqTabItem.querySelector("button");

  faqButton.addEventListener("click", () => {
    if (faqTabItem.classList.contains("faq__tab-item--active")) {
      faqTabItem.classList.remove("faq__tab-item--active");
    } else {
      faqTabItem.classList.add("faq__tab-item--active");
    }
  });
})

