let valor = Number(prompt("Digite um numero: "))
function definindo(){
    primo = true;
    if (valor <= 1){
        primo = false
    }
    for(let i = 2; i < valor; i++){
        if(valor % i === 0){
            primo = false
            break
        }
    }
    console.log(primo)
}
definindo();