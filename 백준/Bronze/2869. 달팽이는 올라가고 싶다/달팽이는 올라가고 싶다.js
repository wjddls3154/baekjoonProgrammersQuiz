const input = require('fs').readFileSync('dev/stdin').toString().split(" ");

const morning = input[0];  // 아침에 이동하는 거리
const night = input[1];  // 밤에 미끄러지는 거리
const goal = input[2];  // 나무막대의 높이

// 달팽이가 나무 막대를 모두 올라가려면 며칠이 걸리는가 ?
// ( 나무막대의 높이 - 밤에 미끄러지는 거리 ) / ( 아침에 이동하는 거리 - 밤에 미끄러지는 거리 ) 를 올림.
console.log( Math.ceil( (goal - night) / (morning - night) ) );