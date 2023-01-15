import './App.css';
import {User} from './User'

function App() {
  const Users = [
    { name: "Kemboi", age: 21 },
    { name: "Rotich", age: 19 },
    {name: "Koech", age: 22}
]
  
  return (
    <div className="App">
    {Users.map((user,key) => {
      return (
        <User name={user.name} age={user.age} />
      )
    })}
    </div>
  )
}


export default App;
