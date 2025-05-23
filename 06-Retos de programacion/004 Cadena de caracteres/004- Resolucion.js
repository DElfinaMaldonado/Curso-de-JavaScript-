
/** Que es una cadena de caracteres
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
function reemplazo() {
    const str = 'JavaScript';
    const nuevaStr = str[0] + '*' + str.slice(2); // str[0] → Primer caracter //'*' → reemplazo  //str,slice(2) → del tercer caracter en adelante
    console.log(nuevaStr);
}
reemplazo();


/** EJERCICIO 2: Verificar si el primer y último carácter son iguales:
 *  Dada una cadena, devuelve true si el primer y último carácter son iguales;
 * de lo contrario, false.
 */

function verificacion(comprobacion) {
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
console.log(str.substring(1, 3)); // Salida → oz
console.log(str.substring(2));  // Salida → zilla


/** USO DE substring() con propiedad de longuitud*/
/** Ejemplo: Extraer los ultimos caracteres de una cadena especifica */
const text = "Mozilla";
console.log(text.substring(text.length - 4));  // illa → Empieza contar desde el ultimo caracter al primero
console.log(text.substring(text.length - 5)); // zilla



/** Diferencias entre substring y slice*/
/** substring () → metodo intercambia su dos argumentos si indexStart es mayor que indexEnd, devuelve una cadena
 * slice () → devuelve una cadena vacia
 */
const text1 = "Mozilla";
console.log(text1.substring(5, 2));  // zil
console.log(text1.slice(5, 2));  // No devuelve nada ya que es una cdena vacia

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
    const resultado = contenido.slice(0, 5);
    console.log(resultado);
}
extraer_Cadena(); //Hola

/** EJERCICIO 2: Verificar
 * Verificar si la cadena "JavaScript" contiene la subcadena "Script" usando un método adecuado.
 */
function contenido() {
    let cadena = "Hola, Sofia";
    let subcadena = "Sofia";
    console.log(cadena.includes(subcadena)); //true
}
contenido();

/** EJERCICIO 3: Encontrar la posición
 * Encontrar la posición de la primera aparición de la subcadena "lo" en la cadena
 * "Hola Mundo
 */
function posicion() {
    let cadena_Original = "Hola, Mundo";
    let cadena_Segunda = "ol";
    console.log(cadena_Original.indexOf(cadena_Segunda)); // 1
}
posicion();

/** EJERCICIO 4: Dividir la cadena
 * Dividir la cadena "Hola Mundo" en palabras individuales.
*/
function dividir() {
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
    console.log("(0,3): " + extrar_Caracteres.substr(0, 3)); //Pro
}
extraer();




/// Nivel intermedio ///

/** EJERCICIO 1: Extraer la subcadena
 * Extraer la subcadena "Mundo" de la cadena "Hola Mundo" usando el método `substring
 */
function sacar_contenido() {
    const contenido1 = "Hola Mundo";
    console.log(contenido1.substring(0, 5)); // Hola
}
sacar_contenido();


/** EJERCICIO 2: Crear una función que reciba una cadena y devuelva una nueva cadena
 * Crear una función que reciba una cadena y devuelva una nueva cadena con los primeros 5 caracteres eliminados.
 */
function devolver_Cadena() {
    const dato = "cadena original";
    const eliminacion_Caracteres = dato.slice(5); //adena ori
    console.log(eliminacion_Caracteres);
}
devolver_Cadena();


/** EJERICICO 3: Encontrar todas las posiciones
 * Encontrar todas las posiciones donde aparece la subcadena "ab" en la cadena "abcabcabc
 */
