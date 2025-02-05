/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 70; // тестовое значение, можно изменять
let grade;

if ((grade = 0 && grade < 50)) {
  console.log("F");
}
if (grade > 49 && grade < 70) {
  console.log("D");
}
if (grade > 69 && grade < 80) {
  console.log("C");
}
if (grade > 79 && grade < 90) {
  console.log("C");
} else {
  console.log("A");
}

// your code
