module.exports = ((app) => {
	const avaliacao360Controller = require("../controllers/avaliacao360.controller");

	var router = require("express").Router();

	router.post("/", async (req, res) => {
		// Insere o conteúdo da requisição (req.body) dentro do método de salvar
		// do model de avaliacao360
		const avaliacao360 = await avaliacao360Controller.store(req.body);
		res.json(avaliacao360);
	});

	router.get("/", async (req, res) => {
		// Busca todos os registros de avaliacao360
		const avaliacao360 = await avaliacao360Controller.index();
		res.json(avaliacao360);
	});

	router.get("/:id", async (req, res) => {
		// Busca um avaliacao360
		const avaliacao360 = await avaliacao360Controller.show(req.params.id);
		res.json(avaliacao360);
	});

	router.put("/:id", async (req, res) => {
		// Envia para o model de avaliacao360 o body da request junto com o id informado na URL
		const avaliacao360 = await avaliacao360Controller.update(req.body, req.params.id);
		res.json(avaliacao360);
	});

	router.delete("/:id", async (req, res) => {
		// Exclui um avaliacao360
		const avaliacao360 = await avaliacao360Controller.destroy(req.params.id);
		res.json(avaliacao360);
	});

	return router;
})()