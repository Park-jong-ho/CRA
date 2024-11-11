import { Component, useState } from "react";
// import { Component } from "react";
import "./App.css";

// 함수 컴포넌트

function FunctionApp() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Count counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
    </>
  );
}

function Count({ counter }) {
  return <div>counter : {counter}</div>;
}

// 클래스 컴포넌트

// class ClassApp extends Component {
//   state = { counter: 1 };

//   render() {
//     return (
//       <>
//         <Count counter={this.state.counter} />
//         <button
//           onClick={() => this.setState({ counter: this.state.counter + 1 })}
//         >
//           +
//         </button>
//         <button
//           onClick={() => this.setState({ counter: this.state.counter - 1 })}
//         >
//           -
//         </button>
//       </>
//     );
//   }
// }

// class Count extends Component {
//   constructor(props) {
//     super(props);
//   }
// }

// render() {
//   return <div>counter: {this.props.counter}</div>;
// }

export default FunctionApp;
// export default ClassApp;
