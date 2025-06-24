// Muestra ejemplos de asignación de variables "por valor" y "por referencia"

// Asignando valores complejos
const variable_a = [1, 2, 3, 5];
const variable_b = variable_a;
variable_a.push(4);
console.log(variable_a);
console.log(variable_b);
/** En este codigo se ve como se le puede asignar el valor de un array en una variable,
 * El valor no se copia lo que se copia es una referencia
 * Cuando se cambia el valor de la variable a tambien se cambia en la variable b
 */


// Pasando valores a una funcion
//** Cuando se pasa un valor primitivo como argumeneto a una funcion, el valor que recibimos dentro de la funcion es siempre una copia lo que implica que cualquier mutuacion de los parametros dentro de una funcion no afecta el valor del contexto */
const valores_funcion = (str) => {
    str = 'Hello';
    return str;
};
const aString = 'a';
console.log(valores_funcion(aString));
console.log(aString);

//Valores primitivos
let x = 10; //→ la variable x contiene el valor de 10
let y = 'abc'; // → La variable x, contiene el valor de 'abc
let z = null // → La variable z, contiene el valor de null

// Ejemplo
let a = 'Hola';
let b = a; //Le asignamos el valor de a a a b
a += '!'; // Se cambia el valor de a añadiendo un signo al final
console.log(a);
console.log(b);
/** Al añadir el valor de a a a b, siguen siendo independientes cada una toma un valor y auqnue se modifique a , b sigue manteniendo su valor */


//Adignacion por referencia
//Cambiar el valor de una variable no afecta a las demas, porque como tal no hay relacion entre si
// let x_uno = 10;
// let y_uno = 'abc';
// let a_uno = x_uno;
// let b_uno = y_uno;
// a_uno = 5;
// b_uno = 'def';
// console.log(x_uno, y_uno, a_uno, b_uno); // 10, 'abc', 5, 'def'

// //Reasignacion de una referencia
// // La reasignacion de una variable de referencia sustituye a la antigua referencia
// let obj = {primero : referencias};
// obj = {segundo : referencias2}


// == y ===
// En este ejercicio la respuesta es verdadera, ya que ambas variables contienene la misma referencia hacia un elemento
let arr_Referencia1 = ['Hola'];
let arr_Referencia2 = arr_Referencia1;
console.log(arr_Referencia1 === arr_Referencia2); // true


// La respuesta es false, porque a pesar de que las variables tengan el mismo valor, no hacen refeencia al mismo elemento
let arra_referencias1 = ['Adios'];
let arra_referencias2 = ['Adios'];
console.log(arra_referencias1 === arra_referencias2); //False

//Pasar parametros a traves de funciones

let cien = 100;
let dos = 2;
function multiplicar() {
    return x * y;
}
let doscientos = multiplicar(cien, dos);
console.log(multiplicar(doscientos));

// La funcion impura toma un objteo y cambia la propiedad edad dde ese objeto para que sea 25
// Como actua sobre la referencia que se le dio, cambia directamente el objeto
function funcion_Impura(individuo) {
    individuo.edad = 25;
    return individuo;
}
let sofia = {
    nombre: 'Sofia',
    edad: 23
}
let cambiardatodeSofia = funcion_Impura(sofia);
console.log(sofia);
console.log(cambiardatodeSofia); // { nombre: 'Sofia', edad: 25}


//Funcion pura
function funcionPura(persona) {
    let nuevaPersona = JSON.parse(JSON.stringify(persona));
    nuevaPersona.age = 25;
    return nuevaPersona;
}
let enrique = {
    nombre: 'Enrique',
    edad: 45,
}

let cambiarEnrique = funcionPura(enrique);
console.log(enrique);
console.log(cambiarEnrique);


//EJERCICIOS FACILES
/** EJERCICIO 1:  Copia de un número sin modificar el original
 * Declara una variable con un número. Luego, crea otra variable que contenga el mismo valor y modifica solo la nueva variable. Comprueba que el original no cambia.
 */
let numero_Uno = 15;
let nuumero = 130;
console.log(numero_Uno);


/** EJERCICIO 2: Modificar un objeto y ver el efecto en la referencia
 * Crea un objeto simple con un nombre. Luego, asigna ese objeto a otra variable y cambia el nombre dentro de la nueva variable. ¿El cambio afecta el objeto original?
 */
