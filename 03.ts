interface State {
    name:string
    nickname:string
}
const users: State[] = [
    { name:'최동현', nickname:'switch'},
    { name:'홍길동', nickname:'oz'}
]

for (const user of users) {
    console.log(user.name,user.nickname)
}