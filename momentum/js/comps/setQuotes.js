import getQuotes from "../utils/getQuotes.js";

const changeQuote = document.querySelector(".change-quote");

export default (quotesFile) => {
  getQuotes(quotesFile);

  changeQuote.onclick = () => getQuotes(quotesFile);
};
