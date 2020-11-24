const {DataTypes, DATE} = require("sequelize");
const sequelize = require("../index").getConn();

// O name será o nome do arquivo sem ".model.js"
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const Hardskill = sequelize.define(name, {
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

Hardskill.associate = (models) => {
    Hardskill.belongsToMany(models.aluno, {
        through: "aluno_hardskill",
        timestamps: false,
        foreignKey: {
            name: "idHardskill"
        },
        as: "aluno"
    })
}


module.exports = Hardskill; 