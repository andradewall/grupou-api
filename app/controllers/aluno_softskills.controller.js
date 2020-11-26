const models = require("../db/models");
const db = require("../db/models")

let newAlunoSoftskills = [];
exports.store = async (objeto, idAluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: idAluno }
    });

    for (let h in objeto.softskills) {
        let softskill = objeto.softskills[h];
        console.log(softskill);

        const [response] = await models.softskill.findOrCreate({
            where: softskill
        })

        newAlunoSoftskills.push(response.id)
    }

    aluno.addSoftskill(newAlunoSoftskills);

    return true;
}

exports.destroy = async (objeto, idAluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: idAluno }
    });

    for (let h in objeto.softskills) {
        let softskill = objeto.softskills[h];
        console.log(softskill);

        const [response] = await models.softskill.findOrCreate({
            where: softskill
        })

        newAlunoSoftskills.push(response.id)
    }

    aluno.removeSoftskill(newAlunoSoftskills);

    return true;
}