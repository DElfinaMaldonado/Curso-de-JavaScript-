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



function dividir_numeros() {
    const asociación = [9,8,7,6,5,4,3,2,1];
    const respuesta_Divison = [];
    const divisor = 2;
    asociación.forEach((asociación) => {
       asociación /=2;
         console.log(asociación);
    });
}
dividir_numeros();