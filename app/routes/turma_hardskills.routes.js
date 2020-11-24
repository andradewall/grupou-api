module.exports = ((app) => {
	const turmaHardskillController = require("../controllers/turma_hardskills.controller");

	var router = require("express").Router();

	router.post("/:id", async (req, res) => {
		const turma = await turmaHardskillController.store(req.body, req.params.id);
		res.json(turma);
	});

	router.delete("/:id", async (req, res) => {
		const turma = await turmaHardskillController.destroy(req.body, req.params.id);
		res.json(turma);
	});

	return router;
})()