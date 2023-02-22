// 다음 이용 가능 시간을 리턴해주는 함수
// ◎
function getNextTime(endTime) {
  const next = endTime.split(":");  // split() 메서드를 이용해 시간을 분리해준다.

  // 문자열 시간은 숫자로 변환해서 리턴해준다. ( 종료 시간 + 10을 해서 다음 이용 가능 시간을 리턴해준다. )
  // ex) => "19:20" => 1170
  return Number(next[0]) * 60 + Number(next[1]) + 10;
}

function solution(book_time) {
  book_time.sort();  // 시작 시간 순으로 정렬해줍니다.
  
  const room = [];  // 종료 시간이 들어갈 배열

  // forEach를 통해 하나씩 확인해줍니다.
  book_time.forEach( (t) => {
    
    const tmp = t[0].split(":");  // split() 메서드를 이용해서, 시와 분을 분리해준다.

    // 문자열로 된 시와 분을 숫자로 변환하고, 시간도 분 단위로 변경해서 분과 합해준다.
    const startTime = Number(tmp[0]) * 60 + Number(tmp[1]);

    // room 배열에서, 시작 시간과 같거나 작은 수가 있는지 찾는다.
    const idx = room.findIndex( (e) => e <= startTime);

    // 만약, 방을 쓰고 있다면 새로운 room을 추가하고, 새로운 방의 종료시간을 넣어준다.
    if (idx === -1) room.push(getNextTime(t[1]));
    // 만약, 청소하고 바로 쓸수있는 방이 있다면, 기존 room의 종료시간을 변경해준다.
    else room[idx] = getNextTime(t[1]);
  });
    
  // 필요한 최소 객실(room)의 갯수를 리턴해준다.
  return room.length;
}

