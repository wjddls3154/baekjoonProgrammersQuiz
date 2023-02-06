function solution(price) {
    if (price >= 100000 && price < 300000) {
        return Math.floor(price * .95);
    } else if (price >= 300000 && price < 500000) {
        return Math.floor(price * .90);
    } else if (price >= 500000) {
        return Math.floor(price * .8);
    } else {
        return price;
    }
}


/*
* 해결법 *
- if문의 price 범위와, && 잘 사용하기
- .95 .90 .8 로도 표현하여, 사용이 가능하다.
- 제한사항에서 소수점 이하를 버린다고 했기 때문에, floor (내림) 을 사용했다.
*/
