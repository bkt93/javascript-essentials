// ✅ Ejercicio 26: Calcular el total de ventas de una tienda
// 📌 Contexto real:
// Una tienda tiene un array de objetos, donde cada objeto representa una venta con su precio.
// Queremos calcular el total de ingresos sumando todos los precios.

// 📌 Instrucciones:
// 1️⃣ Recibe un array de ventas con producto y precio.
// 2️⃣ Usa reduce() para calcular el total de ingresos.
// 3️⃣ Si el array está vacío, devuelve "No hay ventas registradas".

function calcularTotalVentas(arr){
    if(!Array.isArray(arr)){
        return "No es un array"
    }

    if(arr.length === 0){
        return "El array se encuentra vacío"
    }
    
    return arr.reduce((a, b) => a + b.precio, 0)
}

const ventas = [
    { producto: "Laptop", precio: 1000 },
    { producto: "Mouse", precio: 50 },
    { producto: "Teclado", precio: 150 },
    { producto: "Monitor", precio: 300 }
];

console.log(calcularTotalVentas(ventas));  
// ✅ 1500

console.log(calcularTotalVentas([]));  
// ✅ "No hay ventas registradas"
