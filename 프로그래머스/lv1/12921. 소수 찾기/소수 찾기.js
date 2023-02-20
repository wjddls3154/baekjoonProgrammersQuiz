// ◎
function solution(n) {
    let result = 0;
    
    const arr = new Array(n+1).fill(true);  // 배열의 초깃값 설정
    const end = Math.sqrt(n) // 제곱근
    
    for(let i = 2; i <= end; ++i){
        
        // 이미, 소수가 아닌 인덱스는 건너뛴다.
        if(arr[i] === false){
            continue; 
        }
        
        // 소수가 아닌 데이터는 false로 입력한다.
        for(let k = i * i; k <= n; k += i){
            arr[k] = false;
        }
    }
    
    // 소수의 갯수를 구한다.
    for(let i = 2; i <= n; ++i){
        if(arr[i] === true){
            result++;
        }
    }
    
    return result;
}
