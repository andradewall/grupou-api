module.exports = ((app) => {
	const atividadeavaliativaController = require("../controllers/atividadeavaliativa.controller");

	var router = require("express").Router();

	router.post("/", async (req, res) => {
		// Insere o conteúdo da requisição (req.body) dentro do método de salvar
		// do model de atividadeavaliativa
		const atividadeavaliativa = await atividadeavaliativaController.store(req.body);
		res.json(atividadeavaliativa);
	});

	router.get("/", async (req, res) => {
		// Busca todos os registros de atividadeavaliativa
		const atividadeavaliativa = await atividadeavaliativaController.index();
		res.json(atividadeavaliativa);
	});

	router.get("/:id", async (req, res) => {
		// Busca um atividadeavaliativa
		const atividadeavaliativa = await atividadeavaliativaController.show(req.params.id);
		res.json(atividadeavaliativa);
	});

	router.put("/:id", async (req, res) => {
		// Envia para o model de atividadeavaliativa o body da request junto com o id informado na URL
		const atividadeavaliativa = await atividadeavaliativaController.update(req.body, req.params.id);
		res.json(atividadeavaliativa);
	});

	router.delete("/:id", async (req, res) => {
		// Exclui um atividadeavaliativa
		const atividadeavaliativa = await atividadeavaliativaController.destroy(req.params.id);
		res.json(atividadeavaliativa);
	});

	return router;
})()