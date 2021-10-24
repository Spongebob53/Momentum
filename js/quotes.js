const quotes = [
  { quote: "Silenzio Bruno!", author: "Alberto" },
  { quote: "I'm ready! I'm ready!", author: "SpongeBob" },
  { quote: "Two words, SpongeBob. Na. Chos.", author: "Patrick" },
  { quote: "To infinity and beyond!", author: "Buzz Lightyear" },
  { quote: "Reach for the sky!", author: "Woody" },
  { quote: "The claaaaaaaw.", author: "The Aliens" },
  { quote: "King Bob!", author: "Bob" },
  { quote: "C'est banana! Hahaha!", author: "Minions" },
  { quote: "Hakuna Matata", author: "Timon&Pumbaa" },
  { quote: "Take her to the Moon for me", author: "Bing Bong" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
