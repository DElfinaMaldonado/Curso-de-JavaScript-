/** Que es una cadena de caracteres
 * Es un tipo de datos que representan una secuencia de caracteres que puede
 * consistir de letras, numero, sombolos, palabras o frases.
 */

/** EJEMPLO
 * Se utiliza para representar datos de texto y se define mediante comillas ('), ("")
 */

// Acceso a caracteres específicos
const cadena = "Hola, JavaScript!";
console.log(cadena[0]); // 'H'
console.log(cadena.charAt(4)); // ','

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
    const str = "JavaScript";
    const nuevaStr = str[0] + "*" + str.slice(2); // str[0] → Primer caracter //'*' → reemplazo  //str,slice(2) → del tercer caracter en adelante
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
    return sucesion.slice(0, 3).split("").reverse().join("");
}
console.log(invertir("Delfina"));

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
console.log(eliminarImpares("0123456789")); // Salida → 02468

/**EJERCICIO 2: Comparar  el caracter centarl en dos cadenas
 * Dadas dos cadenas con una longitud impar, retorna true si el carácter central
 * de ambas es el mismo.
 */
function compararCaracterCentral(cadena1, cadena2) {
    // Verificar que ambas cadenas tienen una longitud impar
    if (cadena1.length % 2 === 1 && cadena2.length % 2 === 1) {
        // (===) Se utiliza ya que forzosamente ambas cadenas deben ser iguales
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
console.log(str.substring(2)); // Salida → zilla

/** USO DE substring() con propiedad de longuitud*/
/** Ejemplo: Extraer los ultimos caracteres de una cadena especifica */
const text = "Mozilla";
console.log(text.substring(text.length - 4)); // illa → Empieza contar desde el ultimo caracter al primero
console.log(text.substring(text.length - 5)); // zilla

/** Diferencias entre substring y slice*/
/** substring () → metodo intercambia su dos argumentos si indexStart es mayor que indexEnd, devuelve una cadena
 * slice () → devuelve una cadena vacia
 */
const text1 = "Mozilla";
console.log(text1.substring(5, 2)); // zil
console.log(text1.slice(5, 2)); // No devuelve nada ya que es una cdena vacia

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
    console.log(mensaje.split("")); // ['H', 'o', 'l', 'a', ' ', 'M', 'u', 'n', 'd', 'o']
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
function posiciones_cadena(original_posiciones, subcadena_posiciones) {
    //Se crea la funcion con los parametros de la cadena original y la subcaden
    const indices = []; //Se crea una variable con un arreglo vacio
    let index = original_posiciones.indexOf(subcadena_posiciones); // se crea la variable de indice y se busca en la subcadena por medio de indexOf
    while (index !== -1) {
        // Se hace un ciclo while en donde el index se veriifca la posicion en -1
        indices.push(index); //Se manda a llamar la variable de indices y con push  → se utiliza para devolver la longuitud
        index = original_posiciones.indexOf(subcadena_posiciones, index + 1); //Se manda a llamar al index en donde se va a a incrememtar en 1 para encontrar las posiciones
    }
    return indices; // se retorna los indices
}
const cadena_OriginalPosiciones = "abcabcabcabc"; // Se crea la varible para poder agregar el valor que es abcabcabcabc
const encontrar_Posiciones = "ab"; //Se crea otra variable para encontra el valor de ab que se quiere buscar
const colocacion = posiciones_cadena(
    cadena_OriginalPosiciones,
    encontrar_Posiciones
); //Se crea una variable para poder mandar a llamar la cadena original y el valor que se quiere buscar
console.log(colocacion); //Se manda a llamar la variable en donde estan las otras cadenas con los valores, para poder imprimir

/** EJERCICIO 4:
 * Crear una función que reciba una cadena y devuelva la subcadena más larga que no contenga caracteres repetidos.
 */
function no_Repetidos(elementos) {
    return [...new Set(elementos)].join("");
}
const cadena_OriginalRepetidos =
    "Seestarecibiendounacadenaconcaracteresrepetidos";
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
cadenas_Unicas();

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
    const quitar_Espacios = sinEspacios.replace(/\s/g, "");
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
    let longuitud_oracion = "Esta sola";
    let oracion = longuitud_oracion.split(" ").length;
    console.log("La cadena consta de " + oracion + " palabras");
}
promedio();

/**EJERCICIO 2: Encontrar la palabra más larga
 * Crea una función que reciba una oración y devuelva la longitud de su palabra
 * más larga.
 */
function longitud_palabra(frase) {
    const texto = frase.split(" ");
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
    let nuevaCadena = componente
        .split("")
        .filter((_, i) => i % 2 === 0)
        .join("");
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
    let palabras = texto.split(" ");
    let resultado = "";
    for (let palabra of palabras) {
        if ((resultado + palabra).length <= maximo) {
            resultado += palabra + " ";
        } else {
            break;
        }
    }
    return resultado.trim();
}
let texto = "La mujer paseaba a su perro con ayuda de su amigo";
let maximo = 18;
console.log(truncarSinCortarPalabras(texto, maximo));

/** EJERCICIO 2: Extraer las palabras más largas y contar su longitud
 * Crea una función que identifique las tres palabras más largas de un texto
 * y devuelva sus respectivas longitudes.
 */
function trucar_Palabras(infomormation, mucho) {
    let vocablos = infomormation.split(" ");
    let respuesta = "";
    for (let vocablo of vocablos) {
        if ((respuesta + vocablo).length <= mucho) {
            respuesta += vocablo + " ";
        } else {
            break;
        }
    }
    return respuesta.trim();
}
let infomormation = "El dia de hoy esta muy soleado";
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
    return arreglo.map((palabra) => `"${palabra}"`).join(", ");
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
console.log(repetirSimbolo("#", 5));

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
    const resultado = palabras.map((palabra) => palabra.repeat(cantidad));
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
const numeros = [1, 2, 3, 4, 5];
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
    return tabla.flatMap((sujeto) => Array(cantidadRepeticiones).fill(sujeto));
}
const guarismo = ["lucas", "felipe", "pamela", "juan"];
const tabla_Repetido = repetir_Tabla(guarismo, 2);
console.log(tabla_Repetido);

