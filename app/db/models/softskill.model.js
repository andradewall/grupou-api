const { DataTypes, DATE } = require("sequelize");
const sequelize = require("../index").getConn();

// O name será o nome do arquivo sem ".model.js"
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const Softskill = sequelize.define(name, {
    descricao: {
        type: DataTypes.STRING(50),
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

Softskill.associate = (models) => {
    Softskill.belongsToMany(models.aluno, {
        through: "aluno_softskill",
        timestamps: false,
        foreignKey: {
            name: "idSoftskill"
        },
        as: "aluno"
    })

    Softskill.belongsToMany(models.avaliacao360, {
        through: "avaliacao360_softskills",
        timestamps: false,
        foreignKey: {
            name: "idSoftskill"
        },
        as: "avaliacao360"
    })
}


module.exports = Softskill; 