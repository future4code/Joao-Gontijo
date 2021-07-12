//1A)Acessamos o parametro a partir do process.argv[2] e usando o console.log chamando a varíavel atríbuida

//B, C)
// const nomeIdade = (name, age) => {
//   return console.log(
//     `Olá ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}.`,
//   );
// };

// nomeIdade("João", 25);
//2)
// const operacao = process.argv[2];
// const numero1 = Number(process.argv[3]);
// const numero2 = Number(process.argv[4]);

// switch (operacao) {
//   case "add":
//     return console.log(numero1 + numero2);
//   case "sub":
//     return console.log(numero1 - numero2);
//   case "mult":
//     return console.log(numero1 * numero2);
//   case "div":
//     return console.log(numero1 / numero2);
//   default:
//     break;
// }

//3)

 const listaDeTarefas = [
     "Lavar a louça"
 ]

 let tarefa = process.argv[2]
 
 listaDeTarefas.push(process.argv[2])

 console.log(listaDeTarefas)
