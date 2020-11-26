const models = require("../db/models");

// index GET ALL 
exports.index = async () => {
	return await models.avaliacao360.findAll();
}

// show GET ID
exports.show = async (id) => {
	return await models.avaliacao360.findByPk(id);
}
// store POST avaliacao360
exports.store = async (avaliacao360) => {
	return await models.avaliacao360.create(avaliacao360);
}

// update PUT avaliacao360, ID
exports.update = async (avaliacao360, id) => {
	return await models.avaliacao360.update(avaliacao360, {
		where: {
			id
		}
	})
}

// destroy DELETE ID
exports.destroy = async (id) => {
	return await models.avaliacao360.destroy({
		where: {
			id
		}
	})
}
