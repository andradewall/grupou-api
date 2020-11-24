const models = require("../db/models");

// index GET ALL 
exports.index = async () => {
	return await models.usuario.findAll({
		include: ["aluno", "questoes"]
	});
}

// show GET ID
exports.show = async (id) => {
	return await models.usuario.findByPk(id);
}
// store POST usuario
exports.store = async (usuario) => {
	// Salva o usuario no banco, esperando o resultado do método (await) antes de inserir o valor em response 
	return await models.usuario.create(usuario, {
		include: ["aluno", "questoes"]
	});
}

// update PUT usuario, ID
exports.update = async (usuario, id) => {
	return await models.usuario.update(usuario, {
		where: {
			id
		},
		include: ["aluno", "questoes"]
	})
}

// destroy DELETE ID
exports.destroy = async (id) => {
	return await models.usuario.destroy({
		where: {
			id
		}
	})
}
