const models = require("../db/models");
const db = require("../db/models")

let newProfessorTurmas = [];
exports.store = async (objeto, idProfessor) => {
    const professor = await models.professor.findOne({
        where: { id: idProfessor }
    });

    for (let h in objeto.turmas) {
        let turma = objeto.turmas[h];
        console.log(turma);

        const [response] = await models.turma.findOrCreate({
            where: turma
        })

        newProfessorTurmas.push(response.id)
    }

    professor.addHardskill(newProfessorTurmas);

    return true;
}

exports.destroy = async (objeto, idProfessor) => {
    const professor = await models.professor.findOne({
        where: { id: idProfessor }
    });

    for (let h in objeto.turmas) {
        let turma = objeto.turmas[h];
        console.log(turma);

        const [response] = await models.turma.findOrCreate({
            where: turma
        })

        newProfessorTurmas.push(response.id)
    }

    professor.removeHardskill(newProfessorTurmas);

    return true;
}