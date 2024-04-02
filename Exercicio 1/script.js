let nota1 = Number(prompt("Digite sua primeira nota: "));
let nota2 = Number(prompt("Digite sua segunda nota: "));
let nota3 = Number(prompt("Digite sua terceira nota: "));
let letra = prompt("Digite (a) para média aritmética e (p) para média ponderada: ").toLowerCase();

function calculo(){
    let peso1 = 5;
    let peso2 = 3;
    let peso3 = 2;
    let somaPesos = peso1 + peso2 + peso3;
    
    switch (letra) {
        case 'a':
            let aritmetica = (nota1 + nota2 + nota3) /3;

            console.log(`A média aritmética das notas foi ${aritmetica}`);
            break;
        case 'p':
            let notasXpesos = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
            let ponderada = notasXpesos / somaPesos;

            console.log(`A média ponderada das notas foi ${ponderada}`);
            break;
        default:

            break;
    }
}

calculo()