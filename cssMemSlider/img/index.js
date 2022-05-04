let style = document.createElement("style");
style.type = "text/css";

const MEM_COUNT = 7;

const NOTES_VAL = [
  ".css importance",
  "Russian realities",
  "COVID'19 realities",
  "Frontend vs Backend",
  "Weekend",
  "full stack debeloper",
  ".css life hack",
];

const MEM_CONTANER = document.querySelector(".mems__container");
const MEM_SLIDE = document.querySelectorAll(".mems__slide");
const NOTES = document.querySelector(".notes");

const CONTROLS = document.querySelector(".controls");
const CONTROL_ELEMENT_CLASSES = ["control__element"];

const MEM_ELEMENT_CLASSES = ["mems__slide"];

let activeSlideIndex = 2;

// ===== make slider

const makeTag = (classList = [], tag = "div", val = "") => {
  let div = document.createElement(tag);
  div.innerHTML = val;
  div.classList.add(...classList);

  return div;
};

const fillSlides = () => {
  for (let i = 0; i < MEM_COUNT; i++) {
    MEM_CONTANER.appendChild(makeTag(MEM_ELEMENT_CLASSES));

    style.innerHTML += `.${MEM_ELEMENT_CLASSES[0]}:nth-child(${
      i + 1
    }) {background-image:url(./img/0${i}.png);}\n`;
  }
};

const fillControls = () => {
  for (let i = 0; i < MEM_COUNT; i++) {
    CONTROLS.appendChild(makeTag(CONTROL_ELEMENT_CLASSES));
  }
};

const makeSlider = () => {
  fillSlides();
  setMemImg(activeSlideIndex);
  setNoteText(activeSlideIndex);
  fillControls();
  setControl(activeSlideIndex);
};

// ==== change slides

const giveSlideNumber = (e) => {
  return Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
};

const setMemImg = (n) => {
  MEM_CONTANER.style.transition = "all .7s ease-out";

  MEM_CONTANER.style.marginLeft = `-${40 * n}vw`;
};

const setNoteText = (activeSlideIndex) => {
  NOTES.innerHTML = NOTES_VAL[activeSlideIndex]
    ? NOTES_VAL[activeSlideIndex]
    : "";
};

const setControl = (activeSlideIndex) => {
  CONTROLS.childNodes[activeSlideIndex].classList.toggle(
    "control__element-active"
  );
};

const changeSlide = (e) => {
  if (activeSlideIndex === giveSlideNumber(e)) return;

  setControl(activeSlideIndex);

  activeSlideIndex = giveSlideNumber(e);

  setMemImg(activeSlideIndex);
  setNoteText(activeSlideIndex);
  setControl(activeSlideIndex);
};

makeSlider();

CONTROLS.addEventListener("mouseup", changeSlide);

document.getElementsByTagName("head")[0].appendChild(style);
