async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello!!');
//Resultado: Ejecuta de forma asíncrona continuando con las tareas posteriores
// al async generator.
// Hello!!
// 1
// 2
// 3

/////////////////////// Nuevo ejemplo de ejecución

async function arrayOfNames(array){
    for await(let value of array){
        console.log(value);
    }
}

const names = arrayOfNames(['Oscar', 'David', 'Ana']);
console.log('After');
//Resultado: Ejecuta tareas secuencial de forma asíncrona con un ciclo.
// After
// Oscar
// David
// Ana
