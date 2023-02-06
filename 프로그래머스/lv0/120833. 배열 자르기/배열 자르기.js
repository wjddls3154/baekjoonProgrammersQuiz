function solution(numbers, num1, num2) {
    
    // num2 번째 원소도 포함시키기 위해서, +1을 해준다.
    return numbers.slice(num1, num2 + 1);  
    
}