// ◎
function solution(number, limit, power) {
    var result = 0;
  
    // 기사 단원의 수 (number) 이하의 자연수 개수만 존재하기 때문에, numbers + 1 크기로 배열 생성
    const numsArr = new Array(number+1).fill(0);

    // 약수의 개수를 한번에 count 하는 반복문 : 인덱스 번호를 1부터 시작하는 자연수로 정하고,
    // 해당 자연수에 대한 약수를 반복문을 통해 하나씩 증가시킨다.    
    for(let i = 1; i <= number; i++) {
        for(let j = i; j <= number; j+=i) {
            numsArr[j] += 1;
        }
    }

    // 3) 현재 값의 약수의 개수(cv)가 limit 값보다 크면, 누적 값(pv)에 power만큼 더하고, 작으면 현재 값의 약수의 개수(cv)만큼 더한다
    return numsArr.reduce( (pv,cv) => { return cv > limit ? pv+power : pv+cv }, 0);
}