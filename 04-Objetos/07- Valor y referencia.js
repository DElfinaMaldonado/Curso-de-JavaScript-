// /* OBJETOS */
let a = {}; // Cuando nosostros asignamos los objetos a una variable → Se crea una variable
let b = a;

b.propiedad = 1;
console.log(a,b); // Salidad → {propiedad: 1} → {propiedad: 1} → ya que evalua la direccion y no el objeto mismo



// /* VARIABLES */
let a1 = 1;
let b1 =a1;
b++;
console.log(a, b); // Salidad → 1 2



/* FUNCIONES */
let a2 = 1;

function suma(n) { //Cada vez que nostros definimos parametros, Javascript crea una nueva variable
                  //Entonces se tiene a y n, por lo que se consideran variables diferentes
    n++;
}

suma(a2)
console.log(a2); // Salida → 1


/* OBJETO */
let a3 = {propiedad :1}

function suma (n) {
    n.propiedad ++;
}

suma (a3)
console.log(a3);
