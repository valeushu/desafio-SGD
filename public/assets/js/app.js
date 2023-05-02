fetch('http://127.0.0.1:3000/api/clientes',{
  mode: 'cors',
  headers: {
       "Content-Type": "application/json"
  },
})
.then(response => response.json())
.then(data => {
  // Seleccionar el elemento HTML donde mostraremos la lista de clientes
  const lista = document.querySelector('#clientes-lista');

  // Crear una tabla para mostrar los clientes
  const tabla = document.createElement('table');
  const encabezado = tabla.createTHead();
  const filaEncabezado = encabezado.insertRow();
  filaEncabezado.innerHTML = '<th>DNI</th><th>Nombre</th><th>Apellido</th><th>Ciudad</th><th>Dirección</th><th>Teléfono</th><th>Fecha de alta</th><th>Estado</th><th>acciones</th>';
  const cuerpo = tabla.createTBody();

  // Agregar cada cliente a la tabla
  data.forEach(cliente => {
    const fila = cuerpo.insertRow();
    fila.innerHTML = `<td>${cliente.dni}</td><td>${cliente.nombre}</td><td>${cliente.apellido}</td><td>${cliente.ciudad}</td><td>${cliente.direccion}</td><td>${cliente.telefono}</td><td>${cliente.fechaAlta}</td><td>${cliente.estado}</td>`;

    // Crear botones para editar y eliminar el cliente
    const botonEditar = document.createElement('button');
    botonEditar.innerText = 'Editar';
    botonEditar.addEventListener('click', () => {
      // Lógica para editar el cliente aquí
    });

    const botonEliminar = document.createElement('button');
    botonEliminar.innerText = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
      // Lógica para eliminar el cliente aquí
      const idCliente = cliente.id; // Obtiene el ID del cliente a eliminar
      const confirmacion = confirm(`¿Está seguro que desea eliminar al cliente ${idCliente}?`); // Pide confirmación al usuario
    
      if (confirmacion) {
        fetch(`http://127.0.0.1:3000/api/clientes/${idCliente}`, { // Envía petición DELETE al servidor
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            // Si la petición se realizó con éxito, elimina la fila de la tabla
            const fila = botonEliminar.parentNode.parentNode;
            fila.parentNode.removeChild(fila);
          } else {
            // Si la petición falló, muestra un mensaje de error
            throw new Error('No se pudo eliminar el cliente');
          }
        })
        .catch(error => console.error(error));
      }
    });

    // Agregar los botones a la fila de la tabla
    const celdaAcciones = fila.insertCell();
    celdaAcciones.appendChild(botonEditar);
    celdaAcciones.appendChild(botonEliminar);
  });

  // Agregar la tabla al elemento HTML
  lista.appendChild(tabla);

  // Agregar botón de registro de usuario nuevo
  const botonRegistrar = document.createElement('button');
  botonRegistrar.id = 'boton-registrar';
  botonRegistrar.innerText = ' + Nuevo cliente';
  botonRegistrar.addEventListener('click', () => {
    window.location.href = 'pages/registro-cliente.html';
    // Lógica para registrar nuevo usuario aquí
  });

  lista.appendChild(botonRegistrar);
  lista.appendChild(tabla);
})
.catch(error => console.error(error));
