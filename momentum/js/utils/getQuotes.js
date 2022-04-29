const quoteBox = document.querySelector(".quote-box");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const loadQuotes = async (quotesFile) => {
  const link = "./assets/quotes/" + quotesFile;
  const res = await fetch(link);
  const data = await res.json();

  let quoteQuantity = data.length;

  if (quoteQuantity > 0) {
    let quoteNumber = Math.floor(Math.random() * quoteQuantity);

    quote.textContent = data[quoteNumber].text;
    author.textContent = data[quoteNumber].author;
  } else {
    quote.textContent = "nichts nein";
  }

  quoteBox.classList.toggle("op-0");
};

export default (quotesFile) => {
  quoteBox.classList.toggle("op-0");

  quoteBox.addEventListener("transitionend", () => loadQuotes(quotesFile), {
    once: true,
  });
};
