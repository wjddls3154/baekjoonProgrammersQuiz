// ◎
function solution(want, number, discount) {
    var result = 0;
    
    // 할인하는 품목과, 정현이가 원하는 제품이 일치하는지 확인하는 함수
    const isSame = (arr) => {
        let map = new Map();  // 매번 map을 초기화 해준다.
        arr.forEach ( x => map.set(x, (map.get(x) || 0) + 1));  // 할인 품목들을 map 에 셋팅한다.
        
        for ( let i = 0; i < want.length; i++ ) {
            if (map.get(want[i]) !== number[i]) return false;  // 원하는 품목의 수량과, 할인 품목이 일치하지 않으면 false
        }
        return true;  // 일치하면 true 를 반환한다.
    }
    
    for ( let j = 0; j <= discount.length - 10; j++ ) {
        let arr = discount.slice(j, j+10);  // 10일동안 할인이 되므로, 10개씩 배열을 잘라준다.
        
        if (isSame(arr)) {
            result++;
        }
    }
    return result;
}