/** Estructura
 * Sirve para darnos datos
 */


/** Lista
 * Es una estructura de datso que se utiliza para almacenar una secuencia ordenada de elemenetos
 * Ejemplo: Los array */
const Lista = ['oso','perro','cotorro','cebra'];
console.log(Lista); //Salida → ['oso', 'perro', 'cotorro', 'cebra']

/** ANADIR UN NUEVO REGISRO A MI ARRAY  → INSERCION
 *  push → Añade uno o mas elementod al final de un array y devuyelve la longuitud del array
 */
const especie = Lista.push('leon');
console.log(Lista);  //Salida → ['oso', 'perro', 'cotorro', 'cebra', 'leon']



/** BORRAR
 * splice → Elimina un elemento del array
 */

// Elimna 0 elementos desde el indice 1 e inserta "drum"
let eliminacion1 = ["flor", "rosa", "girasol"];
let agregacion = eliminacion1.splice(2, 0, "margarita");
console.log (eliminacion1); // Salida → ['flor', 'rosa', 'margarita', 'girasol']

//Elimina 1 elemento desde el indice 3
let eliminacion2 = ["flor", "rosa", "girasol", "margarita", "tulipan"];
let agregacion2 = eliminacion2.splice(3, 1);
console.log(eliminacion2); // Salida → ['flor', 'rosa', 'girasol', 'tulipan']


//Elimina 1 elemento desde el indice 2 e inserta  Bugambilias
let eliminacion3 =  ["flor", "rosa", "girasol", "margarita", "tulipan"];
let agregacion3 = eliminacion3.splice(2,1,"bugambilias");
console.log(eliminacion3); // Salida → ['flor', 'rosa', 'bugambilias', 'margarita', 'tulipan']

//Elimina 2 elememntos desde el indice 0 e inserta "Clavel","rosales", "ruda"
let  eliminacion4 = ["flor", "rosa", "girasol", "margarita", "tulipan"];
let agregacion4 = eliminacion4.splice(0,3, "clavel", "rosales", "ruda");
console.log(eliminacion4); // Salida → ['clavel', 'rosales', 'ruda', 'margarita', 'tulipan']

//Elimina 2 elementos desde el indice 2
let eliminacion5 = ["flor", "rosa", "girasol", "margarita", "tulipan"];
let agregacion5 = eliminacion5.splice(eliminacion5.length -3, 2);
console.log(eliminacion5); //Salida → ['flor', 'rosa', 'tulipan']

//Elimina 1 elemento desde el indice -2
let eliminacion6 = ["flor", "rosa", "girasol", "tulipan"];
let agregacion6 = eliminacion6.splice(-2, 1);
console.log(eliminacion6); //Salida → ['flor', 'rosa', 'tulipan']

//Elmina todos los elementos traes el indice 2
let eliminacion7 = ["flor", "rosa", "girasol", "tulipan"];
let agregacion7 = eliminacion7.splice(2);
console.log(eliminacion7); //Salida → ['flor', 'rosa']



/** ACTUALIZACION
 * map → Crea un nuevo arreglo con los resultados de aplicar una funcion a cada elemento del arreglo original
 * splice() →
  */

//Asignacion directa
let lista1 = ["manzana", "banana", "cereza"];
lista1[1] = "pera";
console.log(lista1); // Salida → ['manzana', 'pera', 'cereza']

//Usanso splice() para ctualizar un elemento
let lista2 = ["manzana", "banana", "cereza"];
lista2.splice(1,1,"pera");
console.log(lista2); // Salida → ['manzana', 'pera', 'cereza']

//Usando map() para generar una nueva lista con ele cambio
let lista3 = ["manzana", "banana", "pera"];
lista3 = lista3.map((item, index) => index === 1 ? "mango" : item);
console.log(lista3); // Salida → ['manzana', 'mango', 'pera']



/** ORDNEACION
 * sort → Ordena los elementos del array en el lugar y devuelve el array ordenado
 */

//Ordenar conforme el abecedario
let frutas = ["manzana", "banana", "melon", "pera", "fresa"];
console.log(frutas.sort());

//Ordenar confome el numero
let numero = [20,4,3,27,30,78];
console.log(numero.sort());

//Ordenacion por unicode
let unicode = ["mayor", "mayor 3", "mayor 1", "mayor 2", "Mayor", "MAYOR"];
console.log(unicode.sort());
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.


/** Sets
 * Permite alamcear valores unicos de cauqlioer tipo, ya sean valores unicos de cualquier tipo ya sean valores primitivos o refrencias a objetos*
 * No permite valores repetidos */
const uno = new Set();
console.log(uno.size); // 0

const dos = new Set([5, 6, 7, 8]);
console.log(dos.size); // 4

const tres = new Set([5, 6, 7, 8, 8]); // El 8 solo se almacena una vez
console.log(tres.size); // 4 → El 8 solo se inserta una vez



// METODOS DE SET
/** ANADIR ELEMENTOS
 */
