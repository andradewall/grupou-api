const models = require("../db/models");
const db = require("../db/models")

let newTurmaCursos = [];
exports.store = async (objeto, idTurma) => {
    const turma = await models.turma.findOne({
        where: { id: idTurma }
    });

    for (let c in objeto.cursos) {
        let curso = objeto.cursos[c];

        const [response] = await models.curso.findOrCreate({
            where: curso
        })

        newTurmaCursos.push(response.id)
    }

    return turma.addCurso(newTurmaCursos);
}

exports.destroy = async (objeto, idTurma) => {
    const turma = await models.turma.findOne({
        where: { id: idTurma }
    });

    for (let c in objeto.cursos) {
        let curso = objeto.cursos[c];

        const [response] = await models.curso.findOrCreate({
            where: curso
        })

        newTurmaCursos.push(response.id)
    }

    return turma.removeCurso(newTurmaCursos);
}