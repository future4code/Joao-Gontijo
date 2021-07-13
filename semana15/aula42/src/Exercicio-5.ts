
const fazContas = (num1: number, num2: number) => {
    const soma: number = num1 + num2
    const subtracao: number = num1 - num2
    const multiplicacao: number = num1 * num2

    if (num1 > num2) {
        return console.log(`Soma: ${soma}, subtração: ${subtracao}, multiplicação: ${multiplicacao},Maior número: ${num1}`)
    } else if (num2 > num1) {
        return console.log(`Soma: ${soma}, subtração: ${subtracao}, multiplicação: ${multiplicacao}, Maior número:${num2}`)
    } else {
        return console.log(`Soma: ${soma}, subtração: ${subtracao}, multiplicação: ${multiplicacao}, números iguais`)
    }

}

fazContas(15, 20)