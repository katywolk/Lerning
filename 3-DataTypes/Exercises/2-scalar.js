'use strict'

//Подготовьте две реализации функции inc:
//
// C сигнатурой inc(n: number): number, пример вызова: const a = 5; const b = inc(a); console.dir({ a, b });

function inc(n) {
    return n+1;
}
const a = 5;
const b = inc(a);
console.dir({ a, b });


// C сигнатурой inc(num: Num), где Num является объектом с полем n,
// чтобы функция изменила поле исходного объекта переданного по ссылке,
// пример вызова const obj = { n: 5 }; inc(obj); console.dir(obj);

function inc1(num) {
    if (num && typeof num.n === 'number') {
        num.n += 1;
    } else {
        throw new Error("Invalid input: Object must have a numeric 'n' field");
    }
}

const obj = { n: 5 };
inc1(obj);
console.dir(obj);