function posiciones_cadena(original_posiciones, subcadena_posiciones) { //Se crea la funcion con los parametros de la cadena original y la subcaden
    const indices = [];  //Se crea una variable con un arreglo vacio
    let index = original_posiciones.indexOf(subcadena_posiciones); // se crea la variable de indice y se busca en la subcadena por medio de indexOf
    while (index !== -1) { // Se hace un ciclo while en donde el index se veriifca la posicion en -1
        indices.push(index); //Se manda a llamar la variable de indices y con push  → se utiliza para devolver la longuitud
        index = original_posiciones.indexOf(subcadena_posiciones, index + 1);  //Se manda a llamar al index en donde se va a a incrememtar en 1 para encontrar las posiciones
    }
    return indices; // se retorna los indices
}
const cadena_OriginalPosiciones = "abcabcabcabc"; // Se crea la varible para poder agregar el valor que es abcabcabcabc
const encontrar_Posiciones = "ab"; //Se crea otra variable para encontra el valor de ab que se quiere buscar
const colocacion = posiciones_cadena(cadena_OriginalPosiciones, encontrar_Posiciones); //Se crea una variable para poder mandar a llamar la cadena original y el valor que se quiere buscar
console.log(colocacion); //Se manda a llamar la variable en donde estan las otras cadenas con los valores, para poder imprimir


/** EJERCICIO 4:
 * Crear una función que reciba una cadena y devuelva la subcadena más larga que no contenga caracteres repetidos.
 */
function no_Repetidos(elementos) {
    return [...new Set(elementos)].join('');
}
const cadena_OriginalRepetidos = "Seestarecibiendounacadenaconcaracteresrepetidos";
const cadena_ElimancionRepetidos = no_Repetidos(cadena_OriginalRepetidos);
console.log(cadena_ElimancionRepetidos); //Sestarcibndoup


/** EJERICIO 5:
 * Extraer la subcadena "Java" de la cadena "JavaScript" usando el método `substr`
 */
function sacar() {
    const subcadena_Extaer = "JavaScript";
    console.log(subcadena_Extaer.substring(0, 4));
}
sacar();




/// Nivel dificil ///

/** EJERCICIO 1: Exttraer todas las subcadenas
 * Extraer todas las subcadenas de longitud 3 de la cadena "abcdef".
 */
function extraer() {
    let extrar_Caracteres = "abcdef";
    console.log("(0,3): " + extrar_Caracteres.substring(0, 3));
    console.log("(1,4): " + extrar_Caracteres.substring(1, 4));
    console.log("(2,5): " + extrar_Caracteres.substring(2, 5));
    console.log("(3,6): " + extrar_Caracteres.substring(3, 6));
}
extraer();

/** EJERCICIO 2:
 * Crear una función que reciba dos cadenas
 * y devuelva la subcadena más larga que aparece en ambas
 */
function subcadenaMasLarga(str1, str2) {
    let maxSubcadena = "";
    for (let i = 0; i < str1.length; i++) {
        for (let j = i + 1; j <= str1.length; j++) {
            let subcadena = str1.substring(i, j);
            if (str2.includes(subcadena) && subcadena.length > maxSubcadena.length) {
                maxSubcadena = subcadena;
            }
        }
    }
    return maxSubcadena;
}
console.log(subcadenaMasLarga("Search", "Searchhello"));

/** EJERCICIO 3: Dividir la cadena
 * Dividir la cadena "Hola Mundo" en subcadenas de longitud 2.
 */
function dividir_longitud() {
    let dividir_Dos = "Hola Mundo";
    for (let i = 0; i < dividir_Dos.length; i += 2) {
        console.log(`(${i},${i + 2}): ` + dividir_Dos.substring(i, i + 2));
    }
}
dividir_longitud();

/** EJERCICIO 4: Encontsr todas las cadenas
 *  Encontrar todas las subcadenas únicas de la cadena "abcabc"
 */
function cadenas_Unicas() {
    let encontar_Cadenas = " abcabc";
    console.log("(0,4): " + encontar_Cadenas.substring(0, 4));
    console.log("(0,5): " + encontar_Cadenas.substring(0, 5));
    console.log("(0,6): " + encontar_Cadenas.substring(0, 6));
    console.log("(1,3): " + encontar_Cadenas.substring(1, 3));
    console.log("(2,4): " + encontar_Cadenas.substring(2, 4));
    console.log("(3,5): " + encontar_Cadenas.substring(3, 5));
    console.log("(4,6): " + encontar_Cadenas.substring(4, 6));
    console.log("(5,6): " + encontar_Cadenas.substring(5, 6));

}
cadenas_Unicas()


