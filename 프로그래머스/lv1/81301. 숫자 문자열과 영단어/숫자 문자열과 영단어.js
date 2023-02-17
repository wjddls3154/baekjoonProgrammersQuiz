function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var result = s;
    
    for(let i = 0; i < numbers.length; i++) {
        let array = result.split(numbers[i]);  // split으로 문자열 사이의 영어를 나누고,
        result = array.join(i);  // 나뉜 배열을 join(i) 배열의 인덱스를 사용해, 다시 합쳐서 숫자로 바꾸는것이다.
    }
    return Number(result);  // 합친 문자를 숫자화
}

/*
만약, 정규식으로 푼다면 ?
function solution(s) {
    let answer = 0;
    
    s = s.replace(/zero/g, 0);
    s = s.replace(/one/g, 1);
    s = s.replace(/two/g, 2);
    s = s.replace(/three/g, 3);
    s = s.replace(/four/g, 4);
    s = s.replace(/five/g, 5);
    s = s.replace(/six/g, 6);
    s = s.replace(/seven/g, 7);
    s = s.replace(/eight/g, 8);
    s = s.replace(/nine/g, 9);
    
    answer = Number(s);
    return answer;
}
*/