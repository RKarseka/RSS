const container = document.querySelector(".container");
const sliderHeight = container.clientHeight;

const slideRight = document.querySelector(".right-side");
const slideLeft = document.querySelector(".left-side");

const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

const slidesLenght = slideLeft.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLenght - 2) * 100}vh`;

const changeSlide = (direction) => {
  if (direction === "up") {
    if (activeSlideIndex > slidesLenght - 3) return;
    activeSlideIndex++;
  }

  if (direction === "down") {
    if (activeSlideIndex < 0) return;
    activeSlideIndex--;
  }

  slideLeft.style.transition = "all .7s ease-out";
  slideRight.style.transition = "all .7s ease-out";
  moveSlides();
};

const moveSlides = () => {
  slideRight.style.transform = `translateY(${
    -1 * activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};

const round = () => {
  if (activeSlideIndex > slidesLenght - 3) {
    slideLeft.style.transition = "none";
    slideRight.style.transition = "none";
    activeSlideIndex = 0;

    moveSlides();
  }

  if (activeSlideIndex < 0) {
    slideLeft.style.transition = "none";
    slideRight.style.transition = "none";
    activeSlideIndex = slidesLenght - 3;

    moveSlides();
  }
};

document.addEventListener("wheel", (e) =>
  changeSlide(
    (e.target.closest(".left-side") ? 1 : -1) * e.deltaY < 0 ? "up" : "down"
  )
);

slideLeft.addEventListener("transitionend", () => round());

downButton.addEventListener("click", () => changeSlide("down"));
upButton.addEventListener("click", () => changeSlide("up"));
document.addEventListener(
  "keydown",
  (e) => (e.code === "ArrowUp" || e.code === "ArrowLeft") && changeSlide("up")
);
document.addEventListener(
  "keydown",
  (e) =>
    (e.code === "ArrowDown" || e.code === "ArrowRight") && changeSlide("down")
);

console.log(
  "%cScore: 30\n - repeat the original project (+10)\n - required functionality: infinite slider (+10)\n - additional functionality: mouse wheel scrolling, mouse swipe scrolling (+20)",
  "color: green; line-height: 20px;"
);
