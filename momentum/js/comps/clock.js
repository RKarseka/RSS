import getQuotes from "../utils/getQuotes.js";
import getTime from "../utils/getTime.js";
import { setBg } from "./setBackground.js";
import showGreeting from "./showGreeting.js";

const SLIDE_INTERVAL = 234;
const QUOTES_INTERVAL = 157;

export default (local, imgFolders) => {
  window.setInterval(() => {
    getTime(local);
    showGreeting(local, imgFolders);
  }, 1000);
  window.setInterval(() => {
    setBg(imgFolders, 1);
  }, SLIDE_INTERVAL * 1000);
  window.setInterval(() => {
    getQuotes(local.quotesFile);
  }, QUOTES_INTERVAL * 1000);
};
