function solution(dot) {

    // 만약, x가 양수이면서, y가 양수이면 1을 반환
    if(dot[0] > 0 && dot[1] > 0){
        return 1;
    }

    // 만약, x가 음수이면서, y가 양수이면 2를 반환
    if(dot[0] < 0 && dot[1] > 0){
        return 2;
    }

    // 만약, x가 음수이면서, y가 음수이면 3을 반환
    if(dot[0] < 0 && dot[1] < 0){
        return 3;
    }

    // 만약, x가 양수이면서, y가 음수이면 4를 반환
    if(dot[0] > 0 && dot[1] < 0){
        return 4;
    }

}
