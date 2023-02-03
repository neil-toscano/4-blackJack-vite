import { crearCartaHtml, pedirCarta, valorCarta } from "./index";

/**
 * 
 * @param {*} puntosMinimos 
 */
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,deck ) => {
   
    let puntosComputadora = 0;
   // if(!puntosMinimos){
   //     console.log((puntosMinimos));
   //     throw new Error('puntos minimos es necesario!')
   // }

    do {
        
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        
        // TODO:crear  cartaHtml
        crearCartaHtml(carta,divCartasComputadora);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}