/** EJERCICIO 5: Intercambiar caracteres
 * Crear una función que reciba una cadena y devuelva una nueva donde el primer
 * y último carácter hayan sido intercambiados.
 */
function intercambiar_Caractereres(serie) {
    let primer_cambio = serie[0];
    let segundo_Cambio = serie[serie.length - 1];
    let original_Cadena = segundo_Cambio + serie.slice(1, -1) + primer_cambio;
    return original_Cadena;
}
console.log(intercambiar_Caractereres("Paleteria"));
console.log(intercambiar_Caractereres("Montes"));






// LONGUITUD → length
/** Es un objeto string que representa la longuitud de una cadena, en unidades
 */
// SINTAXIS
/** str.length
 */


/** EJERCICIO FACIL */

/** EJERCICIO 1: Obtener la longitud de una cadena:
 * Escribe una función que reciba una cadena y devuelva su cantidad de caracteres
 * utilizando `.length
 */
function stringLength(longitud) {
    return longitud.length;
}
let myString = "Hello, world!";
let length = stringLength(myString);
console.log(length); //  13

/** EJERCICIO 2: Comparar dos cadenas por longitud:
 * Crea una función que compare dos cadenas y devuelva cuál es más larga.
 */
function longitud_Larga() {
    function stringComparision(number_0ne, number_Two) {
        if (number_0ne.length > number_Two.length) {
            return number_0ne;
        } else if (number_Two.length > number_0ne.length) {
            return number_Two;
        } else {
            return "Both strings are of equal length";
        }
    }

    const dato_Uno = "Hola";
    const dato_Dos = "Mundo";
    const longerString = stringComparision(dato_Uno, dato_Dos);
    console.log(longerString);
}
longitud_Larga();

/**Ejercicio 3: Verificar si una cadena tiene más de X caracteres:
 * Escribe una función que determine si una cadena tiene más de un número específico
 * de caracteres.
 */
function tieneMasDeXCaracteres(cadenaaaa, x) {
    return cadenaaaa.length > x;
}
const cadenaaaa = "Hol";
const x = 10;
const resultado = tieneMasDeXCaracteres(cadenaaaa, x);
console.log(`La cadena tiene más de ${x} caracteres: ${resultado}`);

/** EJERCICIO 4: Eliminar espacios y contar caracteres:
 * Crea una función que elimine los espacios de una cadena
 * y devuelva su nueva longitud.
 */
function retirar_espacios(sinEspacios) {
    const quitar_Espacios = sinEspacios.replace(/\s/g, '');
    return quitar_Espacios.length;
}
let ciclo = "Esta es una frase con muchos espacios";
let nueva_lista = retirar_espacios(ciclo);
console.log(nueva_lista);

/** EJERCICIO 5: Determinar si una cadena está vacía
 * Escribe una función que devuelva `true` si la cadena está vacía (`.length === 0`) y
 *  `false` en caso contrario.
 */
function sucesion_Vacia() {
    let cadena = "";
    if (cadena.length === 0) {
        console.log("La cadena esta vacia");
    } else {
        console.log("La cadena no esta vacia");
    }
}
sucesion_Vacia();




/** EJERCICIO INTERMEDIO */

/** EJERCICIO 1: Calcular la longitud promedio de palabras en una oración:
 * Escribe una función que reciba una oración y devuelva el promedio de caracteres
 *  por palabra.
 */
function promedio() {
    let longuitud_oracion = 'Esta sola';
    let oracion = longuitud_oracion.split(' ').length;
    console.log("La cadena consta de " + oracion + " palabras");
}
promedio();

/**EJERCICIO 2: Encontrar la palabra más larga
 * Crea una función que reciba una oración y devuelva la longitud de su palabra
 * más larga.
 */
