const { Model, DataTypes } = require('sequelize');

class Collaborator extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            pis: DataTypes.STRING(12),
            registration: DataTypes.TEXT,
        }, { sequelize });
    }
}

module.exports = Collaborator;