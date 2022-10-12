/**
 * Mahdis Rezaei Tamijani
 * student ID:100381114
 */
// Register events by adding event listeners and make functions to handle the events here
let b1 = document.getElementById('box1');
let b2 = document.getElementById('box2');
let b3 = document.getElementById('box3');
let bt1 = document.getElementById('button1');
let bt2 = document.getElementById('button2');
let bt3 = document.getElementById('button3');
let bt4 = document.getElementById('button4');
let bt5 = document.getElementById('button5');

     bt1.addEventListener('click', addition);
     bt2.addEventListener('click', subtraction);
     bt3.addEventListener('click', multiplication);
     bt4.addEventListener('click',division);
     bt5.addEventListener('click',power)
    

    //part a : addition
    function addition (){
        let firstBox = b1.value;
        let number1 = Number(firstBox);
        let secondBox = b2.value;
        let number2 = Number(secondBox);
        let result = number1+number2;
        b3.value = result;
    }
    //part b: subtraction
    function subtraction (){
        let firstBox = b1.value;
        let number1 = Number(firstBox);
        let secondBox = b2.value;
        let number2 = Number(secondBox);
        let result = number1-number2;
        b3.value = result;
    }
    // part c : multiplication
    function multiplication (){
        let firstBox = b1.value;
        let number1 = Number(firstBox);
        let secondBox = b2.value;
        let number2 = Number(secondBox);
        let result = number1*number2;
        b3.value = result;
    }
    //part d : division 
    function division (){
        let firstBox = b1.value;
        let number1 = Number(firstBox);
        let secondBox = b2.value;
        let number2 = Number(secondBox);
        let result = number1/number2;
        b3.value = result;
    }
    // part e : power
    function power (){
        let firstBox = b1.value;
        let number1 = Number(firstBox);
        let secondBox = b2.value;
        let number2 = Number(secondBox);
        let result = number1**number2;
        b3.value = result;
    }
    
