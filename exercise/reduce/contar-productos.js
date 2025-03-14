// ✅ Ejercicio 36: Contar la cantidad de productos en stock por categoría
// 📌 Contexto real:
// Una tienda quiere saber cuántos productos tiene en stock por cada categoría.

// 📌 Instrucciones:
// 1️⃣ Recibe un array de productos, donde cada producto tiene:

// nombre (string)
// categoria (string)
// stock (número)
// 2️⃣ Usa reduce() para devolver un objeto, donde:
// La clave es la categoría.
// El valor es la cantidad total de productos en stock en esa categoría.
// 3️⃣ Si el array está vacío, devuelve "No hay productos disponibles".

function contarStockPorCategoria(arr){
    if(!Array.isArray(arr)){
        return "No es un array"
    }

    if(arr.length === 0){
        return "No hay productos disponibles"
    }

    return arr.reduce((acc, obj) => {
        acc[obj.categoria] = (acc[obj.categoria] ?? 0 ) + obj.stock
        return acc
    }, {})
}

const productos = [
    { nombre: "Laptop", categoria: "Electrónica", stock: 5 },
    { nombre: "Mouse", categoria: "Electrónica", stock: 10 },
    { nombre: "Silla", categoria: "Muebles", stock: 7 },
    { nombre: "Mesa", categoria: "Muebles", stock: 3 },
    { nombre: "Auriculares", categoria: "Electrónica", stock: 4 }
];

console.log(contarStockPorCategoria(productos));  
// ✅ { Electrónica: 19, Muebles: 10 }

console.log(contarStockPorCategoria([]));  
// ✅ "No hay productos disponibles"
