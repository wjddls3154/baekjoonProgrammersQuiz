function solution(s) {
    s = s.split(' ');  // 문자열을, 공백 단위로 자른다.
    let arr = []; // 계산을 도와줄 빈 배열
    for (let c of s) c === "Z" ? arr.length ? arr.pop() : '' : arr.push(c);
    // 빈 배열에 값을 push(맨 뒤에 추가)하기 때문에, 넣은 값의 뒤의 값이 Z라면 ?
    // pop(맨 뒤 제거)을 이용하여, 직전값을 빼줄 수 있다.
    
    return arr.reduce((a,b)=>a+ +b,0);
    // reduce() 에서 합을 구할때, +를 이용하여 간단하게 숫자형으로 바꿀수 있고,
    // 만약, 위 사용처럼 + +를 연속해서 해주면, b의 값을 숫자로 바꾼뒤 a와 더해준다.
}

/*
배열의 맨 뒤 추가 : push
배열의 맨 뒤 제거 : pop
*/