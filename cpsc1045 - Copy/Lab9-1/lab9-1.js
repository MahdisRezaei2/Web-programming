let d = document.getElementById('myCanvas');
let bt1 = document.getElementById('button1');
myCanvas.addEventListener('click',clickDot);
let ctx = d.getContext("2d");
let output = document.getElementById('output');
let i = 0;
ctx.save();
let xMoveDistance ;//these must be globally
let yMoveDistance ;

bt1.addEventListener('click', moveDot);
// bt2.addEventListener('click', clickDot);
let x = 300;
let y = 300;
//let moveDistance = 5;
let timerID;
function moveDot() {
     xMoveDistance = (30* (Math.random()-0.5));
     yMoveDistance = (30* (Math.random()-0.5));
     x=300;
     y=300;
     if (timerID == null)
       timerID = setInterval(startGame, 100);
      
    
    
}

function startGame(){
   
           
        ctx.clearRect(0,0,600,600);
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, 2 * Math.PI)
        //rgb
        ctx.fillStyle = '#ff007f';
        ctx.fill();
         x += xMoveDistance;
        y += yMoveDistance;
        ctx.restore();
        if (x>600 || y>600 || x <0 || y<0){
            alert('Oops! The dot has escaped!');
            if (timerID !== null) {
                clearInterval(timerID);
                timerID = null;
            }
        }
    
}
function clickDot(e){
    let clickX =e.offsetX, clickY = e.offsetY;
	output.innerHTML = 'X: ' + clickX;
	output.innerHTML += ' Y: ' + clickY;
    let dotsDistance = Math.sqrt(Math.pow((clickX-x),2)+Math.pow((clickY-y),2));
	if(dotsDistance < 20 ||dotsDistance == 20 ){
		alert("Bingo! The dot is caught and will disappear");
        clearInterval(timerID);
        ctx.clearRect(0,0,600,600);
    }
    
	
}
