function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var agora = new Date ()
var hora = agora.getHours()
//var hora = 1
msg.innerHTML = `Agora são ${hora}h horas`

if (hora < 12 && hora >= 6){
    img.src = 'fotomanha.png'
    document.body.style.background = '#b5a796'
    }
        else if(hora >= 12 && hora < 18){
            img.src = 'fototarde.png'
            document.body.style.background = '#98501d'
        }
            else if(hora >=18 && hora <= 23){
                img.src = 'fotonoite.png'
                document.body.style.background = '#21527d'
            }
                else{
                    img.src = 'fotomadruga.png'
                    document.body.style.background ='#5d5e60'
                }
}
