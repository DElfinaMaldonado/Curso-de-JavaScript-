
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
function eliminarImpares(cadena) {
    let nuevaCadena = "";
    for (let i = 0; i < cadena.length; i++) {
        if (i % 2 === 0) {
            nuevaCadena += cadena[i];
        }
    }
    return nuevaCadena;
}
console.log(eliminarImpares("0123456789"));  // Salida → 02468


/**EJERCICIO 2: Comparar  el caracter centarl en dos cadenas
 * Dadas dos cadenas con una longitud impar, retorna true si el carácter central
 * de ambas es el mismo.
*/
function compararCaracterCentral(cadena1, cadena2) {
    // Verificar que ambas cadenas tienen una longitud impar
    if (cadena1.length % 2 === 1 && cadena2.length % 2 === 1) { // (===) Se utiliza ya que forzosamente ambas cadenas deben ser iguales
        // Obtener el carácter central de cada cadena
        let centro1 = cadena1[Math.floor(cadena1.length / 2)]; // Math.floor → Devuelve el valor entero mas grande menor o igual que el numero especifico
        let centro2 = cadena2[Math.floor(cadena2.length / 2)];
        // Comparar los caracteres centrales
        return centro1 === centro2;
    } else {
        return false; // Retornar false si alguna tiene longitud par
    }
}
console.log(compararCaracterCentral("las", "mas")); // true
console.log(compararCaracterCentral("solas", "talas")); // true
console.log(compararCaracterCentral("mapa", "capa")); // false → Porque la loguitud es par


/** EJEMPLO 3: Intercambiar el primer y último carácter de una cadena:
 *  Crea una función que reciba una cadena y devuelva una nueva donde el primer y último carácter hayan sido intercambiados.
 */
function intercambiar(cadena) {
    // Obtener el primer y último carácter
    let primerCaracter = cadena[0];
    let ultimoCaracter = cadena[cadena.length - 1];

    // Construir la nueva cadena intercambiando los caracteres
    let nuevaCadena = ultimoCaracter + cadena.slice(1, -1) + primerCaracter;

    return nuevaCadena;
}
console.log(intercambiar("Mundo"));
console.log(intercambiar("Hola"));
console.log(intercambiar("A"));






                   // SUBCADENA
/** Es un metodo de STRINg devuelve la parte de esta cadena desde el indice inicial
 * hasta el indice final
 */
                 // SINTAXIS
         /** substring(indexStart)
          *  substring(indexStart, indexEnd)
          */

// Ejemplo
const str = "Mozilla";
console.log(str.substring(1,3)); // Salida → oz
console.log(str.substring(2));  // Salida → zilla


/** USO DE substring() con propiedad de longuitud*/
/** Ejemplo: Extraer los ultimos caracteres de una cadena especifica */
const text = "Mozilla";
console.log(text.substring(text.length -4));  // illa → Empieza contar desde el ultimo caracter al primero
console.log(text.substring(text.length -5)); // zilla



/** Diferencias entre substring y slice*/
/** substring () → metodo intercambia su dos argumentos si indexStart es mayor que indexEnd, devuelve una cadena
 * slice () → devuelve una cadena vacia
 */
const text1 = "Mozilla";
console.log(text1.substring(5,2));  // zil
console.log(text1.slice(5,2));  // No devuelve nada ya que es una cdena vacia

/** Si uno o ambos argumentos son negativos o NAN, el SUBSTRING los trata como si fuera 0
 */

console.log(text.substring(-5, 2)); //"Mo"
console.log(text.substring(-5, -2)); //""

/**slice()
 * Tambien trata Nan los argumentos como 0
 * Caundo los valores son negativos, cuenta hacia atras desde el final de la cadena para encontrar los indices
*/
console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"



/** REEMPLAZAR UNA SUBCADENA DENTRO DE UNA CADENA
 * Reemplazar tanto caracteres individuales como subcadenas
 */
function replaceString(viejo, nuevo, completo) {
  for (let i = 0; i < completo.length; ++i) {
    if (completo.substring(i, i + viejo.length) === viejo) {
      completo =
        completo.substring(0, i) +
        nuevo +
        completo.substring(i + viejo.length, completo.length);
    }
  }
  return completo;
}

replaceString("World", "Web", "Brave New World");


/// Nivel facil ///

/** EJERCICIO 1: Extraer la subcadena
 * Extraer la subcadena "Hola" de la cadena "Hola Mundo" usando el método `slice`
 */
function extraer_Cadena() {
const contenido = "Hola Mundo";
const resultado = contenido.slice(0,5);
console.log(resultado);
}
extraer_Cadena(); //Hola

/** EJERCICIO 2: Verificar
 * Verificar si la cadena "JavaScript" contiene la subcadena "Script" usando un método adecuado.
 */
function contenido () {
    let cadena = "Hola, Sofia";
    let subcadena = "Sofia";
    console.log(cadena.includes(subcadena)); //true
}
contenido();

/** EJERCICIO 3: Encontrar la posición
 * Encontrar la posición de la primera aparición de la subcadena "lo" en la cadena
 * "Hola Mundo
 */
function posicion () {
let cadena_Original = "Hola, Mundo";
let cadena_Segunda = "ol";
console.log(cadena_Original.indexOf(cadena_Segunda)); // 1
}
posicion();

/** EJERCICIO 4: Dividir la cadena
 * Dividir la cadena "Hola Mundo" en palabras individuales.
*/
function dividir () {
    let mensaje = "Hola Mundo";
    console.log(mensaje.split('')); // ['H', 'o', 'l', 'a', ' ', 'M', 'u', 'n', 'd', 'o']
}
dividir();

/** EJERCICIO 6 : Extraer
 * Extraer los primeros 3 caracteres de la cadena "JavaScript"
 */

// substr → Devuelve los  caractreres de una cadena que comienza en una localizacion especifica
// Sintaxis → cadena.substr(inicio[, longitud])
function extraer() {
let extrar_Caracteres = "Programacion";
console.log("(0,3): " + extrar_Caracteres.substr(0,3)); //Pro
}
extraer();



/// Nivel intermedio ///

/** EJERCICIO 1: Extraer la subcadena
 * Extraer la subcadena "Mundo" de la cadena "Hola Mundo" usando el método `substring
 */
function sacar_contenido(){
const contenido1 = "Hola Mundo";
console.log(contenido1.substring(0,5)); // Hola
}
sacar_contenido();


/** EJERCICIO 2: Crear una función que reciba una cadena y devuelva una nueva cadena
 * Crear una función que reciba una cadena y devuelva una nueva cadena con los primeros 5 caracteres eliminados.
 */
function devolver_Cadena () {
    const dato = "cadena original";
    const devolucion = dato.
}
devolver_Cadena();