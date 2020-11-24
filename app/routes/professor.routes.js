module.exports = ((app) => {
	const professorController = require("../controllers/professor.controller");

	var router = require("express").Router();

	router.post("/", async (req, res) => {
		// Insere o conteúdo da requisição (req.body) dentro do método de salvar
		// do model de professor
		const professor = await professorController.store(req.body);
		res.json(professor);
	});

	router.get("/", async (req, res) => {
		// Busca todos os registros de professor
		const professor = await professorController.index();
		res.json(professor);
	});

	router.get("/:id", async (req, res) => {
		// Busca um professor
		const professor = await professorController.show(req.params.id);
		res.json(professor);
	});

	router.put("/:id", async (req, res) => {
		// Envia para o model de professor o body da request junto com o id informado na URL
		const professor = await professorController.update(req.body, req.params.id);
		res.json(professor);
	});

	router.delete("/:id", async (req, res) => {
		// Exclui um professor
		const professor = await professorController.destroy(req.params.id);
		res.json(professor);
	});

	return router;
})()