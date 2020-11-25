const { DataTypes } = require("sequelize");
const sequelize = require("../index").getConn();

// O name será o nome do arquivo sem ".model.js"
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const QuestaoDia = sequelize.define(name, {
    data: {
        type: DataTypes.DATEONLY
    }
}, {
    sequelize,
    tableName: name,
});

// Associação do aluno
QuestaoDia.associate = (models) => {

    // QuestaoDia pertence à um Aluno
    QuestaoDia.belongsTo(models.aluno, {
        foreignKey: {
            name: "idAluno"
        },
        as: "aluno"
    })

    // QuestaoDia pertence à uma Questao
    QuestaoDia.belongsTo(models.questao, {
        foreignKey: {
            name: "idQuestao"
        },
        as: "questao"
    })
}

module.exports = QuestaoDia; 