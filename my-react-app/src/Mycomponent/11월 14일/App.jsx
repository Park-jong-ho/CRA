import { useState } from "react";
import "./App.css";
import { Link, Route, Routes, useNavigate, useLocation, useParams, useSearchParams } from "react-router-dom";

function App() {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    console.log(location.pathname);
    console.log(location.search);
    return <>
        <div>
            {/* <Link to="/main">메인</Link>
            <Link to="/mypage">마이페이지</Link>
            <Link to="/test">테스트</Link> */}
            <button onClick={() => navigate("/main")}>메인</button>
            <button onClick={() => navigate("/mypage")}>마이페이지</button>
            <button onClick={() => navigate("/test")}>테스트</button>
        </div>
        <div>
            <button onClick={() => navigate(1)}>(`앞으로가기`)</button>
            <button onClick={() => navigate(-1)}>(`뒤로가기`)</button>
        </div>
        <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/mypage" element={<div>마이 페이지</div>} />
            <Route path="/test" element={<div>테스트 페이지</div>} />
        </Routes>
    </>;
}

function Main() {
    const params = useParams()
    console.log(params.name);

    const location = useLocation();
    console.log(location.search);
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get('name'));
    console.log(setSearchParams);

    return <div>메인 페이지</div>;
}

export default App;