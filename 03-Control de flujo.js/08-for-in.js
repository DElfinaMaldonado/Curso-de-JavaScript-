let user = {
    id: 1,
    name: 'cerdito',
    age: 25,
};

for (let propiedad in user) {
    console.log(propiedad); //solo nos muestra la llave → id, name,age
}


let users = {
    id: 1,
    name: 'cerdito',
    age: 25,
};

for (let pertenencia in users) {
    console.log(pertenencia, users[pertenencia]); //Nos muestra la llave y el valor → id 1 , name Chanchito feliz, age 25
}


let animales = ['cerdito', 'vaca', 'loro', 'perro'];
for (let indice in animales){ // → el for in → le va asignar el valor a la variable de la izquierda 
    console.log(indice, animales[indice]);  /* Salida → 0 cerdito
                                                        1 vaca
                                                        2 loro
                                                        3 perro */
}


