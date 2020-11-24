const { DataTypes, DATE } = require("sequelize");
const sequelize = require("../index").getConn();

// O name será o nome do arquivo sem ".model.js"
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const Turma = sequelize.define(name, {
    numero: {
        type: DataTypes.INTEGER,
    },
    unidade: {
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

Turma.associate = (models) => {

    Turma.belongsToMany(models.hardskill, {
        through: "turma_hardskills",
        timestamps: false,
        foreignKey: {
            name: "idTurma"
        },
        as: "hardskill"
    })
}


module.exports = Turma; 