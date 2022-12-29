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
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import OderList from './components/OderList';
import DisplayNames from './components/DisplayNames';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyle.module.css'
import Form from './components/Form';


function App() {
  return (
    <div className="App">
     
       {/* 
      <h1 className='error'>Error</h1>
      <h1 className={styles.success }> Success</h1>
     
      <Inline /> 
      
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

      <EventBind /> 

      <ParentComponent /> 
      <UserGreeting /> 
      <NameList />
      {/* <OderList /> 

      < DisplayNames /> 
      <Stylesheets primary={false} /> 
      */}
       <Form />
     


      



    </div>
  );
}

export default App;
