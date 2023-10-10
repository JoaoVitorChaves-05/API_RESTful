const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('mysql://<username>:<passoword>@<host>:<port>/<database_name>')

module.exports = (async () => {
    const models = {}

    models.Aluno = sequelize.define('Aluno', {
        aluno_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome_aluno: {
            type: DataTypes.STRING,
        },
        idade: {
            type: DataTypes.INTEGER,
        }
    })

    await models.Aluno.sync()

    models.Curso = sequelize.define('Curso', {
        curso_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome_curso: {
            type: DataTypes.STRING,
        },
        descricao: {
            type: DataTypes.STRING
        }
    })

    await models.Curso.sync()

    models.CursoAluno = sequelize.define('CursoAluno', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        aluno_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: models.Aluno,
                key: 'id'
            }
        },
        curso_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: models.Curso,
                key: 'id'
            }
        }
    })

    await models.CursoAluno.sync()

    return models
})()