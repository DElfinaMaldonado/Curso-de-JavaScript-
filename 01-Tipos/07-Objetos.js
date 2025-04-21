/* Podemos pensar en un lapiz
Lapiz
-Color
-Tamaño
-Longuitud
-Fabricante
-Peso
*/

let nombre = "Tanjiro";
let anime = "Deemon slayer";
let edad = 16;

let personaje = {}; // {} → Objeto lineal


let personaje1 = {
    nombre: "Tanjiro", // se le conoce como → par llave - valor
    anime: "Deemon slayer",
    edad: 16,
}
console.log(personaje1); // Javascript no asegura el orden de las propiedades
/* {nombre: 'Tanjiro', anime: 'Deemon slayer', edad: 16}
anime:"Deemon slayer"
edad:16
nombre: "Tanjiro" */


// Si solamente se quiere acceder a una propiedad y no a todo objeto completo. EXISTEN DOS FORMAS
console.log(personaje1.edad);
console.log(personaje1['anime']);


// Si se desea modificar una propiedad
personaje1.edad = 34;
personaje1['edad'] =67;


// Si se desea eliminar una propiedad
delete personaje1.anime;
console.log(personaje1);
