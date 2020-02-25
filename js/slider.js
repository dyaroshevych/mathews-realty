const slides = document.querySelector(".featured__slider").children;

const leftArrow = document.querySelector(".featured__arrow--left");
const rightArrow = document.querySelector(".featured__arrow--right");

const moveSlide = () => {
  if (slides[0].classList.contains("active")) {
    slides[0].classList.remove("active");
    slides[1].classList.add("active");
    slides[0].style.zIndex = "1";
    slides[1].style.zIndex = "2";
  } else {
    slides[0].classList.add("active");
    slides[1].classList.remove("active");
    slides[0].style.zIndex = "2";
    slides[1].style.zIndex = "1";
  }
};

moveSlide();

leftArrow.addEventListener("click", () => moveSlide());
rightArrow.addEventListener("click", () => moveSlide());
