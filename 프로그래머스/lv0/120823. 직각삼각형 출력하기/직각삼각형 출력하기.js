const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
  let star = '';

  for(let i=0; i<input; i++) {
    for(let j=0; i>=j; j++) {
      star += '*'
    }
    star += '\n'
  }
  console.log(star)
});


/*
* 해결법 *
- 우선, 해당 문제를 풀려면 자바스크립트 입력받는 방법 부터 알아야 한다.
자바스크립트에서는, 아래 readline 모듈을 이용해 콘솔을 통해 값을 입력받을 수 있다.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {

});

- 그리고,  * 을 작성하는 것은, 2중 for문을 이용했다.
i가 1씩 증가하는 것은 line 줄 수이고, j는 *의 가로 개수인데,
1줄일 때 1개, 2줄일 때 2개, 3줄일 때 3개 ... 이런 규칙으로 작성되므로
i 의 크기만큼, j를 반복하면 되서 i >= j 라는 표현식을 사용했다.
*/
