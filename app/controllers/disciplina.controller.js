const models = require("../db/models");

// index GET ALL 
exports.index = async () => {
	return await models.disciplina.findAll({
		include: ["hardskill"]
	});
}

// show GET ID
exports.show = async (id) => {
	return await models.disciplina.findByPk(id, {
		include: ["hardskill"]
	});
}
// store POST disciplina
exports.store = async (disciplina) => {
	return await models.disciplina.create(disciplina);
}

// update PUT disciplina, ID
exports.update = async (disciplina, id) => {
	return await models.disciplina.update(disciplina, {
		where: {
			id
		}
	})
}

// destroy DELETE ID
exports.destroy = async (id) => {
	return await models.disciplina.destroy({
		where: {
			id
		}
	})
}
