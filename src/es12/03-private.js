// Setters and Getters.
class user{
    // Constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // Métodos
    #speak(){// La almohadilla indica que el método es privado.
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get #uAge(){// La almohadilla indica que el método es privado.
        return this.age;
    }
    set #uAge(edad){// La almohadilla indica que el método es privado.
        this.age = edad;
    }
}
const bebeloper = new user('David', 15);
console.log(bebeloper.uAge);//Llamada al get.
console.log(bebeloper.uAge = 20);//Llamada el set.

