/**
 * indice validar que no sea menor a cero y que el elemento exista
 * en el array
 */

/** Construir una funcion qu epermita poder obtener un elemento por su indice
 *Le tenenmos que pasar el array y tambien el indice */

//repuesta tiene que regresar 2

function getbyIdx (arr, idx) { // Construir una funcion
    if (idx < 0 || arr.length <= idx ){
        return 'El elemento no existe';
    }
        return  arr[idx];
    }
let resultado =getbyIdx([1,2], 1)
console.log(resultado);

