/*
 * EJERCICIO:
 * Implementa los mecanismos de introducción y recuperación de elementos propios de las
 * pilas (stacks - LIFO) y las colas (queue - FIFO) utilizando una estructura de array
 * o lista (dependiendo de las posibilidades de tu lenguaje).
 */

// Metodo push → Agregar nuevos elemenetos a la parte superior de la pila
// Metodo pop → Eliminara un elemento de la parte superior de la pila
// Metodo isempty → Comprueba si la pila esta vacia
// Metodo empty → Eliminara todos los elementos de la pila
// Metodo size → Devueleve el numero de elementos de la pila

class PILA {
  elementos = [];
  push = (elemento) => this.elementos.push(elemento);
  pop = () => this.elementos.pop();
  isempty = () => this.elementos.length === 0;
  empty = () => { this.elementos.length = 0; };
  size = () => this.elementos.length;
}

const pila = new PILA();
pila.push('a');
pila.push('b');
pila.push('c');
console.log(pila.size());  // 3
console.log(pila.pop());  // c
console.log(pila.size()); // 2

// Pilas con elementos privados
class PILA_one {
  #elementos = [];
  push = (elemento) => this.#elementos.push(elemento);
  pop = () => this.#elementos.pop();
  isempty = () => this.#elementos.length === 0;
  empty = () => { this.#elementos.length = 0; };
  size = () => this.#elementos.length;
}

const pila_one = new PILA_one();
pila_one.push('d');
pila_one.push('e');
pila_one.push('f');
console.log(pila_one.size());  // 3
console.log(pila_one.pop());  // f
console.log(pila_one.size());  // 2



// EJERCICIOS FACILES

/** EJERCICIO 1 : Apilar elementos
 * Crea una pila vacía y añade cinco nombres a ella, uno por uno
 */
// const pilaNombres = new PILA();
const nombres = [];
nombres.push('Mayra');
nombres.push('Jonathan');
nombres.push('Oscar');
nombres.push('Paz');
nombres.push('Dylan');
// nombres.forEach(nombre => pilaNombres.push(nombre));
console.log(nombres);
// console.log(pilaNombres.elementos);


// EJERCICIO 2: Desapilar un elemento
/** Quita el último elemento de la pila creada previamente. */
const renombre = [];
renombre.push('Saul');
renombre.push('Delfi');
renombre.push('Monica');
renombre.push('Arturo');
renombre.push('Javier');
console.log(renombre);
renombre.pop('Javier');
console.log(renombre);


// EJERCICIO 3: Ver el elemento superior
/* Muestra en consola el elemento que está en la parte superior de la pila sin quitarlo.  */

class PILA_tres {
  elementos = [];
  push = (elemento) => this.elementos.push(elemento);
  pop = () => this.elementos.pop();
  isempty = () => this.elementos.length === 0;
  empty = () => { this.elementos.length = 0; };
  size = () => this.elementos.length;
  peek = () => this.elementos[this.elementos.length - 1]; // Agrega este método
}
// Uso para comprobar el uso
const apodo = new PILA_tres();
apodo.push('Jaime');
apodo.push('Ramiro');
apodo.push('Sergio');
apodo.push('Ramiro');
console.log(apodo.peek()); // Imprime  Ramiro


// EJERCICIO 4: Verificar si está vacía:
/** Escribe una función que devuelva true si la pila está vacía y false en caso contrario.  */
class PILA_cuatro {
  elementos = [];
  push = (elemento) => this.elementos.push(elemento);
  pop = () => this.elementos.pop();
  isempty = () => this.elementos.length === 0;
  empty = () => { this.elementos.length = 0; };
  size = () => this.elementos.length;
}

const pila_tres = new PILA_cuatro();
pila_tres.push('Jaime');
pila_tres.push('Ramiro');
pila_tres.push('Sergio');
pila_tres.push('Ramiro');
console.log(pila_tres.isempty()); // Si no se comentan los nombres, devuelve false porque no esta vacia. En cambio si se comenetan los nombres sale true porque la pila esta vacia

// Ejemplo 5: Contar elementos
/** Crea una función que devuelva cuántos elementos hay en la pila.*/
// Metodo push → Agregar nuevos elemenetos a la parte superior de la pila
// Metodo pop → Eliminara un elemento de la parte superior de la pila
// Metodo isempty → Comprueba si la pila esta vacia
// Metodo empty → Eliminara todos los elementos de la pila
// Metodo size → Devueleve el numero de elementos de la pila

class PILA_cinco {
  elementos = [];
  push = (elemento) => this.elementos.push(elemento);
  pop = () => this.elementos.pop();
  isempty = () => this.elementos.length === 0;
  empty = () => { this.elementos.length = 0; };
  size = () => this.elementos.length;
}

const pila_cinco= new PILA_cinco();
pila_cinco.push('Jaime');
pila_cinco.push('Ramiro');
pila_cinco.push('Sergio');
pila_cinco.push('Ramiro');
console.log(pila_cinco.size()); // Imprime 4 porque hay 4 elementos en la pila




// EJERCICIOS INTERMEDIOS:
// EJERCICIO 1: Invertir una cadena
/**  Usa una pila para invertir el orden de los caracteres de una palabra. */
// const pila_seis= new PILA_seis();
const pila_seis = ['Jaime', 'Ramiro', 'Sergio', 'Santiago'];
// ['Jaime', 'Ramiro', 'Sergio', 'Ramiro'].forEach(nombre => pila_seis.push(nombre));
// pila_seis.push('Jaime');
// pila_seis.push('Ramiro');
// pila_seis.push('Sergio');
// pila_seis.push('Ramiro');
pila_seis.reverse();
console.log(pila_seis);

// EJERCICIO 2:
const numeros = ["Hola", "Mundo", "Mixiote", "tacos"];
numeros.splice(x);
console.log(numeros);