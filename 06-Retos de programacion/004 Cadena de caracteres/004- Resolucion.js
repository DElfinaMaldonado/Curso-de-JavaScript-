
/** Que es una cdena de caracteres
 * Es un tipo de datos que representan una secuencia de caracteres que puede
 * consistir de letras, numero, sombolos, palabras o frases.
 */

/** EJEMPLO
 * Se utiliza para representar datos de texto y se define mediante comillas ('), ("")
 */




                          // Acceso a caracteres específicos
const cadena = "Hola, JavaScript!";
console.log(cadena[0]);  // 'H'
console.log(cadena.charAt(4));  // ','

/// EJERCICIOS FACILES ///

/** EJERCICIO 1: Acceder al primer carácter
 *  Escribe una función que reciba una cadena y devuelva su primer carácter.
 */
function obtenerPrimerCaracter(cadena) {
    return cadena[0];
}
    console.log(obtenerPrimerCaracter("Maria"));


/** EJERCICIO 2: Obtener el último carácter de una cadena:
 *  Dada una cadena, retorna el último carácter utilizando notación de corchetes ([]).
 */
function obtenerUltimoCaracter(cadena) {
    return cadena[cadena.length - 1];
}
console.log(obtenerUltimoCaracter("Tienda de Abarrotes")); // "s"


/** EJERCICIO 3: Extraer el tercer carácter de una cadena:
 * Crea una función que tome una cadena como parámetro y
 * devuelva el tercer carácter (posición índice 2).
 */
function obtenerPrimerCaracter(cadena) {
    return cadena[2];
}
    console.log(obtenerPrimerCaracter("Maria"));



    /// EJERCICIOS INTERMEDIOS ///

/** EJERCICIO 1: Reemplazar el segundo carácter por un asterisco:
 * Escribe una función que reciba una cadena y devuelva una nueva cadena
 * donde el segundo carácter sea reemplazado por *
 */
function reemplazo (){
const str = 'JavaScript';
const nuevaStr = str[0] + '*' + str.slice(2); // str[0] → Primer caracter //'*' → reemplazo  //str,slice(2) → del tercer caracter en adelante
console.log(nuevaStr);
}
reemplazo();


/** EJERCICIO 2: Verificar si el primer y último carácter son iguales:
 *  Dada una cadena, devuelve true si el primer y último carácter son iguales;
 * de lo contrario, false.
 */

function verificacion (comprobacion){
    return /^123/.test(comprobacion);
}
console.log(verificacion("123Hola"));
console.log(verificacion("hola123"));
console.log(verificacion("hola"));
console.log(verificacion("123"));


/**EJERCICIO 3: Invertir los tres primeros caracteres de una cadena:
 * Crea una función que tome los tres primeros caracteres de una cadena
 * y los devuelva en orden inverso.
 */
function invertir(sucesion) {
    return sucesion.slice(0, 3).split('').reverse().join('');
}
console.log(invertir('Delfina'));

// Comeentarios ↑
/* sucesion.slice(0, 3) → Toma los primeros 3 caracteres
 * .split('') → convierte esa subcadena en un array de caracteres.
 * .reverse() → invierte el orden de los caracteres.
 * .join('') → une los caracteres en una nueva cadena.*/



/// EJERCICIOS DIFICLES ///
/** EJERCICIO 1: Eliminar todos los caracteres en posiciones impares:
 * Escribe una función que reciba una cadena y devuelva una nueva cadena
 * solo con los caracteres en posiciones pares (índices 0, 2, 4...).
 */

function eliminacion_Impares() {

}