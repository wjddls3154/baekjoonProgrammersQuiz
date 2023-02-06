function solution(numbers) {
    var sum = 0;  // 합을 담는 변수

    // 반복문을 이용해서, numbers 배열의 원소를 차례대로 더한다.
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];  
    }
    
    var avg = sum / numbers.length;  // 모두 더한 원소의 값을, 길이로 나누어 평균값을 구한다.
    return avg;  // 평균을 반환
}
