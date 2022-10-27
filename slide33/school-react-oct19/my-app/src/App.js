import logo from './logo.svg';
import './App.css';
import Welcome from "./Greeting.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome name="Athena, Brielle & Celynne" />

      </header>
    </div>
  );
}

export default App;
