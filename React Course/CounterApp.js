import './App.css';
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const IncrementNo = () => {
    setCount(count+1)
  }
  const DecrementNo = () => {
    setCount(count-1)
  }
  const BackToZero = () => {
    setCount(0)
  }
  return (
    <div className="App">
      <button onClick={IncrementNo}>Increase</button>
      <button onClick={DecrementNo}>Decrease</button>
     <button onClick={BackToZero}>Set to zero</button> 
    {count}
  </div>
  ) 
  }

export default App;
//use state in React
