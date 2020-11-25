module.exports = ((app) => {
	const questaodiaController = require("../controllers/questaodia.controller");

	var router = require("express").Router();

	router.post("/", async (req, res) => {
		// Insere o conteúdo da requisição (req.body) dentro do método de salvar
		// do model de questaodia
		const questaodia = await questaodiaController.store(req.body);
		res.json(questaodia);
	});

	router.get("/", async (req, res) => {
		// Busca todos os registros de questaodia
		const questaodia = await questaodiaController.index();
		res.json(questaodia);
	});

	router.get("/:id", async (req, res) => {
		// Busca um registro especifico de questaodia
		const questaodia = await questaodiaController.show(req.params.id);
		res.json(questaodia);
	});

	router.put("/:id", async (req, res) => {
		// Envia para o model de questaodia o body da request junto com o id informado na URL
		const questaodia = await questaodiaController.update(req.body, req.params.id);
		res.json(questaodia);
	});

	router.delete("/:id", async (req, res) => {
		// Exclui um registro de questaodia
		const questaodia = await questaodiaController.destroy(req.params.id);
		res.json(questaodia);
	});

	return router;
})()