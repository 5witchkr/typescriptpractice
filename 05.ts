//타입선언에 kind를 넣어서 값을 쉽게 알수있게함
interface Square {
    kind:'square'
    width: number
}

interface Rectangle{
    kind:'rectangle'
    height: number
    width: number
}

//Shape의 타입을 지정해줌 (square이거나 rectangle이다.)
type Shape = Square | Rectangle

function calculateArea(shape: Shape) {
    if (shape.kind === 'rectangle') {
        shape
        return shape.width * shape.height
    } else {//kind가 square면
        shape
        return shape.width * shape.width
    }
}

//사용할때 kind를 입력하게해서 알기쉽게함
calculateArea({
    kind:"rectangle",
    height: 100,
    width: 100
})