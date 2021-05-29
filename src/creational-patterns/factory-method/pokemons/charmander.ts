import Pokemon from '../abstract/pokemon'

export default class Charmander implements Pokemon {
    public name(): string {
        return 'charmander'
    }
}
