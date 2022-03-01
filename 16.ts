
//Exclude 는 특정한타입을 배제한 타입을 선언하게해줌

//T는 Date 타입이 된다.
type T = Exclude<string | Date, string | number> // 첫번째 파라미터에서 두번째 파라미터들을 빼버려라 는 뜻 
//즉 첫번째파라미터 스트링 데이트 중에서  두번째파라미터 스트링 넘버 빼라는것


type NonzeroNums = Exclude<number, 0> //정수만 뺀다거나 할수는 없다.  Type is still just number 이다.



function sortBy2<T, K extends keyof T>(vals : T[], key: K, order: 'asc' | 'desc') {
}
