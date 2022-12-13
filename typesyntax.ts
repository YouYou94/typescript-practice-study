let studentID:number = 130820;
let studentName:string = '유병현';
let age:number = 29;
let gender:string = 'male';
let marry:boolean = false; // 기혼일 경우 true, 미혼일 경우 false

console.log(`학생 번호 : ${studentID}`);
console.log(`학생 이름 : ${studentName}`);
console.log(`학생 나이 : ${age}`);
console.log(`학생 성별 : ${gender}`);
console.log(`학생 결혼 : ${marry}`);

function getStudentDetails(studentID:number):object {
    return {
        studentName,
        age,
        gender,
        marry,
    }
}

console.log(getStudentDetails(studentID));


studentID = 101010;
studentName = '병현유';
age = '29'; // 타입 명시를 number로 하였기 때문에 오류.
marry = '기혼'; // 타입 명시를 boolean으로 하였기 때문에 오류.