import {useState} from 'react'

function EmojiChange() {

    const hi = "👋";
    const love = "🫶";

    const [mood, setMood] = useState(hi)
    const [text, setText] = useState('Hi, there!')

    const handleClick = () => {
        setMood(love)
        setText('love ya!')
    }

  return (
    <div class="container">
    <h1 style={{ textAlign: "center" }} className="emojiTitle">Exercise 3 (Emoji Switcher)</h1>
      <div className="emojiCard">
        <div className="emoticons">{mood}</div>
        <div className="texts">{text}</div>
        <button type="button" onClick={handleClick} class="btn btn-secondary">
          Change Me
        </button>
      </div>
    </div>
  );
}

export default EmojiChange