// ✅ Ejercicio 30: Resumen de ventas por mes
// 📌 Contexto real:
// Una empresa quiere analizar sus ventas mensuales y obtener un resumen total de ventas por mes.

// 📌 Instrucciones:
// 1️⃣ Recibe un array de ventas, donde cada venta tiene:

// fecha (en formato "YYYY-MM-DD")
// monto (número)
// 2️⃣ Usa reduce() para devolver un objeto, donde:
// La clave es el mes ("YYYY-MM", es decir, "2024-01", "2024-02", etc.).
// El valor es el total de ventas en ese mes.
// 3️⃣ Si el array está vacío, devuelve "No hay ventas registradas".

function resumenVentasPorMes(arr){
    if(!Array.isArray(arr)){
        return "No es un array"
    }

    if(arr.length === 0){
        return "El array se encuentra vacío"
    }

    return arr.reduce((acc, prod) => {
        let mes = prod.fecha.substring(0,7);
        acc[mes] = (acc[mes] || 0) + prod.monto
        return acc
    }, {})
}

const ventas = [
    { fecha: "2024-01-15", monto: 500 },
    { fecha: "2024-01-20", monto: 300 },
    { fecha: "2024-02-05", monto: 800 },
    { fecha: "2024-02-18", monto: 450 },
    { fecha: "2024-03-10", monto: 1200 }
];

console.log(resumenVentasPorMes(ventas));  
// ✅ { "2024-01": 800, "2024-02": 1250, "2024-03": 1200 }

console.log(resumenVentasPorMes([]));  
// ✅ "No hay ventas registradas"
