// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}
console.log(findLargest(10, 5, 2)); // Вывод: 10
console.log(findLargest(3, 8, 1)); // Вывод: 8
console.log(findLargest(4, 4, 4)); // Вывод: 4
console.log(findLargest(-1, -5, -2)); // Вывод: -1
