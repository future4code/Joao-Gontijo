import connection from "../connection";

const genderSalary = async(gender: string):Promise<any> => {
    const result =await connection('Actor')
    .avg('salary as avg_salary')
    .where({gender})
    return result[0].avg_salary
}


export default genderSalary