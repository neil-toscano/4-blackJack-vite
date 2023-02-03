import _ from "underscore";
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>} Retorna un nuevo deck 
 */
export const crearDeck = (tiposCarta=[],tiposEspeciales=[]) => {
    if(!tiposCarta) throw new Error('tipos de carta es obligatorio');
    if(tiposCarta.length<1) throw new Error('La longitud debe se mayor que 0');

    if(!tiposEspeciales) throw new Error('tiposdeCartaEspecial es obligatorio');
    if(tiposEspeciales.length<1) throw new Error('La longitud debe se mayor que 0');
    
    let deck=[];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    //console.log( deck );
    return deck;
}