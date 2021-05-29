import PokeballWithCharmander from '@/creational-patterns/factory-method/concrete-implementations/pokeball-with-charmander'
import PokeballWithSquirtle from '@/creational-patterns/factory-method/concrete-implementations/pokeball-with-squirtle'
import ThrowPokeball from '@/creational-patterns/factory-method/throw-pokeball'

describe('Creational pattern - Fabric method', () => {
    test('Should return eletric type, when inside pokeball has a Pikachu', async () => {
        const pokeball = new PokeballWithCharmander()
        const throwPokeball = new ThrowPokeball(pokeball)

        expect(throwPokeball.getPokemonName()).toBe('charmander')
    })

    test('Should return eletric type, when inside pokeball has a Meowth', async () => {
        const pokeball = new PokeballWithSquirtle()
        const throwPokeball = new ThrowPokeball(pokeball)

        expect(throwPokeball.getPokemonName()).toBe('squirtle')
    })
})
