/*
 * EJERCICIO:
 * Implementa los mecanismos de introducción y recuperación de elementos propios de las
 * pilas (stacks - LIFO) y las colas (queue - FIFO) utilizando una estructura de array
 * o lista (dependiendo de las posibilidades de tu lenguaje).
 *
 * DIFICULTAD EXTRA (opcional):
 * - Utilizando la implementación de pila y cadenas de texto, simula el mecanismo adelante/atrás
 *   de un navegador web. Crea un programa en el que puedas navegar a una página o indicarle
 *   que te quieres desplazar adelante o atrás, mostrando en cada caso el nombre de la web.
 *   Las palabras "adelante", "atrás" desencadenan esta acción, el resto se interpreta como
 *   el nombre de una nueva web.
 * - Utilizando la implementación de cola y cadenas de texto, simula el mecanismo de una
 *   impresora compartida que recibe documentos y los imprime cuando así se le indica.
 *   La palabra "imprimir" imprime un elemento de la cola, el resto de palabras se
 *   interpretan como nombres de documentos.
 */



function validaPartensis(expresion) {
  const pila = [];
  for (let i = 0; i < expresion.length(); i++) {
    const caracter = expresion.charAt(i);
    if (caracter === '(') {
      pila.push(caracter);
    } else if (caracter === ')') {
      if (pila.isempty()) {
        return false;
      }
      pila.pop();
    }
  }
  return pila.isempty();
}
console.log(validaPartensis("((()))")); // true



function parentesis(numeros) {
const parentesisIzquierda_sinParear = 0;
const parentesisDerecha_sinParear = 0;
for (let i = 0; i < numeros.length(); i++) {
if( numeros.charAt(i) === '(') {
    parentesisIzquierda_sinParear++;
  } else if (numeros.charAt(i) === ')') {
    parentesisDerecha_sinParear++;
  } else {
    parentesisIzquierda_sinParear++;
  }
}
return parentesisIzquierda_sinParear + parentesisDerecha_sinParear;
}
console.log(parentesis("((()))"));


const eliminarDatos_especificos = ["X"];
const pieza = ['A', 'B', 'C', 'D'];
// const componente = [];
eliminarDatos_especificos.splice(1, 2);
console.log(eliminarDatos_especificos);

const numeros = ["Hola", "Mundo", "Mixiote", "tacos"];
numeros.splice(1, 2);
console.log(numeros);