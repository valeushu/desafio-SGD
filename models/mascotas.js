'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mascotas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mascotas.belongsTo(models.clientes, { foreignKey: 'propietarioId' });
    }
  }
  Mascotas.init({
    numeroChip: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    tipo: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    propietarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mascotas',
  });
  return Mascotas;
};