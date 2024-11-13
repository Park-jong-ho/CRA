// import { Component,
import { useState } from "react";
import "./App.css";

// 함수 컴포넌트

function FunctionApp() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(3);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const setCounterNumber = () => {
    setCounter(inputValue);
  };

  return (
    <>
      <Count counter={counter} />
      <PlusButton setCounter={setCounter} incrementCounter={incrementCounter} />
      <MinusButton
        setCounter={setCounter}
        decrementCounter={decrementCounter}
      />
      <CounterInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        setCounterNumber={setCounterNumber}
      />
    </>
  );
}

function Count({ counter }) {
  return <div>counter : {counter}</div>;
}

function PlusButton({ incrementCounter }) {
  return <button onClick={incrementCounter}>+</button>;
}

function MinusButton({ decrementCounter }) {
  return <button onClick={decrementCounter}>-</button>;
}

function CounterInput({ inputValue, setInputValue, setCounterNumber }) {
  return (
    <>
      <input
        type="number"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={setCounterNumber}>입력</button>
    </>
  );
}

// 클래스 컴포넌트

// class ClassApp extends Component {
//   state = { counter: 1 };

//   incrementCounter = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   decrementCounter = () => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <>
//         <Count counter={this.state.counter} />
//         <PlusButton incrementCounter={this.incrementCounter} />
//         <MinusButton decrementCounter={this.decrementCounter} />
//       </>
//     );
//   }
// }

// class Count extends Component {
//   render() {
//     return <div>counter: {this.props.counter}</div>;
//   }
// }

// class PlusButton extends Component {
//   render() {
//     return <button onClick={this.props.incrementCounter}>+</button>;
//   }
// }
// class MinusButton extends Component {
//   render() {
//     return <button onClick={this.props.decrementCounter}>-</button>;
//   }
// }

export default FunctionApp;
// export default ClassApp;
