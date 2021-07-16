const colors = require('colors')


const nomeIdade = (name, age) => {
    if (name && age){
  return `Olá ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}.`.green
} else {
    return `deu ruim, adiciona os parametros direito`.red
}
 };


 console.log(nomeIdade(process.argv[2], Number(process.argv[3])))
