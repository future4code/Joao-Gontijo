import {Request, Response} from "express";
import selectEverything from "../data/selectEverything";


const getEverything = async(req:Request, res:Response):Promise<any>=> {
    try {
        const{name} = req.query
    if(typeof name !== "string"){
        return res.status(422).send("O nome tem que ser string")
    }
    const {type} = req.query
   
    if(typeof type !== "string" || null){
        return res.status(422).send("O tipo tem que ser string!")
    }

    let {sort = "name"} = req.query
    if(typeof sort ==="string"){
        sort = sort.toLocaleLowerCase()
    }
    if(sort !== "id" && sort !=='name' && sort !=='email' && sort !=='type'){
        return res.status(422).send('Insira um parametro válido para ordenacao!')
    }

    const order = req.query.order === "DESC" ? "DESC" :"ASC"
    if(typeof order !== "string"){
        return res.status(422).send("Insira um valor valido para order")
    }

    const page:number = Number(req.query.page) || 1

    const offset: number = (page-1) * 5

    const users = await selectEverything(
        name || '%',
        type || '%',
        sort,
        order,
        offset
    )
    if(!users){
       return res.status(404).send('Tem algum parametro errado')
    }
    res.status(200).send(users)
    } catch (error) {
        if(res.status(200)){
            return res.status(500).send({error: "Erro interno do servidor"})
        }
        res.send({error: error.message || error.sqlMessage})
    }
    

}

export default getEverything