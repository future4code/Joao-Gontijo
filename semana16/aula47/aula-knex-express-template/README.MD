### EXERCÍCIO 1

a) A resposta quando usamos raw, devolve os resultados da query e outras informações.
Como os dados que queremos estão na primeira posição do arrya, precisamos pegar a primeira posição da query;

b) A função é 

```
app.get ('/users/:name', async (req, res) => {
    try {
        const name = req.params.name
        const result = await connection.raw (`
        SELECT * FROM Actor WHERE name = '${name}'
        `)

        res.status(200).send(result[0])
        console.log(result[0])
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})
```

C) A função é:

```
app.get('/actorGenders/:gender', async (req, res) => {
    try {
        const gender = req.params.gender
        const result = await connection.raw (`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
        `)
        const count = result[0][0]
        res.status(200).send(count)
        console.log(count)
        
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})
```

### EXERCÍCIO 2
a) A função é:

``` 
 export const updateActor = async (id: string, salary: number): Promise <any> => {
    await connection ("Actor")
    .update({
        salary: salary
    })
    .where ('id', id)
};

```
b) A função é:

``` 
const deleteActor = async (id: string) : Promise<any> => {
    await connection ("Actor")
    .delete()
    .where('id',id)
}
```
c) A função é:

``` 
const avgSalary = async (gender: string) : Promise<any> => {
  const result =  await connection ("Actor")
  .avg()
  .where ({gender})

  return result[0].average
}

```
### EXERCÍCIO 3

a)O endpoint é:

``` 
app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
        `)
        res.status(200).send(result[0][0])
        console.log(result[0][0])

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})
```
b) O endpoint é:

``` app.get('/users/', async (req, res) => {
    try {
        const gender = req.query.gender as string
        const result = await connection.raw (`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
        `)
        const count = result[0][0]
        res.status(200).send(count)
        console.log(count)
        
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

```

### EXERCÍCIO 4
a)  O endpoint é:

``` 
app.post('/users', async (req, res) => {
    const {salary, id} = req.body
    try { 
    await connection("Actor")
    .update({salary})
    .where({id})
    
    res.status(200).send("Salário atualizado")
        
    } catch (error) {
    res.status(400).send(error.sqlMessage || error.message)
    }
})
```
b)  O endpoint é:

``` 
app.delete("/actor/:id", async (req, res) => {
      try {
          await connection("Actor")
          .delete()
          .where({id: req.params.id})
          res.status(200).send(`Deletou o ator de ID ${req.params.id}`)
          
      } catch (error) {
          res.status(400).send(error.sqlMessage || error.message)
      }
  })
```