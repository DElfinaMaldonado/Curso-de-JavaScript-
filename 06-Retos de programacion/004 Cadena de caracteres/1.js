// Longitud de la cadena
console.log(cadena.length); // 17

// Subcadenas
console.log(cadena.substring(6, 16)); // 'JavaScript'
console.log(cadena.slice(-10)); // 'JavaScript!'

// Concatenación
const nuevaCadena = cadena + " ¡Es genial!";
console.log(nuevaCadena);

// Repetición
console.log("Hola ".repeat(3)); // 'Hola Hola Hola '

// Recorrido
for (let char of cadena) {
    console.log(char);
}

// Conversión a mayúsculas y minúsculas
console.log(cadena.toUpperCase()); // 'HOLA, JAVASCRIPT!'
console.log(cadena.toLowerCase()); // 'hola, javascript!'

// Reemplazo
console.log(cadena.replace("JavaScript", "el mundo")); // 'Hola, el mundo!'

// División
const palabras = cadena.split(" ");
console.log(palabras); // ['Hola,', 'JavaScript!']

// Unión
console.log(palabras.join(" - ")); // 'Hola, - JavaScript!'

// Interpolación
const lenguaje = "JavaScript";
console.log(`Me encanta ${lenguaje}`); // 'Me encanta JavaScript'

// Verificación
console.log(cadena.includes("JavaScript")); // true
console.log(cadena.startsWith("Hola")); // true
console.log(cadena.endsWith("!")); // true
console.log(cadena.indexOf("JavaScript")); // 6
console.log(cadena.lastIndexOf("a")); // 13

// Eliminación de espacios en blanco
const cadenaEspacios = "  Hola, mundo!  ";
console.log(cadenaEspacios.trim()); // 'Hola, mundo!'