function solution(my_string) {
    return my_string.replace(/['a','e','i','o','u']/g,'');
}

/*
*해결법*
replace : 특정문자 치환 or 모든 문자 치환
my_string.replace(/['a','e','i','o','u']/g,'') 
= a,e,i,o,u 를 모두(/g) 공백('')으로 바꾼다는 뜻
*/