module.exports = ((app) => {
	const usuarioController = require("../controllers/usuario.controller");

	var router = require("express").Router();

	router.post("/", async (req, res) => {
		// Insere o conteúdo da requisição (req.body) dentro do método de salvar
		// do model de usuario
		const usuario = await usuarioController.store(req.body);
		res.json(usuario);
	});

	router.get("/", async (req, res) => {
		// Busca todos os registros de usuario
		const usuario = await usuarioController.index();
		res.json(usuario);
	});

	router.get("/:id", async (req, res) => {
		// Busca um usuario
		const usuario = await usuarioController.show(req.params.id);
		res.json(usuario);
	});

	router.put("/:id", async (req, res) => {
		// Envia para o model de usuario o body da request junto com o id informado na URL
		const usuario = await usuarioController.update(req.body, req.params.id);
		res.json(usuario);
	});

	router.delete("/:id", async (req, res) => {
		// Exclui um usuario
		const usuario = await usuarioController.destroy(req.params.id);
		res.json(usuario);
	});

	return router;
})()