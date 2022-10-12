let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');
let b1 = document.getElementById('button1');
b1.addEventListener('click', drawSmile);
let b2 = document.getElementById('button2');
b2.addEventListener('click',  drawNeutral);
let b3 = document.getElementById('button3');
b3.addEventListener('click',  drawFrowing);
let b4 = document.getElementById('button4');
b4.addEventListener('click',  moveUp);
let b5 = document.getElementById('button5');
b5.addEventListener('click',  moveDown);
let x=300;
let y = 200;


function drawSmile(){
    ctx.clearRect(0,0,600,400);
    ctx.save();
    ctx.beginPath();
    ctx.arc(x,y,40,0,2*Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x-15,y-15,3,0,2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    //first eyelash
    ctx.beginPath();
    ctx.moveTo(x-15,y-15);
    ctx.lineTo(x-22,y-22);
    ctx.stroke();
    //second  eyelash
    ctx.beginPath();
    ctx.moveTo(x-15,y-15);
    ctx.lineTo(x-25,y-15);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x-15,y-15);
    ctx.lineTo(x-22,y-22);
    ctx.stroke();
    //third  eyelash
    ctx.beginPath();
    ctx.moveTo(x-15,y-15);
    ctx.lineTo(x-22,y-10);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x+15,y-15,3,0,2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    //
    //first eyelash
    ctx.beginPath();
    ctx.moveTo(x+15,y-15);
    ctx.lineTo(x+22,y-22);
    ctx.stroke();
    //second  eyelash
    ctx.beginPath();
    ctx.moveTo(x+15,y-15);
    ctx.lineTo(x+25,y-15);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x+15,y-15);
    ctx.lineTo(x+22,y-22);
    ctx.stroke();
    //third  eyelash
    ctx.beginPath();
    ctx.moveTo(x+15,y-15);
    ctx.lineTo(x+22,y-10);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(x,y+10,15,0,1*Math.PI);

    ctx.stroke();
    ctx.restore();
   
   
}
function drawNeutral(){
    ctx.clearRect(0,0,600,400);
    ctx.save();
    ctx.beginPath();
    ctx.arc(x,y,40,0,2*Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x-15,y-15,3,0,2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x+15,y-15,3,0,2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    
    ctx.moveTo(x-15,y+5);
    ctx.lineTo(x+15,y+5);

    ctx.stroke();
    ctx.restore();
   
   
}function drawFrowing(){
    ctx.clearRect(0,0,600,400);
    ctx.save();
    ctx.beginPath();
    ctx.arc(x,y,40,0,2*Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x-15,y-15,3,0,2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x+15,y-15,3,0,2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    
    ctx.arc(x,y+15,15,1*Math.PI,2*Math.PI);
    //ctx.arc(x,y+15,15,7/6*Math.PI,11/6*Math.PI);
    ctx.stroke();
    ctx.restore();
   
}
function moveUp(){
    ctx.save();
    
    y=y-10;
    
    if (y>=40){
        drawSmile();
    }
    else {
        y=y+10;
    }
    ctx.restore();
}
function moveDown(){
    ctx.save();
    
    y=y+10;
    
    if (y<=360){
        drawSmile();
    }
    else {
        y=y-10;
    }
    ctx.restore();
}