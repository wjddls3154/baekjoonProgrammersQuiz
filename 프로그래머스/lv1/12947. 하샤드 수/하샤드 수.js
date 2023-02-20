function solution(x) {
    let sum = 0;  // 모든 자릿수의 합
    let arr = String(x).split("");  // x를 문자형태로 바꿔서 자릿수마다 나눔.
    
    // 반복문 이용해서, 숫자로 바꾼 arr[i]번째 자리를 sum에 누적해서 더함.
    for(var i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    
    // 그리고, 원래 값인 x가 sum(모든 자릿수의 합)으로 나누어 떨어지면, x는 하샤드 수(true). 나누어 떨어지지 않으면 false 반환.
    return (x % sum === 0) ? true : false;
}