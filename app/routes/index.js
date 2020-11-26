const usuario = require("./usuario.routes");
const questao = require("./questao.routes");
const hardskill = require("./hardskill.routes");
const aluno = require("./aluno.routes");
const alunoHardskills = require("./aluno_hardskills.routes");
const professor = require("./professor.routes");
const disciplina = require("./disciplina.routes");
const disciplinaHardskills = require("./disciplina_hardskills.routes");
const professorDisciplinas = require("./professor_disciplinas.routes");
const professorTurmas = require("./professor_turmas.routes");
const turma = require("./turma.routes");
const turmaHardskills = require("./turma_hardskills.routes");
const curso = require("./curso.routes");
const avaliacao360 = require("./avaliacao360.routes");
const turmaCursos = require("./turma_cursos.routes");
const questaodia = require("./questaodia.routes");
const tarefa = require("./tarefa.routes");
const grupo = require("./grupo.routes");
const atividadeavaliativa = require("./atividadeavaliativa.routes");
const atividadeavaliativaHardskills = require("./atividadeavaliativa_hardskills.routes");
const softskill = require("./softskill.routes");
const alunoSoftskills = require("./aluno_softskills.routes");
const alunoGrupos = require("./aluno_grupos.routes");

module.exports = app => {

    // Define o middleware
    app.use("/api/usuario", usuario);
    app.use("/api/questao", questao);
    app.use("/api/hardskill", hardskill);
    app.use("/api/aluno", aluno);
    app.use("/api/professor", professor);
    app.use("/api/disciplina", disciplina);
    app.use("/api/turma", turma);
    app.use("/api/curso", curso);
    app.use("/api/questaodia", questaodia);
    app.use("/api/tarefa", tarefa);
    app.use("/api/grupo", grupo);
    app.use("/api/softskill", softskill);
    app.use("/api/atividadeavaliativa", atividadeavaliativa);
    app.use("/api/avaliacao360", avaliacao360);
    app.use("/api/alunohardskills", alunoHardskills);
    app.use("/api/disciplinahardskills", disciplinaHardskills);
    app.use("/api/professordisciplinas", professorDisciplinas);
    app.use("/api/professorturmas", professorTurmas);
    app.use("/api/turmahardskills", turmaHardskills);
    app.use("/api/turmacursos", turmaCursos);
    app.use("/api/atividadeavaliativahardskills", atividadeavaliativaHardskills);
    app.use("/api/alunosoftskills", alunoSoftskills);
    app.use("/api/alunogrupos", alunoGrupos);
}