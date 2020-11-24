const models = require("../db/models");
const db = require("../db/models")

let newProfessorDisciplinas = [];
exports.store = async (objeto, idProfessor) => {
    const professor = await models.professor.findOne({
        where: { id: idProfessor }
    });

    // return objeto;

    for (let d in objeto.disciplinas) {
        let disciplina = objeto.disciplinas[d];
        console.log(disciplina);

        const [response] = await models.disciplina.findOrCreate({
            where: disciplina
        })

        newProfessorDisciplinas.push(response.id)
    }

    professor.addDisciplina(newProfessorDisciplinas);

    return true;
}

exports.destroy = async (objeto, idProfessor) => {
    const professor = await models.professor.findOne({
        where: { id: idProfessor }
    });

    for (let d in objeto.disciplinas) {
        let disciplina = objeto.disciplinas[d];
        console.log(disciplina);

        const [response] = await models.disciplina.findOrCreate({
            where: disciplina
        })

        newProfessorDisciplinas.push(response.id)
    }

    professor.removeDisciplina(newProfessorDisciplinas);

    return true;
}