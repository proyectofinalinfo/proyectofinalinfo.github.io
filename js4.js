// Objeto para representar el carrito
const carrito = {};

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  if (carrito[producto]) {
    // Si el producto ya existe en el carrito, aumenta la cantidad en 1
    carrito[producto]++;
  } else {
    // Si el producto no existe en el carrito, agrega el producto con cantidad 1
    carrito[producto] = 1;
  }
}

// Ejemplo de uso:
agregarAlCarrito('Producto A');
agregarAlCarrito('Producto B');
agregarAlCarrito('Producto A');

console.log(carrito); // Resultado: { 'Producto A': 2, 'Producto B': 1 }
