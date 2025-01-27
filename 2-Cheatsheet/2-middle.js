'use strict'

const adder = (initial = 0) => {
    return {
        value: initial,
        steps: [initial],
        add(value) {
            this.steps.push(value);
            this.value += value;
            return this;
        }
    }
}
console.log(adder.value);

class Adder {
    constructor(initial = 0) {
        this.steps = [initial];
        this.value = initial;
    }
    add(value) {
        this.steps.push(value);
        this.value += value;
        return this;
    }
};

let globalVal = 0;
const arr = new Array(6);
function aboba(value) {
    arr.push(value);
    globalVal += value;
    return {
        aboba: aboba,
    };
}
console.log({globalVal});
aboba(1).aboba(2).aboba(3).aboba(5);
// aboba(1)(2)(3)(5);
console.log({globalVal});

//Usage

{
    const { value, steps } = new Adder(5).add(-8).add(11);
    console.log(value);
    const [a, b, c] = steps;
    console.log(a, b, c);
}

{
    const instance = new Adder(5).add(-8).add(11);
    console.log(instance.add(5));
    console.log(instance.value);
    const [a, b, c] = instance.steps;
    console.log(a, b, c);
}

{
    const { value, steps } = adder(5).add(-8).add(11);
    console.log(value);
    const [a, b, c] = steps;
    console.log(a, b, c);
}


const a = {};

const b = new Object()
