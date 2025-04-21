//short-circuit

//falso
//false
// 0
// ''
// null
// undefined
// NaN

let nombre = '';
let username = nombre || 'Anonimo';
console.log(username); //Salida → Anonimo


let nombre1 = 'floresCampos';
let username1 = nombre1 || 'Anonimo';
console.log(username1); //Salida → floresCampos

function fn1() {
    console.log('soy funcion 1');
    return true;
}

function fn2() {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();