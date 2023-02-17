const input = require('fs').readFileSync('/dev/stdin').toString().trim();

// 문제가 크로아티아 알파벳 or 일반 알파벳으로 구성된 알파벳의 크기(길이)를 반환받는 문제이기에,
// replace 이용해서 크로아티아 알파벳을, 공백으로 바꿔줘서 1의 길이로 만들어준다.
// 나머지 일반 알파벳은 원래 개당 1개의 길이이니, 올바른 결과를 출력한다.

// 크로아티아 알파벳에 해당하는 부분, 정규식 이용해서 정리
let regExp = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;;
let result = input.replace(regExp,'.');
console.log(result.length);