'use strict';

const welcome = person => {
    console.log(`Ave, ${person.aboba} ${person.name}`);
};

const persons = {
    marcus: {aboba: 'sdfdsfsf', name: 'Marcus Aurelius'},
    mao: {aboba: 'sdfdsfsf', name: 'Mao Zedong'},
    rene: {aboba: 'sdfdsfsf', name: 'Rene Descartes'},
};

for (const key in persons) {
    const person = persons[key];
    welcome(person);
}


