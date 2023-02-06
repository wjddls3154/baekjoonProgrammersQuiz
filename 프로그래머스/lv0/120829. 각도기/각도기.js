function solution(angle) {
    if(0 < angle && angle < 90) { // 예각일 때, 1을 반환
        return 1;

    } else if (angle === 90) { // 직각일 때, 2를 반환
        return 2;

    } else if (90 < angle && angle < 180) { // 둔각일 때, 3을 반환
        return 3;

    } else if (angle === 180) { // 평각일 때, 4를 반환
        return 4;
    }
}
