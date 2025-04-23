// Las funciones tambien son objetos y se le considera como objetos de primera clase

function Usuario(nombre) {
    this.nombre = nombre;
}

// Tiene propiedades como los objetos ↓
console.log(Usuario.name);
console.log(Usuario.length);

// ↓ Podemos asignarle a otras variables o a otras constantes
const U = Usuario
let user = new U('Nicolas');

console.log(user);

// Las podemos pasar como argumentos a otras funciones
function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);

// Las funciones pueden ser retonadas en JavaScript ↓
function returned () {
    return function () {
        console.log('Hola Mundo');
    }
}


let saludo = returned();
saludo();