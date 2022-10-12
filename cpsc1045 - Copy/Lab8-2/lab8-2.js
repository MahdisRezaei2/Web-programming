

   
   let  a =  Number(prompt('How much do you want to add?'));
   while(isNaN(a) || a<0){
       
    alert('Please enter a valid number.');
    a = Number(prompt('How much do you want to add?'));
     
}
let b = prompt('Your current balance is '+ a+ '.'+ 'You can type "exit" to quit. To continue playing, enter a number less than or equal to your balance');
while(b!='exit'){
    if (isNaN(b) || b<0 || b>a){
        b = prompt('Your current balance is '+ a+ '.'+ 'You can type "exit" to quit. To continue playing, enter a number less than or equal to your balance');
    }
    else {
       let  x = Math.random();
        if (x<=0.3){
            a= a + Number(b);
            // a has to change not b
            alert('You win! Your current balance is '+ a +'Take time to decide whether to continue playing');
        }
        else {
            a= a - Number(b);
            if (a==0){
                break;
            }
            alert('You lose! Your current balance is '+ a +'Your done for the game');
           
        } 
        b = prompt('Your current balance is '+ a+ '.'+ 'You can type "exit" to quit. To continue playing, enter a number less than or equal to your balance');
    }

} alert('Bye Bye. ');
   





