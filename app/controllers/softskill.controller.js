const models = require("../db/models");

// index GET ALL 
exports.index = async () => {
	return await models.softskill.findAll();
}

// show GET ID
exports.show = async (id) => {
	return await models.softskill.findByPk(id);
}
// store POST softskill
exports.store = async (softskill) => {
	return await models.softskill.create(softskill);
}

// update PUT softskill, ID
exports.update = async (softskill, id) => {
	return await models.softskill.update(softskill, {
		where: {
			id
		}
	})
}

// destroy DELETE ID
exports.destroy = async (id) => {
	return await models.softskill.destroy({
		where: {
			id
		}
	})
}
