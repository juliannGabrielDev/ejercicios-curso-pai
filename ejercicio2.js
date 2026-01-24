const producto = {
  nombre: "Lapicera",
  precio: 10,
  cantidad: 5,
};

const subtotal = producto.precio * producto.cantidad;
const iva = subtotal * 0.16;
const totalPagar = subtotal + iva;

console.log(`Subtotal: ${subtotal}\nIVA: ${iva}\nTotal a pagar: ${totalPagar}`);
