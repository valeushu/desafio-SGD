const form = document.querySelector('#formulario-registro');
let modo;
modo = "registro";
document.getElementById("form-titulo").textContent = "Registro de cliente";

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Obtener los valores del formulario
  const dni = document.querySelector('#dni').value;
  const nombre = document.querySelector('#nombre').value;
  const apellido = document.querySelector('#apellido').value;
  const ciudad = document.querySelector('#ciudad').value;
  const direccion = document.querySelector('#direccion').value;
  const telefono = document.querySelector('#telefono').value;
  const fechaAlta = document.querySelector('#fechaAlta').value;  
  const estado = Boolean(document.querySelector('#estado').checked);

  // Crear objeto con la información del nuevo cliente
  const nuevoCliente = {
    dni: dni,
    nombre: nombre,
    apellido: apellido,
    ciudad: ciudad,
    direccion: direccion,
    telefono: telefono,
    fechaAlta: fechaAlta,
    estado: estado
  };

  // Realizar petición POST a la API para registrar el nuevo cliente
  fetch('http://127.0.0.1:3000/api/clientes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(nuevoCliente)
  })
  .then(response => response.json())
  .then(data => {
    // Mostrar mensaje de éxito y redirigir a la página de listado de clientes
    alert('Cliente registrado con éxito');
    window.location.href = 'http://127.0.0.1:3000/index.html';
  })
  .catch(error => {
    // Mostrar mensaje de error
    alert('Error al registrar el cliente');
    console.error(error);
  });
});
