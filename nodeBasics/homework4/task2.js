//Створіть дві змінні, які містять імена двох осіб. Використовуючи конкатенацію рядків,
//створіть новий рядок, який містить вітання для обох осіб.
//Виведіть результат в консоль. Потім використайте шаблонний рядок для створення того ж вітання.
//Виведіть результат в консоль.
let name = 'Salvador';
let surname = 'Dali';
let greeting = 'Hello, ' + name + ' ' + surname + '!';
let greetingTemplate = `Hello, ${name} ${surname}!`;

console.log(greeting);
console.log(greetingTemplate);
