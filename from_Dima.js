function getKeys (data) {
    for (const key in data) {
        console.log(key)
    }
}

const user = { name: "Alice", age: 25, city: "New York" };

getKeys(user)


// console.log(getKeys(user));
// Вывод:
// "name"
// "age"
// "city"