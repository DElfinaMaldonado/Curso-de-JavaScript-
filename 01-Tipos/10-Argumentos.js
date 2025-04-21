function suma(a) { // → Cuando nosotros referenciamos los valores (a) dentro de las funciones se llaman: PARAMETROS
    return a + 2;
}

let resultado = suma(5); // → los valores que nosotros agregamos cuando se llama a la funcion se llama ARGUMENTOS
console.log(resultado);



function sumar(a, b) {
    return a + b;
}

let resultado1 = sumar(6, 6);
console.log(resultado1);


console.log(typeof suma); // Nos arroja el tipo → function