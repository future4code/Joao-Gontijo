import connection from "../connection";

const createMovie = async(
    name: string,
    sinopse: string,
    data_de_lancamento: Date,
    playing_limit_date: Date
): Promise<any> => {
    await connection('Movies')
    .insert({
        id: Date.now().toString(),
        name,
        sinopse,
        data_de_lancamento,
        playing_limit_date
    })
}

export default createMovie