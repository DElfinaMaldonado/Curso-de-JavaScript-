// do-while → En lugar de vealuar la condicion al comienzo lo hara al final
let i = 0;
while (i < 3) { //→ Se evalua primero la condicion
    if (i % 2 == 0) {
    console.log('Numero par', i);
}
i++;
}

do { //→ Ejecutar la proporcion de codigo
    if (i % 2 == 0) {
        console.log('Numero par', i);
    }
    i++;
} while (i < 3); //→  y luego realizara la evaluacion y si se cumple vuelve a subir
