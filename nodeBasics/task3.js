// Створіть змінну яка буде символізувати вік певної персони.
// Після чого створіть булеву змінну яка буде визначати чи особа повнолітня базуючись на заченні з попередньої змінної.
// Виведіть усі змінні в консоль

let age = 17;
let adultCheckResult = age >= 18 ? true : false;

console.log(`Age of person is ${age}, so it's ${adultCheckResult} that person is adult.`);

//Implementation with function:
function adultCheck(age)
{
    return age >= 18 ? true : false;
}

function checkAdultOutput(adultCheck, value)
{
    let result = adultCheck(value);
    console.log(`Age of person is ${value}, so it's ${result} that person is adult.`);
}

checkAdultOutput(adultCheck, 17);
checkAdultOutput(adultCheck, 18);
checkAdultOutput(adultCheck, 30);