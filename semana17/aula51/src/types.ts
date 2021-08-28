export type addressInfo = {
    cep: string,
    logradouro: string,
    bairro: string,
    localidade: string,
    uf: string
}

export type user = {
    id: string
    nome: string
    cep: string
    logradouro: string
    numero: number
    complemento?: string
    bairro: string
    localidade: string
    uf: string
}