// node.js 의 file system 모듈을 불러온다.
// fs 모듈의, readFileSync 함수를 이용해서 동기적으로 해당 경로의 파일 전체를 읽어들인다.
let input = require('fs').readFileSync('dev/stdin').toString().split(' ');
// 읽어들인 정보는, toString() 함수를 통해, 문자열로 변환하여야 사용할 수 있다.
// 그리고, 입력 받은 문자열을 split() 함수를 통해 배열화한다.

let hour = Number(input[0]); // 시
let minute = Number(input[1]); // 분

// minute(분)에서 45를 빼줍니다.
minute -= 45;

// 만약, minute(분)에서 45를 뺀 값이, 0보다 작은 음수일 경우
if (minute < 0) {
    minute += 60;  // 60이 minute의 값이 되고,
    hour--;  // hour(시) -1 을 해 줍니다.

    // 이때, 만약 hour(시)의 값이 -1일 경우는, 0(24시)에서 1을 뺐을때 뿐이니,
    if (hour === -1) {
        hour = 23;  // 23이 hour의 값이 됩니다.
    }
}

// 출력 값 사이에 공백이 있으므로 공백 표시 출력.
console.log(hour + ' ' + minute);
