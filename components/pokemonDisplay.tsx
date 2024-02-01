
import { Pokemon } from "@/types/pokemon"
import Image from "next/image"

interface PokemonDisplayProps {
    pokemon: Pokemon;
}

export default function PokemonDisplay( { pokemon } : PokemonDisplayProps) {
    return (
        <main className="flex mt-8 flex-col items-center justify-center">
            <p className="text-2xl">{pokemon.name}</p>
            <Image src={pokemon.image} alt="Pokemon" width={500} height={500} />
        </main>
    )
}