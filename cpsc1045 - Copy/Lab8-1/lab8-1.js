let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');
let b1 = document.getElementById('button1');
b1.addEventListener('click', paintDots);
let b2 = document.getElementById('button2');
let x = Math.random()*(800);
let y = Math.random()*(400);
b2.addEventListener('click',  paintStars);
let bx1 = document.getElementById('box1');


function paintDots(){
    ctx.clearRect(0,0,800,400);
    let userNumb = bx1.value;
    let numbDots = Number (userNumb);
    let notBeingNumber = isNaN(numbDots);
    if (numbDots >=1 && numbDots <=100 && notBeingNumber==false){
        for(let i=0; i<numbDots;i++){
            ctx.save();
            ctx.beginPath();
            let x = Math.random()*(800);
            let y = Math.random()*(400);
            let radius = 5+ Math.random()*(50+1);
            //i consider 50 inclusive so i added 1 to it
            ctx.arc(x,y,radius,0,2*Math.PI);
            ctx.fillStyle ='rgb(' + Math.floor(Math.random()*256)+ ',' + Math.floor(Math.random()*256) + ',' +Math.floor(Math.random()*256);
            ctx.fill();
            ctx.stroke();
        }
        
    }
    else {
        alert('Your input is not valid.');
    }
}
function drawSecondStar(x,y){
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    let farPoint = 5+ Math.random()*(50);
    let nearPoint = (1/4)*farPoint;
    ctx.save();
    ctx.beginPath();
    ctx.translate(x,y);
    ctx.moveTo(0,0);
    ctx.lineTo(10,-farPoint);
    ctx.lineTo(20,0);
    ctx.translate(20,0);
    ctx.rotate(90*Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(10,-farPoint);
    ctx.lineTo(20,0);
    ctx.translate(20,0);
    ctx.rotate(90*Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(10,-farPoint);
    ctx.lineTo(20,0);
    ctx.translate(20,0);
    ctx.rotate(90*Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(10,-farPoint);
    ctx.lineTo(20,0);
    ctx.fillStyle ='rgb(' + Math.floor(Math.random()*256)+ ',' + Math.floor(Math.random()*256) + ',' +Math.floor(Math.random()*256);
    ctx.fill();
    ctx.fillRect(-1,-1,22,22);
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.restore();
}


function paintStars(){
    ctx.clearRect(0,0,800,400);
    let userNumb = bx1.value;
    let numbStars = Number (userNumb);
    let notBeingNumber = isNaN(numbStars);
    if (numbStars >=1 && numbStars <=100 && notBeingNumber==false){
        for(let i=0; i<numbStars;i++){
            let x = Math.random()*(800);
            let y = Math.random()*(400);
            drawSecondStar(x,y);
            
           
        }
        
    }
    else {
        alert('Your input is not valid.');
    }
}