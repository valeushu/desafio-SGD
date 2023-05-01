'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clientes.hasMany(models.Mascotas, { foreignKey: 'propietarioId' });
    }
  }
  Clientes.init({
    dni: {type:DataTypes.INTEGER,unique:true,allowNull: false,},
    nombre: {type:DataTypes.STRING, allowNull: false,},
    apellido: {type:DataTypes.STRING, allowNull: false,},
    ciudad: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: {type:DataTypes.INTEGER,allowNull: false},
    fechaAlta: DataTypes.DATE,
    estado: {type:DataTypes.BOOLEAN,allowNull: false,}
  }, {
    sequelize,
    modelName: 'clientes',
  });
  return Clientes;
};