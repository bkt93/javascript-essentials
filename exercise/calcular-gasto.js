// ✅ Ejercicio 29: Calcular el gasto total de un cliente por categoría de compras
// 📌 Contexto real:
// Un supermercado tiene un registro de compras de un cliente. Cada compra tiene un producto, precio y categoría.
// Queremos calcular cuánto ha gastado el cliente en cada categoría.

// 📌 Instrucciones:
// 1️⃣ Recibe un array de compras con producto, precio y categoria.
// 2️⃣ Usa reduce() para devolver un objeto donde:

// La clave es la categoría.
// El valor es el total gastado en esa categoría.
// 3️⃣ Si el array está vacío, devuelve "No hay compras registradas".

function calcularGastoPorCategoria(arr){
    if(!Array.isArray(arr)){
        return "No es un array"
    }

    if(arr.length === 0){
        return "El array se encuentra vacío"
    }

    return arr.reduce((acc, producto) => {
        acc[producto.categoria] = (acc[producto.categoria] ?? 0) + 1
        return acc;
    }, {})
}

const compras = [
    { producto: "Arroz", precio: 30, categoria: "Alimentos" },
    { producto: "Fideos", precio: 20, categoria: "Alimentos" },
    { producto: "Detergente", precio: 50, categoria: "Limpieza" },
    { producto: "Lavandina", precio: 40, categoria: "Limpieza" },
    { producto: "Jabón", precio: 25, categoria: "Higiene" }
];

console.log(calcularGastoPorCategoria(compras));  
// ✅ { Alimentos: 50, Limpieza: 90, Higiene: 25 }

console.log(calcularGastoPorCategoria([]));  
// ✅ "No hay compras registradas"
