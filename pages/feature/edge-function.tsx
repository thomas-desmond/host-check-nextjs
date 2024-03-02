import PokemonDisplay from "@/components/pokemonDisplay"
import { useEffect, useState } from "react";

export default function Page() {
    const [pokemon, setPokemon] = useState({name: "", image: ""});

    useEffect(() => {
        const getPokemonFromEdgeRoute = async () => {
          const data = await fetch("/api/getPokemonEdge");
          setPokemon(await data.json());
        };
      
        getPokemonFromEdgeRoute();
      }, []);
      
    return (
        <PokemonDisplay pokemon={pokemon} />
    )
}