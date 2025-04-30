/* - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
   - Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits */

/* Operadores Aritmeticos */
/**
 * Division
 * Resta
 * Suma
 * Multiplicacion
 * Modulo
 * decremento
 * incremeneto
 */

let numero1 = 10;
let numero2 = 15;

let suma = numero1 + numero2;
console.log("suma:", suma);
let resta = numero1 - numero2;
console.log("resta:", resta);
let division = numero1 / numero2;
console.log("division:", division);
let multiplicacion = numero1 * numero2;
console.log("multiplicacion:", multiplicacion);
let modulo = numero1 % numero2;
console.log("modulo:", modulo); //Salida → Cuando divides 10 entre 15, el cociente es 0 (porque 15 no cabe completamente en 10), y lo que sobra es 10
let incremento = ++numero1;
console.log("incremento:", incremento); // Si necesitas el valor incrementado de inmediato, usa ++numero1. Si quieres que el incremento ocurra después de asignar el valor original, usa numero1++.
let decremento = --numero2;
console.log("decremento:", decremento);



/* Operadores Logicos */
/**
 * AND &&
 * OR || → indica si cualquiera de los operandos es verdadero
 * NOT  ! → se utiliza para negar variables lógicas o constantes
 * XOR →solo devuelve 1 si los bits son diferentes, por eso el resultado es 1.
 */

let dato1 = 4;
let dato2 = 5;
    console.log(dato1 <= 4 && dato2 > 4);
    console.log(dato1 >= 4 || dato2 < 3);
    console.log(dato1 === 5) &&! (dato2 < 1);
    console.log(dato1 ^ dato2); //Salida: 1 →  4 (0100)  5 (0101) → 00001



/* Operadores Logicos */
/**
 * igual a (==)
 * diferente a (!=)
 * mayor que (>)
 * menor que (<)
 * mayor o igual que (>=)
 * menor o igual que (<=)
 */

let number0 = 4;
let number1 = 5;
console.log(number0 == number1);
console.log(number0 != number1);
console.log(number0 > number1);
console.log(number0 < number1);
console.log(number0 >= number1);
console.log(number0 <= numero1);


/* Operadores de pertenecia */
/**
 * in  →  devuelve True si el valor especificado se encuentra en la secuencia. En caso contrario devuelve False.
 * incluides () → e emplea en arrays y cadenas de texto para comprobar si contienen un determinado valor
 */

a1 = [1,2,3,4,5,6,7];
console.log( 5 in a1);



/* Utilizando las operaciones con operadores que tú quieras, crea ejemplos que representen todos los tipos de estructuras de control que existan */

/** If
 * El control de flujo if se usa en programación para tomar decisiones,
 * ejecutando o saltando un bloque de código en función de si una condición es verdadera o falsa
 * /*/
let edad = 25;
if (edad > 18){
    console.log('Usuario mayor de edad');
}

/** else
 * El control de flujo else se ocupa cuando quieres ejecutar un bloque de código diferente a uno definido
 * en la cláusula if, si la condición en la cláusula if es falsa. En esencia,
 * proporciona una "ruta alternativa" en el flujo de ejecución de tu programa
 * /*/

let edad1= 18;
if( edad1 > 18 ){
    console.log('Eres mayor de edad');
} else if (edad1 < 18){
    console.log('Eres menor de edad');
}


/** while
 * cuando se necesita ejecutar un bloque de código repetidamente
 * mientras una condición sea verdadera,
 * y se desconoce de antemano cuántas veces se ejecutará el bucle
 * /*/

let  cantidad = 0;
    while (cantidad <= 10){
        if (cantidad % 2 === 0 ){
            console.log('numero par:' + cantidad);
        }
        cantidad++;
    }
    console.log('Ya no entra se sale del bucle');


/** do-while
 * cuando se necesita ejecutar un bloque de código al menos una vez
 * antes de que se evalúe una condición para determinar si se debe
 * repetir la ejecución del bloque
 * do
    sentencia
    while (condición);
/*/

/*** PROBLEMA
 *Problema: Escribe un programa que pida al usuario ingresar un número
 y luego imprima la tabla de multiplicar de ese número del 1 al 10.
 Usa un bucle do-while para generar la tabla.
 */
let numero = prompt (" Ingrese el numero que usted quiera");
do {
    if (numero * 2 == 0) {
        console.log('Numero par', numero);
    }
    numero++;
} while (numero < 10);

