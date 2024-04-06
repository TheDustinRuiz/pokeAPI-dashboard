import { useState } from 'react'
import NavbarComponent from './components/Navbar';
import  { TotalPokemonCard, FireTypePokemonCard, WaterTypePokemonCard, GrassTypePokemonCard } from './components/Card';
import PokemonData from './components/PokemonData';
import PokemonTypePieChart from './components/PokemonTypeChart';
import './App.css'

function App() {

  return (
    <>
      <div className="whole-page">
        <NavbarComponent />
        <div className="card-container">
          <TotalPokemonCard />
          <FireTypePokemonCard />
          <WaterTypePokemonCard />
          <GrassTypePokemonCard />
          <PokemonTypePieChart />
        </div>
        <div>
          <PokemonData />
        </div>
      </div>
    </>
  );
}

export default App
