import Header from './components/Header'
import EmojiChange from './components/EmojiChange';

function App() {
    return (
      <>
        <Header bgColor="#698591" textColor="#B6D2DE" />
        <div className="container">
          <h1 style={{textAlign: 'center'}}>Exercise 3 (Emoji Switcher)</h1>
          <EmojiChange />
        </div>
      </>
    );
}


export default App