module.exports = ((app) => {
	const hardskillController = require("../controllers/hardskill.controller");

	var router = require("express").Router();

	router.post("/", async (req, res) => {
		// Insere o conteúdo da requisição (req.body) dentro do método de salvar
		// do model de hardskill
		const hardskill = await hardskillController.store(req.body);
		res.json(hardskill);
	});

	router.get("/", async (req, res) => {
		// Busca todos os registros de hardskill
		const hardskill = await hardskillController.index();
		res.json(hardskill);
	});

	router.get("/:id", async (req, res) => {
		// Busca um registro especifico de hardskill
		const hardskill = await hardskillController.show(req.params.id);
		res.json(hardskill);
	});

	router.put("/:id", async (req, res) => {
		// Envia para o model de hardskill o body da request junto com o id informado na URL
		const hardskill = await hardskillController.update(req.body, req.params.id);
		res.json(hardskill);
	});

	router.delete("/:id", async (req, res) => {
		// Exclui um registro de hardskill
		const hardskill = await hardskillController.destroy(req.params.id);
		res.json(hardskill);
	});

	return router;
})()