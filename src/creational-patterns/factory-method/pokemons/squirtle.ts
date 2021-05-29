import Pokemon from '../abstract/pokemon'

export default class Squirtle implements Pokemon {
    public name(): string {
        return 'squirtle'
    }
}
