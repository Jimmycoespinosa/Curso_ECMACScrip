// Generator: Herramienta de Iteraciones.
function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

/////////////////////// Nuevo ejemplo de ejecución

// Reto Identificador para Michis.
let cont = 0;
function* getId(array) {
    // Tu código aquí 👈    
    for(let value of array){
        cont ++;
        yield cont;
    }
}
let michis = ['Michi1', 'Michi2', 'Michi3'];
const object = getId(michis);
console.log(michis[0] + ': ' + object.next().value);
console.log(michis[1] + ': ' + object.next().value);
//console.log(object.next().value);
//console.log(object.next().value);

/////////////////////// Nuevo ejemplo de ejecución

// Solución Presentada Platzi
function* getId() {
    let lastId = 1;
    while (true) {
    yield lastId++;
    }
}
