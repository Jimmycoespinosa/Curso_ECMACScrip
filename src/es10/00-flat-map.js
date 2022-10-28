// Ejemplo flat
const array = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]];
console.log(array.flat(3));
// Resultado: Imprime matriz con un nivel de profundidad.
// [
//     1, 1, 2, 3, 4,
//     1, 3, 5, 6, 1,
//     2, 4
// ]

// Ejemplo flatmap
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v => [v, v * 2]));
// Resultado: Aplica la fórmula y genera una nueva matríz incluyendo los resultados.
// Primer valor 1
// Primer valor calculado v = 1 => 1 * 2 = 2
// Segundo valor 2
// Segundo valor calculado v = 2 => 2 * 2 = 4 ...
// [
//     1, 2, 2, 4,  3,
//     6, 4, 8, 5, 10
// ]