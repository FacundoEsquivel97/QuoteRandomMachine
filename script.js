window.addEventListener('load',() => {
const quotes = [
  {
    text:'Nothing’s perfect, the world’s not perfect, but it’s there for us, trying the best it can. That’s what makes it so damn beautiful.',
    author:'ROY MUSTANG'
  } ,
  {
    text:'War does not determine who is right — only who is left.',
    author:'RIZA HAWKEY'
  } ,
  {
    text:'Stand up and walk. Keep moving forward. You’ve got two good legs. So get up and use them. You’re strong enough to make your own path.',
    author:'EDWARD ELRIC'
  } ,
  {
    text:'Dedication is a talent all on its own.',
    author:'ALPHONSE ELRIC'
  } ,
]

function randomQuote() {
  const num = Math.floor(Math.random() * (quotes.length - 0) + 0);
  return quotes[num]
}
  
const text = document.querySelector('#text')
const author = document.querySelector('#author')
var newQuote = randomQuote()

text.innerHTML = newQuote.text
author.innerHTML = newQuote.author
  
const button = document.querySelector('#new-quote')

button.addEventListener('click',() => {
  newQuote = randomQuote()
  text.innerHTML = newQuote.text
  author.innerHTML = newQuote.author 
})

  
})
// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
