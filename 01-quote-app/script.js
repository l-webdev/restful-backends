const quoteElement = document.querySelector(".quote");
const authorElement = document.querySelector(".author");
const newQuoteButton = document.querySelector("button");

newQuoteButton.addEventListener("click", fetchNewQuote);

function fetchNewQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => response.json())
    .then((data) => {
      quoteElement.textContent = data.quote;
      authorElement.textContent = `- ${data.author}`;
    });
}

fetchNewQuote();
