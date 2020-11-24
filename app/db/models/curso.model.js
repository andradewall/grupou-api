const { DataTypes, DATE } = require("sequelize");
const sequelize = require("../index").getConn();

// O name será o nome do arquivo sem ".model.js"
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const Curso = sequelize.define(name, {
    nome: {
        type: DataTypes.STRING(30),
    },
    tipo: {
        // mestrado, doutorado, graduação, pós-graduação...
        type: DataTypes.STRING(20),
    },
    createdAt: {
        type: DataTypes.DATE,
        field: "criadoEm",
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: "atualizadoEm",
    },
}, {
    sequelize,
    tableName: name,
});

Curso.associate = (models) => {

    Curso.belongsToMany(models.turma, {
        through: "turma_cursos",
        timestamps: false,
        foreignKey: {
            name: "idCurso"
        },
        as: "turma"
    })

    // Curso tem vários Aluno
    Curso.hasMany(models.aluno, {
        foreignKey: {
            name: "idCurso"
        },
        as: "alunos"
    })
}


module.exports = Curso; 