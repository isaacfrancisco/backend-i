'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('markings', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      sequential_record: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      marking_type: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      collaborator: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      marking_date: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      marking_hour: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      completed_marking: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('markings');
  }
};
