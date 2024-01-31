import { Pokemon } from "@/types/pokemon";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Pokemon>,
) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/4`)
    const pokemonData = await response.json()

    res.status(200).json({ name: pokemonData.name, image: pokemonData.sprites.other.home.front_default });
}
