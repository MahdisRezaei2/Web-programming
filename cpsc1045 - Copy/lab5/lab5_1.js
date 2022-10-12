/**
 * Mahdis Rezaei Tamijani
 * student ID:100381114
 * lab5-1
 */
// get input box1 and assign to bx1
let bx1 = document.getElementById('box1');
// get button button1 and assign to bn1
let bn1 = document.getElementById('button1');
// get paragraph p1 and assign to p1
let p1 = document.getElementById('message');
// add event listener to bn1 with 'click' event and checkNum function as handler function
bn1.addEventListener('click', checkNum);


//define checkNum() function
/*
use if...else and isNaN() function to check whether the input is a number
if it is number call checkNumif() or checkNumSwitch() function
if it is not a number, show the 'Your input is not a number.' as the content of the p1
*/
function checkNum(){
    let box1 = bx1.value;
    let number = Number(box1);
    let notBeingNumber = isNaN(number);
    if (notBeingNumber){
        p1.innerHTML='Your input is not a number .';
    }
    else {
         checkNumIf();
         //checkNumSwitch ();
    }
}


//define checkNumIf() function
/*
use if...else if...else to verify whether the number is in the range, whether it is even or odd. Hint: oddNumber % 2 = 1
*/
function checkNumIf(){
    let box1 = bx1.value;
    let number = Number(box1);
    if (number%2===1 && number>=1 && number <=5){
        p1.innerHTML='Your input is an odd number .';
    }
    else if (number%2===0 && number>1 && number <5){
        p1.innerHTML='Your input is an even number .';
    }
    else{
        p1.innerHTML='Your input is not in the range .';
    }
   
}


//define checkNumSwitch() function
/*
use switch to show whether the number in the required range is even or odd 
otherwise use p1.innerHTML to show 'It is not a number in the given range.'
*/
function checkNumSwitch (){
    let box1 = bx1.value;
    let number = Number(box1);
    switch(number>=1&&number<=5){
          case true:
            switch( number%2){
                case 0:
                    p1.innerHTML='Your input is even .';
                break;
                case 1: 
                p1.innerHTML='Your input is odd .';
                break;
                
            }
            break;
            default : p1.innerHTML='Your input is not in the range .';
    }
    
}





