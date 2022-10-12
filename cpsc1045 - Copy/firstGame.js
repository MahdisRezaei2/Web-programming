
let userInput = prompt("Please enter number 0 or 1 to predict the result, 0 for heads and 1 for tails.");
let randomNumber = Math.random();
let randomBinary = Math.round(randomNumber);
let firstGame   = document.getElementById('firstGame');
firstGame.innerHTML = 'Your guess is ' + userInput + 'and the result of coin flip is '+randomBinary+'.';
alert('your guess is '+userInput+'and the result of the coin flip is '+ randomBinary);