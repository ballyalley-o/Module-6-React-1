import React from "react"


class Calculator extends React.Component {
  // const [calc, setCalc] = useState("");
  // const[result, setRes] = useState("");
  constructor(props) {
    super(props);
    this.state = {
      calc: "",
      result: "",
      displayValue: "0",
      setOp: false,
      value: null,
      op: null
    };
    this.value = this.state.calc.slice(0, -1);
  }

  inputNums(num) {
    const { displayValue, setOp } = this.state;

    if (setOp) {
    this.setState({
      displayValue: String(num),
      setOp: false
     })
    } else {
    this.setState({
      displayValue: displayValue === "0" ? String(num) : displayValue + num,
    });
  }
}

  clearCalc() {
    this.setState({
      displayValue: "0",
    });
  }

  inputDot() {
    const { displayValue, setOp } = this.state;

    if(setOp) {
      this.setState({
        displayValue: '0.',
        setOp: false
      })
    } else if (displayValue.indexOf(".") === -1) {
      this.setState({
        displayValue: displayValue + ".",
      });
    }
  }

  calcNums(nextOp) {
    const { displayValue, op, value } = this.state

    const nextValue = parseFloat(displayValue)

    const ops = {
      "/": (prevValue, nextValue) => prevValue / nextValue,
      "*": (prevValue, nextValue) => prevValue * nextValue,
      "+": (prevValue, nextValue) => prevValue + nextValue,
      "-": (prevValue, nextValue) => prevValue - nextValue,
      "=": (prevValue, nextValue) => nextValue
    }

    if (value == null) {
      this.setState({
        value: nextValue,
      })
    } else if (op) {
      const currValue = value || 0
      const compValue = ops[op](currValue, nextValue)

    this.setState({
      value: compValue,
      displayValue: String(compValue)
    })
  }

  this.setState({
    setOp: true,
    op: nextOp
  })
}


  render() {
    const { displayValue } = this.state;

    return (
      <>
        <div className="App">
          <div className="calculator">
            <div className="display">{displayValue}</div>
            <div className="operators">
              <button onClick={() => this.calcNums("/")}>/</button>
              <button onClick={() => this.calcNums("*")}>*</button>
              <button onClick={() => this.calcNums("+")}>+</button>
              <button onClick={() => this.calcNums("-")}>-</button>

              <button onClick={() => this.clearCalc()}>AC</button>
            </div>

            <div className="nums">
              <button onClick={() => this.inputNums("1")}>1</button>
              <button onClick={() => this.inputNums("2")}>2</button>
              <button onClick={() => this.inputNums("3")}>3</button>
              <button onClick={() => this.inputNums("4")}>4</button>
              <button onClick={() => this.inputNums("5")}>5</button>
              <button onClick={() => this.inputNums("6")}>6</button>
              <button onClick={() => this.inputNums("7")}>7</button>
              <button onClick={() => this.inputNums("8")}>8</button>
              <button onClick={() => this.inputNums("9")}>9</button>
              <button onClick={() => this.inputNums("0")}>0</button>
              <button onClick={() => this.inputDot(".")}>.</button>

              <button onClick={() => this.calcNums("=")}>=</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default Calculator