const user = { id:1 }; // → Cuando nosotros definimos una variable con const no se puede cambiar su valor a la misma variable

user.name ='Nicolas';
user.guardar =function () {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);


//const user1 = Object.freeze({ id:1 }); // → No permite cambiar el valor
const user1 = Object.seal({ id:1 }); // → (seal) → Si queremos que las variables no se puedan cambiar, pero los valores si
user1.name = 'Nico';
user1.id = 2;
console.log(user1);