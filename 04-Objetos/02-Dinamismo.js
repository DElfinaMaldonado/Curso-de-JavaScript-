const user = { id: 1}; // → Cuando nosotros definimos una variable con const no podemos cambiar el valor, podemos cambiar el valor al objeto,agregar o eliminar, pero no hacr que deje de ser un objeto 

user.name = 'Nicolas';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);


// object.freeze → congela el  objeto, no se pueden agregra, eliminar o modificsr sus propiedades
const user1= Object.freeze({ id: 1});
user1.name = 'Nico';
user1.id = 2;
console.log(user1);


// object.freeze → congela
const user2= Object.seal({ id: 1});
user2.name = 'Nico';
user2.id = 2;
console.log(user2);