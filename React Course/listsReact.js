import './App.css';

function App() {
 const names = ['Kemboi' ,'Rono', 'Tarus', 'Mutai', 'Robon']
  
  return (<div className="App">
    {names.map((name,key) => {
      return <h1 key={key}>{name} </h1>
    })}
  </div>
  )
  
}
export default App;
//writing list in React
