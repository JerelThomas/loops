const prompt = require ("prompt-sync")();

const num= parseInt( prompt("Enter a number u wany the tables for: "));


let i;

for(let i=0; i <= 12; i++)
{
    tables = num*i ;
    console.log(`${i} * ${num}= ${tables}`)
} 