function longitud_palabra(frase) {
    const texto = frase.split(' ');
    let longitud_Extensa = 0;
    for (let i = 0; i < texto.length; i++) {
        const largo_Palabra = texto[i].length;
        if (largo_Palabra > longitud_Extensa) {
            longitud_Extensa = largo_Palabra;
        }
    }
    return longitud_Extensa;
}
const frase = "En esta oracion se debe encontra la palabra mas larga";
const distancia = longitud_palabra(frase);
console.log("La longitud de la palabra más larga es:", distancia);

/** EJERCICIO 3: Reducir una cadena a un máximo de caracteres:
 * Escribe una función que limite la longitud de una cadena a un número específico
 * y devuelva el resultado.
 */
function limitarCadena(cadena, longitudMaxima) {
    if (cadena.length <= longitudMaxima) {
        return cadena;
    } else {
        return cadena.slice(0, longitudMaxima);
    }
}
console.log(limitarCadena("Hoy es dia Miercoles", 20));

/** EJERCICIO 4: Comparar la longitud total de dos frases:
 * Desarrolla una función que reciba dos frases y devuelva cuál tiene más caracteres
 * en total.
 */
function frase_larga(fraseuno, frasedos) {
    if (fraseuno.length > frasedos.length) {
        return `La primera frase es mas larga con ${fraseuno.length} caracteres `;
    } else if (frasedos.length > fraseuno.length) {
        return `La segunda frase es mas larga con ${frasedos.length} caracteres `;
    } else {
        return "Ambas frases tiene la misma longuitud";
    }
}
console.log(frase_larga("Bienvenidos", "A la paleteria"));

/** EJERCICIO 5: *Eliminar caracteres impares y contar la nueva longitud
 * Crea una función que elimine los caracteres en posiciones impares
 * y devuelva la longitud de la nueva cadena.
*/
function eliminarImparesYContar(componente) {
    let nuevaCadena = componente.split("").filter((_, i) => i % 2 === 0).join("");
    return nuevaCadena.length;
}
let componente = "Hola, Mundo!";
let nuevaLongitud = eliminarImparesYContar(componente);
console.log(`La nueva longitud es: ${nuevaLongitud}`);




/** Dificil */

/** EJERCICIO 1: Truncar una cadena sin cortar palabras
 * Escribe una función que recorte una cadena a un límite dado sin dividir palabras,
 *  manteniendo el resultado más cercano posible.
 */
function truncarSinCortarPalabras(texto, maximo) {
    let palabras = texto.split(' ');
    let resultado = '';
    for (let palabra of palabras) {
        if ((resultado + palabra).length <= maximo) {
            resultado += palabra + ' ';
        } else {
            break;
        }
    }
    return resultado.trim();
}
let texto = 'La mujer paseaba a su perro con ayuda de su amigo';
let maximo = 18;
console.log(truncarSinCortarPalabras(texto, maximo));

/** EJERCICIO 2: Extraer las palabras más largas y contar su longitud
 * Crea una función que identifique las tres palabras más largas de un texto
 * y devuelva sus respectivas longitudes.
 */
function trucar_Palabras(infomormation, mucho) {
    let vocablos = infomormation.split(' ');
    let respuesta = '';
    for (let vocablo of vocablos) {
        if ((respuesta + vocablo).length <= mucho) {
            respuesta += vocablo + ' ';
        } else {
            break;
        }
    }
    return respuesta.trim();
}
let infomormation = 'El dia de hoy esta muy soleado';
let mucho = 18;
console.log(truncarSinCortarPalabras(infomormation, mucho));


/** EJERCICIO 3:Encontrar la proporción de caracteres en mayúsculas y minúsculas:
 *Escribe una función que determine el porcentaje de caracteres en mayúscula frente
a minúscula en una cadena.
 */






// CONCATENACION
/** Es un metodo que implica unir dos o mas cadenase en una sola.
 */
// Unir dos cadena
let texts1 = "sea";
let texts2 = "food";
let resultados_text = texts1.concat(texts2);
console.log(resultados_text);

// Unir tres cadenas
let text0ne = "Hello";
let textDos = "wordl";
let textTres = "Have a nice day";
let resultados0 = text0ne.concat(" ", textDos, " ", textTres);
console.log(resultados0);

