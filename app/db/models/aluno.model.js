const { DataTypes } = require("sequelize");
const sequelize = require("../index").getConn();

// O name será o nome do arquivo sem ".model.js"
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const Aluno = sequelize.define(name, {
    matricula: {
        type: DataTypes.STRING(10)
    }
}, {
    sequelize,
    tableName: name,
});

// Associação do aluno
Aluno.associate = (models) => {

    // Aluno pertence à um Usuário
    Aluno.belongsTo(models.usuario, {
        foreignKey: {
            name: "idUsuario"
        },
        as: "usuario"
    })

    // Aluno pertence à um Curso
    Aluno.belongsTo(models.curso, {
        foreignKey: {
            name: "idCurso"
        },
        as: "curso"
    })

    Aluno.belongsToMany(models.hardskill, {
        through: "aluno_hardskill",
        timestamps: false,
        foreignKey: {
            name: "idAluno"
        },
        as: "hardskills"
    })

    Aluno.belongsToMany(models.softskill, {
        through: "aluno_softskill",
        timestamps: false,
        foreignKey: {
            name: "idAluno"
        },
        as: "softskills"
    })

    Aluno.belongsToMany(models.grupo, {
        through: "grupo_alunos",
        timestamps: false,
        foreignKey: {
            name: "idGrupo"
        },
        as: "grupos"
    })

    Aluno.belongsToMany(models.turma, {
        through: "turma_alunos",
        timestamps: false,
        foreignKey: {
            name: "idTurma"
        },
        as: "turma"
    })
}

module.exports = Aluno; 