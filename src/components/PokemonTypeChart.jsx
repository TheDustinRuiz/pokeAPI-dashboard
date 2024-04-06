import React, { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

function PokemonTypePieChart() {
  const [pkmnTypeData, setPkmnTypeData] = useState([]);

  useEffect(() => {
    const fetchPkmnTypeData = async () => {
      const types = [
        "normal",
        "fire",
        "water",
        "electric",
        "grass",
        "ice",
        "fighting",
        "poison",
        "ground",
        "flying",
        "psychic",
        "bug",
        "rock",
        "ghost",
        "dragon",
        "dark",
        "steel",
        "fairy",
      ];

      const typeData = await Promise.all(
        types.map(async (type) => {
          const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
          const data = await response.json();
          return {
            name: type,
            count: data.pokemon.length,
          };
        })
      );

      setPkmnTypeData(typeData);
    };

    fetchPkmnTypeData().catch((error) => console.error("Error fetching Pokémon type data:", error));
  }, []);

  const typesColors = [
    "#ca8179",
    "#f0776a",
    "#58abf6",
    "#F8D030",
    "#64dbb2",
    "#98D8D8",
    "#C03028",
    "#A040A0",
    "#E0C068",
    "#A890F0",
    "#F85888",
    "#9f5bba",
    "#B8A038",
    "#705898",
    "#7038F8",
    "#705848",
    "#B8B8D0",
    "#EE99AC",
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={pkmnTypeData}
        dataKey="count"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label
      >
        {pkmnTypeData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={typesColors[index % typesColors.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default PokemonTypePieChart;
