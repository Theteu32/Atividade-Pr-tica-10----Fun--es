let segundos = Number(prompt("Digite o tempo de duração de uma fábrica expressa em segundos: "))

function converter(){

    let horas = segundos / 3600 | 0

    let minutos = (segundos % 3600) / 60 | 0

    let segundoss = segundos % 60

    return horas + ":" + minutos + ":" + segundoss
}
console.log(converter())