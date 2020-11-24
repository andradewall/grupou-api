const {DataTypes} = require("sequelize");
const sequelize = require("../index").getConn();

// O name será o nome do arquivo sem ".model.js"
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const Usuario = sequelize.define(name, {
    nomeCompleto: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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

Usuario.associate = (models) => {

	// Usuário tem um Aluno
	Usuario.hasOne(models.aluno, {
		foreignKey: {
			name: "idUsuario"
		},
		as: "aluno"
	})

	// Usuario tem várias Questao
	Usuario.hasMany(models.questao, {
		foreignKey: {
			name: "idUsuario"
		},
		as: "questoes"
	})
}

module.exports = Usuario; 