/** EJERCICIOS DIFICILES */
/** EJERCICIO 1: Repetición con formato condicional
 * Escribe una función que repita valores en un objeto con base en una condición
 * específica.
 */
// PENDIENTE //

/** EJERCICIO 2: Generación de patrones con repetición
 * Diseña una función que genere patrones visuales utilizando .repeat().
 */
function generarPatron(caracter, repeticiones, lineas) {
    for (let i = 1; i <= lineas; i++) {
        console.log(caracter.repeat(repeticiones * i));
    }
}
generarPatron("<", 2, 5);

/** EJERCICIO 3: Repetición dinámica de frases
 * Crea una función que adapte la cantidad de repeticiones según la longitud
 * de la entrada.
 */
function repeticion_Dinamica(acceso, repeticion_Origen) {
    const extension = acceso.length;
    const repeticion_Precisa = repeticion_Origen * extension;
    return repeticion_Precisa;
}
const acceso = "Lunes";
const repeticion_Origen = 2;
const repeticion_Termino = repeticion_Dinamica(acceso, repeticion_Origen);
console.log(
    `En la palabra de entrada '${acceso}', las repeticiones son: ${repeticion_Termino}`
);

/** EJERICIO 4: Repite un párrafo estructurado
 * Escribe una función que reciba un texto y lo repita manteniendo una estructura
 * organizada.
 */
function duplicar_Parrafo(frase_Ordenada, duplicado) {
    return frase_Ordenada.flatMap((ejemplo) => Array(duplicado).fill(ejemplo));
}
const ejemplar = ["Hoy es Lunes y estamos a 26 de Mayo del 2025"];
const frase_Duplicada = duplicar_Parrafo(ejemplar, 2);
console.log(frase_Duplicada);

/** EJERCICIO 5: Repetición en estructuras complejas
 * Desarrolla una función que aplique .repeat() a estructuras de datos más avanzadas,
 * como objetos dentro de arreglos.
 */
// function repeatAdvanced(data, times) {
//   if (!Array.isArray(data)) {
//     throw new Error("El dato debe ser un arreglo.");
//   }
//   if (!Number.isInteger(times) || times < 0) {
//     throw new Error("Las repeticiones deben ser un entero no negativo.");
//   }

//   let result = [];
//   for (let i = 0; i < times; i++) {
//     for (const item of data) {
//       if (typeof item === 'object' && item !== null) {
//         result.push(JSON.parse(JSON.stringify(item)));
//       } else if (typeof item === 'string') {
//         result.push(item.repeat(1));
//       }
//        else {
//         result.push(item);
//       }
//     }
//   }
//   return result;
// }






// Recorrido → forEach()
/* Es un metodo que se utiliza para iterar sobre los elementos de un array
 * Es un metodo disponible en ararys que ofrece un recorrido sin necesidad de
 * for bucles.
 */

/** EJERCICIO 1: Recorrer un array de nombres
 * Crea un array de nombres y usa `.forEach()` para imprimir cada nombre en consola.
 */
function treyecto_Nombres() {
    const arrayoneone = ["Pamela", "Raul", "Sofia", "Victoria", "Cristina"];
    arrayoneone.forEach((elem) => {
        console.log(elem);
    });
}
treyecto_Nombres();

/** EJERCICIO 2: Modificar valores dentro de un array
 * Toma un array de números y usa `.forEach()` para multiplicar cada número por 2.
 */
function multiplicar_Numeros() {
    const componentes = [1, 2, 3, 4, 5];
    componentes.forEach((componentes) => {
        componentes *= 2;
        console.log(componentes);
    });
}
multiplicar_Numeros();

/** EJERCICIO 3: Recorrer un array de objetos
 * Dado un array de objetos con una propiedad `nombre`, usa `.forEach()` para
 * imprimir los nombres.
 */
const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Carlos", edad: 28 },
];
personas.forEach((persona) => {
    console.log(persona.nombre);
});

/** EJERCICIO 4: Sumar los valores de un array
 *  Usa `.forEach()` para recorrer un array de números y calcular la suma total.
 */
function suma_Numeros() {
    let suma = 0;
    const componentes = [1, 2, 3, 4, 5];
    componentes.forEach(numeros => {
        suma += numeros;
    });
    return suma;
}
console.log(suma_Numeros());

/** EJERCICIO 5: Transformar texto dentro de un array
 * Dado un array de palabras, usa `.forEach()` para convertirlas todas a mayúsculas.
 */
function transformar_Texto() {
    const arrayone1 = ['Arroz', 'Leguminosa ', 'Frijol'];
    arrayone1.forEach((arrayone1) => {
        const upper = arrayone1.toUpperCase();
        console.log(upper);
    });
}
transformar_Texto();




/** EJERCICIO INTERMEDIO */

/** EJERCICIO 1: Filtrar elementos dentro de un array
 *  Usando `.forEach()`, recorre un array de números e
 *  imprime solo los que sean mayores a 10.
 */
function filtrando_Elementos() {
    const nota = [1, 20, 15, 9, 43, 78, 90, 3, 5, 12, 11, 7];
    nota.forEach((valorar) => {
        if (valorar > 10) {
            console.log(valorar);
        }
    });
}
filtrando_Elementos();

/** EJERCICIO 2: Modificar objetos dentro de un array
 * Toma un array de objetos con una propiedad `edad` y usa `.forEach()`
 * para aumentar la edad en 1.
 */
