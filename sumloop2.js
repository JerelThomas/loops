const prompt = require ("prompt-sync")();

let n = 1;

let sum=0

let i=0

let product=1
let average=0

console.log(`Type 0 at any time to add`)

do {

   let num= parseInt( prompt("Enter a number : "));
    
    sum = sum+ num

    i = i+1

    product= product * num
    
    let ready= parseInt( prompt("Enter 0 to add : "));


  if (ready===0) 

    {
        average= sum/i

        console.log(`the average of the all numbers are ${average} and the product is ${product}`)
       break
    }


  } while (n < 5);
