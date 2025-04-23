const punto = {
    x: 10,
    y: 20,
    dibujar() {
        console.log('dibujando');
    }
};

//  verificar si una propiedad o metodo se encuentra dentro de un objeto

// delete punto.dibujar; // Error → punto.dibujar no es una funcion

//Utilizando in → podemos verificar si es que algun objeto tiene alguna propiedad en particular
if ('dibujar' in punto) {
    punto.dibujar();
}

//let keys = Objec.keys(punto); //Es lo mismo hacerlo de la manera de abajo ↓

//console.log(Object.keys(punto)); //El argumento es → punto  //Salida → (3) ['x', 'y', 'dibujar']


//Con of podemos reiterar un array
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}
