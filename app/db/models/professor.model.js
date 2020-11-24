const { DataTypes } = require("sequelize");
const sequelize = require("../index").getConn();

// O name será o nome do arquivo sem ".model.js"
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const Professor = sequelize.define(name, {
    matricula: {
        type: DataTypes.STRING(10)
    }
}, {
    sequelize,
    tableName: name,
});

// Associação do aluno
Professor.associate = (models) => {

    // Professor pertence à um Usuário
    Professor.belongsTo(models.usuario, {
        foreignKey: {
            name: "idUsuario"
        },
        as: "usuario"
    })

    // Professor.belongsToMany(models.hardskill, {
    //     through: "aluno_hardskill",
    //     timestamps: false,
    //     foreignKey: {
    //         name: "idProfessor"
    //     },
    //     as: "hardskills"
    // })
}

module.exports = Professor; 