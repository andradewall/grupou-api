module.exports = ((app) => {
	const disciplinaController = require("../controllers/disciplina.controller");

	var router = require("express").Router();

	router.post("/", async (req, res) => {
		// Insere o conteúdo da requisição (req.body) dentro do método de salvar
		// do model de disciplina
		const disciplina = await disciplinaController.store(req.body);
		res.json(disciplina);
	});

	router.get("/", async (req, res) => {
		// Busca todos os registros de disciplina
		const disciplina = await disciplinaController.index();
		res.json(disciplina);
	});

	router.get("/:id", async (req, res) => {
		// Busca um registro especifico de disciplina
		const disciplina = await disciplinaController.show(req.params.id);
		res.json(disciplina);
	});

	router.put("/:id", async (req, res) => {
		// Envia para o model de disciplina o body da request junto com o id informado na URL
		const disciplina = await disciplinaController.update(req.body, req.params.id);
		res.json(disciplina);
	});

	router.delete("/:id", async (req, res) => {
		// Exclui um registro de disciplina
		const disciplina = await disciplinaController.destroy(req.params.id);
		res.json(disciplina);
	});

	return router;
})()