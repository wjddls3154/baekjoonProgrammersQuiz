function solution(score) {
    let avg = score.map( x => (x[0]+x[1]) / 2 );  // score의 평균 점수 구하기
    
    // slice() 는 시작인덱스와 끝인덱스를 생략하면 배열의 0번째 인덱스부터 ~ 끝까지 추출.
    let sorted = avg.slice().sort( (a,b) => b-a );  // 내림차순(큰 수부터 작은수)으로 정렬
    
    // avg의 요소와 동일하지만, 내림차순으로 정렬되어있는 sorted 배열의 인덱스를 indexOf 사용해서 구해준다.
    // 인덱스는 0번부터 시작이라서, +1을 해준다.
    return avg.map( y => sorted.indexOf(y) + 1 );
}
