module.exports = ((app) => {
	const alunoController = require("../controllers/aluno.controller");

	var router = require("express").Router();

	router.post("/", async (req, res) => {
		// Insere o conteúdo da requisição (req.body) dentro do método de salvar
		// do model de aluno
		const aluno = await alunoController.store(req.body);
		res.json(aluno);
	});

	router.get("/", async (req, res) => {
		// Busca todos os registros de aluno
		const aluno = await alunoController.index();
		res.json(aluno);
	});

	router.get("/:id", async (req, res) => {
		// Busca um aluno
		const aluno = await alunoController.show(req.params.id);
		res.json(aluno);
	});

	router.put("/:id", async (req, res) => {
		// Envia para o model de aluno o body da request junto com o id informado na URL
		const aluno = await alunoController.update(req.body, req.params.id);
		res.json(aluno);
	});

	router.delete("/:id", async (req, res) => {
		// Exclui um aluno
		const aluno = await alunoController.destroy(req.params.id);
		res.json(aluno);
	});

	return router;
})()