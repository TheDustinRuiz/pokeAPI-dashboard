import React, { useState, useEffect } from "react";

function PokemonDetails({pkmnName, pkmnURL}) {
    const [pkmnDetails, setPkmnDetails] = useState(null);

    useEffect(() => {
        const fetchPkmnDetails = async () => {
            const response = await fetch(pkmnURL);
            const data = await response.json();
            setPkmnDetails(data);
        }
        fetchPkmnDetails().catch("Error fetching Pokemon details:", console.error);
    }, [pkmnURL]);

    if (!pkmnDetails) {
        return null;
    }

    const typeColors = {
        normal: "#ca8179",
        fire: "#f0776a",
        water: "#58abf6",
        electric: "#F8D030",
        grass: "#64dbb2",
        ice: "#98D8D8",
        fighting: "#C03028",
        poison: "#A040A0",
        ground: "#E0C068",
        flying: "#A890F0",
        psychic: "#F85888",
        bug: "#9f5bba",
        rock: "#B8A038",
        ghost: "#705898",
        dragon: "#7038F8",
        dark: "#705848",
        steel: "#B8B8D0",
        fairy: "#EE99AC",
    };

    const backgroundColor = pkmnDetails.types[0].type.name in typeColors
        ? typeColors[pkmnDetails.types[0].type.name]
        : "#FFFFFF";
    const types = pkmnDetails.types.map((type, index) => (
        <div key={index}>{type.type.name}</div>
    ));

    return (
        <div className="pokemon-details" style={{ backgroundColor }}>
            <div className="pokemon-name">{pkmnName} #{pkmnDetails.id}</div>
            <img className="pokemon-image" src={pkmnDetails.sprites.front_default} alt='pokemon' />
            <div className="pokemon-types">{types}</div>
        </div>
    );
}

export default PokemonDetails;