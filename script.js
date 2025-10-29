const quotes = [
    {
        quote:"Le succès n'est pas final, l'échec n'est pas fatal: c'est le courage de continuer qui compte.",
        author:"Winston Churchill"
    },
    {
        quote:"La logique vous mènera d'un point A à un point B. L'imagination vous mènera partout.",
        author:"Albert Einstein"
    },
    {
        quote:"Votre temps est limité, ne le gaspillez pas en menant une existence qui n'est pas la votre.",
        author:"Steve Jobs"
    },
    {
        quote:"Tout ce que l'esprit de l'homme peut concevoir et croire, il peut l'accomplir.",
        author:"Napoleon Hill"
    },
    {
        quote:"Commencez là où vous etes, utilisez ce que vous avez, faites ce que vous pouvez.",
        author:"Arthur Ashe"
    }
];

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.querySelector("button");

function getRandomQuote(){
    const randomIndex = Math.floor(Math.random()*quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote.quote;
    quoteAuthor.textContent = randomQuote.author;
}

newQuoteBtn.addEventListener("click", getRandomQuote);
