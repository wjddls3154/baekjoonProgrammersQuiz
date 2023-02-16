function solution(id_list, report, k) {
    
    const result = new Array(id_list.length);  // 각 유저별로 처리 결과 메일을 받은 횟수를 담은 배열, 유저의 수만큼 배열 크기 할당.
    result.fill(0); // fill 메서드 이용해서, 일단 배열 0으로 초기화
    
    const ban_list = {};   
    
    id_list.map( (user) => {
        ban_list[user] = []; // ban_list 객체에는, key로 userid를, value로 신고한 사람을 담기위한 빈 배열을 추가한다.
    } )
    
    report.map( (user) => {
        const [user_id, report_id] = user.split(' ')  // [ 신고한 id, 신고당한 id ] 띄어쓰기로 구분
        
        // ban_list 에, 신고 당한 id가 포함되어 있지 않으면, 새롭게 신고 당한 id를 추가해준다.
        if(!ban_list[report_id].includes(user_id)){  
            ban_list[report_id].push(user_id);
        }        
    })
    
    for(const id in ban_list){
        if(ban_list[id].length >= k){ // 만약, k번 이상 신고 당하면 이용 정지당한다.
            ban_list[id].map((user)=>{
                result[id_list.indexOf(user)] += 1  
                // 신고 당한 유저가 정지당하면, 그 유저를 신고한 유저들은 시스템에서 처리 결과 메일을 1회 받는다 +1
            })
        }
    }
    return result;
}