/**
 * Mahdis Rezaei Tamijani
 * student ID:100381114
 * lab5-2
 */
// get input box1 and assign to bx1
let bx1 = document.getElementById('box1');
// get button button1 and assign to bn1
let bn1 = document.getElementById('button1');
let b3 = document.getElementById('box3');
let bx2 = document.getElementById('box2');
let p1 = document.getElementById('par1');
let bn2 = document.getElementById('button2');
// add event listener to bn1 with 'click' event and checkNum function as handler function
bn1.addEventListener('click', checkNum);
bn2.addEventListener('click', playGame)


function checkNum(){
    let box1 = bx1.value;
    let number = Number(box1);
    let notBeingNumber = isNaN(number);
    if (notBeingNumber){
        alert ('Your input is not valid.');
    }
    else if(number>0){
        //aaaaa
        b3.value=number+Number((b3.value));
         
         
    }
    else{
        alert ('Your input is not valid.');
    }
}
function playGame(){
    let box2 = bx2.value;
    let number = Number(box2);
      if (number >0){
            if (number <= Number(b3.value) )
            {
                    x = Math.random();
                    if (x<=0.4){
                        b3.value= number + Number(b3.value);
                        p1.innerHTML= 'You win';
                    }
                    else {
                        b3.value= Number(b3.value) - number ;
                        p1.innerHTML= 'You lose';
                    } 
            }
            else {
                alert ('The number cannot be greater than the credits .');
            }
      }

      else 
       alert ('Your input is not valid.');
}