// ✅ Ejercicio 33: Encontrar el empleado con el salario más alto en cada departamento
// 📌 Contexto real:
// Una empresa quiere identificar el empleado mejor pagado de cada departamento.

// 📌 Instrucciones:
// 1️⃣ Recibe un array de empleados, donde cada empleado tiene:

// nombre (string)
// salario (número)
// departamento (string)
// 2️⃣ Usa reduce() para devolver un objeto, donde:
// La clave es el departamento.
// El valor es el empleado con el salario más alto en ese departamento.
// 3️⃣ Si el array está vacío, devuelve "No hay empleados registrados".

function empleadoMejorPagado(arr) {
    if(!Array.isArray(arr)){
        return "Esto no es un array"
    };

    if(arr.length === 0){
        return "No hay empleados registrados"
    };

    return arr.reduce((acc, obj) => {
        acc[obj.departamento] = (acc[obj.departamento] ?? 0) + obj.salario
        return acc
    }, {});
}

const empleados = [
    { nombre: "Juan", salario: 3000, departamento: "IT" },
    { nombre: "Ana", salario: 4400, departamento: "IT" },
    { nombre: "Carlos", salario: 2000, departamento: "Ventas" },
    { nombre: "María", salario: 3500, departamento: "Ventas" },
    { nombre: "Luis", salario: 1800, departamento: "RRHH" }
];

console.log(empleadoMejorPagado(empleados));  
// ✅ { IT: "Juan", Ventas: "María", RRHH: "Luis" }

console.log(empleadoMejorPagado([]));  
// ✅ "No hay empleados registrados"
