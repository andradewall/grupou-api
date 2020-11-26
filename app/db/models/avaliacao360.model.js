const { DataTypes, DATE } = require("sequelize");
const sequelize = require("../index").getConn();

// O name será o nome do arquivo sem ".model.js"
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const Avaliacao360 = sequelize.define(name, {
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

Avaliacao360.associate = (models) => {

    Avaliacao360.belongsToMany(models.softskill, {
        through: "avaliacao360_softskills",
        timestamps: false,
        foreignKey: {
            name: "idAvaliacao360"
        },
        as: "avaliacao360"
    })

    Avaliacao360.belongsTo(models.aluno, {
        foreignKey: {
            name: "idAluno"
        },
        as: "aluno"
    })

    Avaliacao360.belongsTo(models.grupo, {
        foreignKey: {
            name: "idGrupo"
        },
        as: "grupo"
    })

    Avaliacao360.belongsTo(models.atividadeavaliativa, {
        foreignKey: {
            name: "idAtividadeavaliativa"
        },
        as: "atividadeavaliativa"
    })
}

module.exports = Avaliacao360; 