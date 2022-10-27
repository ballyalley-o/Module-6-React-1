import logo from './logo.svg';
import './App.css';
import slide43 from './ChangeGreeting';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="container">
            <button
            type="button "
            id="greeting"
            onClick={slide43}
            class="btn btn-danger lg">
            Hello World
          </button>
        </div>
      </header>
    </div>
  );
}



export default App;
