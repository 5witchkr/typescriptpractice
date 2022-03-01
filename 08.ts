interface Vector2D {
    x: number
    y: number
}
interface NameVector extends Vector2D {
    name: string
}

function calculateLength(v: Vector2D){
    return Math.sqrt(v.x * v.x + v.y * v.y)
}

const v: NameVector = { x: 3, y:4, name:'Zee'}

// v변수는 NameVector를 받았지만 Vector2D가 필요한  calcul함수에 들어갈수있다.
//타입값이 충족된다고 판단하면 타입스크립트는 알아서 된다고 판단함(영리함)
calculateLength(v)



//하지만 이런 타입스크립트의 특성때문에 오류도 많이 남.. 그래서 이런식으로 오류해결을하기도한다.
//vec2D변수에는 x y뿐아닌 어드레스라는 항목도 들어있음
const vec2D = {x: 3, y: 4, adress:'123'}
calculateLength2(vec2D)
//하지만 이 함수에는 에러가 안뜸 왜냐면 x y값이 충족하니까 타입스크립트가 충족된다고 판단해버림
//지금은 x y를 딱 지정해줬지만 for문 같은걸 돌리면 adress도 for문에 들어와버림...
function calculateLength2(v: Vector2D) {
    return Math.abs(v.x) + Math.abs(v.y)
}