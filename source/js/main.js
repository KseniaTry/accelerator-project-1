// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


// блок FAQ
const faqButtonsContainer = document.querySelector(".faq__buttons-container");
const faqTabContent = document.querySelector(".faq__tab-content");
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
  const question = faqTabItem.querySelector("h3");

  question.addEventListener("click", () => {
    if (faqTabItem.classList.contains("faq__tab-item--active")) {
      faqTabItem.classList.remove("faq__tab-item--active");
    } else {
      faqTabItem.classList.add("faq__tab-item--active");
    }
  });
})

