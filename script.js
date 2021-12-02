'use strict';

/* Для этого задания создайте отдельный репозиторий.
Используйте функции alert, confirm, prompt для общения с пользователем.
Написать игровой бот.
"Загадывание случайного числа от 1 до 100"
Что должна делать программа:
— спрашивает пользователя: "Угадай число от 1 до 100".
— если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
— если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;
— если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
— если пользователь нажимает "Отмена", то игра заканчивается и выводится сообщение "Игра окончена".
— если пользовательское число равно загаданному, то игра заканчивается и выводит сообщение "Поздравляю, Вы угадали!!!".
Программа должны быть выполнена с помощью рекурсии, без единого цикла.
Загаданное число должно храниться «в замыкании»
*/
let greeting;
let gameExplanation;
let gameStartNumber;
let undefinedNumber;
let gameNumberisNumber;


const gameStart = function() {
    greeting = alert("Загадывание случайного числа от 1 до 100");
    gameExplanation = confirm("Ты хочешь угадай число от 1 до 100 ?");
    if (gameExplanation === true) {
        gameStartNumber = +prompt("Загадай число от 1 до 100");
        const isNumber = function(gameStartNumber) {
            return !isNaN(parseFloat(gameStartNumber)) && isFinite(gameStartNumber);
        };
            gameNumberisNumber = isNumber(gameStartNumber);
        if (gameNumberisNumber === true) {
            const gamerunning = function(num1, num2){
                if (num1 > num2){
                    return gamerunning(+prompt("Загаданное число больше, Введи новое число!"),num2);
                } else if (num1 < num2) {
                    return gamerunning(+prompt("Загаданное число меньше, Введи новое число!"),num2);
                } else if (num1 === num2) {
                    return alert("Поздравляю, Вы угадали!!!");
                }
                gamerunning(gameNumberisNumber,undefinedNumber);
            };
        }else if(gameNumberisNumber === false) {
            return isNumber(+prompt("Введи число!"));
        }else if(gameNumberisNumber===0){
            return alert("Игра окончена");
            }
    } else {
        alert("До свидания!");
    }
};
// const gamerunning = function(num1, num2) {
//     if (num1 > num2){
//         return gamerunning(+prompt("Загаданное число больше, Введи новое число!"),num2);
//     } else if (num1 < num2){
//         return gamerunning(+prompt("Загаданное число меньше, Введи новое число!"),num2);
//     } else if (num1 === num2){
//         return alert("Поздравляю, Вы угадали!!!");
//     } else if  (num1 === 0) {
//         return alert("Игра окончена");
//     } else if (num1.isNaN()){
//         return +prompt("Введи число!");
//     }
// };

undefinedNumber = Math.floor(Math.random() * 10);
gameStart();
//gamerunning(gameStartNumber, undefinedNumber);

console.log(undefinedNumber);
console.log(gameStartNumber);