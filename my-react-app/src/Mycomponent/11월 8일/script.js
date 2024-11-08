class 사람 {
    constructor(이름, 나이, 성별){
        this.이름 = 이름
        this.나이 = 나이
        this.성별 = 성별
    }
    말하기(){
        console.log(this.이름 + ' :' + "안녕하세요");
    }
}

// const 홍길동 = new 사람('홍길동', 30, '남')
// console.log(홍길동);
// 홍길동.말하기()

// const 아이유 = new 사람('아이유', 28, '여')
// console.log(아이유);
// 아이유.말하기()

class 학생 extends 사람{
    constructor(이름, 나이, 성별, 성적){
        super(이름, 나이, 성별)
        this.성적 = 성적
    }
    말하기(){
        console.log(this.이름 + ' :' + "태정태세문단세...");
    }
    공부하기 (){
        console.log(`${this.이름}: 공부중...`);
    }
}

const 김학생 = new 학생('김학생', 18, '남', 90)
console.log(김학생);
김학생.말하기()
김학생.공부하기()

