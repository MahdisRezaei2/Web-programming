
/**
 * Name: Mahdis Rezaei Tamijani
 * Student number: 100381114
 * course: CPSC1045- section 5
 * Date : January 26th 2022
 * Instructor : Steven Ma
 */
function calculateYears() {
    let a = prompt('Please enter a number');
    let futureyear =  Number(a)+2022; // error in this line, Hint: assignment order
    let pastyear =   2022 -Number(a); // error in this line, Hint: assignment order
    
    alert(a +  '  years from now is year '  + futureyear + ', and '  + a+   ' years ago was year  '  + pastyear+'.');
    // find and errors in this function to show the correct message like ' 3 years from now is year 2025, and 3 years ago was year 2019.'
    // Double check the result
}

function rollDice(){
    let number = Math.floor(Math.random()*6+1);
    alert('The point you get this time is '+ number);
     
    //Write code here to get a random integer from 1 and 6
    //Use alert() to show the result as 'The point you get this time is INTEGER'

}

function getVolumeOfSphere() {
    let radius = prompt('Please enter the radius of the sphere in meters');
    let volume = (4/3)*(Math.PI)* (Math.pow(radius,3));
    alert ('The volume of a sphere with a  radius of  '+ radius+ ' m' + ' is '+ volume+ ' m^3');
    
    return volume;
    //Write code here to ask your user to input the radius of the sphere with message 'Please enter the radius of the sphere in meters.'
    //Write code here to calculate the volume
    //User alert() to to show the result as 'The volume of a sphere with radius of RADIOUS m is volume m^3
    //Write code here to return the value

}



