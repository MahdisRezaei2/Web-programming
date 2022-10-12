/**
 * Mahdis Rezaei Tamijani
 * student ID:100381114
 */
// Register events by adding event listeners and make functions to handle the events here
let b1 = document.getElementById('box1');
let b2 = document.getElementById('box2');
let bt1 = document.getElementById('button1');
let bt2 = document.getElementById('button2');
let bt3 = document.getElementById('button3');
let bt4 = document.getElementById('button4');

     bt1.addEventListener('click', firstConversion);
     bt2.addEventListener('click', secondConversion);
     bt3.addEventListener('click',lastChar);
     bt4.addEventListener('click',blank);

     //part a
function firstConversion (){
    let letters = b1.value;
    let result = letters.toUpperCase();
    b2.value= result;

}
//partb
function secondConversion(){
   let lowLetters = b1.value;
   let lowResults = lowLetters.toLowerCase();
   b2.value= lowResults;
}
//partc
function lastChar(){
    let sentence = b1.value;
    //pay attention this is b1 not b2, but the last one is always b2
    let secondSentence = sentence.length;
    let result = sentence.slice(secondSentence-1);
    b2.value=result;
}
//partd
function blank(){
    let sentence = b1.value;
    let a = sentence.replaceAll(' ','');
    b2.value=a;
}


