import _ from 'underscore';

/**
 * 
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S'] 
 * @param {*} tiposEspeciales Ejemplo: ['A','J', 'Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    let deck = []; 

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );

    return deck;
}