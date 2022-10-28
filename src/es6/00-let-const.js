var lastname = 'David';
lastname = 'Oscar';
console.log(lastname);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

//Error al reasignar.
const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
    if(true){
        var fruit1 = 'Apple';// Function scope.
        let fluit2 = 'Kiwi';// Block scope.
        const fruit3 = 'Banana';// Block scope.
    }
    console.log(fruit1);
    console.log(fruit2);//Error variable no global.
    console.log(fruit3);//Error variable no global.
};

fruits();