function transformar_Array() {
    const individuos = [
        { nombre: "Juan", edad: 25 },
        { nombre: "Ana", edad: 45 },
        { nombre: "Carlos", edad: 28 },
    ];
    individuos.forEach((individuo) => {
        if (individuo.edad < 30) {
            individuo.edad += 1;
        }
        console.log(individuo.edad);
    });
}
transformar_Array();

/** EJERCICIO 3: Formato personalizado de salida
 * Dado un array de nombres, usa `.forEach()` para imprimirlos con un
 * prefijo especial, como `"Usuario: Juan"
*/
function estructura_Datos() {
    const registros = [
        { nombre: "Gerardo", edad: 13 },
        { nombre: "Felipe", edad: 45 },
        { nombre: "Carlos", edad: 3 },
        { nombre: "Vania", edad: 22 },
        { nombre: "Mauricio", edad: 30 },
    ];
    registros.forEach((registro) => {
        console.log(`Usuario: ${registro.nombre}`);
    });
}
estructura_Datos();

/** EJERCICIO 4: Simular estructura de datos dinámica
 * Usa `.forEach()` para recorrer un array y generar un nuevo objeto con datos
 * organizados.
 */
function simular_Estructura() {
    const datos = [
        { nombre: "Delfin", edad: 8 },
        { nombre: "Foca", edad: 2 },
        { nombre: "Tortuga", edad: 11 },
        { nombre: "Ballena", edad: 4 },
        { nombre: "Pez", edad: 3 },
    ];
    const resultado = {};
    datos.forEach((dato) => {
        resultado[dato.edad] = dato.nombre;
    });
    console.log(resultado);
}
simular_Estructura();

/** EJERCICICO 5:
 *   Recorre un array y cuenta cuántas veces aparece cada elemento usando un objeto auxiliar.
*/
function recorrer() {
    const elementos = ["manzana", "banana", "manzana", "naranja", "banana", "manzana"];
    const contador = {};
    elementos.forEach((elemento) => {
        if (contador[elemento]) {
            contador[elemento]++;
        } else {
            contador[elemento] = 1;
        }
    });
    return contador;
}
recorrer();


/** EJERCICIO DIFICIL */
/** EJERCICIO 1: Recorrer un array dentro de un array
 */
function pasar_Elementos() {
    const matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    matriz.forEach(fila => {
        fila.forEach(elemento => {
            console.log(elemento);
        });
    });
}
pasar_Elementos();

/** EJERCICIO 2: Validar información dentro de un array de objetos
 * Usa `.forEach()` para verificar que todos los objetos de un array
 * tengan una propiedad obligatoria.
 */
function Verificar() {
    const pieza = [
        { color: "azul", transporte: "Carro", valor: 500 },
        { color: "Amarillo", fruta: "Platano", valor: 45 },
        { color: "cafe", transporte: "Camioneta", valor: 2400 },
        { color: "rojo", transporte: " Moto", valor: 30 },
    ];
    pieza.forEach((coste) => {
        if (!coste.hasOwnProperty("transporte")) {
            console.log(`El conjunto de ${coste.transporte} no lo posee`);
        } else {
            console.log(`El conjunto de ${coste.transporte} si lo posee`);
        }
    });
}
Verificar();

/** EJERCICIO 3: Agrupar elemenetos segun una condicion
 * Recorrer un array y agrupara sus elemenetos en dos nuevos array segun la condicion
 */
const factor_One = ["Perro", "Paloma", "Zorro", "Gallina", "Alacran", "Araña", "Cococdiro", "Canguro", "Caballo"];
let indicativo = 5;
let agrupacion = []
let objeto = {}
factor_One.forEach(valoracion => {
    if (objeto[valoracion[0]]) {
        objeto[valoracion[0]] += (' ; ' + valoracion)
    } else {
        objeto[valoracion[0]] = valoracion
    }
})
agrupacion = Object.values(objeto)
console.log(agrupacion)


/** EJERCICIO 4: Simular un sistema de actualización de datos
 * Dado un array de objetos con `estado`, usa `.forEach()` para marcar
 * algunos como `"actualizado"` según cierta lógica
 */
const nota = {
    notas: [
        { id: 0, nombre: "Juana", apellido: "Gonzalez", edad: 23, estado: "Pausa" },
        { id: 1, nombre: "Ricardo", apellido: "Perez", edad: 21, estado: "inactivo" },
        { id: 2, nombre: "Javier", apellido: "Huerta", edad: 50, estado: "activo" },
        { id: 3, nombre: "Monica", apellido: "Montes", edad: 30, estado: "inactivo" },
    ]
};
function sistema_Actualizacion() {
    nota.notas.forEach((elemento) => {
        if (elemento.estado === "inactivo") {
            elemento.estado = "actualizado";
        }
    });
}
sistema_Actualizacion();
console.log(nota);

/** EJERCICIO 5: *Generar estructura JSON con `.forEach()
 *Toma un array y, utilizando `.forEach()`, construye un objeto JSON con claves y valores extraídos de los datos.
 */
function generar_JSON() {
    const datos = [
        { id: 1, nombre: "Juan", edad: 25 },
        { id: 2, nombre: "Ana", edad: 30 },
        { id: 3, nombre: "Carlos", edad: 28 },
    ];
    const resultado = {};
    datos.forEach((dato) => {
        resultado[dato.id] = { nombre: dato.nombre, edad: dato.edad };
    });
    return JSON.stringify(resultado, 2);
}
console.log(generar_JSON());





// Reemplazo

// replace () → Devuelve una nueva cadena con una, varias o todas las coincidencias de un patron reemplazadas por un replace()
// Reemplaza solo la primera aparaicion de un texto

/**EJERCICIOS FACILES */

/** EJERICIO 1: Reemplazo de palabras en una cadena
 *  Dada una cadena de texto, usa `.replace()` para cambiar una palabra
 *  específica por otra
 */
