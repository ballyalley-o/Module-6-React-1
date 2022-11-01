import { useState } from 'react'
import Header from './components/Header'
import EmojiChange from './components/EmojiChange';

//ideally the calculator should be its own separate component, not included into App here

function App() {
  const [calc, setCalc] = useState("");
  const [result, setRes] = useState(0);

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))

    ) {
      return;
    }

    setCalc(calc + value);

    if(!ops.includes(value)) {
      setRes(eval(calc + value).toString()); //try and avoid using eval in your code. it's discouraged as it's a security risk and red flag
    }
  }

  const produceNums = () => {
    const nums = [];

    for(let i = 1; i < 10; i++) {
      nums.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return nums
  }

  const calculate = () => {
    setCalc(eval(calc).toString()) //try and avoid using eval in your code. it's discouraged as it's a security risk and red flag
  }

  const ce =  () => {
    if (calc == '') {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  }

  return (
    <>
      <Header bgColor="#DB7C46" textColor="#B6D2DE" />
      <h1 style={{ textAlign: "center" }} id="exercise">
        Exercise 4 (Emoji + Calculator)
      </h1>
      <EmojiChange />
      <br />
      <div className="App">
        <div className="calculator">
          <div className="display">
            {result ? <span>({result}) </span> : ""}
            &nbsp;
            {calc || "0"}
          </div>
          <div className="operators">
            <button onClick={() => updateCalc("/")}>/</button>
            <button onClick={() => updateCalc("*")}>*</button>
            <button onClick={() => updateCalc("+")}>+</button>
            <button onClick={() => updateCalc("-")}>-</button>

            <button onClick={ce}>CE</button>
          </div>

          <div className="nums">
            {produceNums()}
            <button onClick={() => updateCalc("0")}>0</button>
            <button onClick={() => updateCalc(".")}>.</button>
            <button onClick={calculate} className="equalsBtn">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
