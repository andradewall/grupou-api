const usuario = require("./usuario.routes");
const questao = require("./questao.routes");
const hardskill = require("./hardskill.routes");
const aluno = require("./aluno.routes");
const alunoHardskills = require("./aluno_hardskills.routes");
const professor = require("./professor.routes");

module.exports = app => {

    // Define o middleware
    app.use("/api/usuario", usuario);
    app.use("/api/questao", questao);
    app.use("/api/hardskill", hardskill);
    app.use("/api/aluno", aluno);
    app.use("/api/alunohardskills", alunoHardskills);
    app.use("/api/professor", professor);
}