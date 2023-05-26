const carousel = document.querySelector(".carousel");
const slides = Array.from(carousel.querySelectorAll("img"));
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let currentIndex = 0;
const img = slides[0].offsetWidth;
function goToSlide(index) {
  if (index == 3) return;
  carousel.style.transform = `translateX(-${img * index}px)`;
  currentIndex = index;
}

function showPrevSlide() {
  if (currentIndex === 0) {
    goToSlide(slides.length - 1);
  } else {
    goToSlide(currentIndex - 1);
  }
}

function showNextSlide() {
  if (currentIndex === slides.length - 1) {
    goToSlide(0);
  } else {
    goToSlide(currentIndex + 1);
    console.log(currentIndex);
  }
}

prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
console.log(form, emailInput, messageInput);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!emailInput.value) {
    emailInput.classList.toggle("error");
  }
  if (!messageInput.value) {
    messageInput.classList.toggle("error");
  }
});
