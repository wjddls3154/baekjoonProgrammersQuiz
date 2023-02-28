// ◎
function solution(queue1, queue2) {
    const plus = (arr) => arr.reduce((acc, v) => acc + v, 0);
    
    // queue1의 합과, queue2의 합
    let sumQ1 = plus(queue1);
    let sumQ2 = plus(queue2);
    
    // 투 포인터 방식 : 실제로 배열에서 값을 빼고, 넣는것이 아니라서 불필요한 연산이 줄어듬.
    let pointer1 = 0, pointer2 = queue1.length;
    
    const target = (sumQ1 + sumQ2) / 2;
    const queue = [...queue1, ...queue2];
    
    const end = queue1.length * 3;  // 최대 반복횟수
    
    for (let count = 0; count < end; count++) {
        if (sumQ1 === target) {
            return count;
        }
        
        // 1번 큐의 합이 목표치보다 클때는, 포인터1의 값을 높여준다.
        if (sumQ1 > target) {
            sumQ1 -= queue[pointer1++];
        } else {
        // 1번 큐의 합이 목표치보다 작을때는, 포인터2의 값을 높여준다.    
            sumQ1 += queue[pointer2++];
        }
    }
    // 만약, 반복문 끝나도 두 큐의 원소 합을 같게 못만들면 -1을 반환한다.
    return -1;
}
