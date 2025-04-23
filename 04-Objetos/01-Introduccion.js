// let email = 'nico@holamundo.io';
// let name = 'Nicolas';
// let direccion = {
//     calle: 'Queen st',
//     numero: 15,
// };


// Crear un objeto para que sea mas facil de trabajar
let user = {
    email: 'nico@holamundo.io',
    name: 'Nicolas',
    direccion: { // → se puede crear un objeto dentro de otro objeto
        calle: 'Queen st',
        numero: 15,
    },
    activo: true, //→ Para saber si el usuario se encuentra activo o no
    recuperarClave: function () { // Colocar fuction ()  sin su nombre se le conoce como → function anonima
        console.log('Recuperando clave...')
    }

}