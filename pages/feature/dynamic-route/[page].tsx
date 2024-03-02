import PokemonDisplay from "@/components/pokemonDisplay"
import { Pokemon } from "@/types/pokemon"
import { useRouter } from "next/router"

export const getServerSideProps = async ({ params }: { params: { page: string } }) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.page}`)
    const pokemon = await res.json()

    return {
        props: {
            image: pokemon.sprites.other.home.front_default,
            name: pokemon.name,
        },
    }
}

export default function Page(pokemon: Pokemon) {
    const router = useRouter()

    return (
        <div className="h-full flex flex-col justify-center items-center">
            <p className="text-5xl underline">Testing Dynamic Route</p>
            <PokemonDisplay pokemon={pokemon} />
        </div>
    )
}