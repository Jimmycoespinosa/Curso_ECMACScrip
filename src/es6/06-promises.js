const anotherFunction = ()=> {//Formato arrow function
    return new Promise((resolve, reject) =>{//Función anónima.
        if(false){
            resolve('Hey!!');
        }else{
            reject('Whooops!');
        }
    })
}

anotherFunction()
.then(response => console.log(response))
.catch(err=> console.log(err));

