const quoteUrl = "https://type.fit/api/quotes";
const quoteText = document.querySelector(".text");
const quoteAuthor = document.querySelector(".author");

function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

async function getRandomQuote(url) {
  const response = await fetch(url);
  let data = await response.json();

  let { text, author } = data[randomNumber(data.length)];

  quoteText.textContent = text;
  quoteAuthor.textContent = author;
}
getRandomQuote(quoteUrl);
