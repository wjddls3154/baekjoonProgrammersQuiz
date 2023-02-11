function solution(id_pw, db) {
    
  const [id, pw] = id_pw;  // 매개변수로 받는 id_pw 매개변수는 [id, pw] 형식
  
  // 만약, db의 id부분이, id_pw의 id와 일치하지 않으면 fail 메시지를 반환한다.
  if (!db.find(([_id]) => _id === id)) return 'fail';
    
  // db의 id와 pw부분이, id_pw의 id와, id_pw의 pw와 일치하면 login 메시지를 반환, 그렇지 않으면 wrong pw 메시지를 반환.  
  return db.find(([_id, _pw]) => _id === id && _pw === pw) ? 'login' : 'wrong pw';
    
}