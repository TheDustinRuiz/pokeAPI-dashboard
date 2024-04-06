import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {
    const { name } = useParams();
    const [pkmnDetails, setpkmnDetails] = useState(null);
    const [speciesDetails, setSpeciesDetails] = useState(null);
    const [flavorText, setFlavorText] = useState(null);

    useEffect(() => {
        const fetchPkmn = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setpkmnDetails(data);

            const speciesResponse = await fetch(pkmnDetails.species.url);
            const speciesData = await speciesResponse.json();
            setSpeciesDetails(speciesData);

            const FlavorTextEntry = speciesData.flavor_text_entries.find(entry => (entry.version.name === "omega-ruby" && entry.language.name === "en"));
            console.log(FlavorTextEntry);
            if (FlavorTextEntry) {
                setFlavorText(FlavorTextEntry.flavor_text);
            }
        };

    fetchPkmn().catch("Error fetching Pokemon details:", console.error);;
  }, [pkmnDetails]);
    console.log(pkmnDetails);

  if (!pkmnDetails || !speciesDetails ) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-details2">
        <h1 className="pokemon-name2">{pkmnDetails.name}</h1>
        <ul className="type-list">
            {pkmnDetails.types.map((typeData, index) => (
                <li key={index} className="type">{typeData.type.name}</li>
            ))}
        </ul>
        <img className="pokemon-image2 default" src={pkmnDetails.sprites.front_default} alt='pokemon image' />
        <img className="pokemon-image2 shiny" src={pkmnDetails.sprites.front_shiny} alt='pokemon image' />
        {flavorText && (
            <div className="description">
                <h2>Description:</h2>
                <p>{flavorText}</p>
            </div>
        )}
        <div className="attribute">
            <p>Height: {pkmnDetails.height/10.0} m</p>
            <p>Weight: {pkmnDetails.weight/10.0} kg</p>
            <p>Evolves From: {speciesDetails.evolves_from_species ? speciesDetails.evolves_from_species.name : "None"}</p>
        </div>
        <h2>Abilities:</h2>
        <ul className="ability-list">
            {pkmnDetails.abilities.map((ability, index) => (
                <li key={index} className="ability">
                    {ability.ability.name} {ability.is_hidden ? "(Hidden)" : ""}
                </li>
            ))}
        </ul>
        <h2>Moves:</h2>
        <ul className="move-list">
            {pkmnDetails.moves
                .sort((a, b) => a.version_group_details[0].level_learned_at - b.version_group_details[0].level_learned_at)
                .map((moveData, index) => (
                    <li key={index} className="move">
                        {moveData.move.name}
                    </li>
            ))}
        </ul>
        <h2>Varieties:</h2>
        <ul className="variety-list">
            {speciesDetails.varieties.map((varietyData, index) => (
                <li key={index} className="variety">
                    {varietyData.pokemon.name}
                </li>
            ))}
        </ul>
    </div>
  );
}

export default PokemonDetails;