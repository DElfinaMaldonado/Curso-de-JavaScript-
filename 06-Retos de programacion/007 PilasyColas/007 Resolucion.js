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
apodo.push('Cesar');
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

const pila_cinco = new PILA_cinco();
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

// EJERCICIO 2: Comprobación de paréntesis balanceados
// Valida si una expresión contiene paréntesis abiertos y cerrados correctamente.
function validarParentesis(expresion) {
  const pila = [];
  for (let i = 0; i < expresion.length; i++) {
    const caracter = expresion[i];
    if (caracter === '(') {
      pila.push(caracter);
    } else if (caracter === ')') {
      if (pila.length === 0) {
        return false; // Paréntesis cerrado sin abrir
      }
      pila.pop();
    }
  }
  return pila.length === 0; // Si la pila está vacía, los paréntesis están balanceados
}
console.log(validarParentesis("((()))")); // True → Se tiene parentesis abiertos y cerrados
console.log(validarParentesis('(((')); // False → Solo contiene parentesis abiertos


// EJERCICIO 3: Eliminar elementos especificos
/** Elimina todos los elementos iguales a "X" de una pila sin alterar el orden del resto. */
// Función para eliminar todos los elementos iguales a "X" de una pila sin alterar el orden del resto
const eliminarDatos_especificos = (pila, elemento) => {
  const temp = [];
  while (pila.length > 0) {
    const top = pila.pop();
    if (top !== elemento) {
      temp.push(top);
    }
  }
  while (temp.length > 0) {
    pila.push(temp.pop());
  }
  return pila;
};
// console.log(eliminarDatos_especificos);

const eliminarDatos_especific = ["X"];
const pieza = ['A', 'B', 'C', 'D'];
// const componente = [];
eliminarDatos_especific.splice(1, 2);
console.log(eliminarDatos_especific);

const numeros = ["Hola", "Mundo", "Mixiote", "tacos"];
numeros.splice(1, 2);
console.log(numeros);

// EJERCICIO 4: Simular deshacer
/**  Implementa una función que simule un sistema de "deshacer" (undo) usando una pila. */
function decimal_Binario(decimal) {
  const acumulador = nuevo_acumulador();
  if (decimal > 0) {
    residuo = decimal % 2;
    acumulador.aplilar(residuo);
    decimal = decimal;
  }
  const binario = "";
  // if(
  //   pila.vacia();
  //   binario = binario + structuredClone(acumulador.desapilar())
  // )
}
// función decimal_a_binario(decimal):
//   pila = nueva_pila()
//   mientras decimal > 0:
//     residuo = decimal % 2
//     pila.apilar(residuo)
//     decimal = decimal // 2

//   binario = ""
//   mientras no pila.esta_vacia():
//     binario = binario + str(pila.desapilar())

//   regresa binario





// EJERCICIOS DE COLAS
// EJERCICIO FACIL
// Se utiliza para organizar elementos en una secuencia, donde la insercion se realiza al final y la eliminacion al final
// El priemro que entra, es el primero en salir


// EJERCICIO 1: Crear una cola simple
/** Crea una cola vacía e inserta cinco números. */
class COLA_one {
  fundamentos = [];
  push = (fundamento) => { return this.fundamentos.push(fundamento) };
  shift = () => { return this.fundamentos.shift() };
  isempty = () => { return this.fundamentos.length === 0 };
  empty = () => { return this.fundamentos.length = 0; };
  size = () => { return this.fundamentos.length };
}
const colaone = new COLA_one();
colaone.push('g');
colaone.push('h');
colaone.push('i');
console.log(colaone.size());
console.log(colaone.shift());   // g
console.log(colaone.shift());  // h
console.log(colaone.shift()); // i

// EJERCICIO 2: Ver el primer elemento
/** Muestra cuál es el siguiente en ser atendido sin eliminarlo.  */
// Metodo push → Agregar nuevos elemenetos a la parte superior de la pila
// Metodo pop → Eliminara un elemento de la parte superior de la pila
// Metodo isempty → Comprueba si la pila esta vacia
// Metodo empty → Eliminara todos los elementos de la pila
// Metodo size → Devueleve el numero de elementos de la pila
class COLA_TWO {
  fundamentos = [];
  push = (fundamento) => this.fundamentos.push(fundamento);
  shift = () => this.fundamentos.shift();
  isempty = () => this.fundamentos.length === 0
  empty = () => this.fundamentos.length = 0;
  size = () => this.fundamentos.length;
  peek = () => this.fundamentos[this.fundamentos.length - 3];
}
const two = new COLA_TWO();
two.push('fresa');
two.push('uva');
two.push('platano');
console.log(two.peek()); // fresa → Se obtiene el valor de fresa ya que el primero en entrar

// EJERCICIO 3: Ver el primer elemento
/* Muestra cuál es el siguiente en ser atendido sin eliminarlo. */
class COLA_TRES {
  fundamentos = [];
  push = (fundamento) => this.fundamentos.push(fundamento);
  pop = () => this.fundamentos.pop();
  shift = () => this.fundamentos.shift();
  isempty = () => this.fundamentos.length === 0
  empty = () => this.fundamentos.length = 0;
}
const colatres = new COLA_TRES();
colatres.push('Melon');
colatres.push('uva');
colatres.push('platano');
console.log(colatres.shift());

//EJERCICIO 4: Comprobar si la cola está vacía
/** Comprobar si la cola está vacía */
class COLA_CUATRO {
  principios = [];
  push = (principio) => this.principios.push(principio);
  pop = () => this.principios.pop();
  isempty = () => this.principios.length === 0;
  empty = () => { this.principios.length = 0; };
  size = () => this.principios.length;
}
const cola_cuatro = new COLA_CUATRO();
cola_cuatro.push('Pera');
cola_cuatro.push('Mango');
cola_cuatro.push('Frambuesa');
cola_cuatro.push('Sandia');
console.log(cola_cuatro.isempty()); // Si no se comentan los nombres, devuelve false porque no esta vacia. En cambio si se comenetan los nombres sale true porque la pila esta vacia

