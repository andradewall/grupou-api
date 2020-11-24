const db = require("../index");
const path = require("path");
const fs = require("fs");

const models = {};

module.exports = (() => {

    // Se o tamanho objeto models for zero...
    if (!Object.keys(models).length) {
        const sequelize = db.getConn();

        // Lê todos os arquivos do diretório __dirname (atual)
        const files = fs.readdirSync(__dirname);

        // Lista de arquivos a serem ignorados na leitura
        const excludedFiles = ["index.js", ".", ".."];

        // Em cada arquivo encontrado 
        for (const fileName of files) {

            // Se não for um arquivo a ser ignorado e se for um arquivo JavaScript...
            if (!excludedFiles.includes(fileName) && path.extname(fileName) === ".js") {

                // Carrega o arquivo
                const modelFile = require(path.join(__dirname, fileName));

                // Salva o arquivo no objeto Models
                models[modelFile.getTableName()] = modelFile; 
            }
        }

        // Em cada arquivo
        Object.values(models).forEach(model => {
            if (typeof model.associate === "function") {
                model.associate(models);
            }
        });

        // Passa o sequelize criado no início deste arquivo para o objeto models (que será exportado)
        models.sequelize = sequelize;
    }
    return models;
})();