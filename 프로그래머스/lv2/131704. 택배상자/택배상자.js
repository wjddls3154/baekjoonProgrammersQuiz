function solution(order) {
    let result = 0;  
    let stack = [];  // 보조 컨테이너 벨트
    
    // 반복문은, order 1이상 ~ order 길이 이하로 돌아간다.
    for (let i = 1; i <= order.length; i++) {
        stack.push(i);  // 매번, 보조 컨테이너 벨트에 상자를 넣어둔다.
        
        // 보조 컨테이너 벨트에 넣은 상자와, order 순서를 확인하여, 순서와 상자가 같다면 pop(제거)을 하고,
        while  (stack.length > 0 && stack[stack.length - 1] === order[result]) {
            stack.pop();
            result++;  // result 를 1 증가시켜준다.
        }
    }
    return result;  // 결과 값 반환
}