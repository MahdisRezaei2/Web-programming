let d = document.getElementById('myCanvas');
let bt1 = document.getElementById('button1');
let bx1 = document.getElementById('box1');
bt1.addEventListener('click',runAnimation);
let ctx = d.getContext("2d");
let dotsX =[];
let dotsY=[];
let dotsXDistance =[];
let dotsYDistance =[];
let colours =[];
let timerID;
ctx.save();

function runAnimation(){
    clearInterval(timerID);
    for (let i =0; i <=bx1.value ;i++ ){
        dotsXDistance[i]= 20*(Math.random()-0.5);
        
        dotsYDistance[i]= 20*(Math.random()-0.5);
        dotsX[i] =400;
        dotsY[i] =250;
         colours[i] ='rgb(' + Math.floor(Math.random()*256)+ ',' + Math.floor(Math.random()*256) + ',' +Math.floor(Math.random()*256);
    }
    
       
     
       timerID = setInterval(moveDot, 100);
}
function moveDot(){
   
    console.log("heeeesd");
    ctx.clearRect(0,0,800,500);
    for (let i =0 ; i <=bx1.value ;i++){
        
        ctx.save();
        ctx.beginPath();
        ctx.arc(dotsX[i],  dotsY[i], 10, 0, 2 * Math.PI)
        dotsX[i] += dotsXDistance[i];
        dotsY[i] += dotsYDistance[i];
        
        //rgb
        ctx.fillStyle =colours[i];
        ctx.fill();
        //  x += xMoveDistance;
        // y += yMoveDistance;
        
        ctx.restore();
        

        
     }
    
}