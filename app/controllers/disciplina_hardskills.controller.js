const models = require("../db/models");
const db = require("../db/models")

let newDisciplinaHardskills = [];
exports.store = async (objeto, idDisciplina) => {
    const disciplina = await models.disciplina.findOne({
        where: { id: idDisciplina }
    });

    for (let h in objeto.hardskills) {
        let hardskill = objeto.hardskills[h];
        console.log(hardskill);

        const [response] = await models.hardskill.findOrCreate({
            where: hardskill
        })

        newDisciplinaHardskills.push(response.id)
    }

    return disciplina.addHardskill(newDisciplinaHardskills);
}

exports.destroy = async (objeto, idDisciplina) => {
    const disciplina = await models.disciplina.findOne({
        where: { id: idDisciplina }
    });

    for (let h in objeto.hardskills) {
        let hardskill = objeto.hardskills[h];
        console.log(hardskill);

        const [response] = await models.hardskill.findOrCreate({
            where: hardskill
        })

        newDisciplinaHardskills.push(response.id)
    }

    return disciplina.removeHardskill(newDisciplinaHardskills);
}