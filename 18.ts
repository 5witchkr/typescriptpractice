type T1 = 'string literal'
type T2 = 123
const v1 = 'string literal'
const v2 = 123
//tpye은 타입 const는 값


//class 는 타입으로도 쓰이고 값으로도 쓰인다.
class Cylinder2 {
    radius = 1
    height = 1
}

function calculateVolume2(shape: unknown){
    if (shape instanceof Cylinder2) {//값으로 쓰임
        shape//타입으로 쓰임
        shape.radius
    }
}

type T3 = typeof Cylinder2 //T3의 타입은 Cylinder2가 아닌 typeof Cylinder2 타입
type T4 = InstanceType<typeof Cylinder2>// 이렇게 써야 Cylinder2 타입