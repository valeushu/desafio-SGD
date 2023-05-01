/*const { body } = require('express-validator');
const { Cliente } = require('../models');

exports.validacionCliente = [
  body('dni')
    .isNumeric()
    .withMessage('El DNI debe ser numérico')
    .isLength({ min: 8, max: 8 })
    .withMessage('El DNI debe tener 8 dígitos')
    .custom(async (value) => {
      const cliente = await Cliente.findOne({ where: { dni: value } });
      if (cliente) {
        return Promise.reject('El DNI ya está registrado');
      }
    }),
  body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  body('apellido').notEmpty().withMessage('El apellido es obligatorio'),
  body('telefono').notEmpty().withMessage('El teléfono es obligatorio'),
  body('estado').isBoolean().withMessage('El estado debe ser verdadero o falso'),
];*/
