const slides = document.querySelector(".featured__slider").children;

const leftArrow = document.querySelector(".featured__arrow--left");
const rightArrow = document.querySelector(".featured__arrow--right");

const moveSlide = direction => {
  if (slides[0].classList.contains("active")) {
    slides[0].classList.remove("active");
    slides[1].classList.add("active");
  } else {
    slides[0].classList.add("active");
    slides[1].classList.remove("active");
  }
};

leftArrow.addEventListener("click", () => moveSlide("left"));
rightArrow.addEventListener("click", () => moveSlide("right"));
