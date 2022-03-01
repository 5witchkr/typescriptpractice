//인터페이스가 아닌 클래스로도 타입을 만들수있음
class Square2 {
    constructor(public width: number){}
}

class Rectangle2 extends Square2 {
    constructor(public width: number, public height: number) {
        super(width)
    }
}


//Shape2의 타입설정을 클래스Square2 또는 Rectangle2로 선언함
type Shape2 = Square2 | Rectangle2

function calculateArea2(shape: Shape2) {
    if (shape instanceof Rectangle2) {
        shape
        return shape.width * shape.height
    } else {
        shape
        return shape.width * shape.width
    }
}

//클래스가 들어가니까 new를 앞에 붙여주고 파라미터를 괄호안에 넣어줌
calculateArea2(new Square2(11))
calculateArea2(new Rectangle2(12,10))