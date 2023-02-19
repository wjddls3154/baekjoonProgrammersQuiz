function solution(numbers) {
  const numArr = [];  // 더해서 만들 수 있는 수를 담는 배열

    // 반복문 이용해서, numArr에 서로 다른 인덱스의 수를 더해서 만들수 있는 모든 수를 담는다.
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            numArr.push( numbers[i] + numbers[j] ); 
        }
    }
    // result 라는 새로운 변수 만들어서, 결과값을 담은 numArr를 중복 없는 Set으로 새로 만들고, 오름차순으로 정렬해서 반환.
    const result = [ ...new Set(numArr) ]; 
    return result.sort( (x, y) => x - y );
}
