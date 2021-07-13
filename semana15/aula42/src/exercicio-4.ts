//4A) Para transpilar o código basta digitar o código tsc

type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//B) O processo seria diferente pois  no arquivo tsconfig.json você tem que configurar o rootDir da seguinte maneira: "rootDir": "./src"
//C) Existe, basta usar o comando tsc.
//D) as configurações que mudam são "target": "es6", se tira o comentário "sourceMap": true, "outDir": "./build","rootDir": "./src",