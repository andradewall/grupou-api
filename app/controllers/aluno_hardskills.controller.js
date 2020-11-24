const models = require("../db/models");
const db = require("../db/models")


/*
hardskills
- descricao: PHP 7.3
- descricao: JavaScript ECMA 6
*/
let newAlunoHardskills = [];
exports.store = async (objeto, idAluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: idAluno }
    });

    for (let h in objeto.hardskills) {
        let hardskill = objeto.hardskills[h];
        console.log(hardskill);

        const [response] = await models.hardskill.findOrCreate({
            where: hardskill
        })

        newAlunoHardskills.push(response.id)
    }

    aluno.addHardskill(newAlunoHardskills);

    return true;
}

exports.show = async () => {

}

exports.destroy = async (objeto, idAluno) => {
    const aluno = await models.aluno.findOne({
        where: { id: idAluno }
    });

    for (let h in objeto.hardskills) {
        let hardskill = objeto.hardskills[h];
        console.log(hardskill);

        const [response] = await models.hardskill.findOrCreate({
            where: hardskill
        })

        newAlunoHardskills.push(response.id)
    }

    aluno.removeHardskill(newAlunoHardskills);

    return true;
}