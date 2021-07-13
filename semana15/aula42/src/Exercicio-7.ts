enum CATEGORIA {
    VERAO = "Verão",
    INVERNO = 'Inverno',
    BANHO = 'Banho',
    INTIMAS = 'Íntimas'
}

enum DESCONTOS {
    VERAO = 0.95,
    INVERNO = 0.9,
    BANHO = 0.95,
    INTIMAS = 0.93
}

type roupas = {
    nome: string
    preco: number
    categoria: CATEGORIA
    precoComDesconto?: number
}

const listaDeRoupas: roupas[] = [
    {
        nome: "meia",
        preco: 10,
        categoria: CATEGORIA.INTIMAS
    },
    {
        nome: "regata",
        preco: 40,
        categoria: CATEGORIA.VERAO
    },
    {
        nome: "Casaco",
        preco: 100,
        categoria: CATEGORIA.INVERNO
    },
    {
        nome: "biquini",
        preco: 75,
        categoria: CATEGORIA.BANHO
    }
]

function descontar(roupa: roupas[]) {
    roupa.forEach((roupa) => {
        switch (roupa.categoria) {
            case CATEGORIA.VERAO:
                return roupa.precoComDesconto = roupa.preco * DESCONTOS.VERAO
            case CATEGORIA.INVERNO:
                return roupa.precoComDesconto = roupa.preco * DESCONTOS.INVERNO
            case CATEGORIA.BANHO:
                return roupa.precoComDesconto = roupa.preco * DESCONTOS.BANHO
            case CATEGORIA.INTIMAS:
                return roupa.precoComDesconto = roupa.preco * DESCONTOS.INTIMAS
            default:
                return console.log("me ajuda a te ajudar")
        }
    })
    console.log(roupa)
}

descontar(listaDeRoupas)