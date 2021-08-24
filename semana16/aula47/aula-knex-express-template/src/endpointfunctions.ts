import connection from "./connection"
import app from "./app"



//2 A) 

 export const updateActor = async (id: string, salary: number): Promise <any> => {
    await connection ("Actor")
    .update({
        salary: salary
    })
    .where ('id', id)
};

//B)
const deleteActor = async (id: string) : Promise<any> => {
    await connection ("Actor")
    .delete()
    .where('id',id)
}

//C) 
const avgSalary = async (gender: string) : Promise<any> => {
  const result =  await connection ("Actor")
  .avg()
  .where ({gender})

  return result[0].average
}

