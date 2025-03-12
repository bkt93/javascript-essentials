// ✅ Ejercicio 28: Contar cuántos productos hay por categoría
// 📌 Contexto real:
// Una tienda quiere saber cuántos productos tiene en cada categoría.

// 📌 Instrucciones:
// 1️⃣ Recibe un array de productos con nombre y categoria.
// 2️⃣ Usa reduce() para devolver un objeto donde:

// La clave es la categoría.
// El valor es la cantidad de productos en esa categoría.
// 3️⃣ Si el array está vacío, devuelve "No hay productos disponibles".

function contarProductosPorCategoria(arr){
    if(!Array.isArray(arr)){
        return "No es un array"
    }

    if(arr.length === 0){
        return "El array está vacío"
    }

    return arr.reduce((acc, producto) => {
        acc[producto.categoria] = (acc[producto.categoria] ?? 0) + 1
        return acc;
    }, {})
}

const productos = [
    { nombre: "Laptop", categoria: "Electrónica" },
    { nombre: "Mouse", categoria: "Electrónica" },
    { nombre: "Teclado", categoria: "Electrónica" },
    { nombre: "Silla", categoria: "Muebles" },
    { nombre: "Mesa", categoria: "Muebles" }
];

console.log(contarProductosPorCategoria(productos));  
// ✅ { Electrónica: 3, Muebles: 2 }

console.log(contarProductosPorCategoria([]));  
// ✅ "No hay productos disponibles"
