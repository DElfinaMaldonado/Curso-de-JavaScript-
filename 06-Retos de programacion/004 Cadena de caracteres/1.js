function simular_Estructura() {
    const informacion = { consumidor: { nombre: "Pamela", edad: 25,
        direccion: { ciudad: "Ciudad de Mexico", codigopostal : 54789}}};
        // { nombre: "Foca", edad: 2 },
        // { nombre: "Tortuga", edad: 11 },
        // { nombre: "Ballena", edad: 4 },
        // { nombre: "Pez", edad: 3 },

function reemplazar_Estructura(obj) {
    for( let key in obj) {
        if(obj[ key] === null) {
        } else if (typeof obj[key] === ' object') {
            reemplazar_Estructura(obj[key]);
        }
    }
    }
    console.log(informacion);
}








//         function reemplazar_Datos_Complejos () {
//     const datos = {
//         usuario: {
//             nombre: "Juan",
//             edad: null,
//             direccion: {
//                 ciudad: "Madrid",
//                 codigoPostal: null
//             }
//         }
//     };
// function reemplazar_Estructura(obj) {
//     for( let key in obj) {
//         if(obj[ key] === null) {
//         } else if (typeof obj[key] === ' object') {
//             reemplazar_Estructura(obj[key]);
//         }
//     }
//     }
//     console.log(informacion);
// }





//     function reemplazar_Null(obj) {
//         for (let key in obj) {
//             if (obj[key] === null) {
//                 obj[key] = undefined;
//             } else if (typeof obj[key] === 'object') {
//                 reemplazar_Null(obj[key]);
//             }
//         }
//     }
//     reemplazar_Null(datos);
//     console.log(datos);
// }


// function mitad_Numeros() {
//     const cantidad = [1, 2, 3, 4];
//     cantidad.forEach(function (cantida) {
//         const resultado = cantida / 2;
//         console.log(resultado);
//     });
//     console.log(cantida / 2);
// }
// mitad_Numeros();

//  function mitad_Cifra () {
//     const posicion = Math.round(particion .length /2) -1;
//     return particion.charAt(posicion);
//  }
//  console.log(mitad_Cifra(6));


// function mitad_Numero (numero) {
//     numeros = 5;
//     numeros.forEach(numero)
//     const resultado = numero / 2;
//     console.log(resultado);
// }
// mitad_Numero();



// function mitad_Numero(cifras) {
//     return cifras / 2;
// }
// // const cifras = 8;
// // const resultadoo = mitad_Numero(cifras);
// // console.log(`La mitad de ${cifras} es ${resultadoo}`);


    // function mitad(numero) {
    //     // return numero / 2;
    // }
    // const resultado = mitad(10);
    // console.log(resultado);



    //////////////////////////////////////////

    // function array_divido() {
//     const array_Numeros = [3, 6, 9, 12, 15, 18];
//     array_Numeros.forEach((cifra) => {
//         const fin = cifra / 3;
//         nuevo_array.push(fin);
//     });
// }
// array_divido();



// function repetirPalabras(frase, cantidad) {
//     const palabras = frase.split(" ");
//     const resultado = palabras.map((palabra) => palabra.repeat(cantidad));
//     return resultado.join(" ");
// }
// const frase_Original = " Hoy es Viernes ";
// const cantidad_Repeticiones = 3;
// const frase_Modificada = repetirPalabras(frase_Original, cantidad_Repeticiones);
// console.log(frase_Modificada);


// function doble_Comilla(arreglo) {
//     return arreglo.map((palabra) => `"${palabra}"`).join(", ");
// }
// const palabras = ["auto", "camion", "moto", "barco"];
// const objetivo = doble_Comilla(palabras);
// console.log(objetivo);

// array_Numeros.forEach(function(numero) {
//     const resultado = numero / 3;
//     nuevos_array.push(resultado);
// });
// array_divido ();


///////////
    // const numero = parseFloat(prompt("Ingrese un número:"));
    // const divisor = parseFloat(prompt("Ingrese el divisor:"));
    // if (divisor === 0) {
    //     console.log("No se puede dividir por cero.");
    //     return;
    // }
    // const resultado = numero / divisor;
    // console.log(`El resultado de la división es: ${resultado}`);



    //Division segura
    // function validar_Divisor() {
    // const numero = 10;
    // const divisor = 2;
    // if (isNaN(numero) || isNaN(divisor)) {
    //     console.log("Por favor, ingrese números válidos.");
    //     return;
    // } if (divisor === 0) {
    //     console.log("No se puede dividir por cero.");
    //     return;
    // }   }
    // validar_Divisor();


//     if (divisor === 0) {
//         console.log("No se puede dividir por cero.");
//         return;
//     }
//     const cantidad = 5;
//     const divisor = 0;
//     if (divisor === 0) {
//         console.log("No se pueda dividir por cero.");
//     }
// }
// validar_Divisor();

    // const numeros = [10, 20, 30, 40, 50];
    // const suma = numeros.reduce((acumulador, numero) => acumulador + (numero / 2), 0);
    // const promedio = suma / numeros.length;
    // console.log(`El promedio de las divisiones es: ${promedio}`);