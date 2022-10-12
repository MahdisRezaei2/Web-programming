let d = document.getElementById('myCanvas');
d.addEventListener('click',addDot);
let bt1 = document.getElementById('button1');
bt1.addEventListener('click',startAnimation);
let ctx = d.getContext("2d");
let array=[];
let x ;
let y ;
 let timerID;
ctx.save();
function addDot(e){
     array.push(new Dot(e.offsetX, e.offsetY));
     array[array.length-1].draw();
}
function Dot (x, y){
     this.x = x;
     this.y = y;
     this.radius =  15*(Math.random())+5;
     this.mx = (30* (Math.random()-0.5));
     this.my = (30* (Math.random()-0.5));
     this.color = 'rgb(' + Math.floor(Math.random()*256)+ ',' + Math.floor(Math.random()*256) + ',' +Math.floor(Math.random()*256)+')';
     this.draw = function(){
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();

     }
}
function startAnimation (){
   // clearInterval(timerID);
   
    timerID = setInterval(moveDot, 100);
}
function moveDot(){
   
   
    ctx.clearRect(0,0,600,400);
    for (let i =0 ; i < array.length ;i++){
        
        
        array[i].draw();
        
        array[i].x+=array[i].mx;
        array[i].y+=array[i].my;
        if (array[i].x>=600){
            array[i].mx =(15* (Math.random()-1));
            
        }
        if (array[i].x<=0){
           array[i].mx =(15* (Math.random()+1));
           
       }
       if (array[i].y<=0){
           array[i].my =(15* (Math.random()+1));
           
       }
       if (array[i].y>=400){
           array[i].my =(15* (Math.random()-1));
           
       }
        
     }
     
    
}
