'use strict'

// Реализуйте функцию rangeOdd(start: number, end: number): array
// которая отдает массив нечетных чисел из диапазона [15, 30] включая крайние числа.

function rangeOdd (start, end) {
    const result = [];
    for ( let i = start; i <= end; i++) {
        if (i % 2 !==0 || i === start || i === end) {
            result.push(i)
        }
    }
    return result
}

console.log(rangeOdd(15, 30));
