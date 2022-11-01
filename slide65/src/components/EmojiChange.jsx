import {useState} from 'react'

//this should be a .js file. JSX is the HTML looking stuff in the return, but the component itself is JS


function EmojiChange() {

    const hi = "👋";
    const love = "❤";

    const [mood, setMood] = useState(hi)
    const [text, setText] = useState('Hi, there!')

    const handleClick = () => {
        mood === hi ? setMood(love) : setMood(hi) //this lets you toggle both states
        text === 'Hi, there!' ? setText('love ya!') : setText('Hi, there!') //this lets you toggle both states
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