let valor = Number(prompt("Digite um valor: "))
function calculo(){
    let perfeito = false
    let somaDivisores = 0;
    for (let i = 1; i < valor; i++) {
        if (valor % i === 0) {
            somaDivisores += i;
        }
    }
    if(somaDivisores === valor){
        perfeito = true
    }
    console.log(perfeito)
}
calculo()