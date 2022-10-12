// getting elements from the HTML and assigning them to the variables
let d = document.getElementById('myCanvas');
let ctx = d.getContext("2d");
let b1 = document.getElementById('first');
b1.addEventListener('click', start);
let b2 = document.getElementById('second');
b2.addEventListener('click', start);
let b3 = document.getElementById('third');
b3.addEventListener('click', start);
d.addEventListener('mouseover', birdS);
let animal;
let bird;
let p1 = document.getElementById('message');
let dotsX;
let dotsY;
let dotsXDistance;
let dotsYDistance;

let timerID;
ctx.save();
// creating six functions in order to draw the emoji of the three types of the birds and animals
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
//creating a class in order to make an array of random circles in location
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
//making a function to know the postion of the mouse when it is moving on the canvas 
let x = 0, y = 0;
function birdS(e) {

    let CursorX = document.getElementById('xcoord');
    let CursorY = document.getElementById('ycoord');
    x = e.offsetX-10;
    y = e.offsetY+40;
    CursorX.innerHTML = e.offsetX;
    CursorY.innerHTML = e.offsetY;



}
// creating a function that when the game starts it produces an array of circles by using the Dot class that we made before this function
function start() {
    array = [];
    for (let i = 0; i < 10; i++) {
        // drawPic();
        array.push(new Dot(Math.random() * (750) + 50, Math.random() * (450)+50));
        //console.log(array);

    }
}
ctx.fill();

// making a function to run the animation which calls moveDot function in a specific interval
function runAnimation() {
    clearInterval(timerID);
    let count = 0;
    while (count <= 2) {
        for (let i = 0; i <= 10; i++) {
            dotsXDistance = 1;

            dotsYDistance = 1;
            
            dotsX = 450;
            dotsY = 300;
        }
        count++;
    }

    timerID = setInterval(moveDot, 1);
}
function moveDot() {
    if(bird != undefined && animal != undefined){
    
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


    ctx.fill();


    ctx.restore();
    // creating conditions so the circles will not be produced somewhere out of the canvas
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
    // making a for loop to calculating the score
    for (let i = 0; i < array.length; i++) {
        if (Math.sqrt(((array[i].x - x) ** 2) + (array[i].y - y) ** 2) < (array[i].radius)) {
            score += 10
            array.splice(i, 1);
            p1.innerHTML = 'Your score is :' + score;
            console.log('hi');
        }
    }
    // making conditions to determine whether the user is lost or not
    // by the message in the alert we make sure that user has choosen one bird and one animal to start the game. if the user has not choosen them by the 
    //alert message we will notify them
    if (x >= dotsX && x <= dotsX + 50 && y >= dotsY && y <= dotsY + 50) {
        alert('Sorry! You lost :(');
        clearInterval(timerID);
    }
}
else{
    alert('choose an animal and bird first then click again');
    clearInterval(timerID)
} 
// making condition to determine whether the user is win or not
        if (score==100){
            p1.innerHTML = 'Your score is :' + score+ '.You win!';
        }
}

let score = 0;
