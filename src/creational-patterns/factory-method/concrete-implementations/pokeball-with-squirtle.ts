import AbstractPokeball from '../abstract/abstract-pokeball'
import Pokemon from '../abstract/pokemon'
import Squirtle from '../pokemons/squirtle'

export default class PokeballWithSquirtle extends AbstractPokeball {
    // Concrete creators override factory method to change the returning product
    // In this case change the returning pokemon
    public getPokemon(): Pokemon {
        return new Squirtle()
    }
}
