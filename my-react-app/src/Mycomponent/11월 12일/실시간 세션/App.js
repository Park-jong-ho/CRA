import "./App.css"
import Hello from "./Hello"
import Container from "./Container"
import GoodComponent from "./GoodComponent"
import BadComponent from "./BadComponent"

const App = () => {
    // 상태 관리 및 조회
    const name = "Hi react"
    const info = { desc: "react 짱짱", date:new Date() }
    const isGoodComponent = true //조건 여부

    const style = {
        backgroundColor: "red",
        color: "blue",
        fontsize: 24,
        padding: "1rem",
    }

    //App 컴포넌트에서 Hello 컴포넌트로 데이터를 전달하고 싶은 경우
    return (
        <div style={style}>
            {/* 전체 틀을 잡는 레이아웃을 설정하고 싶어요 컴포넌트화(공용으로 쓸것 같아요) */}
            <Container>
                <Hello name={name} 
                age={10}
                height={180}
                isMan={true}
                info={info}
                />

                {/* 조건에 따라 렌더링을 달리하고 싶을 떄(조건부 렌더링) */}
                {isGoodComponent ? <GoodComponent /> : <BadComponent />}
            </Container>
        </div>
    )
}

export default App