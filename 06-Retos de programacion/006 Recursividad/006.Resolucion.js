// function recursividad (){
    let recursividad_cuenta = numero => {
    if (numero === 0) {
    return;
}
console.log(numero);
return recursividad_cuenta(numero -1);
};
console.log(recursividad_cuenta(5));
