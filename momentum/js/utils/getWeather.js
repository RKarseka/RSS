const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const error = document.querySelector(".weather-error");

const setLink = (city) => {
  let link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=a3111bd8b6c01c752214e918cc2cf0bd&units=metric`;
  return link;
};

const clearWeather = () => {
  weatherIcon.classList = "";
  temperature.textContent = ``;
  weatherDescription.textContent = "";
  wind.textContent = ``;
  humidity.textContent = ``;
};

export default async (city) => {
  const res = await fetch(setLink(city));

  const data = await res.json();
  if (data.cod !== 200) {
    clearWeather();
    error.textContent = `Населенный пункт ${city} не найден. Введите другой город.`;
    // console.log(data.cod);

    return;
  }

  localStorage.setItem("weathers_city", city);
  // console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
  error.textContent = "";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
  humidity.textContent = `Влажность: ${Math.round(data.main.humidity)}%`;
};
