import './App.css';
import { useState } from "react"

function App() {
 const [textColor, setTextColor] = useState("blue")
  return (
    <div className="App">
      <button
        onClick={() => {
        setTextColor(textColor === "blue" ? "purple" : "blue")
      }}
      >
        Show/Hide
      </button>
   <h1 style={{color: textColor}}>Hi i'm Kemboi</h1>
  </div>
  ) 
  }

export default App;
//usestate hook to hide and show colors
