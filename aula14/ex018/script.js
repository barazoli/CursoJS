function calcular(){
 var num = document.getElementById ('num')
 let sele = document.getElementById ('sele')

if (num.value.length == 0){
    window.alert('Digite um numero')
} 
    else{

    
 let n = Number(num.value)
 let c = 1
  sele.innerHTML = ' '
 while (c <= 10){
    let item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    item.value = `tab${c}`
    sele.appendChild(item)
    c++
 }
}
}
