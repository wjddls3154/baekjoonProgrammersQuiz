// ◎
function solution(topping) {
    
    // left : 동생, right : 형 이라 치고, 처음엔 형이 모든 케이크를 다 가지고 있다는 가정. 
    const left = {};  
    const right = topping.reduce((x, y) => {
        // ??(널 병합 연산자)는, ??의 왼쪽에 있는 피연산자가 null 또는 undefined 일 때, 오른쪽 피연산자를 반환하고
        // 그렇지 않으면, 왼쪽 피연산자를 반환하는 논리 연산자다.
        x[y] = (x[y] ?? 0) + 1;  
        return x;
    }, {});
    
    //  leftCount와 rightCount로, 현재 보유한 토핑 종류의 개수를 갱신한다.
    let leftCount = 0;
    let rightCount = new Set(topping).size;
    
    let result = 0;
    
    // 반복문 이용해서, 각 토핑을 left에 추가하고 그 토핑은 right에서 빼는 과정을 반복한다. 
    for (let i = 0; i < topping.length - 1; i++) {
        const nowTopping = topping[i];
        
        if (!left[nowTopping]) {
            leftCount++;
        }
        left[nowTopping] = (left[nowTopping] ?? 0) + 1;
        
        right[nowTopping]--;
        
        if (!right[nowTopping]) {
            rightCount--;
        }
        
        // 그리고, 만약 토핑 종류의 개수가 같아지면 그때마다 result 를 1 증가시킨다.
        if (leftCount === rightCount) {
            result++;
        }
    }
    
    return result;  // 결과 값 반환
}