const { DataTypes, DATE } = require("sequelize");
const sequelize = require("../index").getConn();

// O name será o nome do arquivo sem ".model.js"
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const Atividadeavaliativa = sequelize.define(name, {
    dataInicio: {
        type: DataTypes.DATE,
    },
    dataTermino: {
        type: DataTypes.DATE,
    },
    nota: {
        type: DataTypes.DECIMAL(4, 2),
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

Atividadeavaliativa.associate = (models) => {

    Atividadeavaliativa.belongsToMany(models.hardskill, {
        through: "atividadeavaliativa_hardskills",
        timestamps: false,
        foreignKey: {
            name: "idAtividadeavaliativa"
        },
        as: "atividadeavaliativa"
    })

    Atividadeavaliativa.belongsTo(models.turma, {
        foreignKey: {
            name: "idTurma"
        },
        as: "turma"
    })
}

module.exports = Atividadeavaliativa; 