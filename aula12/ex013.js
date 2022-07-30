//condição aninhada
agora = new Date()
var hora = agora.getHours()

console.log(`agora são exatamente ${hora} horas `)
if (hora < 12 && hora >=6 ){
    console.log(`Bom dia`)
}
    else if (hora >= 12 && hora <=18){
        console.log(`boa tarde `)
    }
        else if (hora > 18 && hora <= 23){
            console.log(`boa noite`)
        }
            else{
                console.log('boa madrugada')
            }