import connection from "../connection"

export default async function selectUserByPage(page: number): Promise<any> {
    const result = await connection("aula49_exercicio")
    .select('*')
    .limit(5)
    .offset(page)
    return result
}


