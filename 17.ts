interface Cylinder{
    radius: number
    height: number
}

const Cylinder = (radius: number, height: number) => ({ radius, height })
function calculateVolume(shape: unknown) {
    if (shape instanceof Cylinder) {//Cylinder는 타입이고 instanceof는 값을 참조하기때문에  값자리에 타입을 쓰지않도록 주의하라
        shape.radius
    }
}

