// Declarando
class User{};

// Instancia de una clase.
//const newUser = new User();

/////////////////////// Nuevo ejemplo de ejecución

class user{
    // Declaración de métodos.
    greeting(){
        return 'Hello';
    }
};

const gndx = new user();
console.log(gndx.greeting());
const debeloper = new user();
console.log(debeloper.greeting());

/////////////////////// Nuevo ejemplo de ejecución

class user{
    // Constructor
    constructor(){
        console.log('Nuevo usuario!');
    }
    greeting(){
        return 'Hello';
    }
}
const David = new user();

/////////////////////// Nuevo ejemplo de ejecución

// This - Instancia al objeto padre.
class user{
    // Constructor
    constructor(name){
        this.name = name;
    }
    // Métodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new user('Ana');
console.log(ana.greeting());

/////////////////////// Nuevo ejemplo de ejecución

// Setters and Getters.
class user{
    // Constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // Métodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(edad){
        this.age = edad;
    }
}
const bebeloper = new user('David', 15);
console.log(bebeloper.uAge);//Llamada al get.
console.log(bebeloper.uAge = 20);//Llamada el set.

