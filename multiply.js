const prompt = require ("prompt-sync")();

let n = 0;

while (n < 1) {n--;

    const num= parseInt( prompt("Enter a number u wany the tables for: "));

        if (num <= 1 ) 
        {
            console.log(`WE do not multiply by 1 and less here`)
            return
        }


    let i;

    for(let i=0; i <= 12; i++)
    {
        tables = num*i ;
        console.log(`${i} * ${num}= ${tables}`)
    } 



}

