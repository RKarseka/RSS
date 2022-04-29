import { setBg } from "./setBackground.js";

export default (local, imgFolders) => {
  const date = new Date();
  const hours = date.getHours();
  let greetingTime = Math.floor(hours / 6);

  if (localStorage.getItem("timeOfDay") != greetingTime) {
    localStorage.setItem("timeOfDay", greetingTime);
    setBg(imgFolders);
  }

  const greetingText = document.getElementsByClassName("greeting");

  greetingText[0].innerHTML = `${local.greetings[greetingTime]},`;
};
