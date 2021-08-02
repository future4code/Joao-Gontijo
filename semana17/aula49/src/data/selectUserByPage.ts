import connection from "../connection"

export default async function selectUserByPage(page: number): Promise<any> {
    const result = await connection("aula49_exercicio")
    .select('*')
    .limit(5)
    .offset(5*(page-1))
    return result
}


