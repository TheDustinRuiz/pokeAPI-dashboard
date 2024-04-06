import React, {useState, useEffect} from "react"
import PokemonInfo from './PokemonInfo';

function PokemonData() {
    const [pkmnData, setPkmnData] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [selectedType, setSelectedType] = useState([]);
    const [searchFilteredPkmn, setSearchFilteredPkmn] = useState([]);
    const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=151"

    useEffect(() => {
        const fetchAllPkmnData = async () => {
            const response = await fetch(apiURL);
            const data = await response.json();
            setPkmnData(data);
            setSearchFilteredPkmn(data.results)
        }
        fetchAllPkmnData().catch("Error fetching Pokemon data:", console.error);;
    }, []);

    useEffect(() => {
        const fetchPkmnByType = async () => {
            if (!selectedType) return; 
            const response = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
            const data = await response.json();
            setSearchFilteredPkmn(data.pokemon.map(pkmn => pkmn.pokemon));
        };
        fetchPkmnByType().catch((error) => console.error("Error fetching Pokemon by type:", error));
    }, [selectedType]);

    useEffect(() => {
        const searchPkmn = pkmnData.results ? pkmnData.results.filter(pkmn => {
            return pkmn.name.toLowerCase().includes(searchInput.toLowerCase());
        }) : [];
        console.log(searchPkmn); 
        setSearchFilteredPkmn(searchPkmn);
    }, [searchInput, pkmnData]);

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    }

    const handleTypeFilterChange = (type) => {
        setSelectedType(type);
    };

    return (
        <>
            <div className="search-container">
                <input 
                type="text"
                className="search-input"
                placeholder="Search..."
                onChange={(e) => handleSearchInputChange(e)}
                />
            </div>
            <div className="filter-container">
                <button onClick={() => handleTypeFilterChange("normal")}>Normal</button>
                <button onClick={() => handleTypeFilterChange("fire")}>Fire</button>
                <button onClick={() => handleTypeFilterChange("water")}>Water</button>
                <button onClick={() => handleTypeFilterChange("electric")}>Electric</button>
                <button onClick={() => handleTypeFilterChange("grass")}>Grass</button>
                <button onClick={() => handleTypeFilterChange("ice")}>Ice</button>
                <button onClick={() => handleTypeFilterChange("fighting")}>Fighting</button>
                <button onClick={() => handleTypeFilterChange("poison")}>Poison</button>
                <button onClick={() => handleTypeFilterChange("ground")}>Ground</button>
                <button onClick={() => handleTypeFilterChange("flying")}>Flying</button>
                <button onClick={() => handleTypeFilterChange("psychic")}>Psychic</button>
                <button onClick={() => handleTypeFilterChange("bug")}>Bug</button>
                <button onClick={() => handleTypeFilterChange("rock")}>Rock</button>
                <button onClick={() => handleTypeFilterChange("ghost")}>Ghost</button>
                <button onClick={() => handleTypeFilterChange("dragon")}>Dragon</button>
                <button onClick={() => handleTypeFilterChange("dark")}>Dark</button>
                <button onClick={() => handleTypeFilterChange("steel")}>Steel</button>
                <button onClick={() => handleTypeFilterChange("fairy")}>Fairy</button>
            </div>
            <div className="pokemon-list">
                {pkmnData.results && searchFilteredPkmn.map((pokemon, index) => (
                    <div key={index}>
                        <PokemonInfo pkmnName={pokemon.name} pkmnURL={pokemon.url}/>
                    </div>
                ))}
                
            </div>
        </>
    );
}

export default PokemonData;