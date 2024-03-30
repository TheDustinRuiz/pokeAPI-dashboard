import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function TotalPokemonCard() {
    const [totalPkmnCount, setTotalPkmnCount] = useState(0);

    useEffect(() => {
        const fetchAllPkmnData = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
            const data = await response.json();
            setTotalPkmnCount(data.results.length);
        }
        fetchAllPkmnData().catch("Error fetching All Pokemon data:", console.error);;
    }, []);


    return (
        <Card>
            <Card.Body>
                <Card.Title>Total Number of Pokemon:</Card.Title>
                <Card.Text>
                    {totalPkmnCount}
                </Card.Text>
            </Card.Body>
      </Card>
    );
}

function FireTypePokemonCard() {
    const [fireTypeCount, setFireTypeCount] = useState(0);

    useEffect(() => {
        const fetchAllPkmnData = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/type/fire");
            const data = await response.json();
            setFireTypeCount(data.pokemon.length)
        }
        fetchAllPkmnData().catch("Error fetching fire-type Pokemon data:", console.error);;
    }, []);

    return (
        <Card>
            <Card.Body>
                <Card.Title>Number of Fire-type Pokemon:</Card.Title>
                <Card.Text>
                    {fireTypeCount}
                </Card.Text>
            </Card.Body>
      </Card>
    );
}

function WaterTypePokemonCard() {
    const [waterTypeCount, setWaterTypeCount] = useState(0);

    useEffect(() => {
        const fetchAllPkmnData = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/type/water");
            const data = await response.json();
            setWaterTypeCount(data.pokemon.length);
        }
        fetchAllPkmnData().catch("Error fetching water-type Pokemon data:", console.error);;
    }, []);

    return (
        <Card>
            <Card.Body>
                <Card.Title>Number of Water-type Pokemon:</Card.Title>
                <Card.Text>
                    {waterTypeCount}
                </Card.Text>
            </Card.Body>
      </Card>
    );
}

function GrassTypePokemonCard() {
    const [grassTypeCount, setGrassTypeCount] = useState(0);

    useEffect(() => {
        const fetchAllPkmnData = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/type/grass");
            const data = await response.json();
            setGrassTypeCount(data.pokemon.length);
        }
        fetchAllPkmnData().catch("Error fetching water-type Pokemon data:", console.error);;
    }, []);

    return (
        <Card>
            <Card.Body>
                <Card.Title>Number of Grass-type Pokemon:</Card.Title>
                <Card.Text>
                    {grassTypeCount}
                </Card.Text>
            </Card.Body>
      </Card>
    );
}

export { TotalPokemonCard, FireTypePokemonCard, WaterTypePokemonCard, GrassTypePokemonCard };