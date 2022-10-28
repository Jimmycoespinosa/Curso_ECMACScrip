const entries = new Map([["name", "Oscar"], ["age", 34]]);

console.log(entries);
//Resultado: Imprime un array de arrays.
//Map(2) { 'name' => 'Oscar', 'age' => 34 }

console.log(Object.fromEntries(entries));
//Resultado: Imprime la transformación a un objeto.
//{ name: 'Oscar', age: 34 }
