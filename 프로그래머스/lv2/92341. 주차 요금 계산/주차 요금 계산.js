// fees : 주차 요금을 나타내는 정수 배열 , records : 자동차의 입/출차 내역을 나타내는 문자열 배열 
// ◎
function solution(fees, records) {
  const cars = {};  // 차를 저장하는 배열
    
  records.forEach(x => {
    let [time, carNum, type] = x.split(" ");  // 입력 받은 x를, 띄어쓰기를 기준으로, time, carNum, type 정보로 쪼갠다.
    let [hour, minute] = time.split(":");  // time 을 ":" 을 기준으로, hour 와 minute 으로 쪼갠다.
        
    // 시를 분으로 바꿔서, 원래 분과 합친다.
    time = hour * 60 + Number(minute);
    
    // 만약, 차가 처음 조회되는 번호의 차량일 시
    if (!cars[carNum]) {
      cars[carNum] = { time: 0, carNum };  // 시각과 차량번호를 기록한다.
    }
        
    cars[carNum].type = type;  // 내역의 type
    
    // 만약, 출차(OUT)이면,  
    if (type == "OUT") {
        cars[carNum].time += time - cars[carNum].lastInTime;
        return;
    }
    // 만약, 입차(IN)이면,
    cars[carNum].lastInTime = time;
  });

  return Object.values(cars).sort((a, b) => a.carNum - b.carNum).map(c => {
      
      // 차량이 최종적으로 나간(출차) 내역이 없다면, 23:59분에 출차된 것으로 간주한다.
      if (c.type == "IN") {
        c.time += 1439 - c.lastInTime;
      }
      
      // 만약, 주차 기본시간을 넘지 않았을 때는, 기본 요금 5천원을 값으로 반환한다.
      if (fees[0] > c.time) {
        return fees[1];
      }
      // 그 외의 요금은, 주차요금 공식에 따라서 계산한다.      
      return fees[1] + Math.ceil((c.time - fees[0]) / fees[2]) * fees[3];
    });
}