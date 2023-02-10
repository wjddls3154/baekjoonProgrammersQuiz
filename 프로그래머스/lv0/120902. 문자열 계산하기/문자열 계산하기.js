// ◎
// eval 대신 새로운 function을 리턴해주는 것으로도 eval을 구현할 수 있다.
// 대신 리턴은 문자로, my_string은 변수로 만들어 주어야 제대로 동작한다.
function solution(my_string) {
    return Function(`return ${my_string}`)();
}