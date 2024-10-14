// Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням - “Your order is too large, we don’t have enough goods.”
// Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty.”
// У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted”

function checkOrder(available, ordered){
    if(ordered === 0){
        return "Your order is empty.";
    }

    else if(available < ordered){
        return "Your order is too large, we don’t have enough goods.";
    }

    return "Your order is accepted.";
}

console.log("Result if ordered === 0: " + checkOrder(10, 0));
console.log("Result if available < ordered : " + checkOrder(2, 4));
console.log("Result if ordered === available: " + checkOrder(1, 1));
console.log("Result if available > ordered : " + checkOrder(5, 4));