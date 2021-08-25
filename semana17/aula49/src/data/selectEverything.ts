import connection from "../connection";

const selectEverything = async(name:string, type: string, sort:string, order: string, page:number  ): Promise<any> =>{
    const result = await connection ('aula49_exercicio')
    .select('*')
    .where ('name','like',`%${name}%`)
    .andWhere('type', 'like', type)
    .orderBy(sort, order)
    .limit(5)
    .offset(page)
    return result
}

export default selectEverything