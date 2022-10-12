// velocity at the same time
let d = document.getElementById('myCanvas');
let ctx = d.getContext("2d");
let b1 = document.getElementById('first');
b1.addEventListener('click', start);
let b2 = document.getElementById('second');
b2.addEventListener('click', start);
let b3 = document.getElementById('third');
b3.addEventListener('click', start);
//d.addEventListener('mouseover', birdF);
d.addEventListener('mouseover', birdS);
let animal;
let bird;
//animal.addEventListener('click', runAnimation);
let p1 = document.getElementById('message');
let dotsX;
let dotsY;
let dotsXDistance;
let dotsYDistance;

let timerID;
ctx.save();

let array = [];
function bird1(e){
    bird = e.target.innerHTML;
}
function bird2(e){
    bird = e.target.innerHTML;
}
function bird3(e){
    bird = e.target.innerHTML;
}
function animal1(e){
    animal = e.target.innerHTML;
}
function animal2(e){
    animal = e.target.innerHTML;
}
function animal3(e){
    animal = e.target.innerHTML;
}

function Dot(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 20 * (Math.random()) + 10;
    this.mx = (30 * (Math.random() - 0.5));
    this.my = (30 * (Math.random() - 0.5));
    this.color = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    this.draw = function () {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();

    }
}

let x = 0, y = 0;
function birdS(e) {

    let CursorX = document.getElementById('xcoord');
    let CursorY = document.getElementById('ycoord');
    x = e.offsetX-10;
    y = e.offsetY+40;
    CursorX.innerHTML = e.offsetX;
    CursorY.innerHTML = e.offsetY;



}
function start() {
    array = [];
    for (let i = 0; i < 10; i++) {
        // drawPic();
        array.push(new Dot(Math.random() * (750) + 50, Math.random() * (450)+50));
        //console.log(array);

    }
}
ctx.fill();

// runAnimation()
//////
function runAnimation() {
    clearInterval(timerID);
    let count = 0;
    while (count <= 2) {
        for (let i = 0; i <= 10; i++) {
            dotsXDistance = 1;

            dotsYDistance = 1;
            //20*(Math.random()-0.5)
            dotsX = 450;
            dotsY = 300;
        }
        count++;
    }





    timerID = setInterval(moveDot, 1);
}
function moveDot() {
    if(bird != undefined && animal != undefined){
    //console.log("heeeesd");
    ctx.clearRect(0, 0, 900, 600);
    dotsX += dotsXDistance;
    dotsY += dotsYDistance;




    for (let i = 0; i < array.length; i++) {

        array[i].draw();

    }


    ctx.beginPath();

    ctx.font = '48px serif';
    ctx.fillText(bird, x, y)
    ctx.fill();
    ctx.save();
    ctx.beginPath();

    ctx.font = '48px serif';
    ctx.fillText(animal, dotsX, dotsY)


    //rgb

    ctx.fill();


    ctx.restore();
    if (dotsX >= 900) {
        dotsXDistance = -1;

    }
    if (dotsX <= 0) {
        dotsXDistance = 1;

    }
    if (dotsY <= 0) {
        dotsYDistance = 1;

    }
    if (dotsY >= 600) {
        dotsYDistance = -1;

    }
    // array[i].x==x && array[i].y==y

    for (let i = 0; i < array.length; i++) {
        if (Math.sqrt(((array[i].x - x) ** 2) + (array[i].y - y) ** 2) < (array[i].radius)) {
            score += 10
            array.splice(i, 1);
            p1.innerHTML = 'Your score is :' + score;
            console.log('hi');
        }
    }
    //console.log(x, dotsX, y, dotsY)
    if (x >= dotsX && x <= dotsX + 50 && y >= dotsY && y <= dotsY + 50) {
        alert('Sorry! You lost :(');
        clearInterval(timerID);
    }
}
else{
    alert('choose an animal and bird first then click again');
    clearInterval(timerID)
}

}

let score = 0;
