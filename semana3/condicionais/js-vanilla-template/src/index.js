// EXERCICIO 1:

/*  O código  faz um teste para saber se o número do usuário é par ou não. Primeiro ele pede para o usuário escrever um número. Depois o código transforma a string em número e realiza o teste.
Ele imprime "passou no teste" para números pares, pois ao dividir um número par seu resto é 0.
Já para números ímpares ele imprime "não passou no teste", pois o resto será diferente de 0.

EXERCICIO 2:
A) O código acima serve para o usuário saber o preço dos produtos ao digitá-los.
B) A mensagem impressa no console será "o preço da fruta maçã é R$ 2.25"
C) A mensagem impressa seria "O preço da fruta Pêra é Rs$ 5"


EXERCICIO 3:
A) A primeira linha está definindo a const numero, a partir do que for digitado no prompt pelo usuário e transformando a string em number.
B) A mensagem no terminal será "Esse número passou no teste!". Caso o usuário digite -10, não haverá mensagem.
C) Haverá um erro no console avisando que a váriavel mensagem não está definida, pelo fato de ter sido escrita no escopo filho.

*/

//EXERCICIO 4:

// let idade = Number (prompt('Qual a sua idade?'))

// if (idade >= 18) {
//     console.log('Você pode dirigir!')
// } else {
//     console.log('Você não pode dirigir :(')
// }


// EXERCICIO 5:

// let turnoDeEstudo = prompt ('Em que turno você estuda? Digite M para manhã, V para vespertino e N para noturno')

// if(turnoDeEstudo.toLocaleLowerCase() === 'm') {
//     console.log('Bom Dia!')
// } else if (turnoDeEstudo.toLocaleLowerCase() === 'v') {
//     console.log('Boa Tarde!')
// } else if (turnoDeEstudo.toLocaleLowerCase() === 'n') {
//     console.log ('Boa Noite!')
// } else {
//     console.log('Digite um turno válido!')
// }


//EXERCICIO 6:

// let TurnoDeEstudo = prompt ('Em que turno você estuda? Digite M para manhã, V para vespertino e N para noturno')

// switch (TurnoDeEstudo.toLocaleLowerCase()) {
//     case 'm':
//         console.log('Bom dia!')
//         break
//     case 'v':
//         console.log('Boa Tarde!')
//         break
//     case 'n':
//         console.log('Boa Noite!')
//         break
//     default:
//         console.log('Digite um turno válido!')
// }

 //EXERCICIO 7:
 
// let generoFilme = prompt('Qual o genero do filme?')
// let precoIngresso = Number(prompt('Qual o preço do ingresso?'))

// if((generoFilme === 'Fantasia') && (precoIngresso <= 15)) {
//     console.log ('Bom Filme!')
// } else {
//     console.log ('Escolhe outro filme aí zé')
// }