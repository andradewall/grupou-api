const models = require("../db/models");

// index GET ALL 
exports.index = async () => {
	return await models.professor.findAll();
}

// show GET ID
exports.show = async (id) => {
	return await models.professor.findByPk(id);
}
// store POST professor
exports.store = async (professor) => {
	// Salva o professor no banco, esperando o resultado do método (await) antes de inserir o valor em response 
	return await models.professor.create(professor);
}

// update PUT professor, ID
exports.update = async (professor, id) => {
	return await models.professor.update(professor, {
		where: {
			id
		}
	})
}

// destroy DELETE ID
exports.destroy = async (id) => {
	return await models.professor.destroy({
		where: {
			id
		}
	})
}
