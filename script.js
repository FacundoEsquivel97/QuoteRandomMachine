window.addEventListener('load',() => {
const quotes = [
  {
    text:'Nothing’s perfect, the world’s not perfect, but it’s there for us, trying the best it can. That’s what makes it so damn beautiful.',
    author:'ROY MUSTANG',
    src:'img/roy.jpg'
  } ,
  {
    text:'War does not determine who is right — only who is left.',
    author:'RIZA HAWKEY',
    src:'img/riza.jpg'
  } ,
  {
    text:'Stand up and walk. Keep moving forward. You’ve got two good legs. So get up and use them. You’re strong enough to make your own path.',
    author:'EDWARD ELRIC',
    src:'img/edward.jpg'
  } ,
  {
    text:'Dedication is a talent all on its own.',
    author:'ALPHONSE ELRIC',
    src:'img/alphonse.jpg'
  } ,
]

function randomQuote() {
  let num = Math.floor(Math.random() * (quotes.length - 0) + 0);
  if (newQuote) {
    console.log(newQuote)
    if(newQuote == quotes[num]){
      console.log(num)
      num = num + 1;
      console.log(num)
      if (num >= 4) {
        num = 0
        console.log(num)}
    }
  }
  return quotes[num]
}
  
const text = document.querySelector('#text')
const author = document.querySelector('#author')
const img = document.querySelector('#img')
var newQuote = randomQuote()

text.innerHTML = newQuote.text;
author.innerHTML = newQuote.author;
img.src = newQuote.src;
  
const button = document.querySelector('#new-quote')

button.addEventListener('click',() => {
  newQuote = randomQuote();
  text.innerHTML = newQuote.text;
  author.innerHTML = newQuote.author;
  img.src = newQuote.src;
})

  
})