// Los objetos son dinamicos, se puede agregar,quitar y se puede cambiar su valor en cualquier momento
const user = { id: 1}; // → Cuando nosotros definimos una variable con const no podemos cambiar el valor
user = 1; // No podemos cambiar el valor a una variable que fue definida como constante, Pero si podemos agregarle o quitarle propiedades


user.name = 'Nicolas';  // Para agregarle una nueva propiedad
user.guardar = function () {
    console.log('Guardando', user.name);  // Salida → Guardando Nicolas
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);


// object.freeze → congela el  objeto, no se pueden agregra, eliminar o modificar sus propiedades
const user1= Object.freeze({ id: 1});
user1.name = 'Nico';
user1.id = 2;
console.log(user1);


// object.seal → Para que las propiedades esten fijas, pero que sus valores si puedan cambiar
const user2= Object.seal({ id: 1});
user2.name = 'Nico';
user2.id = 2;
console.log(user2);