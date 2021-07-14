const { Model, DataTypes } = require('sequelize');

class Marking extends Model {
    static init(sequelize) {
        super.init({
            sequential_record: DataTypes.INTEGER,
            marking_type: DataTypes.TEXT,
            collaborator: DataTypes.STRING,
            marking_date: DataTypes.INTEGER,
            marking_hour: DataTypes.INTEGER,
            completed_marking: DataTypes.TEXT,
        }, { sequelize });
    }
}

module.exports = Marking;