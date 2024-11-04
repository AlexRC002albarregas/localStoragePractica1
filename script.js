function agregarProducto() {
    let nombre = document.getElementById('nombreProducto').value;
    let precio = document.getElementById('precioProducto').value;
  
    if (!nombre || !precio) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos.push({ nombre, precio });
    localStorage.setItem('productos', JSON.stringify(productos));
  
    document.getElementById('nombreProducto').value = '';
    document.getElementById('precioProducto').value = '';
  }
  
  function mostrarProductos() {
    let listaProductos = document.getElementById('listaProductos');
    listaProductos.style.display = 'block';  // Mostrar la lista de productos
  
    listaProductos.innerHTML = ''; // Limpiar el contenido previo
  
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
  
    if (productos.length === 0) {
      listaProductos.innerHTML = "<p>No hay productos almacenados.</p>";
      return;
    }
  
    productos.forEach((producto, indice) => {
      let itemProducto = document.createElement('div');
      itemProducto.className = 'item-producto';
      itemProducto.innerHTML = `
        <span>${producto.nombre} - $${parseFloat(producto.precio).toFixed(2)}</span>
        <button class="boton-eliminar" onclick="eliminarProducto(${indice})">Eliminar</button>
      `;
      listaProductos.appendChild(itemProducto);
    });
  }
  
  function eliminarProducto(indice) {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos.splice(indice, 1);
    localStorage.setItem('productos', JSON.stringify(productos));
    mostrarProductos();
  }
  