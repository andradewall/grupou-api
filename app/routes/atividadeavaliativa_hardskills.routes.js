module.exports = ((app) => {
	const atividadeavaliativaHardskillController = require("../controllers/atividadeavaliativa_hardskills.controller");

	var router = require("express").Router();

	router.post("/:id", async (req, res) => {
		const hardskill = await atividadeavaliativaHardskillController.store(req.body, req.params.id);
		res.json(hardskill);
	});

	router.delete("/:id", async (req, res) => {
		const hardskill = await atividadeavaliativaHardskillController.destroy(req.body, req.params.id);
		res.json(hardskill);
	});

	return router;
})()