// EJERCICIO 5: Obtener la longitud de la cola:
/** Devuelve cuántos elementos contiene actualmente la cola  */
class COLA_CINCO {
  cuerpos = [];
  push = (cuerpo) => this.cuerpos.push(cuerpo);
  pop = () => this.cuerpos.pop();
  isempty = () => this.cuerpos.length === 0;
  empty = () => { this.cuerpos.length = 0; };
  size = () => this.cuerpos.length;
}
const cola_cinco = new COLA_CINCO();
cola_cinco.push('Quesadillas');
cola_cinco.push('Sopes');
cola_cinco.push('Gorditas');
cola_cinco.push('Mole');
console.log(cola_cinco.size()); // Imprime 4 porque hay 4 elementos en la pila



//  EJERCICIO INTERMEDIOS

// EJERCICIO 1: Intercalar dos colas
/** Dadas dos colas, crea una tercera que intercale sus elementos */
function intercalar_dosColas(FIFO_one, FIFO_two) { // Se crea la funcion para tomar los dos array de las dos colas
  resultado = []; // Crear un array vacion, para poder alamacenar el intercalado de los dos arrays
  let i = 0; //Se crea la variable de i con la inicializacion de 0
  let j = 0; //Se crea la variable de i con la inicializacion de 0
  while (i < FIFO_one.length || j < FIFO_two.length) { // Se va a repetir ciclo mientra existan elementos en la cola
    if (i < FIFO_one.length) {
      resultado.push(FIFO_one[i]);
      i++;
    }
    if (j < FIFO_two.length) {
      resultado.push(FIFO_two[j]);
      j++;
  }
}
return resultado;
}
const FIFO_one = [1, 2, 3, 4];
const FIFO_two = ['a', 'b', 'c', 'd'];
const colaIntercalada = intercalar_dosColas(FIFO_one, FIFO_two);
console.log(colaIntercalada); // Salida: [1,a,2,b,3,c,4,d]


// let i = 0;
// while (i < 10) {
//   if (i % 2 == 0) {
//     console.log('Numero par', i);
//   }
//   i++;
// }
// console.log('Fuera del bloque');

// EJERCICIO 2: Rotar elementos
/** Mueve el primer elemento de la cola al final N veces */
// function rotar_Elementos () {

// }


// EJERCICIO 3: Prioridad básica
/* Implementa una cola que permita insertar elementos con prioridad (mayor prioridad = primero en salir). */
class COLA_PRIORIDAD {
  origenes = [];
  push = (valor, prioridad) => this.origenes.push({ valor, prioridad });
  pop = () => {
    if (this.origenes.length === 0) return null;
    let maxIndex = 0;
    for (let i = 1; i < this.origenes.length; i++) {
      if (this.origenes[i].prioridad > this.origenes[maxIndex].prioridad) {
        maxIndex = i;
      }
    }
    return this.origenes.splice(maxIndex, 1)[0];
  };
  isempty = () => this.origenes.length === 0;
  size = () => this.origenes.length;
}
const colaPrioridad = new COLA_PRIORIDAD();
colaPrioridad.push('Tarea normal', 1);
colaPrioridad.push('Tarea urgente', 5);
colaPrioridad.push('Tarea media', 3);

console.log(colaPrioridad.pop()); // { valor: 'Tarea urgente', prioridad: 5 }
console.log(colaPrioridad.pop()); // { valor: 'Tarea media', prioridad: 3 }
console.log(colaPrioridad.pop()); // { valor: 'Tarea normal', prioridad: 1 }

// class COLA_SEIS {
//   fundamentos = [];
//   push = (fundamento) => this.fundamentos.push(fundamento);
//   pop = () => this.fundamentos.pop();
//   shift = () => this.fundamentos.shift();
//   isempty = () => this.fundamentos.length === 0
//   empty = () => this.fundamentos.length = 0;
// }
// const colaseis = new COLA_SEIS();
// if (colaseis > 8) {
//     console.log('Usuario mayor de edad');
// }

// colaseis.push('Melon');
// colaseis.push('uva');
// colaseis.push('platano');
// console.log(colaseis.shift());



// ...existing code...
// class COLA_PRIORIDAD {
//   elementos = [];
//   // Agrega un elemento con su prioridad
//   push = (valor, prioridad) => this.elementos.push({ valor, prioridad });
//   // Saca el elemento con mayor prioridad
//   pop = () => {
//     if (this.elementos.length === 0) return null;
//     let maxIndex = 0;
//     for (let i = 1; i < this.elementos.length; i++) {
//       if (this.elementos[i].prioridad > this.elementos[maxIndex].prioridad) {
//         maxIndex = i;
//       }
//     }
//     // Elimina y retorna el elemento de mayor prioridad
//     return this.elementos.splice(maxIndex, 1)[0];
//   };
//   isempty = () => this.elementos.length === 0;
//   size = () => this.elementos.length;
// }

// // Ejemplo de uso:
// const colaPrioridad = new COLA_PRIORIDAD();
// colaPrioridad.push('Tarea normal', 1);
// colaPrioridad.push('Tarea urgente', 5);
// colaPrioridad.push('Tarea media', 3);

// console.log(colaPrioridad.pop()); // { valor: 'Tarea urgente', prioridad: 5 }
// console.log(colaPrioridad.pop()); // { valor: 'Tarea media', prioridad: 3 }
// console.log(colaPrioridad.pop()); // { valor: 'Tarea normal', prioridad: 1 }
// // ...existing code...