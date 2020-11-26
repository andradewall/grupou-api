module.exports = ((app) => {
	const grupoController = require("../controllers/grupo.controller");

	var router = require("express").Router();

	router.post("/", async (req, res) => {
		// Insere o conteúdo da requisição (req.body) dentro do método de salvar
		// do model de grupo
		const grupo = await grupoController.store(req.body);
		res.json(grupo);
	});

	router.get("/", async (req, res) => {
		// Busca todos os registros de grupo
		const grupo = await grupoController.index();
		res.json(grupo);
	});

	router.get("/:id", async (req, res) => {
		// Busca um registro especifico de grupo
		const grupo = await grupoController.show(req.params.id);
		res.json(grupo);
	});

	router.put("/:id", async (req, res) => {
		// Envia para o model de grupo o body da request junto com o id informado na URL
		const grupo = await grupoController.update(req.body, req.params.id);
		res.json(grupo);
	});

	router.delete("/:id", async (req, res) => {
		// Exclui um registro de grupo
		const grupo = await grupoController.destroy(req.params.id);
		res.json(grupo);
	});

	return router;
})()