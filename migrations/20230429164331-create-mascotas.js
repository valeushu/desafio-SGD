'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mascotas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numeroChip: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fechaNacimiento: {
        type: Sequelize.DATE
      },
      tipo: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      propietarioId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
             model: 'clientes',
             key: 'id'
      },
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Mascotas');
  }
};