// AND, OR NOT

//AND &&

console.log(true && true);
console.log(false && true);

//Ejemplo de que una persona ses mayor de edad y este suscrita en neflix
let mayor = false;
let suscrito = true;
console.log('operador and', mayor && suscrito);

// OR ||
 // Solo si alguno de los dos evalua en true
console.log('operador or', mayor || suscrito);


//NOT !
console.log('operador not', !mayor); // → Nuestra variable es mayor es false, pero NOT invierte entonces arroja → true

//↓
 /*Ejemplo: Si solo queremos que acceda al catologo infantil si es niño */
let catalogoInfantil = !mayor;