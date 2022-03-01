//타입 오버로드 (2개이상 선언) ..굳이 쓸 이유는 없어보이는
function add(a: number,b: number): number
function add(a: string,b: string): string



function add(a:any, b: any) {
    return a + b
}


//파라미터에 문자,문자 or 숫자,숫자 만 가능함   숫자,문자로 하면 에러로 표현해준다!!!
const twelve = add('1','2')
const elevenn = add(1,1)