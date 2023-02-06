function solution(n, k) {
    // 총 가격 : 양꼬치 가격 * 양꼬치 개수 + ( ( 음료수 - 서비스 음료수) * 음료수 가격 )
    total = 12000 * n + (k - Math.floor(n / 10)) * 2000; 
    
    return total;
}