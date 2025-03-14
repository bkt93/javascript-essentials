// ✅ Ejercicio 35: Clasificar productos en baratos, medianos y caros
// 📌 Contexto real:
// Una tienda quiere clasificar sus productos en tres categorías según su precio:

// "Baratos" (precio < 50)
// "Medianos" (50 ≤ precio < 200)
// "Caros" (precio ≥ 200)
// 📌 Instrucciones:
// 1️⃣ Recibe un array de productos, donde cada producto tiene:

// nombre (string)
// precio (número)
// 2️⃣ Usa reduce() para devolver un objeto, donde:
// Baratos contiene un array con los nombres de productos baratos.
// Medianos contiene un array con los productos de precio medio.
// Caros contiene un array con los productos más caros.
// 3️⃣ Si el array está vacío, devuelve "No hay productos disponibles".

function clasificarProductos(arr) {
    if(!Array.isArray(arr)){
        return "No es un array"
    }

    if(arr.length === 0){
        return "No hay productos disponibles"
    }


    return arr.reduce((acc, obj) => {
        if (obj.precio < 50) {
            acc.Baratos.push(obj.nombre);
        } else if (obj.precio >= 50 && obj.precio < 200) {
            acc.Medianos.push(obj.nombre);
        } else {
            acc.Caros.push(obj.nombre);
        }

        return acc;
    }, { Baratos: [], Medianos: [], Caros: [] }); // ✅ Nombres corregidos
}

const productos = [
    { nombre: "Lápiz", precio: 10 },
    { nombre: "Cuaderno", precio: 60 },
    { nombre: "Mochila", precio: 250 },
    { nombre: "Bolígrafo", precio: 30 },
    { nombre: "Escritorio", precio: 300 }
];

console.log(clasificarProductos(productos));  
// ✅ { Baratos: ["Lápiz", "Bolígrafo"], Medianos: ["Cuaderno"], Caros: ["Mochila", "Escritorio"] }

console.log(clasificarProductos([]));  
// ✅ "No hay productos disponibles"
