import React from "react";
import { useParams } from "react-router-dom";

export function PokemonPage () {
    const { id } = useParams();
    
    return (
        <div>
            <p>PokemonPage</p>
            <h3>ID: {id}</h3>
        </div>
    )
}