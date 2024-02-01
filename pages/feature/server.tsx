import PokemonDisplay from '@/components/pokemonDisplay'
import { Pokemon } from '@/types/pokemon'

export const getServerSideProps = (async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/6`)
    const pokemon = await res.json()

    return {
        props: {
            image: pokemon.sprites.other.home.front_default,
            name: pokemon.name,
        },
    }
})

export default function Page(pokemon: Pokemon) {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <p className="text-5xl underline">Testing GetServerSideProps()</p>
            <PokemonDisplay pokemon={pokemon} />
        </div>
    )
}