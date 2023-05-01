
const Cliente  = require('../models').clientes;

exports.getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener los clientes' });
  }
};

exports.crearCliente = async (req, res) => {
  const { dni, nombre, apellido, ciudad, direccion, telefono, fechaAlta, estado } = req.body;

  try {
    // Verificar si ya existe un cliente con el mismo DNI
    const clienteExistente = await Cliente.findOne({ where: { dni } });
    //console.log(clienteExistente)
    if (clienteExistente) {
      return res.status(409).json({ message: 'Ya existe un cliente con ese DNI' });
    }
    if (!dni || !nombre || !apellido || !telefono || estado == null) {
      return res.status(400).json({ message: 'Faltan datos obligatorios' });
    };
    
    // Crear el cliente
    const cliente = await Cliente.create({ dni, nombre, apellido, ciudad, direccion, telefono, fechaAlta, estado });
    console.log(cliente)
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.actualizarCliente = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    // Verificar si existe un producto con el mismo ID
    const existeCliente = await Cliente.findByPk(id);
    if (!existeCliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    // Actualizar datos del cliente
    await existeCliente.update(data);

    return res.status(200).json({ message: 'Cliente actualizado correctamente', cliente: existeCliente });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.eliminarCliente = async (req, res) => {
  try {
    const id = req.params.id;
    
    // Verificar si existe un cliente con el DNI indicado
    const existingCliente = await Cliente.findOne({ where: { id } });
    if (!existingCliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    // Eliminar cliente
    await existingCliente.destroy();

    return res.status(200).json({ message: 'Cliente eliminado correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};









