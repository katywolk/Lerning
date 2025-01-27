'use strict'

//Реализуйте телефонную книгу на массиве объектов.

// Объявите массив объектов с двумя полями: name и phone для хранения телефонной книги.
// Пример объекта: { name: 'Marcus Aurelius', phone: '+380445554433' }
// и добавьте несколько объектов в массив, чтоб было на чем проверять.

let array = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Anna', phone: '+791820312334' },
    { name: 'Ivan', phone: '+843294892348' },
];

array.push( { name: 'Konstantin', phone: '+9423489234842' }, { name: 'Alex', phone: '+98423948322344' });

console.log(array);

//Реализуйте функцию findPhoneByName с сигнатурой findPhoneByName(name: string): string.
// При вызове функция должна находить объект,
// где поле name равно аргументу name и возвращать номер телефона из объекта.
// Для поиска воспользуйтесь циклом for.

function findPhoneByName (name = '') {
    for (const object of array) {
        if (object.name === name) {
            return object.phone
        }
    }
    return 'Имя не найдено'
}
console.log(findPhoneByName ('Anna')) //+791820312334
console.log(findPhoneByName ('Ana')) //Имя не найдено


// Реализуйте телефонную книгу на хеш-таблицах, т.е. справочниках (объектах).
// Задайте справочник (объект) с ключами равными значениям
// поля name (из предыдущего примера) и значениями равными полю phone.


const phoneBook = {
    MarcusAurelius: '+380445554433',
    Anna: '+791820312334',
    Ivan: '+843294892348',
    Konstantin: '+9423489234842',
    Alex: '+98423948322344',
};

// Реализуйте функцию findPhoneByName с сигнатурой
// findPhoneByName(name: string): string которая находит телефон в хеше
// по имени и возвращает номер телефона. Используйте hash[key] для поиска телефона.

function findPhoneByName1 (name) {
    return phoneBook[name] || 'Имя не найдено'
}

console.log(findPhoneByName1('Ivan'));
console.log(findPhoneByName1('Iivan'));
