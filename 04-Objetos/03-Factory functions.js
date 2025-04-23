// Las Factory-functions → Permiten crear objetos de una manera sencilla y no repetitiva
// Deben de utilizar camelCase


//Ejemplo: Imaginemos que tenemos que crear multiples usuarios y todos deben de cumplir con una estructura similar

/*1.- Se escribe la logica una vez en la funcion y se usa como fabrica para crear nuevos objetos*/

function crearPersona(nombre, edad) {
    // El hacer un function,ayuda que al crear usuarios no se necesite repetir las propiedades
    return {
        nombre: nombre, //Es igual al tener → nombre,
        edad: edad,
        saludar: function () {
            console.log(
                `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`
            );
        },
    };
}

const persona1 = crearPersona("Juan", 30);
const persona2 = crearPersona("Maria", 25);

persona1.saludar(); // Hola, mi nombre es Juan y tengo 30 años.
persona2.saludar(); // Hola, mi nombre es Maria y tengo 25 años.
