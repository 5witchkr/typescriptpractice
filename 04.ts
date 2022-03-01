const el = document.getElementById('status')


//strickNullChecks True 시 적용되는 오류체크(tsconfig.json)
//간단하게 "strick"을 true로 해주면 noImpliciAny와 함께 적용가능하니 참고


//el이 null일수도 있다는 경고가 뜸
el.textContent = 'Ready'


//el이 있으면.. 실행
if(el) {
    el.textContent = 'Ready'
}


//el의 값이 있다고 강제함
el!.textContent = 'Ready'