function reemplazar_Palabras() {
    const cambio_Oracion = "Hoy es Miercoles y esta siendo un dia muy nublado";
    console.log(cambio_Oracion.replace("nublado", "lluvioso"));
}
reemplazar_Palabras();

/** EJERCICIO 2: Reemplazo de múltiples palabras con `.replaceAll()
 *  Usa `.replaceAll()` para cambiar todas las ocurrencias de una palabra en una cadena por otra.
 */
// replaceAll() → DEvuelve una cadena con todas las coincidencias reemplazadas por replacement
// Reemplaza todas las pariciones de un texto
function reemplazo_All() {
    const oracion_Orignal = "Hoy es Miercoles y el clima esta lluvioso, mañana tambien estara lluvioso";
    let Original = "lluvioso";
    let reemplazo_Nuevo = "Caluroso";
    let nueva_Oracion = oracion_Orignal.replaceAll(Original, reemplazo_Nuevo);
    console.log(nueva_Oracion);
}
reemplazo_All();

/** EJERCICI0 3:
 *  Dado un array de números, usa `.map()` para reemplazar los valores `null` por `0`
 */
const cantidades = [1, 2, 3, 4, 5];
const numerosReemplazados = numeros.map(numero => {
    if (numero === 3) {
        return 10;
    } else if (numero === 5) {
        return 20;
    }
    return numero;
});
console.log(numerosReemplazados);

/** EJERCICIO 4: Reemplazo de caracteres especiales en un string
 * Toma una cadena que contenga caracteres especiales (`#`, `$`, `%`) y usa `.replace()` para eliminarlos.
 */
function reemplazar_Caracateres() {
    const cadenas_Texto = 'Hoy es Jueves y es un d&a muy nub/@do';
    const reemplazo_Caracteres = cadenas_Texto.replace(/[&/@]/g, '');
    console.log(reemplazo_Caracteres);
}
reemplazar_Caracateres();

/** EJERCICIO 5: Reemplazo de espacios por guiones bajos
 *  Dada una cadena con varias palabras separadas por espacios,
 *  reemplázalos con `_` usando `.replace()
 */
function reemplazo_Espacios() {
    const cadena_Nueva = `Hoy es jueves y es un dia muy caluroso`;
    const cadena_Convertida = cadena_Nueva.replace(/ /g, "_");
    console.log(cadena_Convertida);
}
reemplazo_Espacios();


/** EJERCICIOS INTERMEDIOS */

/** EJERCICIO 1: Reemplazo dinámico en un objeto
 * Crea un objeto con datos de usuario y usa una función para cambiar
 * dinámicamente ciertos valores, como `"estado": "pendiente"` a `"estado": "aprobado"`
 */
const datos_Usuario = {
    datos_Usuarios: [
        { nombre: "Juan", edad: 24, estado: "pendiente" },
        { nombre: "Luciana", edad: 30, estado: "aprobado" },
        { nombre: "Monica", edad: 20, estado: "pendiente" },
        { nombre: "Lorenzo", edad: 15, estado: "pendiente" },
    ]
};
function reeemplazo_Datos() {
    datos_Usuario.datos_Usuarios.map((cambio) => {
        if (cambio.estado === "pendiente") {
            cambio.estado = "aprobado";
        }
    });
}
reeemplazo_Datos();
console.log(datos_Usuario);

/** EJERCICIO 2: Reemplazo de fechas en un array de strings
 * Dado un array de fechas con formato `DD-MM-YYYY`, usa `.map()` y
 * `.replace()` para convertirlas a `YYYY/MM/DD
 */
function reemplazar_fechas() {
    const fechas = ["25-12-2023", "01-01-2024", "14-02-2024"];
    const fechasConvertidas = fechas.map(fecha => {
        return fecha.replace(/(\d{2})-(\d{2})-(\d{4})/, "$3/$2/$1");
    });
    console.log(fechasConvertidas);
}
reemplazar_fechas();

/** EJERCICIO: 3
 *  Usa `.replace()` con una **expresión regular** para cambiar palabras clave
 * en un párrafo (`JavaScript` por `JS`)
*/
// function expresion_Regular () {
const parrafo = "Hoy es Jueves y el dia esta algo loco, primero lluvieso, despues nublado y nuevamente con lluvia";
function reemplazar_PalabrasClave() {
    const nuevoParrafo = parrafo.replace(/Jueves/g, "JS");
    console.log(nuevoParrafo);
}
reemplazar_PalabrasClave();

/** EJERCICIO 4: Reemplazo condicional en un array de objetos
 * Toma un array de productos y cambia la propiedad `"disponible": false` a `"disponible": true` si el stock es mayor a `10`
 */
function reemplazar_Objetos() {
    const productos = [
        { nombre: "Galleta", precio: 1.5, disponible: false, stock: 5 },
        { nombre: "Refresco", precio: 2.0, disponible: true, stock: 15 },
        { nombre: "Papas", precio: 1.0, disponible: false, stock: 20 },
        { nombre: "Ruffles", precio: 1.8, disponible: true, stock: 8 },
    ];
    productos.forEach(producto => {
        if (producto.stock > 10) {
            producto.disponible = true;
        }
    });
    console.log(productos);
}
reemplazar_Objetos();

/** EJERCICIO 5: Reemplazo de etiquetas HTML en una cadena
 *  Dada una cadena con contenido HTML (`<b>Hola</b>`), usa `.replace()` para eliminar las etiquetas y conservar solo el texto. 
 */
function reemplazo_html() {
    const htmlString = "<b>Hola</b>, <i>mundo</i>!";
    const newString = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
    console.log(newString);
}
reemplazo_html();




/** EJERCICIOS DIFCILES */

/** EJERCICIO 1: Normalizar datos en un array de objetos
 * Toma un array de objetos con nombres (`"Carlos"`, `"carlos"`, `"CARLOS"`) y usa `.map()` para asegurarte de que estén en formato uniforme (todos en minúscula)
 */
