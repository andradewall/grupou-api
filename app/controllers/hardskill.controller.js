const models = require("../db/models");

// index GET ALL 
exports.index = async () => {
	return await models.hardskill.findAll();
}

// show GET ID
exports.show = async (id) => {
	return await models.hardskill.findByPk(id);
}
// store POST hardskill
exports.store = async (hardskill) => {
	return await models.hardskill.create(hardskill);
}

// update PUT hardskill, ID
exports.update = async (hardskill, id) => {
	return await models.hardskill.update(hardskill, {
		where: {
			id
		}
	})
}

// destroy DELETE ID
exports.destroy = async (id) => {
	return await models.hardskill.destroy({
		where: {
			id
		}
	})
}
