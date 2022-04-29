const cityInput = document.querySelector(".city");

import getWeather from "../utils/getWeather.js";

let city = "Minsk";

export default () => {
  if (!localStorage.getItem("weathers_city")) {
    localStorage.setItem("weathers_city", city);
  } else {
    city = localStorage.getItem("weathers_city");
  }
  cityInput.value = city;

  cityInput.onchange = (e) => getWeather(e.target.value);

  getWeather(city);
};
