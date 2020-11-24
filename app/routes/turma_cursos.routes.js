module.exports = ((app) => {
	const turmaCursosController = require("../controllers/turma_cursos.controller");

	var router = require("express").Router();

	router.post("/:id", async (req, res) => {
		const curso = await turmaCursosController.store(req.body, req.params.id);
		res.json(curso);
	});

	router.delete("/:id", async (req, res) => {
		const curso = await turmaCursosController.destroy(req.body, req.params.id);
		res.json(curso);
	});

	return router;
})()