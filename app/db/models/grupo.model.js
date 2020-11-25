const { DataTypes, DATE } = require("sequelize");
const sequelize = require("../index").getConn();

// O name será o nome do arquivo sem ".model.js"
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const Tarefa = sequelize.define(name, {
    nome: {
        type: DataTypes.STRING(30),
    },
    dataInicio: {
        type: DataTypes.DATE,
    },
    dataTermino: {
        type: DataTypes.DATE,
    },
    nota: {
        type: DataTypes.DECIMAL(2),
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

Tarefa.associate = (models) => {

    Tarefa.hasOne(models.grupo, {
        foreignKey: {
            name: "idGrupo"
        },
        as: "grupo"
    })

    Tarefa.hasOne(models.aluno, {
        foreignKey: {
            name: "idAluno"
        },
        as: "aluno"
    })
}


module.exports = Tarefa; 