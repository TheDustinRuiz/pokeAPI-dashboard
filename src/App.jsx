import { useState } from 'react'
import NavbarComponent from './components/Navbar';
import  { TotalPokemonCard, FireTypePokemonCard, WaterTypePokemonCard, GrassTypePokemonCard } from './components/Card';
import PokemonData from './components/PokemonData';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="whole-page">
        <NavbarComponent />

        <div className="card-container">
          <TotalPokemonCard />
          <FireTypePokemonCard />
          <WaterTypePokemonCard />
          <GrassTypePokemonCard />
        </div>
        <div>
          <PokemonData />
        </div>
      </div>
    </>
  );
}

export default App
