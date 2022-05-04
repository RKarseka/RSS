const body = document.getElementsByTagName("body")[0];
const imgUrl =
  "https://raw.githubusercontent.com/roman-ier/stage1-tasks/assets/images/";

const flipPrev = document.querySelector(".slide-prev");
const flipNext = document.querySelector(".slide-next");

let slideNumber = Math.floor(Math.random() * 20) + 1;

const slideIncr = (incr) => {
  if (slideNumber + incr > 20) {
    slideNumber = 1;
    return;
  }
  if (slideNumber + incr < 1) {
    slideNumber = 20;
    return;
  }
  slideNumber += incr;
};

export const setBg = (imgFolders, incr = 0) => {
  slideIncr(incr);
  const img = new Image();
  img.src =
    imgUrl +
    imgFolders[localStorage.getItem("timeOfDay")] +
    "/" +
    ("00" + slideNumber).slice(-2) +
    ".jpg";

  img.onload = () => {
    body.style.backgroundImage = `url(${img.src})`;
  };
};

export default (imgFolders) => {
  setBg(imgFolders);

  flipPrev.onclick = () => {
    slideIncr(-1);

    setBg(imgFolders);
  };

  flipNext.onclick = () => {
    slideIncr(1);

    setBg(imgFolders);
  };
};
