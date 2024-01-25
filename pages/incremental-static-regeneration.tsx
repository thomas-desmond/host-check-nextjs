import { InferGetStaticPropsType } from "next"
import Image from "next/image"

type Pokemon = {
    pokemonImage: string
}

export async function getStaticProps() {
    //generate random number between 1 and 1000
    const randomNumber = Math.floor(Math.random() * 1000) + 1
    console.log(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    const pokemon = await res.json()

    return {
        props: {
            pokemonImage: pokemon.sprites.front_default,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 1 seconds
        revalidate: 1, // In seconds
    }
}


export default function Page({ pokemonImage }: Pokemon) {
    console.log(pokemonImage)
    return (
        <main>
            <Image src={pokemonImage} alt="Pokemon" width={150} height={150} />
        </main>
    )
}