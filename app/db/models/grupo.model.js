const { DataTypes, DATE } = require("sequelize");
const sequelize = require("../index").getConn();

// O name será o nome do arquivo sem ".model.js"
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const Grupo = sequelize.define(name, {
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

Grupo.associate = (models) => {

    Grupo.belongsToMany(models.aluno, {
        through: "grupo_alunos",
        timestamps: false,
        foreignKey: {
            name: "idAluno"
        },
        as: "aluno"
    })

    Grupo.belongsTo(models.turma, {
        foreignKey: {
            name: "idTurma"
        },
        as: "turma"
    })

    Grupo.belongsTo(models.atividadeavaliativa, {
        foreignKey: {
            name: "idAtividadeavaliativa"
        },
        as: "atividadeavaliativa"
    })

}

module.exports = Grupo; 