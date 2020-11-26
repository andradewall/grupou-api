const models = require("../db/models");
const db = require("../db/models")

let newAlunoTurmas = [];
exports.store = async (objeto, idAluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: idAluno }
    });

    for (let h in objeto.turmas) {
        let turma = objeto.turmas[h];
        console.log(turma);

        const [response] = await models.turma.findOrCreate({
            where: turma
        })

        newAlunoTurmas.push(response.id)
    }

    aluno.addSoftskill(newAlunoTurmas);

    return true;
}

exports.destroy = async (objeto, idAluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: idAluno }
    });

    for (let h in objeto.turmas) {
        let turma = objeto.turmas[h];
        console.log(turma);

        const [response] = await models.turma.findOrCreate({
            where: turma
        })

        newAlunoTurmas.push(response.id)
    }

    aluno.removeSoftskill(newAlunoTurmas);

    return true;
}