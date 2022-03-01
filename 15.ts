interface Point {
    x: number
    y: number
}

type PointKeys = keyof Point

function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
    vals.sort((a, b) => (a[key] == b[key] ? 0 : a[key] < b[key] ? -1 : +1))
    return vals
}

const pts: Point[] = [
    { x: 1, y:1 },
    { x: 2, y:0 }
]

//sortBy에 마우스를 대보면 이해가 쉽다.
sortBy(pts, 'x')
sortBy(pts, 'y')
sortBy(pts, Math.random() < 0.5? 'x' : 'y')