// string 이 배열 안에 하나씩 들어가게 해준다. ( Set 으로 중복이 제거된 상태 )
const solution = my_string => [...new Set(my_string)].join('')
