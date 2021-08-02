import connection from "../connection";

export default async function insertTask(
    id: string, title: string, description: string, deadline: string, authorId: string
){
    await connection('to_do_list_tasks')
    .insert({
        id,
        title,
        description,
        deadline,
        author_id: authorId
    })
}