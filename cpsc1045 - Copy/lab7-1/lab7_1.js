
drawWheel(100,150);
drawWheel(440,150);
drawWheel(330,150);
drawLines();
drawStar();
drawPentagonal();
drawSecondStar();
let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');
let b1 = document.getElementById('button1');
let b2 = document.getElementById('button2');
b1.addEventListener('click', drawSquare);
b2.addEventListener('click', text);



function drawWheel(x,y){
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    ctx.save();
    ctx.beginPath();
    ctx.translate(x,y);
    ctx.arc(0,0,40,0,2*Math.PI);
    ctx.lineTo(-40,0);
    ctx.rotate(45*Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(-40,0);
    ctx.lineTo(40,0);
    ctx.rotate(45*Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(-40,0);
    ctx.lineTo(40,0);
    ctx.rotate(45*Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(-40,0);
    ctx.lineTo(40,0);
    ctx.stroke();
    ctx.restore();
    ctx.scale(0.7,0.7);
    ctx.arc(0,0,40,0,2*Math.PI);
    ctx.scale(1.4,1.4);
    ctx.arc(0,0,40,0,2*Math.PI);
   
}
function drawLines(){
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    ctx.save();
    ctx.beginPath();
    ctx.translate(220,150);
    ctx.moveTo(0,0);
    ctx.lineTo(344,7);
    ctx.moveTo(0,0);
    ctx.lineTo(0,-80);
    ctx.lineTo(117,-80);
    ctx.lineTo(137,-130);
    ctx.lineTo(207,-130);
    ctx.lineTo(227,-80);
    ctx.lineTo(344,-80);
    ctx.lineTo(344,7);
    ctx.stroke();
    ctx.restore();
}
    


function drawStar(){
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    ctx.save();
    ctx.beginPath();
    ctx.translate(330,240);
    ctx.moveTo(0,0);
    ctx.lineTo(15,-30);
    ctx.lineTo(35,0);
    //
    // here drawin the firt part is done
    // then we traslate the whole canvas to the last point
    //the on the last point we rotate 
    ctx.translate(35,0);
    ctx.rotate(72*Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(15,-30);
    ctx.lineTo(35,0);
    //
    ctx.translate(35,0);
    ctx.rotate(72*Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(15,-30);
    ctx.lineTo(35,0);
    //
    ctx.translate(35,0);
    ctx.rotate(72*Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(15,-30);
    ctx.lineTo(35,0);
    //
    ctx.translate(35,0);
    ctx.rotate(72*Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(15,-30);
    ctx.lineTo(35,0);
    ctx.stroke();
    ctx.restore();
}
function drawPentagonal(){
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    ctx.save();
    ctx.beginPath();
    ctx.translate(60,270);
    ctx.moveTo(0,0);
    ctx.lineTo(30,-40);
    ctx.lineTo(70,-40);
    ctx.lineTo(100,0);
    ctx.translate(100,0);
    //the key was here trasnlate to a new point before the rotate so the canvas will be rotated from
    // the las point
    ctx.rotate(180*Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(30,-40);
    ctx.lineTo(70,-40);
    ctx.lineTo(100,0);
    ctx.stroke();
    ctx.restore();
}
function drawSecondStar(){
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    ctx.save();
    ctx.beginPath();
    ctx.translate(220,260);
    ctx.moveTo(0,0);
    ctx.lineTo(10,-50);
    ctx.lineTo(20,0);
    ctx.translate(20,0);
    ctx.rotate(90*Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(10,-50);
    ctx.lineTo(20,0);
    ctx.translate(20,0);
    ctx.rotate(90*Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(10,-50);
    ctx.lineTo(20,0);
    ctx.translate(20,0);
    ctx.rotate(90*Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(10,-50);
    ctx.lineTo(20,0);
    ctx.stroke();
    ctx.restore();
}

function drawSquare(){
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    
    ctx.fillStyle='red';
    ctx.fillRect(440,240,80,80);
    ctx.strokeStyle = 'blue';
    ctx.strokeRect(440,240,80,80);
   
   
}
function text(){
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    ctx.translate(60,330);
    
    ctx.font = '30px Arial ';
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'blue';
    ctx.fillText  ('Shapes are drawn', 10, 30);
    ctx.strokeText ('Shapes are drawn', 10, 30);
}
