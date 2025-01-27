'use strict'

//Реализуйте функцию average с сигнатурой average(a: number, b: number): number
// вычисляющую среднее арифметическое своих аргументов.

function average (a, b) {
    const result = (a+b)/2
    if (typeof a !== "number" || typeof b !== "number") {
        return "Переменные должны быть числами!"
    }
    return result
}

console.log(average(34, 67));
console.log(average(34, []));


//Реализуйте функцию square с сигнатурой square(x: number): number
// вычисляющую квадрат своего аргумента.

function square (x) {
    const result = x**2
    return result
}

console.log(square(4));


//Реализуйте функцию cube с сигнатурой cube(x: number): number
// вычисляющую куб своего аргумента.

function cube (x) {
    const result = x**3
    return result
}

console.log(cube(4));


//Вызовите функции square и cube в цикле от 0 до 9, вычисляя,
// соответственно квадрат и куб от переменной цикла.
// Передайте квадрат и куб на каждой итерации в функцию average.
// Результаты сложите в массив и возвратите из функции calculate.

function calculate (start, end) {
    const result = [];
    for ( let i = start; i <= end; i++) {
        const avg = (square(i), cube(i));
        result.push(avg);
    }
    return result
}

console.log(calculate(0, 9));
