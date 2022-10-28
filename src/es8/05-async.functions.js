const fnAsync = ()=> {//Formato arrow function
    return new Promise((resolve, reject) =>{//Función anónima.
        (true)// Forma de crear un if sin palabras reservadas.
        ? setTimeout(() => resolve('AsynC!!'), 2000)
        : reject(new Error('Error!'));
    });
}
// Ejecuta función con asincronismo.
const anotherFn = async ()=> {// Característica Async.
    const something = await fnAsync();// Característica Async.
    console.log(something);
    console.log('Hello!');
}

console.log('Before');//Paso 1
anotherFn();//Paso 2
console.log('After');//Paso 3

//Resultado: La ejecución se realiza respetando el timer,
// y permitiendo continuar con la ejecución de los procesos posteriores. 
// Before //Paso 1
// After //Paso 3
// AsynC!!//Paso 2
// Hello!

/////////////////////// Nuevo ejemplo de ejecución

const fnAsync2 = ()=> {//Formato arrow function
    return new Promise((resolve, reject) =>{//Función anónima.
        (true)// Forma de crear un if sin palabras reservadas.
        ? setTimeout(() => resolve('Sin AsynC!!'), 2000)
        : reject(new Error('Error!'));
    });
}
// Ejecuta función sin asincronismo.
const anotherFn2 = ()=> {
    const something2 = fnAsync2();
    console.log(something2);
    console.log('Hello!');
}

console.log('Before');//Paso 1
anotherFn2();//Paso 2
console.log('After');//Paso 3
//Resultado: La ejecución se realiza de forma secuencial,
// sin ejecutar la promesa. 
// Before //Paso 1
// Promise { <pending> } //Paso 2
// Hello! 
// After //Paso 3
