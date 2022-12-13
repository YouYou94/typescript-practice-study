// 열거형 Enum
// 연관된 아이템들을 함께 묶어서 연결할 수 있는 수단

enum Score {
    A = 'A',
    B = 'B',
    C = 'C',
    F = 'F'
}

interface Grade {
    id:number,
    name:string,
    score:Score,
}

const ybh4115:Grade = {
    id:130820,
    name:'유병현',
    score:Score.A,
}

const abcd1234:Grade = {
    id: 101010,
    name:'홍길동',
    score:Score.C
}

console.log(ybh4115);
console.log(abcd1234);