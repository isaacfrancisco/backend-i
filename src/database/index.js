const Sequelize = require('sequelize');

const dbConfig = require("../config/database");

const Collaborator = require('../models/Collaborator');
const Marking = require('../models/Marking');

const connection = new Sequelize(dbConfig);

Collaborator.init(connection);
Marking.init(connection);

try {
    connection.authenticate();
    console.log("Conexão feita com sucesso!");
} catch (error) {
    console.error("Erro na conexão:", error);
}

module.exports = connection;