function solution(arr) {
    // reduce 이용, arr 배열 전체 더한 값 / arr 배열의 길이 = arr의 평균
    return arr.reduce( (a, b) => a + b ) / arr.length; 
}