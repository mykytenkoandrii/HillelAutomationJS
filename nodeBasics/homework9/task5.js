// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
    {firstName: "Joe", lastName: "Biden", age: 81},
    {firstName: "Donald", lastName: "Trump", age: 78},
    {firstName: "George", lastName: "Bush", age: 78},
    {firstName: "Volodymyr", lastName: "Zelensky", age: 46},
    {firstName: "Petro", lastName: "Poroshenko", age: 59},
    {firstName: "Viktor", lastName: "Yushchenko", age: 70},
]
for(const {firstName, lastName, age} of users){
    console.log(`President ${firstName} ${lastName} is ${age} years old`);
}