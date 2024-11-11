import { useState } from "react";
// import { Component } from "react";
import "./App.css";

function FunctionApp() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>counter : {counter}</div>
      <button
        onClick={() => {
          setCounter((prev) => prev + 3);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter((prev) => prev - 3);
        }}
      >
        -
      </button>
    </>
  );
}

//class형 함수
// class ClassApp extends Component {
//   state = { counter: 1 };
//   render() {
//     return (
//       <>
//         <div>counter: {this.state.counter}</div>
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

export default FunctionApp;
// export default ClassApp;
