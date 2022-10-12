//Solve the problem step by step.
let a1 = document.getElementById('div1');
let a2 = document.getElementById('div2');
let a3 = document.getElementById('div3');
let a4 = document.getElementById('div4');


a1.addEventListener('mouseover', changeGreen);
a2.addEventListener('mouseover', changeGreen);
a3.addEventListener('mouseover', changeGreen);
a4.addEventListener('mouseover', changeGreen);


 a1.addEventListener('click', changeBlue);
 a2.addEventListener('click', changeBlue);
 a3.addEventListener('click', changeBlue);
 a4.addEventListener('click', changeBlue);

 a1.addEventListener('mouseout', changeWhite);
 a2.addEventListener('mouseout', changeWhite);
 a3.addEventListener('mouseout', changeWhite);
 a4.addEventListener('mouseout', changeWhite);

 function changeGreen(e){
     e.target.style.backgroundColor = "green";
 }
 function changeBlue(e){
    e.target.style.backgroundColor = "blue";
}
function changeWhite(e){
    e.target.style.backgroundColor = '';
}
