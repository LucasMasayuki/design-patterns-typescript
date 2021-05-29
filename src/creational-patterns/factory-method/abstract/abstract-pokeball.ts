import Pokemon from './pokemon'

// The creator class declares the factory method that should return
// an object of a product class. The creator's subclasses
// provide the implementation of this method.
export default abstract class AbstractPokeball {
    // Factory method
    public abstract getPokemon(): Pokemon

    // The main responsibility of the class, despite its name, is not to create products,
    // but to use the product produced by the implementation of the method manufactures present in other classes,
    // and uses them in the logic of business present in the class.
    public getPokemonName(): string {
        const pokemon = this.getPokemon()

        return pokemon.name()
    }
}
