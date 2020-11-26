const models = require("../db/models");

// index GET ALL 
exports.index = async () => {
	return await models.grupo.findAll({
		// include: ["hardskill"]
	});
}

// show GET ID
exports.show = async (id) => {
	return await models.grupo.findByPk(id, {
		// include: ["hardskill"]
	});
}
// store POST grupo
exports.store = async (grupo) => {
	return await models.grupo.create(grupo);
}

// update PUT grupo, ID
exports.update = async (grupo, id) => {
	return await models.grupo.update(grupo, {
		where: {
			id
		}
	})
}

// destroy DELETE ID
exports.destroy = async (id) => {
	return await models.grupo.destroy({
		where: {
			id
		}
	})
}
