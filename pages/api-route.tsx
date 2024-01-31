import PokemonDisplay from "@/components/pokemonDisplay"
import { useEffect, useState } from "react";

export default function Page() {
    const [pokemon, setPokemon] = useState({name: "", image: ""});

    useEffect(() => {
        const getPokemonFromApiRoute = async () => {
          const data = await fetch("/api/getPokemon");
          setPokemon(await data.json());
        };
      
        getPokemonFromApiRoute();
      }, []);
      
    return (
        <PokemonDisplay pokemon={pokemon} />
    )
}