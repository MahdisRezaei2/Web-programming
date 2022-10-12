let b1 = document.getElementById('box1');
let b2 = document.getElementById('box2');
let bt1 = document.getElementById('button1');
let bt2 = document.getElementById('button2');
let bt3 = document.getElementById('button3');
let bt4 = document.getElementById('button4');
let p1 = document.getElementById('message');
let p2 =  document.getElementById('message1');  
let p3 =  document.getElementById('message2');                                          
let array1 = [];


     bt1.addEventListener('click', pushToArray);
     bt2.addEventListener('click', removeTheLastElement);
     bt3.addEventListener('click', showTheElement);
     bt4.addEventListener('click', reverseTheArray);

     function pushToArray(){
        let firstBox = b1.value;
         array1.push(firstBox);
         // dont do push and tostring at the same time
         //also after pushing the array is a new array so for tostring u dont need to say push again
        p1.innerHTML = "the current element in the array: "+array1.toString();
     }
     function removeTheLastElement(){
        let firstBox = b1.value;
        let a = array1.pop();//why for pop we should assign it to a variable
        //and just to double check: both of them are again an array not an elemetn
        p1.innerHTML = "the current element in the array: "+array1.toString();
    
     }
     function showTheElement(){
         let secondBox = b2.value;
                
                 let element = array1[secondBox-1];
                 //pay attention
                 if (element===undefined){
                    p2.innerHTML = "the number "+secondBox+"  element is  " + 'invalid';
                 }
                 else
                p2.innerHTML = "the number "+secondBox+"  element is  " + element;
             
         
     }
    function reverseTheArray(){
       
        let array2 = [];
        let j =0;
        for (let i =array1.length-1; i >=0;i--){
             
                array2[j]=array1[i];
            
            j++;
              
            
        }
        p3.innerHTML="the reverse array is "+array2.toString() ;
    }