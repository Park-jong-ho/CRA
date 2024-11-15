import { Component, useState } from "react";
import "./App.css"

function App() {
    const [showCounter, setShowCounter] = useState(false);

    return (
        <>
            {showCounter && <Counter />}
            <br />
            <button onClick={() => setShowCounter((prev) => !prev)}>show?</button>
        </>
    )
}

class Counter extends Component {
    constructor() {
        super()
        this.state = { counter: 1 }
        console.log("construntor");
    }

    componentDidMount() {
        console.log("DidMount");
    }

    componentDidUpdate() {
        console.log("DidUpdate");
    }

    componentWillUnmount() {
        console.log("WillUnMount");
    }

    render() {
        console.log("render");
        return (
            <>
                <div>counter : {this.state.counter}</div>
                <button onClick={() => this.setState({counter: this.setState.counter + 1
                })}>+1</button>
            </>
        )
    }
}

export default App