
function checar(){

let numero = window.document.getElementById('number1')
let res = window.document.getElementById('seltab')

if (numero.value.length == 0){
    window.alert('Digite um número!')
}else{
    let n = Number(numero.value)
    let c = 1
    res.innerHTML = ''
    for(n; c <=10; c++){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n * c}`
        res.appendChild(item)

    }
}

}