function cambiarDatos(sujeto) {
    sujeto.nombre = "Armando";
    return sujeto;
}
let Luciana = {
    nombre: 'Luciana',
    edad: 44
}
let cambiar_Nombre = cambiarDatos(Luciana);
console.log(Luciana);
console.log(cambiar_Nombre); // No afecto al objeto original

// EJERCICIO 3: Crear una copia de un arreglo
/** Define un arreglo con tres números. Usa el operador spread (...) para hacer una copia del arreglo y cambia uno de sus valores. Verifica si la copia afecta el arreglo original.
*/
// Spread → Permite que el elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o mas argumentos son esperados
// El operador spread (...), permite expandir los elementos de un array (o de otros iterables) en otro lugar
// Crear un nuevo array o al pasar arguemnetos a una funcion.
/** Copia Superficial
 * Copia valores primitivos, pero si el array contiene objetos, solo copia las refereencias a esos objetos, no los objetos en si.
 */
const Arreglo_Original = [1, 2, 3, 4, 5];
const copia_Arreglo = [...Arreglo_Original];
console.log(copia_Arreglo);

/**  EJERCICIO 4: Comparar asignacion por valor y por referencia
 * Define dos variables: uan con un numero y otra con un objeto. Asigna amabas a nuevas variables y modifica los valores
 * ¿Cuál se ve afectada y cuál se mantiene igual?
 */
function cambio_de_Valores(tipo) {
    tipo.edad = 4;
    return tipo;
}
let varaible_Numero = 5;
const variable_Objeto = {
    nombre: 'Gabriela',
    edad: 32
}
let cambiar_Edad = cambio_de_Valores(variable_Objeto);
console.log(variable_Objeto);
console.log(cambiar_Edad); // ¿Cuál se ve afectada y cuál se mantiene igual? → Si se ve afectada, no toma su valor de 32 se queda con el valor de 4
let cambiar_variable_Numero = cambio_de_Valores(varaible_Numero);
console.log(varaible_Numero);
console.log(cambiar_variable_Numero); // ¿Cuál se ve afectada y cuál se mantiene igual? → Se mantiene igual con su valor de 5

/** EJERCICIO 5: Propagacion de cambios en objetos dentro de otros objetos
 *  Crea un objeto que tenga otro objeto dentro. Luego, modifica una propiedad del objeto interno y obeserva su los cambios afectan a la variable original.
 */
const auto = {
    marca: 'rojo',
    modelo: 1990,
    activo: true,
    dueño: {
        nombre: 'Juan Perez',
        edad: 30
    }
};
console.log(auto); // Aqui  muestra el objeto completo
console.log(auto.dueño) // Muestra el objeto del dueño → El hijo
console.log(auto.dueño.nombre); // Solo muestra el nombre del dueño
// console.log(auto);
auto.nombre = 'Martina';
console.log(auto); //Los cambios si afectan la variable original



//EJERCICIOS INTERMEDIOS
/** EJERCICIO 1: Copia y modificacion de primitivas
 * Declara una variable de tipo primitivo (Como un numero o string), asigna su valor a otra variable y modifica esta segunda
 */
// Los variables primitivas son aquellas que almacenan directamente un valor simple, como un numero, caracter o un valor booleano
// const nombre = 'Marcos';
// const nombre_Asignado = nombre;
// nombre = 'Paola';
// console.log(nombre);
// console.log(nombre_Asignado);

/** EJERCICIO 2: Modificacion de objetos clonado
 * Crea un objeto con varias propiedades. Luego, asigna ese objeto a otra variable y cambia una de sus propiedades. Comprueba si el objeto original tambien se ve afectado.
 */
const original = {
    nombre: 'Paulina',
    edad: 45,
    estado: "Activa",
};
const clone = { ...original };
console.log(clone);
original.edad = 24;
console.log(original);

/**EJERCICIO 3: Funciones que alteran objetos
 * Declara una funcion que reciba un objeto como parametro y modifique una de sus propiedades. Luego pasa un objeto a esta funcion y verifica si los cambios prsisten fuera de ella.
 */
// function altera_Objetos (objeto, propiedad) {
//     return objeto[propiedad];
// }
// let obejto = {id:1, name: 'primero'};
// console.log(parseValue(datos, "name"));



