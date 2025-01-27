'use strict'

//Создайте объект с одним полем name и присвойте его в константу.
const object1  = {
    name: 'Hello',
}

// Попробуйте поменять поле name у обоих объектов.
// Не будет работать, тк это константа object1 = {name: 'Что-то новое'}, но можно вот так:
object1.name = 'Hi';


console.log(object1);

//Создайте объект с одним полем name и присвойте его в переменную.
let object2 = {
    name: 'World',
}

// Попробуйте поменять поле name у обоих объектов.
//Можно двумя способами
object2 = {name: 'Что-то новое'};
object2.name = 'Earl';

 console.log(object2);

 // Попробуйте присвоить другой объект в оба идентификатора.
object2 = object1;
console.log(object2);

// Так не получится из-за константы object1 = object2;



//Реализуйте функцию createUser с сигнатурой createUser(name: string, city: string): object. 
// Пример вызова: createUser('Marcus Aurelius', 'Roma') 
// функция должна вернуть объект { name: 'Marcus Aurelius', city: 'Roma' }

function createUser (name, city) {
    return `name: ${name}, city: ${city}`
}

console.log(createUser('Marcus Aurelius', 'Roma'));

