// Arrays Destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

//Object Destructuring
let user = {username:'Oscar', age: 34};
let {username, age} = user;
console.log(username, user.age);

// Spread Operator
let person = {name: 'oscar', age:28};
let country= 'MX';

let data = {id:1, ...person, country};
console.log(data);

// let kissEmoji = [..."👩‍❤️‍💋‍👩"]
// console.log(kissEmoji)

// REST
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(5, 1, 2, 3);

// Combina objetos JSON con Spread Operator
// Porpuesta solución Jimmyco
function solution(...values) {
    console.log(values);
    return values;
}

let jason1 = { name: 'Mr. Michi', food: 'Pescado' };
let jason2 = { age: 12, color: 'Blanco' };
let datos = {...jason1, ...jason2};
solution(datos);
solution();

// Propuesta Solución Platzi
function solution(json1 = {name: "Mr. Michi",food: "Pescado"},
    json2 = {age: 12, color: "Blanco"}){
    console.log({...json1 , ...json2,});
    return {...json1, ...json2,};
}
solution();
