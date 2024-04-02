import PokemonDisplay from "@/components/pokemonDisplay"
import { useEffect, useState } from "react";

export default function Page() {
    const [pokemon, setPokemon] = useState({name: "", image: "", runtime: ""});

    useEffect(() => {
        const getPokemonFromEdgeRoute = async () => {
          const data = await fetch("/api/getPokemonEdge");
          const temp = await data.json();
          console.log(temp);
          setPokemon(temp);
        };
      
        getPokemonFromEdgeRoute();
      }, []);
      

    return (
        <PokemonDisplay pokemon={pokemon} />
    )
}