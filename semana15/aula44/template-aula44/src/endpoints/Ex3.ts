import express, { Request, Response } from 'express'
import { app } from '../app'
import {users} from "../data"
import { User } from '../types'


app.get('/user', (req: Request, res: Response) =>{
    const name: string = req.query.name as string
    
})