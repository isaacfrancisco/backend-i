const { Model, DataTypes } = require('sequelize');

class Collaborator extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            pis: DataTypes.BIGINT(12),
            registration: DataTypes.BIGINT(16),
        }, { sequelize });
    }
}

module.exports = Collaborator;