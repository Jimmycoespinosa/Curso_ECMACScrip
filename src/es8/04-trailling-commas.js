const array = [24, 34, 25, 24, ,  , , 45];//Trailling permite crear elementos vacíos a partir de comas.
console.log(array);
console.log(array.length);
//Resultado sin Trailling
// [ 24, 34, 25, 24, 45]
// 4
//Resultado con Trailling
// [ 24, 34, 25, 24, <3 empty items>, 45]
// 7