// EJERCICIO 4:
// Arrays y copias superficiales → Crea un nuevo array que comparte referencias a los mismos objets que el array original.
// Si se hace un modificiacion en un elemento dentro de ese array, este cambio tambien se refelja en el orihinal

const valor_a = {
    saludo: "hello",
    nombre: "Juan",
    edad: 23
}
let valor_b = valor_a;
valor_b.nombre = "Carmen";
console.log(valor_a); // Si se ve afectado el original y el nombre cambia a Carmmen
console.log(valor_b); // La copia si toma el valor de Carmen
// El Original si se ve afcetado y la copia igual, ya que apuntan al mismo elemento


///** Array copias profundas  */
//Arrays y copias profundas → Crea un nuevo array con copias independientes de cada elemento
// Las modificaciones en el array copiado no afecatn al original
const valor_c = 10;
let valor_d = valor_c;
valor_d = 2;
console.log(valor_c); //No se ve afcetado el original , sigue toamndo su valor de 10
console.log(valor_d); // La copia si se ve afectado y toma el valor de 2

/**Operador de propagacion*/
// Permite a los iterables (como arreglos, cadenas o mapas) ser expandidos en elementos individuales
const operador_a = {
    saludo: "Hola",
    nombre: "Juan",
}
let operador_b = { ...a }
operador_b.nombre = "Manuel";
console.log(operador_a); //Muestra el objeto original → {saludo: 'Hola', nombre: 'Juan'}
console.log(operador_b); //Muestra el objeto individuales las letra y poeteriormente el nombre → {0: 'H', 1: 'o', 2: 'l', 3: 'a', 4: '!', nombre: 'Manuel'}

/** EJERCICIO 4: Arrays y copias superficiales vs profundas:
 * Crea un array y copia su contenido usando métodos como .slice() o el spread operator. Cambia un valor del array copiado y analiza si afecta al original.
 */
const animales = [
    { animal_uno: "Vaca" },
    { animal_dos: "Zorro" },
    { animal_tres: "Perro" },
    { animal_cuatro: "Loro" },
    { animal_cinco: "Tortuga" },
    { animal_seis: "Pez" },
];
const copia_animales = animales.slice();
console.log(animales); //Este es el original
copia_animales.animal_seis = "Yegua";
console.log(copia_animales); // Este es el copia, se cambio un valor pero noa fecto al original
// copia_animales.animal_uno= "Alacran";
// console.log(animales);

/** EJERCICIO 5: Desestructuración y sus efectos:
 * Utiliza desestructuración para copiar valores de un objeto o array. Modifica los valores copiados y evalúa si esto tiene impacto en la estructura original.
 */

// Me puedes dar 5 ejercicios dificiles peor que sean faciles de resolver  sobre  asignación por “valor” y por “referencia”  en javascript

// EJERCICIOS DIFICILES
/**EJERICIO 1: Asignación de variables primitivas
 * Se tienen dos variables numéricas. Una se asigna con el valor de la otra, luego se modifica una de ellas. Analiza cuál conserva el valor original y cuál cambia, explicando por qué ocurre.
 */
const variable_Num1 = 4;
let variable_Num2 = variable_Num1;
variable_Num2 = 7;
console.log(variable_Num1); // Conserva el valor original, manteniendo el 4
console.log(variable_Num2); // Cambia su valor y toma el valor 7

/** EJERCICIO 2: Cambio de propiedades en objetos compartidos
 * Se define un objeto con una propiedad inicial. Luego se crea otra variable que hace referencia a ese objeto, y se modifica la propiedad usando esta nueva variable. Determina si el cambio afecta al objeto original o no.
 */
const colores = [
    {color_one : "rosa"},
    {color_two : "amarillo"},
    {color_three : "blue"},
    {color_four : "black"},
];
const copia_colores = colores.slice();
console.log(colores);
copia_colores.color_two = "purple";
console.log(copia_colores);

/** EJERCICIO 3: Funciones que modifican valores y referencias
 * Se declaran una variable numérica y un objeto. Luego, dos funciones intentan modificar estas variables: una con un tipo primitivo y otra con un objeto. Analiza cuál de ellas resulta modificada después de la ejecución.
 */
function modificaciones () {

}