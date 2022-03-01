//K라는 타입은 string을 받아옴
function getKey<K extends string>(val:any, key: K) {
    //...
}


//앞에 key는 any니까 아무거나넣고 두번째파라미터를 잘 보자
getKey({}, 'x')
getKey({}, Math.random() < 0.5? 'a' : 'b')//'a'나 'b'
getKey({}, document.title)
//12는 숫자기때문에 key의 타입인 <K extends string>에 포함되지 않는다. 즉 string을 상속(extends)받아올수없음
getKey({}, 12)
