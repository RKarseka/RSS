const settings = document.querySelector(".settings");
const setContainer = document.querySelector(".set-container");
const setBtn = document.querySelector(".sett");

export default () => {
  //

  setBtn.onclick = () => {
    settings.classList.toggle("set-on-off");

    settings.addEventListener(
      "transitionend",
      () => {
        setContainer.classList.toggle("dn");
        console.log("set");
      },
      {
        once: true,
      }
    );
  };
};