function normalizar_Datos() {
    const conjunto_Palabras = ["Hola", "MUNDO", "JavaScript"];
    const normalizacion_Mayusculas = conjunto_Palabras.map(texto => texto.toLowerCase());
    console.log(normalizacion_Mayusculas);
}
normalizar_Datos();

/** EJERCICIO 2: Reemplazo de valores en un JSON anidado
 * Dado un JSON con estructura anidada, usa recursión para reemplazar todas las ocurrencias de `"activo": false` por `"activo": true`
 */

const datos_JSON = '{"a": 1, "b": {"c": 2, "d": 3}}';
const objecto_JSON = JSON.parse(datos_JSON);
function relevo_Valores(proposito, validez, nueva_Validacion) {
    for (let key in proposito) {
        if (proposito.hasOwnProperty(key)) {
            if (proposito[key] === validez) {
                proposito[key] = nueva_Validacion;
            } else if (typeof proposito[key] === 'object') {
                relevo_Valores(proposito[key], validez, nueva_Validacion);
            }
        }
    }
    return proposito;
}
const objeto_Modificado = relevo_Valores(objecto_JSON, 2, 5);
const modificacion_JSON = JSON.stringify(objeto_Modificado);
console.log(modificacion_JSON);


/** EjERCICIO 3: Reemplazo de múltiples valores en una cadena con un diccionario
 * Usa un objeto que actúe como diccionario y reemplaza múltiples palabras en una cadena con sus equivalentes (ejemplo: `"JS"` por `"JavaScript"`).
 */
/**
 * RegExp:
 * Es un objeto que se utiliza para buscas y reemplazar carcteres en cadena
 * El objeto RegExp es una expresion
 * /g: Rendimiento global de los partidos (encontrar todos)*/

function reemplazar_Multiples() {
    const diccionario = {
        "Martes": "Jueves",
        "nublado": "soleado",
        "JS": "HTML",
    };
    let cadena = "Hoy es Martes y el clima esta nublado, se esta programando en JS";
    for (let key in diccionario) {
        cadena = cadena.replace(new RegExp(key, 'g'), diccionario[key]);
    }
    console.log(cadena);
}
reemplazar_Multiples();

// function reemplazo_Diccionario (palabra_original, palabra_reemplazada) {
//     const frase_Original = 'Hoy es martes, el clima esta nublado y se esta programando en Javascript';
//     const diccionario = {
//         "martes": "jueves",
//         "nublado": "soleado",
//         "Javascript": "JS",
//         }
//          for (palabra_original = palabra_reemplazada in diccionario.items()) {
//             frase_Original = frase_Original.replace(frase_Original,palabra_reemplazada);
//     }
// }
// console.log(frase_Original);


/** EJERCICIO 5: Reemplazo en estructuras de datos complejas
 *  Toma una estructura de datos anidada y usa un método para recorrerla y reemplazar todos los valores `"null"` por `undefined`
 */
// function reemplazar_Estructura(obj) {
//     for (let key in obj) {
//         if (obj[key] === null) {
//             obj[key] = undefined;
//         } else if (typeof obj[key] === 'object') {
//             reemplazar_Estructura(obj[key]);
//         }
//     }
// }
// function simular_Estructura() {
//     const informacion = {
//         consumidor: {
//             nombre: "Pamela", edad: 25,
//             direccion: { ciudad: "Ciudad de Mexico", codigopostal: 54789 }
//         }
//     };
//     function reemplazar_Datos(obj) {
//         for (let key in obj) {
//             if (obj[key] === null) {
//                 obj[key] = undefined;
//             } else if (typeof obj[key] === 'object') {
//                 reemplazar_Estructura(obj[key]);
//             }
//         }
//     }
//     reemplazar_Datos(informacion);
//     console.log(informacion);
// }
// simular_Estructura()





// Division →  (/)
/* Produce el cociente de sus operndos donde el operando izquierdo es el dividiendo y operando derecho es el divisor
*/

/** EJERCICIOS FACILES*/

/** EJERCICIO 1: Dividir elementos de un array por 2
 * Toma un array de números y usa .forEach() para dividir cada número por 2.
 */
// function dividr_Numeros() {
//     const Numeros = [6, 5, 4, 3, 2, 1];
//     Numeros.forEach(function (numero) {
//         const resultado = numero / 2;
//         console.log(resultado);
//     });
//     console.log(numero / 2);
// }
// dividr_Numeros();

/** EJERCICICIO 2: Obtener la mitad de un número
 *  Crea una función mitad(numero) que reciba un número y devuelva su mitad
 */
// function mitad_Numeros(cifra) {
//     return cifra / 2;
// }
// const secuela = mitad_Numeros(8);
// console.log(secuela);

/** EJERCICIO 3: División con valores predeterminados
 * Define una función dividir(a, b = 2) que divida a por b, usando 2 como valor por defecto si b no se proporciona.
 */
function valores_Predeterminado() {
    const a = 20;
    const b = 2;
    const resultado = a / b;
    console.log(resultado);
    return resultado;
}
valores_Predeterminado();


/** EJERCICIO 4: División con map
 * Toma un array de números y usa .map() para generar un nuevo array con cada número dividido entre 3.
 */
function arry_Dividido() {
    const array_Numeros = [3, 6, 9, 12, 15, 18];
    const nuevo_array = array_Numeros.map((cifra) => cifra / 3);
    console.log(nuevo_array);
    return nuevo_array;
}
arry_Dividido();

/** EJERCICIO 5: Dividir número ingresado por usuario
 *  Pide al usuario un número con prompt() y muestra su tercera parte en la consola.
 */
