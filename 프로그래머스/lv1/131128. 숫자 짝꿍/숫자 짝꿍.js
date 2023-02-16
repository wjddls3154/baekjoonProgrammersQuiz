function solution(X, Y) {
    let result = '';
    X = X.split("");
    Y = Y.split("");
    
    // 0~9 해당하는 숫자가 얼마나 있는지 확인해서, 둘 중 더 낮은만큼 정답 문자열에 더해야, 공통적으로 나타나는 정수이다.
    for(let i = 0 ; i < 10 ; i ++) {
        const numX = X.filter(a => Number(a) === i).length;  // X의 각 숫자 정수 개수
        const numY = Y.filter(a => Number(a) === i).length;  // Y의 각 숫자 정수 개수
        result += String(i).repeat(Math.min(numX, numY));
    }
    if(result === '') return "-1";  // X,Y의 짝꿍이 존재하지 않으면, -1을 반환
    if(Number(result) === 0) return "0";  // X,Y의 짝꿍이 0으로만 구성되어있다면, 0을 반환
    
    // 내림차순으로 정렬해서 반환하면, 제일 큰 숫자들이 앞에서 정렬되면서 최댓값을 반환한다.
    return result.split("").sort((a,b) => Number(b)-Number(a)).join("");
}