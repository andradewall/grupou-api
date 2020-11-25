const models = require("../db/models");

// index GET ALL 
exports.index = async () => {
	return await models.questaodia.findAll({
		include: ["aluno", "questao"]
	});
}

// show GET ID
exports.show = async (id) => {
	return await models.questaodia.findByPk(id, {
		include: ["aluno", "questao"]
	});
}
// store POST questaodia
exports.store = async (questaodia) => {
	return await models.questaodia.create(questaodia);
}

// update PUT questaodia, ID
exports.update = async (questaodia, id) => {
	return await models.questaodia.update(questaodia, {
		where: {
			id
		}
	})
}

// destroy DELETE ID
exports.destroy = async (id) => {
	return await models.questaodia.destroy({
		where: {
			id
		}
	})
}
