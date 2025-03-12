// ✅ Ejercicio 27: Agrupar productos por categoría y calcular su total
// 📌 Contexto real:
// Una tienda tiene un array de productos, cada uno con su nombre, precio y categoría.
// Queremos agrupar los productos por categoría y calcular el total gastado en cada una.

// 📌 Instrucciones:
// 1️⃣ Recibe un array de productos con nombre, precio y categoría.
// 2️⃣ Usa reduce() para devolver un objeto donde:

// La clave es la categoría.
// El valor es la suma total de los precios en esa categoría.
// 3️⃣ Si el array está vacío, devuelve "No hay productos disponibles".

function agruparPorCategoria(arr){

    if(!Array.isArray(arr)){
        return "No es un array"
    }

    if(arr.length === 0){
        return "El array está vacío"
    }

    return arr.reduce((acumulador, producto) => {
        acumulador[producto.categoria] = (acumulador[producto.categoria] || 0 ) + producto.precio
        return acumulador;
    }, {});
}

const productos = [
    { nombre: "Laptop", precio: 1000, categoria: "Electrónica" },
    { nombre: "Mouse", precio: 50, categoria: "Electrónica" },
    { nombre: "Teclado", precio: 150, categoria: "Electrónica" },
    { nombre: "Silla", precio: 200, categoria: "Muebles" },
    { nombre: "Mesa", precio: 300, categoria: "Muebles" }
];

console.log(agruparPorCategoria(productos));  
// ✅ { Electrónica: 1200, Muebles: 500 }

console.log(agruparPorCategoria([]));  
// ✅ "No hay productos disponibles"
