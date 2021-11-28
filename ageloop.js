const prompt = require ("prompt-sync")();

const Name = prompt("Enter Your Name: ");


let i

for(i=1;i<5; i--)
{
    const Age =parseInt( prompt("Enter Your Age: "));

    if (Age>=10 && Age<=16) 
    {
        console.log(`good`)
        break;
    }
    else if(Age<10 || Age>16)
    {
        console.log(`Enter a valid age plz`)
    }
}

let n = 1;

let sum=0

let a=0

let average=0

console.log(`Type 0 at any time to complete you average check`)

do {

   let num= parseInt( prompt("Enter a number : "));
    
    sum = sum+ num

    a = a+1

    
    let ready= parseInt( prompt("Enter 0 to get arverage : "));


  if (ready===0) 

    {
        average= sum/a

        console.log(`the average of the all numbers are ${average}`)
       break
    }


  } while (n < 5);
