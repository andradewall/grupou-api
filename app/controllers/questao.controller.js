const models = require("../db/models");

// index GET ALL 
exports.index = async () => {
	return await models.questao.findAll();
}

// show GET ID
exports.show = async (id) => {
	return await models.questao.findByPk(id, {
		include: ["usuario"]
	});
}
// store POST questao
exports.store = async (questao) => {
	return await models.questao.create(questao);
}

// update PUT questao, ID
exports.update = async (questao, id) => {
	return await models.questao.update(questao, {
		where: {
			id
		}
	})
}

// destroy DELETE ID
exports.delete = async (id) => {
	return await models.questao.destroy({
		where: {
			id
		}
	})
}
