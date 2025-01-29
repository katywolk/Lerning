function getKeys (data) {
    for (const key in data) {
        console.log(key)
    }
}

const user = { name: "Alice", age: 25, city: "New York" };

getKeys(user)



class EventGet {
    async findEventName(getNotifications,
                          eventName) {
        return getNotifications.result.data.find((name) => name.name === eventName);
    }
}

const eventGet = new EventGet();
const getNotifications = {
    result: {data: []}
};
// console.log(getKeys(user));
// Вывод:
// "name"
// "age"
// "city"

// (async () => {
const eventName = await eventGet.findEventByName(getNotifications, 'orderComplete_new');
// });

