// 해시 ◎
function solution(participant, completion) {
    
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
      
    let a = participant[i];
    let b = completion[i];

    //  완주자 명단에 있는 선수는 값이 0이 되고, 참여자 명단에는 있지만 완주자 명단에 없는 선수는 값이 1이 된다.
    map.set(a, (map.get(a) || 0) + 1);  
    map.set(b, (map.get(b) || 0) - 1); 
      
  }

  // map 안에서, 값이 0이상(완주자)을 추려낸다.
  for (let [key, value] of map) {
    if (value > 0) return key;
  }
    
}