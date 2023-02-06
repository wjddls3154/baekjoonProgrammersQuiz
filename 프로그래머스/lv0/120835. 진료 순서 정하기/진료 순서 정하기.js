function solution(emergency) {
    let sequence = emergency.slice().sort((a,b) => b-a);
    return emergency.map( x => sequence.indexOf(x)+1);
}

/*
* 해결법 *
- slice() 함수를 첫 번째 인자 없이 이렇게 사용하면, 배열의 처음 값부터 마지막 값까지 전체를 복제한다.
- 그리고, sort 를 이용하는데 (b-a) 형식으로 사용하면, 내림차순으로 정렬한다.
( 내림차순이기때문에 높은수부터 낮은순으로 정렬이 되는 것이다. )

- 그리고, indexOf 함수를 이용해서, 값이 어느 인덱스에 위치하는지를 찾아주고, 인덱스는 0부터 시작하는데 우리는 순서를 1부터 매기기때문에, +1을 해줘서 순서를 매겨주는것이다.
*/
