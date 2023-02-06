// 팩토리얼을 구하는 함수
function factorial(num) {
    // 재귀를 통해, n*n-1... 팩토리얼을 구현함. num은 2이상, 팩토리얼 0과 1은 1이다.
    if(num > 1) return num * factorial(num-1);
    return num;
}

function solution(n) {
    // 기본값은 팩토리얼0,1 에 해당하는 1로 두었다.
    let result = 1;
    
    // 제한사항의 최대 값이 10의 팩토리얼이기 때문에, 10번 반복
    for(let i = 1 ; i <= 10; i++) {
        
        // 정수 n이, i의 팩토리얼 값보다 크거나 같으면, 진행하여 가장 큰 정수(최대) i를 구한다.
        if(n >= factorial(i)) {
            result = i;
            continue;
        } else {
            break;
        }
    }
    return result;
}
