function getSeconds(){
    //Write code here to ask your user to enter a number(0-23) for the hour of the current time, convert to number
    let number1 = prompt ('Please enter a number between 0-23 for the hour of the current time');
    let hour = Number(number1);
    
    //Write code here to ask your user to enter a number(0-59) for the minute of the current time, convert to number
    let number2 = prompt ('Please enter a number between 0-59 for the minute of the current time');
    let minute = Number(number2);
    
    //Write code here to ask your user to enter a number(0-59) for the second of the current time, convert to number
    let number3 = prompt ('Please enter a number between 0-59 for the second of the current time');
    let second = Number(number3);
    
     //Write code here to calculate the total seconds
     let seconds = second + hour*3600 + minute* 60;
    
    //Write code here to use alert to show the result
    alert ('The current time  '+ hour+ '  :  ' + minute+ '  :  ' + second+ '  is  ' + seconds+ '   seconds after 12:00 AM.');
    
}

function getHMS(){
    //Write code here to ask users' input of the seconds, covert to number
    let number1 = prompt ('Please enter a number(0-86399) for the seconds');
    let seconds = Number(number1);
    

    //Write code here to calculate the number of hour, minute, and secods
    let hour = Math.floor(seconds / 3600)  ;
    let minute = Math.floor((seconds %3600) / 60);
    let remainingSeconds =  (seconds %3600) % 60;


    //Write code here to use alert to show the result
    alert (seconds + '  after  ' +  '  12:00 AM is    ' + hour+ '  :  ' + minute+ '  :  ' + remainingSeconds);
  
}

function calculateFreeFallTime(height, intialVelocity, gravity){
     //Write code here to calculate the fall time of the object
     let t =( Math.pow((Math.pow(intialVelocity,2) + 2 *gravity* height),(1/2) ) - intialVelocity) / gravity ;

     //Write code here to return the result
     return t;

}

function compareFreeFallTime(){
    //Write code here to ask users' input of planet name of the first planet
    let nameFirstPlanet = prompt ('Please enter the name of the first planet.');

    //Write code here to ask users' input of height of the free fall on the first planet, covert to number
    let input1 = prompt ('Please enter the height of the free fall in meters on planet Earth.');
    let heightFirstPlanet = Number(input1);
    


    //Write code here to ask users' input of initial downward velocity, covert to number
    let input2 = prompt ('Please enter the initial downward velocity  in meters/sec on planet Earth .');
    let initialDownwardVelocityFirstPlanet = Number(input2);




    //Write code here to ask users' input of gravity of the first planet, covert to number
    let input3 = prompt ('Please enter the gravity in meters/sec ^2 on planet Earth .');
    let gravityFirstPlanet = Number(input3);

    //Write code here to ask users' input of planet name of the second planet
    let nameSecondPlanet = prompt ('Please enter the name of the second planet.');

 
    //Write code here to ask users' input of height of the free fall on the second planet, covert to number
    let input4 = prompt ('Please enter the height of the free fall in meters on planet .'+nameSecondPlanet);
    let heightSecondPlanet = Number(input4);

    //Write code here to ask users' input of initial downward velocity, covert to number
    let input5 = prompt ('Please enter the initial downward velocity  in meters/sec on planet.' + nameSecondPlanet);
    let initialDownwardVelocitySecondPlanet = Number(input5);

    //Write code here to ask users' input of gravity of the second planet, covert to number
    let input6 = prompt ('Please enter the gravity in meters/sec ^2 on planet  .' + nameSecondPlanet);
    let gravitySecondPlanet= Number(input6);

    /* Write code here to call the calculateFreeFallTime(height, intialVelocity, gravity) function to 
    calculate the fall time of an object on the first planet */
   let firstPlanet =  calculateFreeFallTime(heightFirstPlanet, initialDownwardVelocityFirstPlanet, gravityFirstPlanet);


    /* Write code here to call the calculateFreeFallTime(height, intialVelocity, gravity) function to 
    calculate the fall time of an object on the second planet */
   let secondPlanet =  calculateFreeFallTime(heightSecondPlanet, initialDownwardVelocitySecondPlanet,gravitySecondPlanet);

    //Write code here to use alert to show the results 
    alert ('The free fall time of an object on planet '+nameFirstPlanet+ ' without air from the height of ' +heightFirstPlanet+' with initial downward velocity of '+
      initialDownwardVelocityFirstPlanet + ' is approximately '+ firstPlanet.toPrecision(2) +' ,while  the free fall time of an object on planet Mars without air from the height of '
      + heightSecondPlanet+ ' with initial downward velocity of '+ initialDownwardVelocitySecondPlanet + ' is approximately '+ secondPlanet.toPrecision(2));


   
}

