import connection from "./connection"

export default async function selectAllUsers(): Promise<any> {
    const result = await connection.raw (
        `SELECT * FROM aula_51`
    )
    return result[0]
}