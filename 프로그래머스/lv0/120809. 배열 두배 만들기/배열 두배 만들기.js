function solution(numbers) {
    var answer = [];
    
    // 반복문 이용해서, 각 원소의 2배 되는 값을, 배열 끝에 값을 추가(push) 한다.
    for(let i = 0; i < numbers.length; i++) {
        answer.push(numbers[i] * 2);  
    }
    return answer;
}