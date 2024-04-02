function calcularMedia(nota1, nota2, nota3, nome){
    nota1 = 10;
    nota2 = 9;
    nota3 = 8;
    nome = 'Theus';

    let media = (nota1 + nota2 + nota3) /3

    console.log(`Nota1: ${nota1}  Nota 2: ${nota2}  Nota 3: ${nota3}`)

    alert(`${nome} sua média é ${media}`)
}

calcularMedia()