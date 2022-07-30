var agora = new Date()
var diaSem =  agora.getDay()

/*
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/
console.log(`hoje é ${diaSem}  `)

switch (diaSem) {
    case 0:
        console.log(`hoje é domingo`)
    break

    case 1:
        console.log(`hoje é segunda`)
    break
    case 2:
        console.log(`hoje é terça`)
    break
    case 3:
        console.log(`hoje é quarta`)
    break
    case 4:
        console.log(`hoje é quinta`)
    break
    case 5:
        console.log(`hoje é sexta`)
    break
    case 6:
        console.log(`hoje é sabado`)
    break
    default :
        console.log(`[ERRO] dia invalido`)
        break

}