// b를 두 번 반복시킨 다음, a가 그 안에 있는지 찾아보면, 밀었을 때 그 글자를 만들 수 있는지 알 수 있다.
// indexOf 자체가, 값이 없으면 -1을 출력해주어서 좋다.
let solution=(a,b)=>(b+b).indexOf(a);

/*
* 해결법 *
// b를 두 번 반복시킨 다음, a가 그 안에 있는지 찾아보면, 밀었을 때 그 글자를 만들 수 있는지 알 수 있다.
// indexOf 자체가, 값이 없으면 -1을 출력해주어서 좋다.
*/