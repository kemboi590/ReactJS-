import logo from './logo.svg';
import './App.css';
import Great from './components/Great';
import Welcome from './components/welcome';
import WithJSX from './components/withJSX';
import WithoutJSX from './components/withoutJSX';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClicked';
import ClassClick from './components/ClassClick';


function App() {
  return (
    <div className="App">
      <Message />


      <WithJSX />
      <WithoutJSX />

      
      <Great name="Kemboi" jargonName="SuperMan">
        <p>This is children property</p>
      </Great>
      <Great name="John" jargonName="BatMan">
        <button> Action</button>
      </Great>
      <Great name="Jane" jargonName="BestLady">
        <p>i'm the best lady</p>
      </Great>

      <Welcome name="Bruno" jargonName="SuperMan" />
      <Welcome name="Kevin" jargonName="Batman" />
      <Welcome name="Dorine" jargonName="SuperWoman" />
      
      
      <Counter />

      <ClassClick />
      
      <FunctionClick />

    </div>
  );
}

export default App;