// function dividir_Numero_USusario() {
//     const numero = parseFloat(prompt("Ingrese un número:"));
//     const divisor = parseFloat(prompt("Ingrese el divisor:"));
//     if (divisor === 0) {
//         console.log("No se puede dividir por cero.");
//         return;
//     }
//     const resultado = numero / divisor;
//     console.log(`El resultado de la división es: ${resultado}`);
// }
// dividir_Numero_USusario();



/** EJERCICIOS INTERMEDIOS  */
/** EJERCICIO 1: División segura
 * Crea una función que valide si el divisor es diferente de cero antes de realizar la operación y devuelva un mensaje en caso de error.
 */
function division_Segura(dividiendo, divisor) {
    if (divisor === 0) {
        return "Error: No se puede dividir por cero.";
    }
    return `El resultado de la división es: ${dividiendo / divisor}`;
}
console.log(division_Segura(12, 3));
// function validar_Divisor() {
// const numero = 10;
// const divisor = 2;
// if (isNaN(numero) || isNaN(divisor)) {
//     console.log("Por favor, ingrese números válidos.");
//     return;
// } if (divisor === 0) {
//     console.log("No se puede dividir por cero.");
//     return;
// }   }
// validar_Divisor();

/** EJERCICIO 2: Promedio de divisiones
 * Dado un array de números, usa .reduce() para calcular el promedio de la mitad de todos los elementos.
 */
function promedio_Divisiones() {
    const cuantía = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const mont = cuantía.reduce((secuela, cuantía) => secuela + (cuantía / 2), 0);
    const nivelar = mont / cuantía.length;
    console.log(`El resultado de la división es: ${nivelar}`);
}
promedio_Divisiones();

/** EJERCICIO 3: Division modular
 * Implementar una funcion que divida dos numeros y devuelva el residuo usando el operado %
 */
function Division_Modular() {
    const numero_One = 5;
    const numero_Two = 2;
    const resultado = (numero_One % numero_Two);
    console.log(resultado);
}
Division_Modular();

/** Division 4: División acumulada
 * Dado un array, usa .reduce() para dividir todos los números progresivamente, de izquierda a derecha.
 */
// function array_Acumulada() {
//     const cantidad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     const total = cantidad.reduce((secuela, cantidad) => secuela + (cantidad / 2));
//     const operacion = total / cantidad;
//     console.log(`El resultado de la división es: ${operacion}`);
// }
// promedio_Divisiones();

/** EJERCICIO 5: División en objetos
 *  Crea un array de objetos con valores numéricos y usa .forEach() para dividirlos por un factor definido en una variable global.
 */
function division_Numeros() {
    const finalidades = [
        { edad: 25 },
        { edad: 30 },
        { edad: 28 },
        { edad: 35 },
    ];
    const divisor = 4;
    const resultado = divisor / finalidades;
    console.log(`El resultado de la división es: ${resultado}`);
    console.log(finalidades.map((finalidades) => {

    }))
}
division_Numeros();

function division_Objetos() {
    const finalidades = [
        { edad: 25 },
        { edad: 30 },
        { edad: 28 },
        { edad: 35 },
    ];
    const finalidad = finalidades.forEach((finalidades) => {
        const divisor = 4;
        const resultado = divisor / finalidades;
        console.log(`El resultado de la división es: ${resultado}`);
    });
}
division_Objetos();


// function promedio_Divisiones() {
//     const cuantía = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     const mont = cuantía.reduce((secuela, cuantía) => secuela + (cuantía / 2), 0);
//     const nivelar = mont / cuantía.length;
//     console.log(`El resultado de la división es: ${nivelar}`);
// }
// promedio_Divisiones();


// function multiplicar_Numeros() {
//     const componentes = [1, 2, 3, 4, 5];
//     componentes.forEach((componentes) => {
//         componentes *= 2;
//         console.log(componentes);
//     });
// }
// multiplicar_Numeros();



/** EJERCICIOS DIFICILES */
/** Ejercicio 1: Division en matrices
 * Divide todos los elementos de una matriz bidimensional por un numero dado y devuelve una nueva matriz con los resultados
 */
function division_Matrices() {
    const matrices = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    // const divisor_Matriz = 3;
    // const matriz = matrices.map((cantidad) =>  cantidad / 3); {
    //     console.log(`El resultado de la división es: ${matriz [2][1]} `);
    //     return matriz;
    const divisor_Matrices = 3;
    console.log(matrices[2][2] / divisor_Matrices);
}
division_Matrices();

/** EJERCICIO 2: División en un rango dinámico
 * Crea una función que divida números en un rango dinámico generado por el usuario.
 */
// function division_Rango () {
// const numeros_Rango = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// }
// division_Rango();

/** EJERCICICO 3: División en estructuras anidadas
 * Manipula un array de objetos anidados y divide ciertos valores internos por un factor específico.
 */
