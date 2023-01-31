// node.js 의 file system 모듈을 불러온다.
const fs = require('fs');

// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
const inputData = fs.readFileSync('/dev/stdin').toString().split(" ");
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, 입력 받은 문자열을 split() 함수를 통해 배열화한다.

const grade = parseInt(inputData[0]);


if ( grade >= 90 ) {  // 점수(grade)가 90점 이상인 경우는 A
    console.log("A");
} else if ( grade >= 80 ) {  // 점수(grade)가 80점 이상인 경우는 B
    console.log("B");
} else if ( grade >= 70 ) {  // 점수(grade)가 70점 이상인 경우는 C
    console.log("C");
}  else if ( grade >= 60 ) {  // 점수(grade)가 60점 이상인 경우는 D
    console.log("D");
} else {  // 그 외 나머지 아래점수는 F
    console.log("F");
}