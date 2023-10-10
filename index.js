const express = require('express')
const { Aluno, Curso, CursoAluno } = require('./database')
const PORT = 3000
const app = express()

Aluno.belongsToMany(Curso, { through: CursoAluno })
Curso.belongsToMany(Aluno, { through: CursoAluno })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/alunos/:id', async (req, res) => {
    const id = req.params.id

    try {
        const result = await Aluno.findOne({
            where: { id: id },
        })
    
        res.status(200).json(result)
    } catch (err) {
        res.json(err)
    }
})

app.post('/alunos', async (req, res) => {
    const data = req.body

    try {
        const result = await Aluno.create({nome: data.nome, idade: data.idade})

        res.json(result)
    } catch (err) {
        res.json(err)
    }
})

app.put('/alunos/:id', async (req, res) => {
    const id = req.params.id
    const data = req.body

    try {
        const result = await Aluno.update({nome: data.nome, idade: data.idade}, {
            where: {
                id: id
            }
        })

        res.status(200).json(result)
    } catch (err) {
        res.json(err)
    }
})

app.delete('/alunos/:id', async (req, res) => {
    const id = req.params.id

    try {
        const result = await Aluno.destroy({
            where: {id: id}
        })

        res.status(200).json(result)
    } catch (err) {
        res.json(err)
    }
})

app.get('/cursos/:id', async (req, res) => {
    const id = req.params.id

    try {
        
        const result = await Curso.findOne({
            where: { id },
            attributes: ['curso_id', 'nome_curso'],
            include: {
                model: Aluno,
                attributes: ['user_id']
            }
        })
    
        res.status(200).json(result.dataValues)
    } catch (err) {
        res.json(err)
    }
})

app.post('/cursos', async (req, res) => {
    const data = req.body

    try {
        const result = await Curso.create({nome: data.nome, descricao: data.descricao})

        res.json(result)
    } catch (err) {
        res.json(err)
    }
})

app.put('/cursos/:id', async (req, res) => {
    const id = req.params.id
    const data = req.body

    try {
        const result = await Curso.update({nome: data.nome, descricao: data.descricao}, {
            where: {
                id: id
            }
        })

        res.status(200).json(result)
    } catch (err) {
        res.json(err)
    }
})

app.delete('/cursos/:id', async (req, res) => {
    const id = req.params.id

    try {
        const result = await Curso.destroy({
            where: {id: id}
        })

        res.status(200).json(result)
    } catch (err) {
        res.json(err)
    }
})

app.post('/cursoAluno', async (req, res) => {
    const data = req.body

    try {
        const result = await CursoAluno.create({aluno_id: data.aluno_id, curso_id: data.curso_id})

        res.status(200).json(result)
    } catch (err) {
        res.json(err)
    }
})

app.put('/cursoAluno/:id', async (req, res) => {
    const id = req.params.id
    const data = req.body

    try {
        const result = await CursoAluno.update({curso_id: data.curso_id, aluno_id: data.aluno_id}, {
            where: {
                id: id
            }
        })

        res.status(200).json(result)
    } catch (err) {
        res.json(err)
    }
})

app.delete('/cursoAluno/:id', async (req, res) => {
    const id = req.params.id

    try {
        const result = await CursoAluno.delete({
            where: {
                id: id
            }
        })

        res.status(200).json(result)
    } catch (err) {
        res.json(err)
    }
})

app.listen(PORT, () => console.log('> Server is listening on port: ' + PORT))