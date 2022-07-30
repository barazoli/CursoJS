function contar(){
    var inicio = document.getElementById ('txtinicio')
    var fim = document.getElementById ('txtfim')
    var passo =  document.getElementById ('txtpasso')
    var cont = document.getElementById ('prep')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        cont.innerHTML = `Impossivel contar ` 
    } 
    else{
    cont.innerHTML = `contagem: ` 
    let i = Number(inicio.value) 
    let f = Number(fim.value)
    let p = Number(passo.value) 
        
        if(p <= 0){
            window.alert('Passo invalidao! considerando Passo como 1')
            p = 1
        }
        //contagem crescente
        if(i < f){
            for (let c = i; c <= f; c+=p){
             cont.innerHTML += `${c} \u{1F4A9} `   
            } 
        }
        //contagem regressiva
        else{
            for (let c = i; c>=f; c-=p){
            cont.innerHTML += `${c} \u{1F4A9} `   
            }
        }
    cont.innerHTML += ` \u{1F3C1}`    
        
    }
}