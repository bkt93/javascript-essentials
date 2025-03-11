// Recibir un array con producto y precio
// Filtrar por los productos con un valor de mas de 100
function filtrarPorPrecio(productos, b) {

    if(!Array.isArray(productos)){
        return "No es un array"
    }

    if(productos.length === 0){
        return "El array está vacío"
    }

    let filterPrecio = productos.filter(element =>
        typeof element.precio === "number" && element.precio > b
    )

    return filterPrecio.length > 0 ? filterPrecio : "No hay productos que superen el precio";
}

const productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Mouse", precio: 50 },
    { nombre: "Teclado", precio: 150 },
    { nombre: "Monitor", precio: 300 }
];

console.log(filtrarPorPrecio(productos, 100));  