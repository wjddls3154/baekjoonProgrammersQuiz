// 2진수 -> 10진수 : parseInt 사용
// 10진수 -> 2진수 : toString 사용
// bin1과 bin2를 10진수로 바꿔서 더한 다음에, 다시 2진수로 바꿔주는 형식으로 풀이.
const solution = (bin1, bin2) => (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);

/*
다른 형식
function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}
*/