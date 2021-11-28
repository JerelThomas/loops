const prompt = require ("prompt-sync")();

let i

let negtotal= 0

let positivetotal= 0

for(i=1; i<=6; i++)
{
    const number =parseInt(prompt("Enter a negative or a positive number: "));

    if (number < 0) 
    {
        negtotal = number + negtotal
    }

    else if(number > 0)
    {
        positivetotal = positivetotal+1
    }


    else
    {
        console.log(`You used a a unuseable number`)
    }


}


console.log(`the sum of the negative numbers are ${negtotal}
and there was ${positivetotal} amount of positive numbers`)