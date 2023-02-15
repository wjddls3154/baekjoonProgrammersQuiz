/* 
a : 마트에서, 콜라 b개당 요구하는 빈병의 수
b : 빈병 a개를 받으면, 주는 콜라의 수
n : 현재, 가지고 있는 빈병의 수
빈병 n개를, a로 나누고, 그 몫에 주는 콜라의 수 b를 곱한만큼 result에 더해준다.
그럼, 남은 병 수는 받은 병수에 나눠떨어지지 않은 나머지를 더한만큼 남아있게 된다.
이 과정을 반복하다가, 요구하는 병 수 a보다, 남은 병 수가 더 적어지면 그땐 빈병을 콜라를 바꿀수없는 상황이기에 종료된다.
*/

const solution = (a, b, n) => {
    let result = 0;
    let remain = n;

    while (true) {
        if (a > remain) {
            break;
        }
        result += parseInt(remain/a) * b;
        remain = parseInt(remain/a) * b + remain % a
    }

    return result;
}