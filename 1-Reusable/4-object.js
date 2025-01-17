'use strict';

async function daley(callback, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('========');
            callback();
            resolve();
        }, timeout);
    });
}


(async () => {
    const welcome = person => {
        console.log(`Ave, ${person.name}`);
    };

    const marcus = { name: 'Marcus Aurelius' };
    const mao = { name: 'Mao Zedong' };
    const cartesius = { name: 'Rene Descartes'};

    setTimeout(() => welcome(marcus), 0);
    welcome(marcus);
    welcome(mao);
    welcome(cartesius);
    await daley(() => {
        welcome(marcus)
    }, 0);


    const welcome1 = person => {
        console.log(`Akklk, ${person.name}`);
    };

    const marcus1 = { name: 'Marcus Aurelius' };
    const mao1 = { name: 'Mao Zedong' };
    const cartesius1 = { name: 'Rene Descartes'};

    welcome1(marcus1);
    welcome1(mao1);
    welcome1(cartesius1);

// marcus
// marcus
// mao
// cartesius


})();
