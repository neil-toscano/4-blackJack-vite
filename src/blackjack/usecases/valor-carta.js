/**
 * Recibe de parametro un string 
 * @param {string} carta 
 * @returns {number}Devuelve el valor de la carta
 */
export const valorCarta = ( carta='' ) => {
    if(carta.length===0){
        throw new Error('no viene el string carta');
    }


    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}