const models = require("../db/models");

// index GET ALL 
exports.index = async () => {
	return await models.aluno.findAll({
		include: ["usuario", "hardskills"]
	});
}

// show GET ID
exports.show = async (id) => {
	return await models.aluno.findByPk(id, {
		include: ["usuario", "hardskills"]
	});
}

// destroy DELETE ID
exports.destroy = async (id) => {
	return await models.aluno.destroy({
		where: {
			id
		}
	})
}
