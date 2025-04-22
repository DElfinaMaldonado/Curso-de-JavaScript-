let email = 'nico@holamundo.io';
let name = 'Nicolas';
let direccion = {
    calle: 'Queen st',
    numero: 15,
};


// Crear un objeto para que sea mas facil de trabajar
let user = {
    email: 'nico@holamundo.io',
    name: 'Nicolas',
    direccion: {
        calle: 'Queen st',
        numero: 15,
    },
    activo: true,
    recuperarClave: function () { // Colocar fuction ()  sin su nombre se le conoce como → function anonima
        console.log('Recuperando clave...')
    }

}