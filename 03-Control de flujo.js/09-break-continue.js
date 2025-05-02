// Para detener la ejecucion

/* break → Permite salirnos de loop
/* continue → Permite saltarnos una iteracion */

let i = 0;
while ( i < 6 ) {
    i ++;
    if ( i === 2){   //Salida → 1 3 4 5 6
        continue;
    }
    if (i === 4){   //Salida → 1 3
        break;
    }
    console.log(i);

}

const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}