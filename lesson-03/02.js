// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {  
    return num % 2 === 0; // Если остаток от деления на 2 равен 0, возвращаем true  
}  

// Примеры использования  
console.log(isEven(4)); // true  
console.log(isEven(5)); // false  
console.log(isEven(0)); // true  
console.log(isEven(-2)); // true  
console.log(isEven(-3)); // false