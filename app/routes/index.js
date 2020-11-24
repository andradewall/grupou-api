const usuario = require("./usuario.routes");
const questao = require("./questao.routes");
const hardskill = require("./hardskill.routes");
const aluno = require("./aluno.routes");
const alunoHardskills = require("./aluno_hardskills.routes");
const professor = require("./professor.routes");
const disciplina = require("./disciplina.routes");
const disciplinaHardskills = require("./disciplina_hardskills.routes");
const professorDisciplinas = require("./professor_disciplinas.routes");
const turma = require("./turma.routes");
const turmaHardskills = require("./turma_hardskills.routes");
const curso = require("./curso.routes");
const turmaCursos = require("./turma_cursos.routes");

module.exports = app => {

    // Define o middleware
    app.use("/api/usuario", usuario);
    app.use("/api/questao", questao);
    app.use("/api/hardskill", hardskill);
    app.use("/api/aluno", aluno);
    app.use("/api/alunohardskills", alunoHardskills);
    app.use("/api/professor", professor);
    app.use("/api/disciplina", disciplina);
    app.use("/api/disciplinahardskills", disciplinaHardskills);
    app.use("/api/professordisciplinas", professorDisciplinas);
    app.use("/api/turma", turma);
    app.use("/api/turmahardskills", turmaHardskills);
    app.use("/api/curso", curso);
    app.use("/api/turmacursos", turmaCursos);
}