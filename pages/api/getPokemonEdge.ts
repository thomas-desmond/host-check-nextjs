import { NextResponse } from "next/server";

export const config = {
    runtime: 'edge', //This specifies the runtime environment that the middleware function will be executed in.
};

export default async function handler() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/129`)
    const pokemonData = await response.json()

    return NextResponse.json(
        { name: pokemonData.name, image: pokemonData.sprites.other.home.front_default, runtime: process.env.NEXT_RUNTIME },
        { status: 200, }
    );

}
