'use strict'

//Подсчет элементов различных типов в массиве.
// Создайте исходный массив, содержащий значения различных типов,
// в качестве элементов, например: [true, 'hello', 5, 12, -200, false, false, 'word']
// но желательно более длинный и разнообразный.

const array = [true, 'hello', 5, 12, -200, false, 'world', null, undefined, { name: 'Alice', age: 27 }, [1, 2, 3], new Date(), 3.14, '😊', NaN];

//Создайте объект-коллекцию (хеш) с именами типов в виде ключей и 0 в качестве значения, например: { number: 0, string: 0, boolean: 0 }

const obj = { number: 0, string: 0, boolean: 0, key: 0, name: 0, age: 0,  }

//Пройдитесь по массиву циклом for..of и для каждого элемента массива, увеличивайте соответствующее значение в объекте-коллекции.

const collection = {};

for (const item of array) {
    let type = typeof item;

    if (Array.isArray(item)) {
        type = 'array';
    }

    else if (item === null) {
        type = 'null';
    }
    if (collection[type]) {
        collection[type]++;
    } else {
        collection[type] = 1;
    }
}
console.dir(collection);

//Измените пример: удалите все ключи из начальной коллекции и добавляйте их динамически в цикле.

const keys = Object.keys(obj);

for (let key of keys) {
    delete obj[key];
    obj[key] = 0;
}

console.log(obj);