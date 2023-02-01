// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, trim() 함수를 통해 공백을 제거한다.
// 그리고, 입력 받은 문자열을 split() 함수를 통해 배열화한다. \n : 줄바꿈

// 반복문
for (let i = 0; i < input.length; i++) {
    // split 메서드 사용해서 각 줄을 기준으로 여러 개의 테스트 케이스를 나눔.
    let numbers = input[i].split(' ').map(Number);
    
    // split 을 통해 A와 B를 구분했고, 더한 값을 출력한다.
    console.log( numbers[0] + numbers[1] );
}
