let a = 5;
let b = '3';

console.log(a - b);
// 자바 스크립트 같은 경우 정적 타이핑으로 인해 2값이 나온다.
// 그러나 타입 스크립트에서는 b 경우 string 값이기 때문에 에러가 난다.

a = 7;
b = 5; // b 같은 경우 string 값이기 때문에 number 값이 들어갈 수 없다.