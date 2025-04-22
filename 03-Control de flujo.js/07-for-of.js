//iterar un listado de elementos como un array

let animales = ['cerdo', 'vaca', 'lobo', 'perro', 'loro'];

for (let animal of animales) {
    console.log(animal);
}

//iterar un array utilizando → do while
let i = 0;
while (i < animales.length) {
    console.log(animales[i]);
    i++;
}