module.exports = ((app) => {
	const disciplinaHardskillController = require("../controllers/disciplina_hardskills.controller");

	var router = require("express").Router();

	router.post("/:id", async (req, res) => {
		const hardskill = await disciplinaHardskillController.store(req.body, req.params.id);
		res.json(hardskill);
	});

	router.delete("/:id", async (req, res) => {
		const hardskill = await disciplinaHardskillController.destroy(req.body, req.params.id);
		res.json(hardskill);
	});

	return router;
})()