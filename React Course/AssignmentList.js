import './App.css';
import {User} from './User'

function App() {
  const Planets = [
    { name: "mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    {name: "Uranus", isGasPlanet:true}
 ]
  
  return (
    <div className="App">
    {Planets.map((planet,key) => {
      if (planet.isGasPlanet) return <h1>{planet.name} </h1>
    })}
    </div>
  )
}


export default App;
//using map method
