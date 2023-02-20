function solution(arr) {
    // filter의 조건 : 현재 인덱스 요소의 값과, 다음 인덱스 요소의 값이 다른가 ? 같으면 조건에 부합하지 않는다.
    // filter의 테스트를 통과하는 모든 요소를 모아서, 새로운 배열 arr로 반환한다.
    return arr.filter( (a, b) => a != arr[b+1] );
}