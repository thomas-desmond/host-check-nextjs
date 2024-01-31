import PokemonDisplay from "@/components/pokemonDisplay"
import { Pokemon } from "@/types/pokemon"

export async function getStaticProps() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/4`)
    const pokemon = await res.json()

    return {
        props: {
            image: pokemon.sprites.other.home.front_default,
            name: pokemon.name,
        },
    }
}


export default function Page(pokemon: Pokemon) {
    return (
        <PokemonDisplay pokemon={pokemon} />
    )
}