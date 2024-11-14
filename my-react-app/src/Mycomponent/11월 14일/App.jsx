import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
    return <>
        <div>
            <Link to="/main">메인</Link>
            <Link to="/mypage">마이페이지</Link>
            <Link to="/test">테스트</Link>
        </div>
    </>;
}

export default App;