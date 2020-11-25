const models = require("../db/models");

// index GET ALL 
exports.index = async () => {
	return await models.tarefa.findAll({
		// include: ["hardskill", "curso"]
	});
}

// show GET ID
exports.show = async (id) => {
	return await models.tarefa.findByPk(id, {
		// include: ["hardskill", "curso"]
	});
}
// store POST tarefa
exports.store = async (tarefa) => {
	return await models.tarefa.create(tarefa);
}

// update PUT tarefa, ID
exports.update = async (tarefa, id) => {
	return await models.tarefa.update(tarefa, {
		where: {
			id
		}
	})
}

// destroy DELETE ID
exports.destroy = async (id) => {
	return await models.tarefa.destroy({
		where: {
			id
		}
	})
}
