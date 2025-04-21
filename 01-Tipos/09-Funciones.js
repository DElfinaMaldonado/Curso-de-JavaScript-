function saludar() {
    console.log('Hola Mundo');
}

saludar();


/* 1.- Una forma de imprimir dentro del console.log */
function suma() {
    return 2 + 2; // → Permite reutilizar codigo que se encuentre dentro de las funciones
}

let resultado = suma();
console.log(resultado);


/* 2.- Segunda forma de imprimir dentro del console.log */
function sumar(){
    return 2 + 2;
}

console.log(suma());