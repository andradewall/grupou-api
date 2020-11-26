const models = require("../db/models");
const db = require("../db/models")

let newAlunoGrupos = [];
exports.store = async (objeto, idAluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: idAluno }
    });

    for (let h in objeto.grupos) {
        let grupo = objeto.grupos[h];
        console.log(grupo);

        const [response] = await models.grupo.findOrCreate({
            where: grupo
        })

        newAlunoGrupos.push(response.id)
    }

    aluno.addSoftskill(newAlunoGrupos);

    return true;
}

exports.destroy = async (objeto, idAluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: idAluno }
    });

    for (let h in objeto.grupos) {
        let grupo = objeto.grupos[h];
        console.log(grupo);

        const [response] = await models.grupo.findOrCreate({
            where: grupo
        })

        newAlunoGrupos.push(response.id)
    }

    aluno.removeSoftskill(newAlunoGrupos);

    return true;
}