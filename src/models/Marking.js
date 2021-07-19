const { Model, DataTypes } = require('sequelize');

class Marking extends Model {
    static init(sequelize) {
        super.init({
            sequential_record: DataTypes.TEXT,
            marking_type: DataTypes.TEXT,
            collaborator: DataTypes.STRING,
            marking_date: DataTypes.DATEONLY,
            marking_hour: DataTypes.TIME,
            completed_marking: DataTypes.TEXT,
        }, { sequelize });
    }
}

module.exports = Marking;