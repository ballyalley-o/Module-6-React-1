import logo from './logo.svg';
import './App.css';
import Greeting from './ChangeGreeting';
import {useState} from 'react'

function App() {
  const [name, setName] = useState('World') //in react we store anything that can be changed by the user and cause updates to the UI in the state

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="container">
            <button
            type="button "
            id="greeting"
            onClick={() => name === 'World' ? setName('Bally') : setName('World')} //when clicking the button, we change the state
            class="btn btn-danger lg">
            Change Greeting
          </button>
          <Greeting name={name}/> {/* // and when the state changes, it triggers a re-render of this component and its child via the props */}
        </div>
      </header>
    </div>
  );
}



export default App;