function divisionEstructurasAnidadas(arr, factor) {
    return arr.map(obj => {
        let nuevo = { ...obj };
        for (let key in nuevo) {
            if (typeof nuevo[key] === "number") {
                nuevo[key] = nuevo[key] / factor;
            } else if (typeof nuevo[key] === "object" && nuevo[key] !== null) {
                nuevo[key] = divisionEstructurasAnidadas([nuevo[key]], factor)[0];
            }
        }
        return nuevo;
    });
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const factor = 2;
const reajuste = arr / factor;
console.log(reajuste);

/** EJERCICIO 4: reajuste
 * Implementa una función que maneje grandes números y optimice las divisiones con BigInt.
 */
// BigInt → Los valores representan valores enteros que son demasiados altos o demasiados bajos para ser representados por el number primitivo
// A UN BigInt se le agrega n al final del literal entero o llamado de la funcion que crea bigints desde cadenas
// function reajuste_BigInt () {
let numeros_Bing_Uno = 4n;
let numeros_Bing_Dos = 2;
// let numeros_Resultado = numeros_Bing_Uno / numeros_Bing_Dos;
console.log(numeros_Bing_Uno / BigInt(numeros_Bing_Dos));
// }
// reajuste_BigInt();





// Union
/* Toma un conjunto y devuelve un nuevo conjunto que contiene elementos que estan en este conjunto y en el conjunto dado o en ambos.
*/

/** EJERCICIOS FACILES */

// EJERCICIO 1: Une dos arrays de números y muestra el resultado
//concat () → Se utiliza para fusionar dos o mas matrices
const array_One = [1, 2, 3, 4, 5];
const array_Two = [6, 7, 8, 9, 10];
const resultado_arrays = array_One.concat(array_Two);
console.log(resultado_arrays);

// EJERCICIO 2: Une dos arrays de cadenas de texto y muestra el array combinado
const frutas = ["Fresa", "Platano", "Manzana", "Sandia"];
const verduras = ["Papa", "Cebolla", "Chiles", "Tomate"];
const union_Texto = frutas.concat(verduras);
console.log(union_Texto);

// EJERCICIO 3: Une dos arrays y elimina los elementos duplicados
const arreglo_Uno = [11, 2, 3, 4, 5, 66, 10, 8, 3, 44];
const arreglo_Dos = [4, 2, 33, 5, 8, 2, 34, 54, 66]
const resultado_Eliminacion = new Set(arreglo_Uno, arreglo_Dos);
// const respuesta_arrays = []
console.log(resultado_Eliminacion);

// EJERCICIO 4: Usa el operador spread para unir dos arrays en uno solo
const array_unir1 = [3, 4, 5, 6];
const array_unir2 = [1, 2, 7, 8];
const union_Resultado = [...array_unir1, ...array_unir2];
console.log(union_Resultado);

// *** EJERCICIO 5: Crea una función que reciba dos arrays y devuelva su unión
function devolver_Union(arreglo_Primero, arreglo_Segundo) {
    return arreglo_Primero.concat(arreglo_Segundo);
    // const arreglo_Uno = [1,2,3,4,5];
    // const arreglo_Dos = [6,7,8,9,10];
    // const union_Texto = arreglo_Uno.concat(arreglo_Segundo);
    // console.log(union_Texto);
}
console.log(devolver_Union([8, 7, 6, 5], [4, 3, 2, 1]));
// }


/** INTERMEDIOS */
//*** EJERCICIO 1: Une varios arrays en uno solo utilizando un método adecuado
const conjunto_One = [1, 2, 3, 4, 5];
const conjunto_Two = [6, 7, 8, 9, 10];
const conjunto_Three = [2, 6, 3, 7, 8];
const conjuntos_Numericos = conjunto_One.concat(conjunto_Two).concat(conjunto_Three);
console.log(conjuntos_Numericos);

// EJERCICIO 2: Une tres arrays y filtrar solo los valores únicos
// filter () → Crea un nuevo array de todos los elementos que cumplen la condicion implemenetada por la funcion dada
const juntar_Uno = [9, 8, 7];
const juntar_Dos = [6, 5, 4];
const juntar_Tres = [3, 2, 1];
const consecuencia = juntar_Uno.concat(juntar_Dos).concat(juntar_Tres);
console.log(consecuencia);

const arrays = [[1, 2], [3, 4], [5, 6]];
const union = arrays.flat();
console.log(union);

//*** EJERCICIO 3: Une arrays de objetos y elimina duplicados basados en una propuedad especifica
// const array_objetos1 = [{nombre: "Juan", edad: 35, estado: "casada"}];
// const array_Objetos2 = [{nombre: "Pamela", edad: 42, estado: "Casada"}];
// const resultado = [...array_objetos1, ...array_Objetos2].filter()
const arreglo_Objetos1 = [{ id: 1 }, { id: 7 }, { id: 4 }, { id: 3 }, { id: 5 }];
const arreglo_Objetos2 = [{ id: 5 }, { id: 2 }, { id: 9 }, { id: 1 }, { id: 7 }];
const union_Objetos = [...arreglo_Objetos1, ...arreglo_Objetos2].filter((obj, index, self) =>
    index === self.findIndex(o => o.id === obj.id)
);
console.log(union_Objetos);

//*** EJERCICICO 4: Une dos array y ordena el resultado de menor a mayor
// sort () → ordena los elementos de una matriz en su lgra y devuelve la referenecia a la mism matriz
// El orden predeterminado es ascedente, basado en la conversion de los elementyos de las cadenas y la comparacion de sus secuencias de valores
const array_Mayor = [9, 2, 6, 4, 7, 1];
const array_Menor = [3, 5, 8, 10, 24];
const contestacion = [...array_Mayor, ...array_Menor].sort((array_Mayor, array_Menor) => array_Mayor - array_Menor);
console.log(contestacion);

/** EJERCICIO 5: Une dos arrays y calcula la suma de todos sus elementos
 * 
 */
const orden_arrays = [6, 7, 8, 9, 10];
const orden_arrays1 = [1, 2, 3, 4, 5 ];
const resultado_orden = orden_arrays.concat(orden_arrays1);
const suma_Orden = resultado_orden.reduce((suma, current) => suma + current,0);
console.log(suma_Orden);

// 0 6    6
// 6 7    13
// 13 8  21
// 21 9  30
// 30 10 40
// 40 1  41
// 41 2  43
// 43 4  47
// 47 5  52

// Testing-0611 Testing-0611


/** DIFICILES */
/** EJERCICIO 1: Une arrays de diferentes profundidades en un solo array plano */
// flat.(Infinity) → Crea una nueva matriz con todos los elemenetos de las submatriz concatenadas en ella de forma recursiva hasta las profundidad especifica
const array_Profundidad = [1,2,[4,5,6, [8,3,4,5,[2,[2]]]]];
console.log(array_Profundidad.flat(Infinity));

/** EJERICIO 2: Une arrays de objetos y combina propiedades repetida sumando sus valores  */
const union_Arrays_objetos = [ edad = 30, juntada = 5 ];
const union_Arrays_Objetos2 = [ edad= 45, juntada = 10 ];
const union_Arrays = union_Arrays_objetos.concat(union_Arrays_Objetos2);
const suma_Repetidos = union_Arrays.reduce((suma, current) => suma + current, 0);
console.log(suma_Repetidos);

/** EJERCICIO 3: Une dos arrays y conserva el orden original de aparición de los elementos */
const orden_Original = [2,3,4,5,6];
const orden_Original2 = [7,8,9,10];
const union_Orden_Original = orden_Original.concat(orden_Original2);
console.log(union_Orden_Original);

/** EJERCICIO 4: Une varios arrays y crea un objeto que indique la frecuencia de cada elemento */
const new_Array1 = [1,2,3,4,5];
const new_Array2 = [6,7,8,9,10];
const union_New_Arrays = new_Array1.concat(new_Array1);
console.log(union_New_Arrays);

/** EJERCICIO 5: Une arrays de arrays y elimina duplicados en todos los niveles. */
const arrays_Unir_One =  [id = 9,id = 2,[id = 4,id = 5,id = 6, [id = 8,id = 3,id = 4,id = 5,[id = 2,[id = 2]]]]];
const arrays_Unir_DOS =  [id = 5,id = 4,[id = 3,id = 2,id = 0, [id = 0,id = 0,id = 6, id = 2,[id = 1,[id = 8]]]]];
const obtenido_Arrays = [...arrays_Unir_One, ...arrays_Unir_DOS].filter((obj, index, self) =>
    index === self.findIndex(o => o.id === obj.id));
console.log(obtenido_Arrays);

// const arrays_Unir_One = [
//   { id: 9 }, { id: 2 }, [{ id: 4 }, { id: 5 }, { id: 6 }, [{ id: 8 }, { id: 3 }, { id: 4 }, { id: 5 }, [{ id: 2 }, [{ id: 2 }]]]]
// ];
// const arrays_Unir_DOS = [
//   { id: 5 }, { id: 4 }, [{ id: 3 }, { id: 2 }, { id: 0 }, [{ id: 0 }, { id: 0 }, { id: 6 }, { id: 2 }, [{ id: 1 }, [{ id: 8 }]]]]
// ];

// // Función para aplanar completamente el array
// function flattenDeep(arr) {
//   return arr.reduce((acc, val) =>
//     Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
// }

// // Unir y aplanar ambos arrays
// const unidos = flattenDeep([...arrays_Unir_One, ...arrays_Unir_DOS]);

// // Eliminar duplicados por id
// const unicos = unidos.filter(
//   (obj, index, self) =>
//     obj && obj.id !== undefined &&
//     index === self.findIndex(o => o.id === obj.id)
// );

// console.log(unicos);




// INTERPOLACION
// Es una forma de crear cadenas mas limpias y legibles.

/** EJERCICIO 1: Multiplicar cada elemento de un array por 3 usando .map(). */
function multiplicacion_Elementos () {
    const multiplicacion_numero = [1, 4, 6, 8, 3, 4, 9];
    const respuesta_Multiplicacion = multiplicacion_numero.map((cifra) => cifra * 3);
    console.log(respuesta_Multiplicacion);
    return respuesta_Multiplicacion;
}
multiplicacion_Elementos ();

/** EJERCICIO 2: Restar 5 a cada número de un array utilizando .forEach(). */
// const disminuciones = [10,25,30,45,74];
// const numero_a_Restar = 5;
// const array_Restado = disminuciones.forEach(disminucion => disminucion - numero_a_Restar);
// console.log(array_Restado);

/** EJERCICIO 2: Restar 5 a cada número de un array utilizando .map(). */
const disminuciones = [10, 25, 30, 45, 74];
const numero_a_Restar = 5;
const array_Restado = disminuciones.map(disminucion => disminucion - numero_a_Restar);
console.log(array_Restado);
// const disminuciones = [10, 25, 30, 45, 74];
// const numero_a_Restar = 5;
// const array_Restado = disminuciones.foreach(disminucion => disminucion - numero_a_Restar);
// console.log(array_Restado);
//↑
// 10, 5 → 5
// 25, 5 → 20
// 30, 5 → 25
// 45, 5 → 40
// 74, 5 → 69


/** EJERCICIO 3: Concatenar cada string de un array con "!" empleando .map().  */
//Concatenar → Es unir canedas el simbolo de mas (+)
// function concantenar_Strings () {
const concatenaciones = ["hola", "hoy", "es", "jueves"];
const respuesta_concatenacion =  concatenacion.map(concatenacion => concatenacion != concatenaciones);
console.log(respuesta_concatenacion);
// }
// concantenar_Strings ();

// const disminuciones = [10, 25, 30, 45, 74];
// const numero_a_Restar = 5;
// const array_Restado = disminuciones.map(disminucion => disminucion - numero_a_Restar);
// console.log(array_Restado);




// Calcula el punto medio entre dos números.
//  Dado un número inicial y uno final, determina cuál es el valor interpolado exactamente a la mitad entre ambos.


// Agrega valores intermedios en un array numérico.
//  Dado un array de números consecutivos, inserta un valor interpolado entre cada par de elementos.


// Interpolación con porcentaje personalizado.
//  Escribe una función que, dados dos números y un porcentaje, devuelva el valor que representa esa proporción entre los dos.


// Interpolación en cadenas de texto.
//  Construye una frase personalizada utilizando variables dentro de un template string, como insertar nombre y edad en una presentación.


// *** Interpolación de colores RGB.
//  Dado un color inicial y uno final en formato RGB, calcula el color intermedio para un porcentaje determinado (por ejemplo, al 50%).
