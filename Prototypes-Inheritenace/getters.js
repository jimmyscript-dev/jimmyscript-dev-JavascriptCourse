const animal = {
    type: 'monkey'
};


console.log(animal);
console.log(animal.__proto__);
console.log(animal.__proto__.__proto__);

console.log(Object.getOwnPropertyNames(animal))
console.log(Object.getOwnPropertyNames(animal.__proto__))