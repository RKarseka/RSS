const inputs = document.querySelector(".filters");
const reset = document.querySelector(".btn-reset");
const np = document.querySelector(".btn-next");
const save = document.querySelector(".btn-save");
const canvas = document.createElement("canvas");
const fileInput = document.querySelector('input[type="file"]');
const imageContainer = document.querySelector("img");

Data = new Date();
let imgN = 1;
let filters = { blur: 0, invert: 0, sepia: 0, saturate: 100, hue: 0 };
const imgPath =
  "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/";
const imgTime = ["night/", "morning/", "day/", "evening/"];

const setCss = (type, val = 0) => {
  document.documentElement.style.setProperty(`--${type}`, val);
};

const filterToggle = (e) => {
  const suffix = e.path[0].attributes["data-sizing"].value || "";
  const filterType = e.path[0].attributes["name"].value;
  document.documentElement.style.setProperty(
    `--${filterType}`,
    e.path[0].value + suffix
  );
  e.path[0].nextElementSibling.innerHTML = e.path[0].value;

  console.log(e.path);
};

const resetHandler = (e) => {
  for (let i = 0; i < inputs.children.length; i++) {
    let t = 0;
    if (i === 3) t = 100;
    inputs.children[i].children[1].innerHTML = `${t}`;
    inputs.children[i].children[0].value = t;
    setCss(
      inputs.children[i].children[0].attributes["name"].value,
      t + inputs.children[i].children[0].attributes["data-sizing"].value
    );

    console.log(inputs.children[i].children[0].attributes["name"].value);
  }
};

const imgToggle = () => {
  let path =
    imgPath +
    imgTime[Math.floor(Data.getHours() / 6)] +
    ("0" + imgN).slice(-2) +
    ".jpg";
  imageContainer.setAttribute("src", path);
  imgN++;
  if (imgN == 21) imgN = 1;
};

fileInput.addEventListener("change", (e) => {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    imageContainer.src = reader.result;
  };
  reader.readAsDataURL(file);
  e.target.value = "";
});

const saveImg = () => {
  const sampleImg = new Image();
  sampleImg.setAttribute("crossOrigin", "anonymous");
  sampleImg.src = imageContainer.src;

  let mtp = imageContainer.naturalHeight / imageContainer.height;

  console.log(mtp);
  sampleImg.onload = () => {
    canvas.width = imageContainer.naturalWidth;
    canvas.height = imageContainer.naturalHeight;
    for (let i = 0; i < inputs.children.length; i++) {
      console.log(inputs.children[i].children[0].name);
      filters[inputs.children[i].children[0].name] =
        inputs.children[i].children[0].value;
    }
    // controls.forEach((control) => {
    //   filters[control.name] = control.value;
    // });
    const ctx = canvas.getContext("2d");
    console.log(imageContainer.naturalHeight);
    // console.log(sampleImg.height);
    ctx.filter = `blur(${filters.blur * mtp}px) invert(${filters.invert}%) 
        sepia(${filters.sepia}%) saturate(${filters.saturate}%) 
        hue-rotate(${filters.hue}deg)`;
    ctx.drawImage(sampleImg, 0, 0);
    let link = document.createElement("a");
    link.download = "download.png";
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
    mtp = 0;
  };
};

inputs.addEventListener("input", filterToggle);
reset.addEventListener("click", resetHandler);
np.addEventListener("click", imgToggle);
document
  .querySelector(".openfullscreen")
  .addEventListener("click", () =>
    !document.fullscreenElement
      ? document.documentElement.requestFullscreen()
      : document.fullscreenEnabled && document.exitFullscreen()
  );
save.addEventListener("click", saveImg);
