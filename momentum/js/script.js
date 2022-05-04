import clock from "./comps/clock.js";
import controls from "./comps/controls.js";
import startState from "./comps/startState.js";
import getLocal from "./utils/getLocal.js";

let lang = getLocal();

const local = {
  imgFolders: ["night", "morning", "day", "evening"],
  default: { quotesFile: "quotes.json" },
  ru: {
    quotesFile: "quotes_ru.json",
    timeZone: "ru-RU",
    greetings: ["Доброй ночи", "Доброе утро", "Добрый день", "Добрый вечер"],
    placeholderInput: "[ Введите имя ]",
  },
  by: {
    timeZone: "en-Br",
    greetings: "Добрай раніцы",
  },
};

startState(local[lang], local.imgFolders);

clock(local[lang], local.imgFolders);

controls();
