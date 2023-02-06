function solution(numbers) {
    numbers.sort((a,b) => b-a);
    return numbers[0] * numbers[1];
}


/*
* 해결법 *
- sort 메소드를 b-a 형식으로 사용해서, 내림차순으로 정렬한다.
( 내림차순으로 정렬했기 때문에, 가장 큰수가 제일 앞에서부터 정렬이 되어있다.
그래서, 0번인덱스와 1번 인덱스를 곱하는 것이, numbers 의 원소 중 두 개를 곱해 만들 수 있는 최댓값이다. )
*/