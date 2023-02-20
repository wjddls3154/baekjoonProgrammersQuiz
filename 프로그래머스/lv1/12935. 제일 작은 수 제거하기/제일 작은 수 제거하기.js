function solution(arr) {
    // arr 배열을 splice 이용해서, arr 배열에서 indexOf이용해서 가장 작은수(min)의 인덱스부터 1개 제거.
    arr.splice( arr.indexOf(Math.min(...arr)), 1);
    
    // 만약, 배열의 길이가 빈 배열(0)일 경우 배열에 -1을 채워 반환한다.
    if(arr.length < 1) return [-1];
    // 빈 배열이 아니면, 그냥 arr 반환
    return arr;
}
