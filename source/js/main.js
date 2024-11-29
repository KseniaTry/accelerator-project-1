import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
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
const faqButtonsContainer = document.querySelector('.faq__buttons-container');
const faqTabItems = document.querySelectorAll('.faq__tab-item');

// нажатие кнопок с выбором категории (центр, абонемент и тд)
faqButtonsContainer.addEventListener('click', (evt) => {
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

// нажатие на вопрос и кнопку для открытия ответа на вопрос
faqTabItems.forEach((faqTabItem) => {
  faqTabItem.addEventListener('click', () => {
    if (faqTabItem.classList.contains('faq__tab-item--active')) {
      faqTabItem.classList.remove('faq__tab-item--active');
    } else {
      faqTabItem.classList.add('faq__tab-item--active');
    }
  });
});

// Блок Абонементы

const priceParameters = {
  oneMonth: {
    trainer: 5000,
    day: 1700,
    fullday: 2700,
  },
  sixMonth: {
    trainer: 30000,
    day: 10200,
    fullday: 16200,
  },
  twelveMonth: {
    trainer: 60000,
    day: 20400,
    fullday: 32400,
  }
};

const CardTypes = {
  TRAINER: 'trainer',
  DAY: 'day',
  FULLDAY: 'fullday',
}

const tabButtonList = document.querySelectorAll('.price__tab-button');
const priceCardList = document.querySelectorAll('.price__tab-content-item');

const updateCardPrice = (monthCount) => {
  for (const [key, value] of Object.entries(priceParameters)) {
    if (key === monthCount) {
      priceCardList.forEach((card) => {
        const price = card.querySelector('.price__item-price');

        if (card.dataset.type === CardTypes.TRAINER) {
          price.textContent = value.trainer;
          price.dataset.price = value.trainer;
        }

        if (card.dataset.type === CardTypes.DAY) {
          price.textContent = value.day;
          price.dataset.price = value.day;
        }

        if (card.dataset.type === CardTypes.FULLDAY) {
          price.textContent = value.fullday;
          price.dataset.price = value.fullday;
        }
      })
      break;
    }
  }
};

var activeButtonId = 'oneMonth';
var previousActiveButtonId = '';

// изменение цены на карточках при клике на кнопки
tabButtonList.forEach((button) => {
  button.addEventListener('click', (evt) => {
    const monthCount = evt.target.id;

    updateCardPrice(monthCount);

    previousActiveButtonId = activeButtonId;
    activeButtonId = monthCount;

    button.classList.add('price__tab-button--active');

    const previousActiveButton = document.getElementById(previousActiveButtonId);
    previousActiveButton.classList.remove('price__tab-button--active');
  });
});

// Блок About (видео)
const playButton = document.querySelector('.about__play');
const video = document.querySelector('.about__video');

playButton.addEventListener('click', () => {
  video.style.display = 'block';
  video.style.zIndex = 3;
});
