function solution(my_string) {
    let answer = 0;
    my_string.split("").map(num => !isNaN(num)? answer += Number(num) : 0);
    return answer;
}

/*
*해결법*
split("")  : 문자열을, 각각의 문자별로 잘라서, 한 글자씩(공백포함) 배열에 저장하여 리턴.
map : 새로운 배열 요소를 생성하는 함수
isNaN : 주어진 값이 숫자이면 true, 아니면 false 반환.
이것을 이용해서, 숫자들은 answer에 다 더하고, 숫자가 아닌 문자들은 0으로 취급하여 문제를 푼다.
*/
