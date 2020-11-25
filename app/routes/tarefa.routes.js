module.exports = ((app) => {
	const tarefaController = require("../controllers/tarefa.controller");

	var router = require("express").Router();

	router.post("/", async (req, res) => {
		// Insere o conteúdo da requisição (req.body) dentro do método de salvar
		// do model de tarefa
		const tarefa = await tarefaController.store(req.body);
		res.json(tarefa);
	});

	router.get("/", async (req, res) => {
		// Busca todos os registros de tarefa
		const tarefa = await tarefaController.index();
		res.json(tarefa);
	});

	router.get("/:id", async (req, res) => {
		// Busca um registro especifico de tarefa
		const tarefa = await tarefaController.show(req.params.id);
		res.json(tarefa);
	});

	router.put("/:id", async (req, res) => {
		// Envia para o model de tarefa o body da request junto com o id informado na URL
		const tarefa = await tarefaController.update(req.body, req.params.id);
		res.json(tarefa);
	});

	router.delete("/:id", async (req, res) => {
		// Exclui um registro de tarefa
		const tarefa = await tarefaController.destroy(req.params.id);
		res.json(tarefa);
	});

	return router;
})()