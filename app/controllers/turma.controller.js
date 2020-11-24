const models = require("../db/models");

// index GET ALL 
exports.index = async () => {
	return await models.turma.findAll({
		include: ["hardskill"]
	});
}

// show GET ID
exports.show = async (id) => {
	return await models.turma.findByPk(id, {
		include: ["hardskill"]
	});
}
// store POST turma
exports.store = async (turma) => {
	return await models.turma.create(turma);
}

// update PUT turma, ID
exports.update = async (turma, id) => {
	return await models.turma.update(turma, {
		where: {
			id
		}
	})
}

// destroy DELETE ID
exports.destroy = async (id) => {
	return await models.turma.destroy({
		where: {
			id
		}
	})
}
