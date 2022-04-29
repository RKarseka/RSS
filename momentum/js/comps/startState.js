import inputUpdate from "./inputUpdate.js";
import setBackground from "./setBackground.js";
import setQuotes from "./setQuotes.js";
import setWeather from "./setWeather.js";

const LOCAL_STORAGE_FIELD_NAME_NAME = "user_name";

export default ({ quotesFile, placeholderInput }, imgFolders) => {
  const inputName = document.getElementsByClassName("name");

  inputName[0].placeholder = placeholderInput;
  inputUpdate(inputName[0], LOCAL_STORAGE_FIELD_NAME_NAME);

  const storagedName = localStorage.getItem(LOCAL_STORAGE_FIELD_NAME_NAME);

  if (storagedName) {
    inputName[0].value = storagedName;
  }

  setBackground(imgFolders);
  setWeather();
  setQuotes(quotesFile);
};
