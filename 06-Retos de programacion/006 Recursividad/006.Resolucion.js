// function recursividad (){
let recursividad_cuenta = (numero) => {
    if (numero === 0) {
        return;
    }
    console.log(numero);
    return recursividad_cuenta(numero - 1);
};
console.log(recursividad_cuenta(5));



// EJERCICIOS FACILES

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

function arreglo_Anidado() {
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




// EJERCICIO INTERMEDIOS

// EJERCICIO 1: Suma recursiva de un arreglo
/*Dado un arreglo de números, implementa una función recursiva que calcule la suma de todos sus elementos */
function sumaArreglo(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumaArreglo(arr.slice(1));
}
const numeros = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(sumaArreglo(numeros));

//EJERCICIO 2: Convertir número decimal a binario
/*  Crea una función recursiva que reciba un número decimal y devuelva su representación binaria como string. */
function numero_Decimal_Binario() {
    let conversion_DecimalBinario = (
        numero) => {
        if (numero === 0) {
            return "";
        }
        return conversion_DecimalBinario(Math.floor(numero / 2)) + (numero % 2);
    };
    console.log(conversion_DecimalBinario(10));
}
numero_Decimal_Binario();
// ↑
//  1111111
//  8421
//  1010

// EJERCICIO 3: Contar digitos
/* Escribe una funcion recursiva que cuente cuantos digitos tiene un numero entero positivo */
// function contador_Digitos (coste) {
// const digitos = 0;
// for (let i = coste.length - 1; i >= 0; i--) {
//         digitos += 1;
//     }
//     return digitos;
// }
// coste = prompt("Ingrese el numero para calcular sus digitos");
// producto = contador_Digitos (coste);
// console.log("Ingrese el digito", producto);

// EJERCICIO 4: Buscar un elemento en un arreglo
/* Dado un arreglo desordenado, implementa una funcion recursiva y devuelva su representacion binaria como string*/
function buscarElemento(array, elemento, indice = 0) {
    if (indice >= array.length) {
        return -1;
    }
    if (array[indice] === elemento) {
        return indice;
    }
    return buscarElemento(array, elemento, indice + 1);
}
buscarElemento(arry = [1, 2, 3, 4, 5], elemento = 5);

const Arreglo_Original = [1, 2, 3, 4, 5];
const copia_Arreglo = [...Arreglo_Original];
console.log(copia_Arreglo);

// EJERCICIO 5:
/* */
function InvertirCadena(enlace) {
    let actualEnlace = "";
    for (let i = enlace.length - 1; i >= 0; i--) {
        actualEnlace += enlace[i];
    }
    return actualEnlace;
}
console.log(InvertirCadena('Adios'));


//  * DIFICULTAD EXTRA (opcional):
//  * Utiliza el concepto de recursividad para:
//  * - Calcular el factorial de un número concreto (la función recibe ese número).
//  * - Calcular el valor de un elemento concreto (según su posición) en la
//  *   sucesión de Fibonacci (la función recibe la posición).
//  */

// 1. Calcular el factorial de un numero concreto (La funcion recibe ese numero).
function factorial_Contar(clave) {
    if (clave < 0)
        return -1;
    else if (clave == 0)
        return 1;
    else {
        return (clave * factorial_Contar(clave - 1));
    }
}
console.log(factorial_Contar(10));
// 10 * 9 = 90 90 * 8 = 720 720 * 7 = 5040 5040 * 6 = 30240 30240 * 5 = 151200 151200 * 4 = 604800 604800 * 3 = 1814400 1814400 * 2 = 3628800

// Calcular  el valor  de un elemento crocretos (según su posición) en la  sucesión de Fibonaccion
// function factorial (importe) {
// // let factorial = (importe) => {
//     if (importe < 0) {
//         console.loglog(" Los numeros negativos no sonvalidos");
//     } else if (importe <= 0) {
//         console.log("Los numeros negativos no son validos");
//         return 0;
//     } else if (importe == 1) {
//         return 0;
//     } else if (importe == 2) {
//         return 1;
//     } else {
//         (importe - 1) + (importe - 2);
//     }
// }
// console.log("El factorial de 5 es:", factorial(5));


// function calculo_Factorial(cifra) {
//     if (cifra < 0)
//         return -1;
//     else if (cifra == 0)
//         return 1;
//     else {
//         return (cifra * calculo_Factorial(cifra - 1));
//     }
// }
// console.log(calculo_Factorial(4));



// EJERCICIOS DIFICILES
// EJERCICIO 1: Resolver un laberinto matriz 2D.
/* Implementar una funcion que encuentre una salida desde un punto inicial hasta una celda objetivo en una matriz representando un laberinto con obstaculos.*/
// function  laberinto(laberinto, fila, columna, salida) {
//     if (fila < 0 || fila >= laberinto.length || columna < 0 || columna >= laberinto[0].length || laberinto[fila][columna]

// } testing-2706