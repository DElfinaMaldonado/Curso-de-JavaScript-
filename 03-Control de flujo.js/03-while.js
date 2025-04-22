//Ejecutar el codigo mas de una vez

/*
while (condicion) {
}
*/


//Ejemplo → Cuales son los numero pares
let i = 0;
while (i < 10) {
    if (i % 2 == 0) {
    console.log('Numero par', i);
}
i++;
}
console.log('Fuera del bloque');