// 1 A) Dá erro quando atribuo um número à uma variável do tipo string

// const minhaString: string = 15

//B) Basta atribuir o tipo string com o comparador | 
// const meuNumero: number|string = 10 
//C)
//D)
// enum RAINBOW_COLORS {
//     RED = 'Red',
//     ORANGE= 'Orange',
//     YELLOW = 'Yellow',
//     GREEN = 'Green',
//     BLUE = 'Blue',
//     VIOLET = 'Violet',
//     INDIGO ='Indigo'
//   }

//   type person = {
//     name: string,
//     age: number,
//     favColor: RAINBOW_COLORS
// }

// const astrodev: person = {
//     name: "Astrodev",
//     age: 30,
//     favColor: RAINBOW_COLORS.BLUE
// }
// const joao: person = {
//     name: "João",
//     age: 25,
//     favColor: RAINBOW_COLORS.INDIGO
// }
// const pedro: person = {
//     name: "Pedro",
//     age: 26,
//     favColor: RAINBOW_COLORS.GREEN
// }

// //2 A) A entrada é um array de números e a saída são as estatistícas com o maior , menor e a média dos números
// //B) A const numerosOrdenados, a let soma, const estatisticas
// function obterEstatisticas(numeros:number[]) {

//     const numerosOrdenados:number[] = numeros.sort(
//         (a:number, b:number) => a - b
//     )

//     let soma:number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas:object = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }
// //C
// type amostraDeIdades ={
//     numeros: number[]
//     obterEstatisticas: (numeros:number[]) => number[]
// }

//3A)
// type post =  {
//     autor: string
//     texto: string
// }

// const posts: post [] = [
//     {
//       autor: "Alvo Dumbledore",
//       texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//       autor: "Severo Snape",
//       texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//       autor: "Hermione Granger",
//       texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//       autor: "Dobby",
//       texto: "Dobby é um elfo livre!"
//     },
//     {
//       autor: "Lord Voldemort",
//       texto: "Avada Kedavra!"
//     }
//   ]

// //B) A entrada são dois parametros que no caso são strings, e a saída retorna o autor do post

// function buscarPostsPorAutor(posts:post[], autorInformado:string) {
//     return posts.filter(
//       (post) => {
//         return post.autor === autorInformado
//       }
//     )
//   }

//4)