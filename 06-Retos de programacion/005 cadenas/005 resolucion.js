// Muestra ejemplos de asignación de variables "por valor" y "por referencia"

//Asignacion valore primitivos
let a = 'Hola';
let b = a; //Le asignamos el valor de a a a b
a += '!'; // Se cambia el valor de a añadiendo un signo al final
console.log(a);
console.log(b);
/** Al añadir el valor de a a a b, siguen siendo independientes cada una toma un valor y auqnue se modifique a , b sigue manteniendo su valor */


// Asignando valores complejos
const variable_a = [1,2,3,5];
const variable_b = variable_a;
variable_a.push(a);
console.log(a);
console.log(b);
/** En este codigo se ve como se le puede asignar el valor de un array en una variable,
 * El valor no se copia lo que se copia es una referencia
 * Cuando se cambia el valor de la variable a tambien se cambia en la variable b
 */


// Pasando valores a una funcion
//** Cuando se pasa un valor primitivo como argumeneto a una funcion, el valor que recibimos dentro de la funcion es siempre una copia lo que implica que cualquier mutuacion de los parametros dentro de una funcion no afecta el valor del contexto */
const valores_funcion = (str) => {
    str = 'Hello';
return str;
}
const aString = 'a';
console.log(valores_funcion(aString ));
console.log(aString);

//Pasando valores complejos
const valores_Complejos = (arr) => {
    const resultado = [];
    while (arr.length) {
        reultado.push(Haceralgoconelarreglo(arr.shift()));
    }
    return resultado;
};
const arr = [1,2,3,4,5];
valores_Complejos(arr);
console.log(arr);
/** Cuando modificamo el argumento arr estamos modificando el mismo valor al que hace referencia la variable original a.
 */

//↑
/**Funcion anterior refactorizada, sin modificar el arrat que recibe como argumento.  */
const valores_Complejos2 = (arr2) => {
    const resultado = [];
    while (arr2.length) {
        reultado.push(Haceralgoconelarreglo(arr2.shift()));
    }
    return resultado;
};
const arr2 = [1,2,3,4,5];
console.log(valores_Complejos(arr2));
console.log(arr2);





//01prueba0616