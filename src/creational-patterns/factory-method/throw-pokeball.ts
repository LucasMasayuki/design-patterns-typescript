import AbstractPokeball from './abstract/abstract-pokeball'

export default class ThrowPokeball {
    private pokeball: AbstractPokeball

    constructor(pokeball: AbstractPokeball) {
        this.pokeball = pokeball
    }

    public getPokemonName(): string {
        return this.pokeball.getPokemonName()
    }
}
