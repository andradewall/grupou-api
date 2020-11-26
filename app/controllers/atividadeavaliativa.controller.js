const models = require("../db/models");

// index GET ALL 
exports.index = async () => {
	return await models.atividadeavaliativa.findAll({
		// include: ["hardskill"]
	});
}

// show GET ID
exports.show = async (id) => {
	return await models.atividadeavaliativa.findByPk(id, {
		// include: ["hardskill"]
	});
}
// store POST atividadeavaliativa
exports.store = async (atividadeavaliativa) => {
	return await models.atividadeavaliativa.create(atividadeavaliativa);
}

// update PUT atividadeavaliativa, ID
exports.update = async (atividadeavaliativa, id) => {
	return await models.atividadeavaliativa.update(atividadeavaliativa, {
		where: {
			id
		}
	})
}

// destroy DELETE ID
exports.destroy = async (id) => {
	return await models.atividadeavaliativa.destroy({
		where: {
			id
		}
	})
}
