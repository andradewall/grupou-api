const models = require("../db/models");
const db = require("../db/models")

let newTurmaHardskills = [];
exports.store = async (objeto, idTurma) => {
    const turma = await models.turma.findOne({
        where: { id: idTurma }
    });

    for (let h in objeto.hardskills) {
        let hardskill = objeto.hardskills[h];
        console.log(hardskill);

        const [response] = await models.hardskill.findOrCreate({
            where: hardskill
        })

        newTurmaHardskills.push(response.id)
    }

    return turma.addHardskill(newTurmaHardskills);
}

exports.destroy = async (objeto, idTurma) => {
    const turma = await models.turma.findOne({
        where: { id: idTurma }
    });

    for (let h in objeto.hardskills) {
        let hardskill = objeto.hardskills[h];
        console.log(hardskill);

        const [response] = await models.hardskill.findOrCreate({
            where: hardskill
        })

        newTurmaHardskills.push(response.id)
    }

    return turma.removeHardskill(newTurmaHardskills);
}