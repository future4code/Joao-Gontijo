const colors = require('colors')

const operacao = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);


switch (operacao) {
  case "add":
    return console.log(`${num1 + num2}`.red);
  case "sub":
    return console.log(`${num1 + num2}`.green);
  case "mult":
    return console.log(`${num1 + num2}`.yellow);
  case "div":
    return console.log(`${num1 + num2}`.black);
  default:
    return console.log ("Faltou escrever ae")
}

