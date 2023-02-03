export const crearCartaHtml=(carta, divCartasComputadora)=>{
    if(!carta) throw new Error('debe venir la carta para el Html');
    if(!divCartasComputadora) throw new Error('debe venir el div cartas computadora');
    const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

}