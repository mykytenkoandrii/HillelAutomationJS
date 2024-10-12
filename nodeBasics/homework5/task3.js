const number = 5;
let result = 0;
let counter = 1;

console.log("For implementation:");
for(let i = 1; i <=10; i++){
    result = number * i;
    console.log(`${number} x ${i} = ${result}` );
}

console.log("\nWhile implementation:");
while(counter <= 10)
{
    result = number * counter;
    console.log(`${number} x ${counter} = ${result}` );
    counter++;
}