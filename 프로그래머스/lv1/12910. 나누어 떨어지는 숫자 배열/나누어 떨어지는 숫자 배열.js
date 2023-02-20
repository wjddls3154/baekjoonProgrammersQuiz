function solution(arr, divisor) {
    var result = [];  
    
    // arr의 각각 요소가 divisor 로 나누어 떨어지면, 그 요소를 result에 추가한다. (push)
    arr.map( (x) => {
       x % divisor === 0 && result.push(x); 
    })
    
    // result.length 가 빈 배열이 아니면, 오름차순으로 정렬한 result 배열을 반환하고,
    // 빈 배열이면, -1을 배열에 담아 반환한다.
    return result.length ? result.sort( (a, b) => a-b ) : [-1];
}