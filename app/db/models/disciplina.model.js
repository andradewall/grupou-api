const { DataTypes, DATE } = require("sequelize");
const sequelize = require("../index").getConn();

// O name será o nome do arquivo sem ".model.js"
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const Disciplina = sequelize.define(name, {
    nome: {
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

Disciplina.associate = (models) => {
    Disciplina.belongsToMany(models.professor, {
        through: "professor_disciplina",
        timestamps: false,
        foreignKey: {
            name: "idDisciplina"
        },
        as: "professor"
    })
}


module.exports = Disciplina; 