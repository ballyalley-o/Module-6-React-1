import React from "react";

class Calculator extends React.Component {
  // const [calc, setCalc] = useState("");
  // const[result, setRes] = useState("");
  constructor(props) {
    super(props);
    this.state = {
      calc: "",
      result: "",
    };

    this.ops = ["/", "*", "+", "-", "."];
    this.value = this.state.calc.slice(0, -1);
  }

  updateCalc = () => {
    if (
      (this.props.ops.includes(this.props.value) && this.state.calc === "") ||
      (this.props.ops.includes(this.props.value) &&
        this.props.ops.includes(this.state.calc.slice(-1)))
    ) {
      return;
    }

    this.setState(this.state.calc + this.props.value);

    if (!this.ops.includes(this.value)) {
      this.setState((this.state.calc + this.value).toString());
    }
  };

  produceNums = () => {
    const nums = [];
    for (let i = 1; i < 10; i++) {
      nums.push(
        <button onClick={() => this.updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return nums;
  };

  calculate = () => {
    this.setState(eval(this.state.calc).toString());
  };

  ce = () => {
    if (this.state.calc === "") {
      return;
    }

    this.setState(this.value);
  };

  render() {
    return (
      <>
        <div className="App">
          <div className="calculator">
            <div className="display">
              {this.state.result ? <span> ({this.state.result}) </span> : ""}
              &nbsp;
              {this.state.calc || "0"}
            </div>
            <div className="operators">
              <button onClick={() => this.updateCalc("/")}>/</button>
              <button onClick={() => this.updateCalc("*")}>*</button>
              <button onClick={() => this.updateCalc("+")}>+</button>
              <button onClick={() => this.updateCalc("-")}>-</button>
              <button onClick={() => this.updateCalc("AC")}>AC</button>

              <button onClick={this.ce}>CE</button>
            </div>

            <div className="nums">
              {this.produceNums()}
              <button onClick={() => this.updateCalc("0")}>0</button>
              <button onClick={() => this.updateCalc(".")}>.</button>
              <button onClick={this.calculate} className="equalsBtn">
                =
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
