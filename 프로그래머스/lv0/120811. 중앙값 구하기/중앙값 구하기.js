function solution(array) {
    return array.sort((a, b) => a - b)[Math.floor(array.length / 2)]; // 간결하여 가독성이 올라가서 굿!
}


/*
* 해결법 *
- sort 메소드 사용 : 
sort( (a, b) => a - b )  // 배열 오름차순 
sort( (a, b) => b - a )  // 배열 내림차순

- Math 객체의, floor(내림) 메서드 사용.
*/