// Unir dos matrices
const constante_One = ["Cecilie", "Lone"];
const constante_Dos = ["Emil", "Tobias", "Linus"];
const resultado_Const = constante_One.concat(constante_Dos);
console.log(resultado_Const);

// Unir tre matrices
const consta_Tres = ["Cecilie", "Lone"];
const consta_Cuatro = ["Emil", "Tobias", "Linus"];
const consta_Cinco = ["Robin"];
const resultado_Const2 = consta_Tres.concat(consta_Cuatro, consta_Cinco);
console.log(resultado_Const2);




/** EJERCICIOS FACILES: **/

/** EJERCICICO 1:
 * Escribe una función que reciba dos cadenas y las concatene con un espacio
 * en medio utilizando `+`
 */
function concatenarStrings(str1, str2) {
    return str1 + str2;
}
let saludo = "Hola";
let nombre = "Mundo";
let mensajeCompleto = concatenarStrings(saludo, nombre);
console.log(mensajeCompleto);

/** EJERCICIO 2:
 * Crea una función que reciba un nombre y un apellido, y devuelva el nombre completo
 *  concatenado con un espacio en medio.
 */
function nomberApellido(nombree, apellido) {
    return nombree + " " + apellido;
}
let nombree = "Juana";
let apellido = "Perez";
let nombreCompleto = nomberApellido(nombree, apellido);
console.log(nombreCompleto);

/** EJERCICIO 3:
 * Escribir una funcion que reciba una cadena y un numero, y concatene la cadena
 * con el numero convertido a texto
 */
function concatenar_Cadena(enlace, cifra) {
    return enlace + " " + String(cifra);
}
let enlace = "La cadena de texto a concatenar";
let cifra = 123456;
let producto = concatenar_Cadena(enlace, cifra);
console.log(producto);

/** EJERCICIO 4:
 * Crea una función que reciba dos cadenas y las concatene con un guion (`-`)
 * en medio.
 */
function contaner_guion(enlace1, enlace2) {
    return enlace1 + " - " + enlace2;
}
let enlace1 = "Hoy es";
let enlace2 = "Miercoles";
let conclusion = contaner_guion(enlace1, enlace2);
console.log(conclusion);

/** EJERICIO 5:
 * Escribe una función que reciba una palabra y le agregue la palabra "JavaScript"
 * al final utilizando `+`
 */
function agregar_palabra(lengua) {
    return lengua;
}
let lengua = "programacion";
let solucion = agregar_palabra(lengua + " " + "JavaScript");
console.log(solucion);



/** EJERCICIOS INTERMEDIOS: **/

/** EJERCICIOS 1:
 * Crea una función que reciba tres palabras y forme una oración utilizando
 * **template literals** (`${}`)
 */

function template(firstName, lastName, middleName) {
    return firstName + lastName + middleName;
}
let firstName = "John";
let lastName = "Doe";
let middleName = "Cameron";
let texttt = `${firstName}, ${lastName}, ${middleName}`;
console.log(texttt);

/** EJERCICIO 2:
 * Escribe una función que reciba un nombre y una edad, y devuelva una frase
 * como: "Mi nombre es [nombre] y tengo [edad] años.
 */
function datos(nombreee, añoss) {
    return "Mi nombre es " + nombreee + " y teng " + añoss + " años. ";
}
const nombreee = "Felipe";
const añoss = 23;
const respuesta_datos = datos(nombreee, añoss);
console.log(respuesta_datos);

/** EJERCICIO 3:
 * Crea una función que reciba un nombre, un apellido y una ciudad, y
 * devuelva una presentación como: "Hola, soy [nombre] [apellido] y vivo en [ciudad]."
 */

function referencias(nombradia, sobrenombre, ciudad) {
    return " Hola soy " + nombradia + sobrenombre + " y vivo en " + ciudad;
}
const nombradia = "Jorge";
const sobrebnombre = " Campos";
const ciudad = "CDMX";
const replica = referencias(nombradia, sobrebnombre, ciudad);
console.log(replica);

