import './App.css';
import { useState } from "react"

function App() {
  const [age, setAge] = useState(0)
  
  const incrementAge = () => {
    setAge(age+1)
  }
  return (<div className="App">
    {age}
    <button onClick={incrementAge}>Increment Age</button>
  </div>
  )
  
}
export default App;
//states in react 
//useState
