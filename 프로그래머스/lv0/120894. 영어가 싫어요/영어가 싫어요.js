function solution(numbers) {
    // 영어 소문자 문자열 배열
    const eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    
    for(let i = 0; i < eng.length; i++){
     // split을 eng[i] 기준으로 자르고, 자른 부분을 i로 메꿔주는 방식이다.
        numbers = numbers.split(eng[i]).join(i);
    }
    
  	// split은 문자형이기때문에, 마지막에 number로 숫자형으로 변환.
    return Number(numbers);
}