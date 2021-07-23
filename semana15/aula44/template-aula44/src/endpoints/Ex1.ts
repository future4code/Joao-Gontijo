import express, { Request, Response } from 'express'
import {users} from "../data"

//A) O método GET
//B) A entidade manipulada é /users

export const getAllUsers = ( req: Request, res:Response) => {
  let codeError:number = 400
    try {
      res.status(200).send(users)
      console.table(users)
    
  } catch (err) {
     res.status(codeError).send("deu ruim né")
  }
}
  

 