//Si la condicion dentro del if es verdadera e ejecuta, en caso contario el bloque de codigo asociado a else


//Ejemplo
let edad = 15;
if (edad > 17) {
    console.log('Usuario mayor de edad');
} else if (edad > 13) {
    console.log('Usuario necesita estar acompañado de su padres')
}else {
    console.log('Usuario menor de edad');
}