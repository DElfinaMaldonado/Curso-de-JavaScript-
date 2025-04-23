/* Constructores */


// Se tiene que utilizar UpperCamelCase

function Usuario () { //El nombre que se le de a la funcion es del recurso que queremos →
    this.id = 1; // This → permite acceder a las propiedades
    this.recuperarClave = function () {  // Cuando tenemos una propiedad en JavaScript y el agregamos una function SE LLAMA → Metodo
        console.log('recuperar clave ...');
    }
}

/* new crea lo siguiente:
Cuando una función es ejecutada con new, realiza los siguientes pasos:
1.- Se crea un nuevo objeto vacío {}  y se asigna a this.
2.- Se ejecuta el cuerpo de la función. Normalmente se modifica this y se le agrega nuevas propiedades.
3.- Se devuelve el valor de this.
*/

let usuario = new Usuario ();
console.log(usuario);


/* Atajos */
let obj = {};
let obj1 = new Object ();

/**
 *new Array (); []
 *new String(); " " ' '
 *new Number(); 12, 4 → Un numero cualquiera
 *new Boolean(); // true, false
 */


function Usuario () {
    this.name = "cachito feliz";
}
let user = new Usuario();
console.log(user.constructor);


const s1 = "1 + 1";
const s2 = new String("1 + 1"); // Construido con el contsructor de string
console.log(s2.valueOf()); // valueOf → Si se tienbne que crear el string utilizando el constructor y despues obteniendo su valor