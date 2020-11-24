module.exports = ((app) => {
	const cursoController = require("../controllers/curso.controller");

	var router = require("express").Router();

	router.post("/", async (req, res) => {
		// Insere o conteúdo da requisição (req.body) dentro do método de salvar
		// do model de curso
		const curso = await cursoController.store(req.body);
		res.json(curso);
	});

	router.get("/", async (req, res) => {
		// Busca todos os registros de curso
		const curso = await cursoController.index();
		res.json(curso);
	});

	router.get("/:id", async (req, res) => {
		// Busca um registro especifico de curso
		const curso = await cursoController.show(req.params.id);
		res.json(curso);
	});

	router.put("/:id", async (req, res) => {
		// Envia para o model de curso o body da request junto com o id informado na URL
		const curso = await cursoController.update(req.body, req.params.id);
		res.json(curso);
	});

	router.delete("/:id", async (req, res) => {
		// Exclui um registro de curso
		const curso = await cursoController.destroy(req.params.id);
		res.json(curso);
	});

	return router;
})()