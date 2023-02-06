const solution = (my_string, letter) => my_string.replaceAll(letter, '');


/*
* 해결법 *
- replaceAll 메소드는, replace(a, b) a에 해당하는 문자열(letter) 모두를 b('')로 대체시킨다.
그래서 기존의 문자에서, letter 로 지정된 문자만 제거하고 결과값이 나오는 것이다.
*/