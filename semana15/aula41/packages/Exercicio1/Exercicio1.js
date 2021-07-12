const nomeIdade = (name, age) => {
  return console.log(
    `Olá ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}.`
  );
};
console.log( nomeIdade ( process.argv[2], Number(process.argv[3])))
