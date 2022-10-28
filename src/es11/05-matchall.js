const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, Banana, Kiwi, Apple, Orange, etc';

for(const match of fruit.matchAll(regex)){
    console.log(match);
}
//Result: Devuelve las coincidencias encontradas e indices correspondientes.
// [
//     'Apple',
//     'Apple',
//     index: 0,
//     input: 'Apple, Banana, Kiwi, Apple, Orange, etc',
//     groups: undefined
// ]
// [
//     'Apple',
//     'Apple',
//     index: 21,
//     input: 'Apple, Banana, Kiwi, Apple, Orange, etc',
//     groups: undefined
// ]