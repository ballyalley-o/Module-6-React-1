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
    <div className="emojiCard">

      <div className="emoticons">{mood}</div>
      <div className="texts">{text}</div>
      <button type="button" onClick={handleClick} class="btn btn-secondary">Change Me</button>
    </div>
  );
}

export default EmojiChange