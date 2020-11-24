const dbConfig = require("../config/db.js");
const {Sequelize} = require("sequelize");

let conn = null;

const getConn = () => {

	if (!conn) {

		try {

			conn = new Sequelize(
				dbConfig.DB,
				dbConfig.USER,
				dbConfig.PASSWORD,
				{
					host: dbConfig.HOST,
					dialect: dbConfig.dialect,
					// logging: false,
				}
			);
		} catch (error) {
			console.log(`--- ERRO: ${error}`);
			process.exit(1);
		}
	}

	return conn;
};

module.exports = {
	getConn
};
