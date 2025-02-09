// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1, num2, num3) {
  // Сравниваем num1 с num2 и num3, чтобы узнать, является ли он наибольшим.
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  }
  // Сравниваем num2 с num1 и num3, чтобы узнать, является ли он наибольшим.
  else if (num2 >= num1 && num2 >= num3) {
    return num2;
  }
  // Если ни num1, ни num2 не являются наибольшими, то num3 должен быть наибольшим.
  else {
    return num3;
  }
}
console.log(findLargest(10, 5, 2)); // Вывод: 10
console.log(findLargest(3, 8, 1)); // Вывод: 8
console.log(findLargest(4, 4, 4)); // Вывод: 4
console.log(findLargest(-1, -5, -2)); // Вывод: -1
