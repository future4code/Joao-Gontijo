// EXERCICIOS INTERPRETAÇÃO

// 1a) false
// b) false
// c) true
// d) boolean


// 2a) undefined
// b) null
// c) 11
// d) 3
// e) array 11 [3, 19, 5 , 6, 7, 8, 9, 10, 11, 12, 13]
// f) 9

// // EXERCICOS DE ESCRITA
// // 1)
// let idade = Number (prompt ("Qual a sua idade?"))
// let idadeAmigue = Number (prompt ("E a idade da/o sua/eu melhor amiga/o?"))
// let diferencaDeIdade = Boolean(idade > idadeAmigue)

// console.log ("Sua idade é maior do que a de sua/eu melhor amiga/o?", diferencaDeIdade)
// console.log ("A diferença de idade de vocês é:" + (idade - idadeAmigue))


// 2
// const numeroPar = Number (prompt("Escreva um número par"))
// console.log (numeroPar % 2)

// 2c) O resto é sempre 0
// 2d) O resto é sempre 1

// 3)

// let listaDeTarefas = []

// listaDeTarefas[0] = prompt ("Fale uma tarefa que precise executar hoje")
// listaDeTarefas [1] = prompt ("Fale outra tarefa que precisa executar hoje")
// listaDeTarefas [2] = prompt ("Fale mais uma tarefa para executar hoje")
// console.log (listaDeTarefas)

// let i = Number (prompt("Digite qual tarefa você fez hoje, 0, 1 ou 2"))

// listaDeTarefas.splice(i, 0)

// console.log(listaDeTarefas)

// // 4)
// const nomeUsuario = prompt ("Escreva seu nome:")
// const emailUsuario = prompt ("Escreva seu Email:")

// console.log ("O e-mail " + emailUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o) " + nomeUsuario  )


let idadeAnos= Number(prompt('Quantos anos você tem?'))
let idadeMeses = Number (prompt('Quantos meses você tem?'))
let idadeDia = Number(prompt('Quantos dias você tem?'))
let idadeEmDias = (idadeAnos * 365 + idadeMeses*30 + idadeDia)

console.log ('Sua idade em dias é=' + idadeEmDias)