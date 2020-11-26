module.exports = ((app) => {
	const avaliacao360SoftskillController = require("../controllers/avaliacao360_softskills.controller");

	var router = require("express").Router();

	router.post("/:id", async (req, res) => {
		const softskill = await avaliacao360SoftskillController.store(req.body, req.params.id);
		res.json(softskill);
	});

	router.delete("/:id", async (req, res) => {
		const softskill = await avaliacao360SoftskillController.destroy(req.body, req.params.id);
		res.json(softskill);
	});

	return router;
})()