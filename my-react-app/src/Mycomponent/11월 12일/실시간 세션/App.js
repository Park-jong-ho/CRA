import "./App.css"



const App = () => {
    // 상태 관리 및 조회
    const name = "my name is react"

    // 함수를 만들어 API 통신, 기타 작업을 합니다.


    // 렌더링을 합니다.
    const style={
        backgroundColor: "red",
        color: "blue",
        fontsize: 24,
        padding: "1rem",
    }




    return (
        <div>
            <h1 className="green_text">hi</h1>
            <h2 style={style}>{name}</h2>
        </div>
    )
}

export default App