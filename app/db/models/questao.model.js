const {DataTypes} = require("sequelize");
const Aluno = require("./aluno.model");
const sequelize = require("../index").getConn();

// O name será o nome do arquivo sem ".model.js"
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const Questao = sequelize.define(name, {
    descricao: {
        type: DataTypes.TEXT,
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

Questao.associate = (models) => {

	// Questão tem um Usuario
	Questao.belongsTo(models.usuario, {
		foreignKey: {
			name: "idUsuario"
		},
		as: "usuario"
	})
}

module.exports = Questao; 