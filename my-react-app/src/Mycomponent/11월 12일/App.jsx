import { useState } from "react";
import "./App.css"

function App() {
    const [mood, setMood] = useState("Nomal")
    return (
        <>
            <Face3 mood={mood} />
            <div className={ mood === "Happy" ? "happy" : mood === "Normal" ? "normal" : "sad"}>기분: {mood}</div>
            <div>
                <button onClick={() => setMood("Happy")}>Happy</button>
                <button onClick={() => setMood("Noemal")}>Normal</button>
                <button onClick={() => setMood("Sad")}>Sad</button>
            </div>
        </>
    )
}

// if문으로 리턴하는 JSX문 바꿔주기
function Face(mood) {
    if (mood === "Happy") {
        return "😄"
    }else if (mood === "Normal") {
        return "😐"
    }else {
        return "😭"
    }
}

// 삼항연삼자 사용하기
function Face2({ mood }) {
    return (
        <>
            {mood === "Happy" ? (<div>😄</div>) : mood === "Normal" ?  (<div>😐</div>) : (<div>😭</div>)}
        </>
    )
}

// 논리 연산자
function Face3({ mood }) {
    return (
        <>
            {mood === "Happy" && <div>😄</div>}
            {mood === "Normal" && <div>😐</div>}
            {mood === "Sad" && <div>😭</div>}
        </>
    )
}

export default App