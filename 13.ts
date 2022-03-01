interface Identified {
    id: string
}
interface Person {
    name: string
}
interface Lifespan {
    birth: Date
    death?: Date
}

// & 로 합집합을 만듬
type PersonSpan = Person & Lifespan

const hong: PersonSpan = {
    name:'hong',
    birth: new Date('1997/06/23')
}


// |으로 둘중 하나만 충족하면 ok
type kkk = Person | Lifespan
//jin의 경우 person을 만족시켜서 ok
const jin: kkk = {
    name: "jin",
    death: new Date('1300/01/02')
}



type KK = keyof (Person | Lifespan)
/*
키오브를 사용한다면 다음개념과 같다고 보면된다.
keyof (A & B) == (keyof A) | (keyof B)
라는 뜻이고
keyof (A | B) == (keyof A) & (keyof B)
라는 뜻이다.
*/