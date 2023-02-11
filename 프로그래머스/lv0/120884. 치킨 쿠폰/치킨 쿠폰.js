function solution(chicken) {
    let coupon = chicken;  // 쿠폰 수 = 치킨 수
    let result = 0;  // 서비스 치킨의 수
    
    // 쿠폰(시켜먹은 치킨수)이 10개 이상이라면, 즉, 반복문을 돌리다가 coupon수가 다시 10개가넘으면, 그 결과를 또 다시 result에 더해줌.
    while(coupon >= 10) {
        // 서비스 치킨의 수 = 쿠폰을 10으로 나눈 몫을 올림한 수
        result += Math.floor(coupon / 10);
        // 쿠폰의 수 = 쿠폰을 10으로 나눈 몫 + 쿠폰을 10으로 나눈 나머지를 올림한 수 
        // Ex) 쿠폰 수 
        coupon = Math.floor( (coupon / 10) + (coupon % 10) );
    }
    
    return result;
}