/** EJERCICIO 4:
 * Escribe una función que reciba dos cadenas y un número, y devuelva una frase
 * como: "La cadena [cadena1] concatenada con [cadena2] tiene una longitud de [número].
 */
function concatenar_Cadenas(tipoone, tipotwo) {
    const cadenaConcatenada = tipoone + " " + tipotwo;
    return `La cadena "${tipoone}" concatenada con "${tipotwo}" tiene una longitud de ${cadenaConcatenada.length}.`;
}
const tipoone = "Hoy es";
const tipotwo = "Jueves";
const fruto = concatenar_Cadenas(tipoone, tipotwo);
console.log(fruto);

/** EJercicio 5:
 * Crea una función que reciba una palabra y un número, y devuelva la palabra
 * repetida el número de veces indicado, separada por espacios.
 */
function indicador(juramento, importe) {
    return Array(importe).fill(juramento).join(" ");
}
console.log(indicador("Hola", 3));


/** EJERCICIOS DIFICILES */

/** EJERCICIO 1:
 * Desarrolla una función que reciba un arreglo de palabras y las una en una sola
 *  cadena separadas por una coma y un espacio utilizando `.join()`
 */
function unir() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    return fruits.join(", ");
}
console.log(unir());

/** EJERCICIO 2:
 * Escribe una función que reciba un arreglo de números y devuelva una cadena con los números separados
 * por guiones (`-`)
 */
function unir2(grupo) {
    return grupo.join(" - ");
}
const grupo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultados = unir2(grupo);
console.log(resultados);

/**EJERCICIO 3:
 * Crea una función que reciba un arreglo de palabras y un carácter, y las concatene separándolas
 * por ese carácter
 */
function unir3(grupo2, simbolo) {
    return grupo2.join(simbolo);
}
const grupo2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const simbolo = "#";
const efecto = unir3(grupo2, simbolo);
console.log(efecto);

/** EJERCICIO 4:
 *  Escribe una función que reciba un arreglo de cadenas y devuelva una sola cadena donde cada palabra
 *  esté entre comillas dobles (`"palabra"`), separadas por comas.
 */
function doble_Comilla(arreglo) {
    return arreglo.map(palabra => `"${palabra}"`).join(", ");
}
const palabras = ["auto", "camion", "moto", "barco"];
const objetivo = doble_Comilla(palabras);
console.log(objetivo);

/** EJERCICIO 5:
 * Desarrolla una función que reciba un arreglo de objetos con propiedades `nombre` y `edad`, y devuelva
 * una cadena con frases como: "Nombre: [nombre], Edad: [edad]
 */
function propiedades(fama, era) {
    return " Nombre: " + fama + " , Edad: " + era;
}
const fama = "Araceli";
const era = 24;
const obtencion = propiedades(fama, era);
console.log(obtencion);



// REPETICION
/** Es un metodo que devuelve una cadena que contiene la cantidad especifica de copias de esta cadena,
 * concatenadas entre si.
 *
 * SINTAXIS:
 * repeat(count)
 */

/**EJEMPLOS */
let textT = "Hello world!";
let result = textT.repeat(2);
console.log(result);

let textT2 = " Hoy es Jueves ";
let resultado_textT2 = textT2.repeat(4);
console.log(resultado_textT2);



/** EJERCICIOS FACILES */

/** EJERCICIO 1: Repite un símbolo específico
 * Repite un símbolo específico Crea una función que reciba un símbolo y un número,
 * y devuelva una cadena con el símbolo repetido.
 */

function repetirSimbolo(simbolo, cantidad) {
    return simbolo.repeat(cantidad);
}
console.log(repetirSimbolo('#', 5));

/** EJERCICIO 2: Repite un número
 * Desarrolla una función que repita un número determinado de veces.
 */
function repeatNumber(num, times) {
    return num.toString().repeat(times);
}
console.log(repeatNumber(5, 4));

/** EJERCICIO 3: Repite un mensaje de saludo
 * Crea una función que reciba un saludo y lo repita varias veces.
 */
