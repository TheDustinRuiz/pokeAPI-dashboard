import { useState } from 'react'
import NavbarComponent from './components/Navbar';
import CardComponent from './components/Card';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="whole-page">
        <NavbarComponent />

        <div className="card-container">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </>
  );
}

export default App
