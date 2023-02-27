// ◎
function solution(n, k, enemy) {
    
    // 이분 탐색을 진행하기 위해, left, right, mid 변수를 선언
    let [left, right] = [0, enemy.length];
    let mid = Math.floor( (left + right) / 2 );
    
    // right 이 left 이상일 동안, while 문이 돌아간다.
    while (left <= right) {
        
        // 해당 탐색에서, 사용될 적의 크기를 내림차순으로 정렬 ( 적의 수가 많을 때, 무적권(k)을 쓰기 위해서 큰 수부터 나오게 한다. )
        const curSlice = enemy.slice(0, mid).sort( (a,b) => b-a );
        
        let noConsume = k;  // 무적권
        
        // 싸우고 난 후 남을 상대 병사의 수
        const curEnemy = curSlice.reduce( (x, y) => {
            
            // 만약, 무적권이 있다면, 무적권을 먼저 사용하는 것이다.
            if (noConsume > 0) {
                noConsume--;  // 무적권의 횟수를 1을 뺀다.
                return x;
            }
            return x + y;
        }, 0)
        
        // 만약, 내 병사와 무적권의 한도내에서 적을 막아낼 수 있는가 ?
        if (n - curEnemy >= 0 && noConsume >= 0) {
            left = mid + 1;
            
        // 내 병사와 무적권으로 적을 다 못막는다면,
        } else {
            right = mid - 1;
        }
        mid = Math.floor( (left + right) / 2 );
    }
    return left - 1;
}