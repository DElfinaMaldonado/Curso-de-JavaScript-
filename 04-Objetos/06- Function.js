function Punto(x,y) {
    this.x = x;
    this.y = y;
    this.dibujar = function () { console.log('Dibujando...')} //Salida → {x: 1, y: 2, dibujar: ƒ}
}

let punto = {z: 7}
Punto.call(punto,1,2); // call → Permite llamar funciones a las cuales les puede pasar de this
                       //Salida → {z:7, x: 1, y: 2, dibujar: ƒ}

Punto.apply(punto, [1,2]); // Hace lo mismo de call → Pero todos los argumentos que le pasemos, se los tenemos que entregar con la forma de un array []
//Utilizando el constructor de function
const Point = new Function('x', 'y', `
this.x = x;
this.y = y;
this.dibujar = function () { console.log('Dibujando...')}
`);

const p = new Point(1,2);
console.log(p);