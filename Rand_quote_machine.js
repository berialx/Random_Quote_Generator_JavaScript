const quotes = [
	{ quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
	{ quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
	{ quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
	{ quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", author: "Oprah Winfrey" },
	{ quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
  { quote: "Be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { quote: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
  { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
  { quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", author: "Jimmy Dean" },
  { quote: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
  { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
  { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { quote: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
  { quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
  { quote: "To be yourself is all that you can do.", author: "Chris Cornell" },
];

function getQuote() {
	const randomNumber = Math.floor(Math.random() * quotes.length);
	document.getElementById('text').innerHTML = quotes[randomNumber].quote;
	document.getElementById('author').innerHTML = "- " + quotes[randomNumber].author;
}