function repetir_Saludo(saludo, reproducción) {
    return saludo.repeat(reproducción);
}
console.log(repetir_Saludo(" Hola Mundo ", 3));

/** EJERCICIO 4:
 * Repite un emoji
 * Crea una función que tome un emoji y lo repita la cantidad indicada.
 */
function repetir_Emoji(emoji, copia) {
    return emoji.repeat(copia);
}
console.log(repetir_Emoji("<3", 2));

/** EJERCICIO 5: Repite una línea de texto
 * Haz que una función tome una línea de texto y la repita.
 */
function repetir_Texto(escrito, insistir) {
    return escrito.repeat(insistir);
}
console.log(repetir_Texto(" texto ", 5));




/** EJERCICIOS INTERMEDIOS */

/** EJERCICIO 1: Repite palabras dentro de una frase
 * Escribe una función que tome una frase y repita cada palabra una cantidad específica de veces.
 */
function repetirPalabras(frase, cantidad) {
    const palabras = frase.split(" ");
    const resultado = palabras.map(palabra => palabra.repeat(cantidad));
    return resultado.join(" ");
}
const frase_Original = " Hoy es Viernes ";
const cantidad_Repeticiones = 3;
const frase_Modificada = repetirPalabras(frase_Original, cantidad_Repeticiones);
console.log(frase_Modificada);

/** EJERCICIO 2: Repite un mensaje formateado
 * Diseña una función que reciba una cadena con formato y la repita agregando
 *  un separador.
 */
function mensaje_Formateado(mensaje, veces, separador) {
    return Array(veces).fill(mensaje).join(separador);
}
console.log(mensaje_Formateado("Hola", 3, " - "));

/** EJERICIO 3: Repite elementos de un arreglo de números
 *  Crea una función que reciba un arreglo de números y los repita en
 * una nueva estructura.
 */
function repetir_Elementos(arr, ocasiones) {
    const resultado = [];
    for (const elemento of arr) {
        for (let i = 0; i < ocasiones; i++) {
            resultado.push(elemento);
        }
    }
    return resultado;
}
const numeros = [1, 2, 3, 4, 5,];
const arreglo_Repetido = repetir_Elementos(numeros, 2);
console.log(arreglo_Repetido);

/** EJERCICIO 4: Repite nombres en una lista
 * Desarrolla una función que reciba una lista de nombres y los repita un número
 *  determinado de veces.
 */
function repetir_Nombres(orden, situacion) {
    const producto = [];
    for (const pieza of orden) {
        for (let i = 0; i < situacion; i++) {
            producto.push(pieza);
        }
    }
    return producto;
}
const importe = ["Juan", "Carlo", "Diego", "Lucas", "Maria"];
const orden_Doble = repetir_Nombres(importe, 2);
console.log(orden_Doble);

/** EJERCICIO 5: Repite una tabla de datos
 * Modifica una función que reciba un conjunto de datos y lo repita en un formato
 * estructurado.
 */
function repetir_Tabla(tabla, cantidadRepeticiones) {
    return tabla.flatMap(sujeto => Array(cantidadRepeticiones).fill(sujeto));
}
const guarismo = ["lucas", "felipe", "pamela", "juan"];
const tabla_Repetido = repetir_Tabla(guarismo, 2);
console.log(tabla_Repetido);



/** EJERCICIOS DIFICILES */
/** EJERCICIO 1: Repetición con formato condicional
 * Escribe una función que repita valores en un objeto con base en una condición
 * específica.
 */
function formato_Condicional (importancia, reproducción, reglon ) {
    for (let i = 1; i <= lineas; i++) {
    console.log(caracter.repeat(repeticiones * i));
  }

}

/** EJERCICIO 2: Generación de patrones con repetición
 * Diseña una función que genere patrones visuales utilizando .repeat().
 */
function generarPatron(caracter, repeticiones, lineas) {
  for (let i = 1; i <= lineas; i++) {
    console.log(caracter.repeat(repeticiones * i));
  }
}
generarPatron("<", 2, 5);