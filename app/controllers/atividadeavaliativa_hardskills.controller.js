const models = require("../db/models");
const db = require("../db/models")

let newAtividadeAvaliativaHardskills = [];
exports.store = async (objeto, idAtividadeAvaliativa) => {
    const atividadeavaliativa = await models.atividadeavaliativa.findOne({
        where: { id: idAtividadeAvaliativa }
    });

    for (let h in objeto.hardskills) {
        let hardskill = objeto.hardskills[h];
        console.log(hardskill);

        const [response] = await models.hardskill.findOrCreate({
            where: hardskill
        })

        newAtividadeAvaliativaHardskills.push(response.id)
    }

    atividadeavaliativa.addHardskill(newAtividadeAvaliativaHardskills);

    return true;
}

exports.show = async () => {

}

exports.destroy = async (objeto, idAtividadeAvaliativa) => {
    const atividadeavaliativa = await models.atividadeavaliativa.findOne({
        where: { id: idAtividadeAvaliativa }
    });

    for (let h in objeto.hardskills) {
        let hardskill = objeto.hardskills[h];
        console.log(hardskill);

        const [response] = await models.hardskill.findOrCreate({
            where: hardskill
        })

        newAtividadeAvaliativaHardskills.push(response.id)
    }

    atividadeavaliativa.removeHardskill(newAtividadeAvaliativaHardskills);

    return true;
}