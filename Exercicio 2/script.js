let valor = Number(prompt("digite um numero: "))

function parouimpar(valor){
    if(valor % 2 === 0){
        return false
    }
    else{
        return true
    }
}
console.log(parouimpar(valor))