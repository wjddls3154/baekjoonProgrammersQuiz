const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const c = Number(input[0]);  // 테스트 케이스의 개수 C


for(let i=1; i<=c; i++){
    let sum = 0;  // 학생들의 점수 총합
    let cnt = 0;  // 평균을 넘는 학생의 수
    
    scores = input[i].split(' ').map(Number);  // 학생의 점수
    const n = scores[0];  // 총 학생의 수 N
    
    // 반복문 이용해서, 학생들의 점수 sum에 누적해서 더함.
    for(let j = 1; j <= n; j++){
        sum += scores[j];
    }
    
    const avg = sum / n;  // 반 평균 점수
    for(let k=1; k<=n; k++){
       // 만약, k번째 인덱스의 점수가, 평균(avg)점수보다 높으면 cnt증가
       if(scores[k]>avg){
           cnt++;
       }
   }
    // 백분율 구하고, toFixed 이용해서 소숫점 셋째 자리까지 출력하고, 형식을 맞추기 위해 "%" 추가.
    console.log(((cnt/n)*100).toFixed(3)+"%");
}
