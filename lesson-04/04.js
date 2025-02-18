/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {  
    let doubledString = ''; // Создаем пустую строку для хранения результата  
    for (let char of str) { // Проходим по каждому символу входной строки  
        doubledString += char.repeat(2); // Удваиваем символ и добавляем к результату  
    }  
    return doubledString; // Возвращаем новую строку  
}  

