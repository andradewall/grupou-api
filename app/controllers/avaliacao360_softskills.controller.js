const models = require("../db/models");
const db = require("../db/models")

let newAvaliacao360Softskills = [];
exports.store = async (objeto, idAvaliacao360) => {
    const avaliacao360 = await models.avaliacao360.findOne({
        where: { id: idAvaliacao360 }
    });

    for (let h in objeto.softskills) {
        let softskill = objeto.softskills[h];
        console.log(softskill);

        const [response] = await models.softskill.findOrCreate({
            where: softskill
        })

        newAvaliacao360Softskills.push(response.id)
    }

    avaliacao360.addHardskill(newAvaliacao360Softskills);

    return true;
}

exports.destroy = async (objeto, idAvaliacao360) => {
    const avaliacao360 = await models.avaliacao360.findOne({
        where: { id: idAvaliacao360 }
    });

    for (let h in objeto.softskills) {
        let softskill = objeto.softskills[h];
        console.log(softskill);

        const [response] = await models.softskill.findOrCreate({
            where: softskill
        })

        newAvaliacao360Softskills.push(response.id)
    }

    avaliacao360.removeHardskill(newAvaliacao360Softskills);

    return true;
}