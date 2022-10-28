const anotherFunction = ()=> {//Formato arrow function
    return new Promise((resolve, reject) =>{//Función anónima.
        if(true){
            resolve('Hey!!');
        }else{
            reject('Whooops!');
        }
    })
}

anotherFunction()
.then(response => console.log(response))
.catch(err=> console.log(err))
.finally(()=> console.log('Finally'));
//Resultado: Permite identificar el momento en el que se cumple la promesa.
// Hey!!
// Finally