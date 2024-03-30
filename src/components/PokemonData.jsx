import React, {useState, useEffect} from "react"
import PokemonDetails from './PokemonDetails';

function PokemonData() {
    const [pkmnData, setPkmnData] = useState([]);
    const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=131"

    useEffect(() => {
        const fetchAllPkmnData = async () => {
            const response = await fetch(apiURL);
            const json = await response.json();
            setPkmnData(json);
        }
        fetchAllPkmnData().catch("Error fetching Pokemon data:", console.error);;
    }, []);

    return (
        <div className="pokemon-list">
            {pkmnData.results && pkmnData.results.map((pokemon, index) => (
                <div key={index}>
                    <PokemonDetails pkmnName={pokemon.name} pkmnURL={pokemon.url}/>
                </div>
            ))}
            
        </div>
    );
}

export default PokemonData;