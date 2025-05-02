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


/* Operadores de Identidad */
/**
 * iguales == Compara dos valores y devuelve true si ambos son iguales. Compara tanto numeros como cadeanas.
 * Identicos ===  Compara el ripo de datos de los operandos. Compara dos valores y devuelve true si el primero es mayos o es igual que el segundo.
 */

/* Operadores de pertenecia */
/**
 * in  →  devuelve True si el valor especificado se encuentra en la secuencia. En caso contrario devuelve False.
 * incluides () → e emplea en arrays y cadenas de texto para comprobar si contienen un determinado valor
 */

a1 = [1,2,3,4,5,6,7];
console.log( 5 in a1);



/* Condicionales */
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
    //Bloque de codigo a ejecutar
    while (condición);
/*/

/*Calcular la suma de lo numero del 1 al 10 utilizando el ciclo do while */
let numero =1; // Declaramos la variable y la inicializamos con 1
let suma1 = 0; // Declaramos la variable de suma1 y de igual manera se inicializa con 0
do {
   suma += numero; // sumamos el valor de la variable numero a la variable suma
   numero++; // Incrementamos el valor de la variable 1 en cada iteracion
} while (numero <= 10); // Mientras la condicion sea verdadera, el bucle continuara ejecutandose
console.log('La suma de los numero del 1 al 10 es:', suma); // Una vez que el valor sea mayor a 10,s e detiene el bucle y se imrpimer en consola




/** for
 * Se utiliza cuando se sabe cuantas iteracciones se necesitan realizar
 * Permite repetir una instruccion un numero especificado de veces
 * for (inicialización; condición; actualización) {
  // Código a ejecutar en cada iteración
}
/*/

for (let años = 0; años < 10; años++){
    if(años < 10) {
        console.log('Esta dentro de los primeros años de vida', años);
}
}



/** for of
 * Se utiliza para iterar sobre los valores como arrays,strings etc
 * for (const valor of iterable) {
  // Código a ejecutar para cada valor del iterable
}
/*/

/** PROBLEMA:
 *Tienes un array de números y debes calcular la suma de todos sus elementos usando for...of.
 * Instrucciones:
   * Declara un array con algunos números.
   * Usa un bucle for...of para recorrer el array.
   * Suma cada número y almacena el resultado en una variable.
   * Muestra la suma total en la consola.
   * */
let arraynum1 = [1,2,3,4,5,6];
let sumaesperada = 0;
for (let arraynum2 of arraynum1) {
    sumaesperada += arraynum2;
}
console.log("La suma total es:", sumaesperada);



/** for in
 * Se utiliza para iterar sobre las propiedades enumerables de un objeto
 * for (variable in objeto) {
  // Código a ejecutar para cada propiedad
}
/*/

//Imprimir los elementos de una lista
let lista = [1,2,3,4,5];
console.log(lista);
// Imprimir los caracteres de una cadena
let nombre = "Claudia";
for(caracteres in nombre) {
    console.log(caracteres);
}



/** Break y Continue
 * break → se utilizza para salir completamente del bucle
 * Continue se usa para saltar a la siguiente condicion
 */
//Omitir la impresión de números pares:
let impresion = 0;
while (impresion <= 10) {
    impresion++;
    if (impresion % 2 === 0 ) {
        continue;
}
console.log('omitir numeros pares ' + impresion);
}


/** switch
 * Se utiliza en programación para elegir entre múltiples opciones de código basado en el valor de una variable
    switch (diaSemana) {
    case 1:
    break;
    case 2:
    break;
    case 3:
    break;
    case 4:
    break;
    case 5:
    break;
    case 6:
    break;
    case 7:
    break;
    default:
}
return 0;
}
}
*/


//Imaginemos un problema donde queremos mapear números a días de la semana:
let dias= prompt("Ingrese un numero del 1 al 10:");
switch (dias) {
    case 1:
        return dias = 1;
        console.log('lunes', + dias);
        break;
    case '2':
        console.log(Martes);
        break;
    case '3':
        console.log(Miercoles);
        break;
    case '4':
        console.log(Jueves);
        break;
    case '5':
        console.log(Viernes);
        break;
    case '6':
        console.log(Sabado)
        break;
    case '7':
        console.log(Domingo);
        break;
    default:
        console.log('Esto no es un dia en la semana');
}

