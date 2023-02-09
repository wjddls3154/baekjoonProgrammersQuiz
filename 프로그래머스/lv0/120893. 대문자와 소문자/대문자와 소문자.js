const solution = my_string => [...my_string].map(a => a.charCodeAt() >= 65 && a.charCodeAt() < 97 ? a.toLowerCase() : a.toUpperCase()).join("")
// charCodeAt 으로 특정 위치에 있는 문자의 유니코드 값 반환받아서,
// 그것을 이용해서 65이상 97미만에 해당하는 대문자이면, 소문자로 변경, 그 외는 대문자로 변경
// ( 문자열 코드로 대문자는 65~90, 소문자는 97~122 번 이용하여 풀이. )
