/* Crea ejemplos de funciones básicas */

                /** FUNCIONES SIN PARAMETROS
 * No reciben valores de entrada cuando se llaman, y su codigo se ejecuta directamente sin depender de argumentos externos
 * Se utiliza en los sigueintes casos:
 * Mostrar un mensaje
 * Ejecutar una accion especifica
 * Realizar un calculo */

function saludar () {
    console.log('Hola, Mundo');
}
saludar(); // Imprime un hola mundo



/** PROBLEMA
 *Crea una función en JavaScript que no reciba parámetros y que, al ser llamada,
imprima un mensaje motivador en la consola.
Luego, llama a la función varias veces para observar su comportamiento.
 */
function saludo() {
console.log("Que tengan un lindo dia");
}
saludo();


/** PROBLEMA 1:
 * Escribe una función que al ser llamada imprima un contador que inicie en 1
 * y aumente en 1 cada vez que se ejecuta.
*/
let contador1 = 1;
function aumento1 () {
    while (contador1 < 10){
        if( contador1 <= 10){
            console.log('EL CONTADOR AUMENTA DE 1 EN 1:', contador1)
        }
        contador1++;
    }
}
aumento1();



/** PROBLEMA 2:
 * Crea una función que genere un número aleatorio entre 1 y 100
 * y lo imprima en la consola cada vez que se ejecuta.
*/
//Math.random() → Genera un numero flotante entre 0 y 1 , para obtener un numero aleatorio dento de un rango
//Math.floor() → Sirve para redondear un numero hacia abajo
function numero(){
    const numeroAleatorioEntre1y100 = Math.floor(Math.random() * 100) + 1;
    console.log("Este es un numero aleatorio:", numeroAleatorioEntre1y100);
}
numero();


/** PROBLEMA 3:
 * Escribe una función que mida el tiempo transcurrido desde su primera ejecución y,
 *  en cada llamada, imprima el tiempo en segundos desde su inicio.
*/
// Date.now() → devuelve un numero que representa el numero de milisegundos de una fecha hasta el momento actual
//
function ejemplo1() {
    const tiempoInicio = Date.now();
    const tiempoFinal = Date.now();
    const tiempoTotal = tiempoInicio - tiempoFinal;
    console.log(`El tiempo total transcurrido fue: ${tiempoTotal} milisegundos`);
}
ejemplo1();






                /** FUNCIONES SIN RETORNO
 * Devuelve undefined. Si se requiere que la funcion no devuelva nada, no se utiliza retur.*/

function cumplir() {
    console.log("Hola");
    }
    let resultado = cumplir();
    console.log(resultado);

/** Problema 1:
 *Escribe una función que imprima "¡Bienvenido al sistema!" en la consola
cada vez que sea llamada.
 */

function mensaje() {
    console.log("¡Bienvenido al sistema!")
}
mensaje();
mensaje();
mensaje();


/**PROBLEMA 2:
 *Crea una función que imprima una cuenta regresiva desde 10 hasta 1 en la consola,
mostrando cada número en orden descendente.
 */
let cuenta = 10;
function regresiva (){
    while (cuenta <= 10){
        if (cuenta == 1) {
            console.log('Cuenta regresiva:', cuenta)
        }
        cuenta--;
    }
}
regresiva();