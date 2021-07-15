// 1 A) Dá erro quando atribuo um número à uma variável do tipo string

// const minhaString: string = 15

// // B) Basta atribuir o tipo string com o comparador | 
// let meuNumero: number|string = 10 
// meuNumero= "joao"
// C)
// D)
enum RAINBOW_COLORS {
    RED = 'Red',
    ORANGE= 'Orange',
    YELLOW = 'Yellow',
    GREEN = 'Green',
    BLUE = 'Blue',
    VIOLET = 'Violet',
    INDIGO ='Indigo'
  }

  type person = {
    name: string,
    age: number,
    favColor: RAINBOW_COLORS
}

const astrodev: person = {
    name: "Astrodev",
    age: 30,
    favColor: RAINBOW_COLORS.BLUE
}
const joao: person = {
    name: "João",
    age: 25,
    favColor: RAINBOW_COLORS.INDIGO
}
const pedro: person = {
    name: "Pedro",
    age: 26,
    favColor: RAINBOW_COLORS.GREEN
}
