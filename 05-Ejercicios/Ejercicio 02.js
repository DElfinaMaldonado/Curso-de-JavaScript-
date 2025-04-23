// Devolver el nombre de la resolucion depediendo de los valores que nosotros le pasemos

/**
 * Nomnre: ancho x alto
 * 8K 7680 x 4320
 * 4K 3840 X 2160
 * WQHD 2560 X 1440
 * FDH 1920 X 1080
 * HD 1280 X 720
 */

function Resolucion (ancho, alto) {
    if (ancho > 7680 && alto > 4320) {
        return '8K';
    } else if (ancho >= 3840 && alto >= 2160) {
        return '4K';
    } else if (ancho >= 2560 && alto >= 1140) {
        return 'WQHD';
    }else if (ancho >= 1920 && alto >= 1080) {
        return 'FDH';
    }else if (ancho >= 1280 && alto >= 720) {
        return 'HD';
    } else
    return false;
}

let nombre = Resolucion (2560,1140);
console.log(nombre );
