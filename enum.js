// 열거형 Enum
// 연관된 아이템들을 함께 묶어서 연결할 수 있는 수단
var Score;
(function (Score) {
    Score["A"] = "A";
    Score["B"] = "B";
    Score["C"] = "C";
    Score["F"] = "F";
})(Score || (Score = {}));
var ybh4115 = {
    id: 130820,
    name: '유병현',
    score: Score.A
};
var abcd1234 = {
    id: 101010,
    name: '홍길동',
    score: Score.C
};
console.log(ybh4115);
console.log(abcd1234);
