const Sequelize = require('sequelize');

const dbConfig = require("../config/database");

const connection = new Sequelize(dbConfig);

try {
    connection.authenticate();
    console.log("Conexão feita com sucesso!");
} catch (error) {
    console.error("Erro na conexão:", error);
}

module.exports = connection;