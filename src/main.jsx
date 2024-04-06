import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import App from './App.jsx';
import PokemonDetails from "./components/PokemonDetail";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/pokemonDetails/:name" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
