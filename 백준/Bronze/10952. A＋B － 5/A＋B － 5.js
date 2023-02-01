// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, trim() 함수를 통해 공백을 제거한다.
// 그리고, 입력 받은 문자열을 split() 함수를 통해 배열화한다. \n : 줄바꿈

let i = 0;

// while 반복문을 돌면서,
while(true){
    // 줄을 공백 기준으로 나눠,
    let nums = input[i].split(' ');
    
    // 원소들을 a와 b에 할당한다.
    a = Number(nums[0]);
    b = Number(nums[1]);
    
    // 만약, a와 b가 둘 다 0이면
    if(a==0 && b==0){
        break;  // while문 중단되어 0과 0을 더한 값도 출력되지 않는다.
    }
    // 둘 다 0이 아니면
    console.log(a+b);  // a+b 더한 값을 출력해주고
    i++;  // i를 하나 증가시킨다. i는 처음에 0부터 시작.
}
