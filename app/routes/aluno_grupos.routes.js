module.exports = ((app) => {
	const alunoGruposController = require("../controllers/aluno_grupos.controller");

	var router = require("express").Router();

	router.post("/:id", async (req, res) => {
		const grupo = await alunoGruposController.store(req.body, req.params.id);
		res.json(grupo);
	});

	router.delete("/:id", async (req, res) => {
		const grupo = await alunoGruposController.destroy(req.body, req.params.id);
		res.json(grupo);
	});

	return router;
})()