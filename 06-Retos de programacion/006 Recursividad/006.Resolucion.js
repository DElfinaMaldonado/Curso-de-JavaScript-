// function recursividad (){
let recursividad_cuenta = (numero) => {
    if (numero === 0) {
        return;
    }
    console.log(numero);
    return recursividad_cuenta(numero - 1);
};
console.log(recursividad_cuenta(5));

// // Ejercicio 1: Suma de números consecutivos:
// /*Escribe una función recursiva que reciba un número entero positivo y devuelva la suma de todos los enteros desde 1 hasta ese número. */
function numeros_Consecutivos() {
    let numero = 1;
    let suma = 0;
    do {
        suma += numero;
        numero++;
    } while (numero <= 5);
    console.log("La suma de los numero del 1 al 10 es:", suma);
}
numeros_Consecutivos();

// EJERCICIO 2: Contador regresivo
/* Crea una función que reciba un número y muestre en consola una cuenta regresiva desde ese número hasta 0. */
function contador_Regresivo() {
    let cuenta_Desfavorable = (importe) => {
        if (importe === -1) {
            return;
        }
        console.log(importe);
        return cuenta_Desfavorable(importe - 1);
    };
    console.log(cuenta_Desfavorable(10));
}
contador_Regresivo();

// EJERCICIO 3: Cálculo de factorial
/* Diseña una función que calcule el factorial de un número usando recursividad, sin utilizar bucles. */
function calculo_Factorial(cifra) {
    if (cifra < 0)
        return -1;
    else if (cifra == 0)
        return 1;
    else {
        return (cifra * calculo_Factorial(cifra - 1));
    }
}
console.log(calculo_Factorial(4));

// EJERCICIO 4: Inversión de cadena
/* Escribe una función que reciba una cadena de texto y devuelva esa misma cadena pero al revés, utilizando recursión. */
//  function inversion_Cadena(enlace) {
//     let nuevaCadena = "";
//     for (let i = enlace.lenght -1; i >= 0; i--) {
//         nuevaCadena += enlace[i];
//     }
//     return nuevaCadena;
// }
// // console.log('Hola');
// inversion_Cadena('Hola');
function invertirCadena(cad) {
    let nuevaCadena = "";
    for (let i = cad.length - 1; i >= 0; i--) {
        nuevaCadena += cad[i];
    }
    return nuevaCadena;
}
console.log(invertirCadena('Hola'));

// EJERCICIO 5: Número de elementos en un arreglo anidado
/*Implementa una función que cuente cuántos elementos hay dentro de un arreglo que puede contener otros arreglos, usando recursión para recorrer todos los niveles.  */

function arreglo_Anidado () {
    const arreglo_one = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    arreglo_one.forEach(elemento => {
        elemento.forEach(cosa => {
            console.log(cosa);
        });
    });
}
arreglo_Anidado();

