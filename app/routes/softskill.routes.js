module.exports = ((app) => {
	const softskillController = require("../controllers/softskill.controller");

	var router = require("express").Router();

	router.post("/", async (req, res) => {
		// Insere o conteúdo da requisição (req.body) dentro do método de salvar
		// do model de softskill
		const softskill = await softskillController.store(req.body);
		res.json(softskill);
	});

	router.get("/", async (req, res) => {
		// Busca todos os registros de softskill
		const softskill = await softskillController.index();
		res.json(softskill);
	});

	router.get("/:id", async (req, res) => {
		// Busca um registro especifico de softskill
		const softskill = await softskillController.show(req.params.id);
		res.json(softskill);
	});

	router.put("/:id", async (req, res) => {
		// Envia para o model de softskill o body da request junto com o id informado na URL
		const softskill = await softskillController.update(req.body, req.params.id);
		res.json(softskill);
	});

	router.delete("/:id", async (req, res) => {
		// Exclui um registro de softskill
		const softskill = await softskillController.destroy(req.params.id);
		res.json(softskill);
	});

	return router;
})()