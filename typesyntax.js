var studentID = 130820;
var studentName = '유병현';
var age = 29;
var gender = 'male';
var marry = false; // 기혼일 경우 true, 미혼일 경우 false
console.log("\uD559\uC0DD \uBC88\uD638 : ".concat(studentID));
console.log("\uD559\uC0DD \uC774\uB984 : ".concat(studentName));
console.log("\uD559\uC0DD \uB098\uC774 : ".concat(age));
console.log("\uD559\uC0DD \uC131\uBCC4 : ".concat(gender));
console.log("\uD559\uC0DD \uACB0\uD63C : ".concat(marry));
function getStudentDetails(studentID) {
    return {
        studentName: studentName,
        age: age,
        gender: gender,
        marry: marry
    };
}
console.log(getStudentDetails(studentID));
studentID = 101010;
studentName = '병현유';
var youyou94 = {
    id: 941206,
    name: '병현',
    age: 30,
    gender: '남자 아님 여자',
    isMarry: true,
    job: '무직'
};
var getStudent = function () {
    return {
        id: 130820,
        name: '유병현',
        age: 29,
        gender: '남성',
        isMarry: false
    };
};
console.log(getStudent());
var saveStudent = function (student) {
    return student;
};
console.log(saveStudent(getStudent()));
console.log(saveStudent(youyou94));
