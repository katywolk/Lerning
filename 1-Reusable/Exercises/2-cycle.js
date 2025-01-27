'use strict'

// Реализуйте функцию range(start: number, end: number): array
// которая отдает массив чисел из диапазона [15, 30] включая крайние числа.

function range (start, end) {
    const result = [];
        for ( let i = start; i <= end; i++) {
            result.push(i)
        }
        return result
}

console.log(range(15, 30));
