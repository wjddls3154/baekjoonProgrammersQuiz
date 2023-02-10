// 영어 대소문자로 이루어진 문자열을 모두 소문자로 바꾸고, 알파벳 순서대로 정렬하고, 정렬한 문자열을 리턴.
const solution = (my_string) => my_string.split("").map(a => a.toLowerCase()).sort().join("");