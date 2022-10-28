const hello = '         Hello World!   ';//Espacios al inicio.
console.log('[' + hello.trimStart() + ']');
//Resultado: Quita los espacios al inicio.
//[Hello World!   ]

/////////////////////// Nuevo ejemplo de ejecución

const hello2 = '   Hello World!          ';//Espacios al final.
console.log('[' + hello2.trimEnd() + ']');
//Resultado: Quita los espacios al final.
//[   Hello World!]
