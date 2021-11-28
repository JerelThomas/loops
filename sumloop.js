const prompt = require ("prompt-sync")();

let n = 1;

let sum=0


console.log(`Type 0 at any time to add`)

do {

   let num= parseInt( prompt("Enter a number : "));
    
    sum = sum+ num


  if (num===0) 

    {
        console.log(`the sum of the all numbers are ${sum}`)
       break
    }


  } while (n < 5);



  

