module.exports = ((app) => {
	const turmaController = require("../controllers/turma.controller");

	var router = require("express").Router();

	router.post("/", async (req, res) => {
		// Insere o conteúdo da requisição (req.body) dentro do método de salvar
		// do model de turma
		const turma = await turmaController.store(req.body);
		res.json(turma);
	});

	router.get("/", async (req, res) => {
		// Busca todos os registros de turma
		const turma = await turmaController.index();
		res.json(turma);
	});

	router.get("/:id", async (req, res) => {
		// Busca um registro especifico de turma
		const turma = await turmaController.show(req.params.id);
		res.json(turma);
	});

	router.put("/:id", async (req, res) => {
		// Envia para o model de turma o body da request junto com o id informado na URL
		const turma = await turmaController.update(req.body, req.params.id);
		res.json(turma);
	});

	router.delete("/:id", async (req, res) => {
		// Exclui um registro de turma
		const turma = await turmaController.destroy(req.params.id);
		res.json(turma);
	});

	return router;
})()