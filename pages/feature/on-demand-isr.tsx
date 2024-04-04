import PokemonDisplay from "@/components/pokemonDisplay"
import { Pokemon } from "@/types/pokemon"

export async function getStaticProps() {
    const randomNumber = Math.floor(Math.random() * 1000) + 1
    console.log(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
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
        <div className="h-full flex flex-col justify-center items-center">
            <p className="text-5xl underline">Testing Incremental Static Regeneration ISR</p>
            <PokemonDisplay pokemon={pokemon} />
        </div>
    )
}