const fetch = require('node-fetch');
async function obtenerInformacionClienteActual(clienteId) {
  const respuesta = await fetch(`/api/clientes/${clienteId}`);
  const cliente = await respuesta.json();
  return ({
    dni: cliente.dni,
    nombre: cliente.nombre,
    apellido: cliente.apellido,
    ciudad: cliente.ciudad,
    direccion: cliente.direccion,
    telefono: cliente.telefono,
    fechaAlta: cliente.fecha_alta,
    estado: cliente.estado
  });
}
module.exports = obtenerInformacionClienteActual;