const cuatro = new Set();
console.log(cuatro.add(5));
console.log(cuatro.add("A"));

/** CONVERTIR ARRAYS */
const set = new Set([5, "A", [99, 10, 24]]);

console.log(set.size);                 // 3 (Contiene 3 elementos)
console.log(set.constructor.name);     // "Set"
const array1 = [...set];

console.log(array1.constructor.name);   // "Array"
console.log(array1);                    // [5, "A", [99, 10, 24]]
/**Salida →  0: 5
            1: "A"
            [99, 10, 24]
            **/

/// CONVERTIR UN ARRAY EN UN SET
const cinco = [5,4,3,3,4];
const cinco1 = new Set(cinco);
console.log(cinco1); // Salida → {5, 4, 3}


/** Tuplas
 * Se pueden simular tuplas utilizando arreglos
 */
let Tuplas = ["nombre", 30, true];
let one = Tuplas[0];
console.log(Tuplas[0]);
console.log(Tuplas[1]);
console.log(Tuplas[2]);


/** DICCIONARIO
 * Es conocido como un objteo o mapa, es una estructura de datos que almacena
 * pares clave-valos, Las claves son unicas y se utiliza para acceder a los valores
 *  */
// Usando la notación literal de objeto
const myDictionary = {
    "nombre": "Juan",
    "edad": 30,
    "ciudad": "Madrid"
  };
  
  // Usando la clase Map
  const myMap = new Map();
  myMap.set("nombre", "Juan");
  myMap.set("edad", 30);
  myMap.set("ciudad", "Madrid");


  // Usando la notación literal de objeto
console.log(myDictionary["nombre"]); // Output: Juan
console.log(myDictionary.edad); // Output: 30
// Usando la clase Map
console.log(myMap.get("nombre")); // Output: Juan
console.log(myMap.get("edad")); // Output: 30


/** DIFICULTAD EXTRA
 * Crea una agenda de contactos por terminal.
 * Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * Cada contacto debe tener un nombre y un número de teléfono.
 * El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * El programa no puede dejar introducir números de teléfono no numéricos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * También se debe proponer una operación de finalización del programa.
 */


let agenda = [];

function mostrarMenu() {
    console.log("\nAgenda de contactos:");
    console.log("1.- Buscar contacto");
    console.log("2.- Insertar contacto");
    console.log("3.- Actualizar contacto");
    console.log("4.- Eliminar contacto");
    console.log("5.- Salir");
}

function buscarContacto() {
    let name = prompt("Introduce el nombre del contacto: ");
    let contacto = agenda.find(c => c.nombre.toLowerCase() === name.toLowerCase());

    if (contacto) {
        console.log(`El número de teléfono de ${name} es ${contacto.telefono}`);
    } else {
        console.log(`El contacto ${name} no existe`);
    }
}

function insertarContacto() {
    let name = prompt("Introduce el nombre del contacto: ");
    let phone = prompt("Introduce el teléfono del contacto (máx. 11 dígitos): ");

    if (!/^\d{1,11}$/.test(phone)) {
        console.log("Número inválido. Debe contener solo números y máximo 11 dígitos.");
        return;
    }

    agenda.push({ nombre: name, telefono: phone });
    console.log(`El contacto ${name} ha sido agregado.`);
}

function actualizarContacto() {
    let name = prompt("Introduce el nombre del contacto a actualizar: ");
    let contacto = agenda.find(c => c.nombre.toLowerCase() === name.toLowerCase());

    if (!contacto) {
        console.log(`El contacto ${name} no existe.`);
        return;
    }

    let nuevoTelefono = prompt("Introduce el nuevo número de teléfono: ");
    if (!/^\d{1,11}$/.test(nuevoTelefono)) {
        console.log("Número inválido. Debe contener solo números y máximo 11 dígitos.");
        return;
    }

    contacto.telefono = nuevoTelefono;
    console.log(`El contacto ${name} ha sido actualizado.`);
}

function eliminarContacto() {
    let name = prompt("Introduce el nombre del contacto a eliminar: ");
    let index = agenda.findIndex(c => c.nombre.toLowerCase() === name.toLowerCase());

    if (index === -1) {
        console.log(`El contacto ${name} no existe.`);
        return;
    }

    agenda.splice(index, 1);
    console.log(`El contacto ${name} ha sido eliminado.`);
}

function iniciarAgenda() {
    while (true) {
        mostrarMenu();
        let opcion = prompt("Selecciona una opción: ");

        switch (opcion) {
            case "1":
                buscarContacto();
                break;
            case "2":
                insertarContacto();
                break;
            case "3":
                actualizarContacto();
                break;
            case "4":
                eliminarContacto();
                break;
            case "5":
                console.log("Saliendo de la agenda...");
                return;
            default:
                console.log("Opción no válida, intenta de nuevo.");
        }
    }
}

// **Iniciar el programa**
iniciarAgenda();

