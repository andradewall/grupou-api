module.exports = ((app) => {
	const questaoController = require("../controllers/questao.controller");

	var router = require("express").Router();

	router.post("/", async (req, res) => {
		// Insere o conteúdo da requisição (req.body) dentro do método de salvar
		// do model de questao
 		const questao = await questaoController.store(req.body);
		res.json(questao);
	});

	router.get("/", async (req, res) => {
		// Busca todos os registros de questao
 		const questao = await questaoController.index();
		res.json(questao);
	});

	router.get("/:id", async (req, res) => {
		// Busca um registro especifico de questao
 		const questao = await questaoController.show(req.params.id);
		res.json(questao);
	});

	router.put("/:id", async (req, res) => {
		// Envia para o model de questao o body da request junto com o id informado na URL
 		const questao = await questaoController.update(req.body, req.params.id);
		res.json(questao);
	});

	router.delete("/:id", async (req, res) => {
		// Exclui um registro de questao
 		const questao = await questaoController.destroy(req.params.id);
		res.json(questao);
	});

	return router;
})()