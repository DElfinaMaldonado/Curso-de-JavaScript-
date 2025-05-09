/** INSERCION
 * push →Agrega uno o mas lemenetos al final del arreglo
 * unshift → Agregar uno o mas elementos al principio del arreglo
 * splice → Permite insertar, eliminar o reemplazar elementos en una posicion especifica del arreglo
 */


// INSERCION EN UN ARRAY
// Problema: Dado un array de numeros, inserta un nuevo numero en la ultima posicion.
let numeros = [1,2,3,4];
numeros.push(5);
console.log(numeros); //Salida: → [1,2,3,4,5]


/** INSERCION EN UN OBJETO (DICCIONARIO)
 * Problema: Dado un objeto con claves y valores, agrega una nueva clave con su valor correspondiente.
 */
let persona = {
    nombre: 'Juan',
    edad: 30
};
persona["ocupacion"] = "Ingeniero"; //Inserta una nueva propiedad
console.log(persona); // {nombre: 'Juan', edad: 30, ocupacion : 'Ingeniero'}


/** INSERCCCION EN UN SET
 * Dado un conjunto de números, inserta un nuevo número sin permitir duplicados.
 */
let datos = new Set([1,2,3]);
datos.add(4);
console.log(datos); //Salida → {1,2,3,4}


/**INSERCCION EN UNA MAP (Map)
 * Problmea: Ddao un mapa con claves y valores, agrega una nueva clave con su valor correspondiente
 */
let mapa = new Map();
mapa.set("nombre", "Ana");
mapa.set("edad",25);
mapa.set("ocupacion", "Diseñadora");
console.log(mapa); // Salida → {'nombre' => 'Ana', 'edad' => 25, 'ocupacion' => 'Diseñadora'}


/**INSERCION en un array en una posicion especifica
 * Problema → Ddao un array de numeros, inserta un nuevo numero en la segunda posicion
*/
let cantidad = [1,3,4];
cantidad.splice(1,0,2); //Inserta '2' en la posicion 1
console.log(cantidad); // [1,2,3,4]


/** INSERCION EN UNA COLA
 * Problema:** Implementa una cola y añade un elemento al final.
 */
class Cola {
    constructor() {
        this.elementos = [];
    }

    encolar(elemento) {
        this.elementos.push(elemento);
    }

    imprimir() {
        console.log(this.elementos);
    }
}

let cola = new Cola();
cola.encolar("A");
cola.encolar("B");
cola.encolar("C");
cola.imprimir(); // ['A', 'B', 'C']


/**INSERCION DE UNA PILA
 * Problema:** Implementa una pila y añade un elemento en la cima.
*/
class Pila {
    constructor() {
        this.elementos = [];
    }

    apilar(elemento) {
        this.elementos.push(elemento);
    }

    imprimir() {
        console.log(this.elementos);
    }
}

let pila = new Pila();
pila.apilar(10);
pila.apilar(20);
pila.apilar(30);
pila.imprimir(); // [10, 20, 30]


/** PROBLEMA 1:
 *Dado un array de números, escribe una función que inserte un nuevo elemento
 * en una posición específica dentro del array. La función debe recibir el array
 * original, el elemento a insertar y la posición donde debe colocarse.
 * El resultado final debe reflejar el nuevo orden del array con el elemento en la
 * posición deseada.
 */
let problema_One = [1,2,3,4,5];
problema_One.splice(1,0,6);
console.log(problema_One); // Salida : → [1, 6, 2, 3, 4, 5]


function insertarElemento(array, elemento, posicion) {
    array.splice(posicion, 0, elemento);
    return array;
}
let problema_One1 = [1, 2, 3, 4, 5];
let resultado = insertarElemento(problema_One1, 6, 1);
console.log(resultado);  // Salida : → [1, 6, 2, 3, 4, 5]


/** PROBLEMA 2: Eliminar un elemento de un array
 * Escribe una función que elimine un elemento específico de un array,
 * dado su posición. La función debe recibir el array original y
 * la posición del elemento que debe eliminarse.
 * El resultado final debe reflejar el nuevo orden del array
 * sin el elemento eliminado.
 */
function eliminacion (){
let numerossss = [5, 6, 7, 8, 9];
let resultadooo = numerossss.filter(numerooo => numerooo !== 6);
console.log(resultadooo); // → [1, 2, 4, 5
}
eliminacion();


/** PROBLEMA 3: Insertar varios elementos en un array
 * Debes escribir una función en JavaScript que reciba:
 * Un array original.
 * Un conjunto de elementos nuevos que deben insertarse.
 * Las posiciones respectivas en las que deben insertarse estos nuevos elementos.
 * La función debe recorrer los elementos y ubicarlos en la posición correcta dentro del array sin eliminar ni modificar los demás elementos.
 */
function insertarse(){
let  primer_array = [1,2,4,5,6];
primer_array.splice(2,0,3);
console.log(primer_array);
}
insertarse();


/** PROBLEMA 4:  Reemplazar un elemento en un array
 * Escribe una función que reciba un array, una posición y un nuevo elemento, y que
 * reemplace el elemento existente en esa posición con el nuevo valor. El resultado
 * final debe reflejar el cambio sin alterar el resto del array.
 */
function reemplazar(orden, reciente, lugar) {
    orden.splice(lugar, 1, reciente); //Agregando el 1, se elimina el 8 y se coloca el nuevo elemento
    return orden;
}
let array_Original = [9,8,7,6,5,4,3];
let total = reemplazar(array_Original,3,1);
console.log(total);


/** PROBLEMA 5: Insertar si no esta presente
 * Escribe una función que reciba un array y un número.
 * Si el número ya está en el array, debe devolver su posición.
 * Si no está presente, debe insertarlo en orden ascendente y devolver
 * la nueva posición.
 */
function buscarEnArray(array, numero) {
    return array.includes(numero); // Devuelve true si el número está en el array
  }
  
  let miArray = [1, 2, 3, 4, 5];
  let numeroBuscado = 6;
  
  if (buscarEnArray(miArray, numeroBuscado)) {
    console.log(`El número ${numeroBuscado} está en el array.`);
  } else {
    console.log(`El número ${numeroBuscado} no está en el array.`);
  }

/** PROBLEA 6: Insertar elementos en orden alterno
 * Crea una función que reciba un array y un conjunto de elementos.
 * Debe insertar los elementos nuevos alternando posiciones dentro del array original.
 */
function conjunto_Elementos (array,conjuntos) {
    return array.filter(conjuntos)
}
let array = [3,4,5,6,7,8,9];
let conjuntos = 2;




/** BORRADO
 * delete → Elimina una propiedad de un objetoo de un array.
 * remove → Elimina elementos del DOM.
 * removeChild → Elimina un elemento hijo de un nodo. Requiere el elemento hijo a eliminar y el nodo padre.
 */

/** ACTUALIZACION
 * map → Crea un nuevo arreglo con los resultados de aplicar una funcion a cada elemento del arreglo original
 * forEach → Ejecuta uan funcion para cada elemento del arreglo, lo que puede ser util para actualizar valores dentro de un bucle
 */

/** ORDENACION
 * sort → Ordena los elementos del array en el lugar y devuelve el array ordenado
 */

//slice → Es un metodo qur epermite proporcionar exactamente para copiar una matriz