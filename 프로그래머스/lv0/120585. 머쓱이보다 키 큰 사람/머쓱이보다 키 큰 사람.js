function solution(array, height) {
    return array.filter(a => a > height).length;
}

/*
* 해결법 *
filter 함수는 특정 조건에 해당되는 것만 추려낼 때 쓰는 함수이다.
Array.prototype.filter ( callbackfn [ , thisArg ] )

- filter()는 배열 내 각 요소에 대해 한 번 제공된 callback 함수를 호출해,
callback이 true로 강제하는 값을 반환하는 모든 값이 있는 새로운 배열을 생성한다.
- filter() 는 일치하는 결과 모두를 배열로 반환한다. find()는 하나의 값만 반환한다.
*/