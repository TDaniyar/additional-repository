'use strict';

let greeting;
let gameExplanation;
let gameStartNumber;
let undefinedNumber;
let gameNumberisNumber;

const gameStart = function () {
    greeting = alert("Загадывание случайного числа от 1 до 100");
    gameExplanation = confirm("Ты хочешь угадать число от 1 до 100 ?");
    if (gameExplanation === true) {
        const getGameStartNumber = function () {
            gameStartNumber = +prompt("Введи число от 1 до 100");
            const isNumber = function (num) {
                return !isNaN(parseFloat(num)) && isFinite(num);
            }
            gameNumberisNumber = isNumber(gameStartNumber)
            if (gameNumberisNumber === true) {
                const gamerunning = function (num1, num2) {
                    if (isNaN(num1) === true) {
                        return getGameStartNumber(alert("Введи число!"))
                    } else if (num1 === 0) {
                        return alert("Игра окончена")
                    } else if (num1 > num2) {
                        return gamerunning(+prompt("Загаданное число больше, Введи новое число!"), num2);
                    } else if (num1 < num2) {
                        return gamerunning(+prompt("Загаданное число меньше, Введи новое число!"), num2);
                    } else if (num1 === num2) {
                        return alert("Поздравляю, Вы угадали!!!");
                    }
                }
                gamerunning(gameStartNumber, undefinedNumber)
            } else if (gameNumberisNumber === false) {
                return getGameStartNumber(alert("Введи число!"));
            }
            console.log(isNumber(gameStartNumber))
        }
        getGameStartNumber()
    }

}

undefinedNumber = Math.floor(Math.random() * 99 + 1);
gameStart();

