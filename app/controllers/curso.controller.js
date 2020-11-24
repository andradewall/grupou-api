const models = require("../db/models");

// index GET ALL 
exports.index = async () => {
	return await models.curso.findAll({
		// include: ["hardskill"]
	});
}

// show GET ID
exports.show = async (id) => {
	return await models.curso.findByPk(id, {
		// include: ["hardskill"]
	});
}
// store POST curso
exports.store = async (curso) => {
	return await models.curso.create(curso);
}

// update PUT curso, ID
exports.update = async (curso, id) => {
	return await models.curso.update(curso, {
		where: {
			id
		}
	})
}

// destroy DELETE ID
exports.destroy = async (id) => {
	return await models.curso.destroy({
		where: {
			id
		}
	})
}
