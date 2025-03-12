// ✅ Ejercicio 31: Calcular el salario total de empleados por departamento
// 📌 Contexto real:
// Una empresa quiere saber cuánto está gastando en salarios por departamento.

// 📌 Instrucciones:
// 1️⃣ Recibe un array de empleados, donde cada empleado tiene:

// nombre (string)
// salario (número)
// departamento (string)
// 2️⃣ Usa reduce() para devolver un objeto, donde:
// La clave es el departamento.
// El valor es la suma total de salarios en ese departamento.
// 3️⃣ Si el array está vacío, devuelve "No hay empleados registrados".

function calcularSalarioPorDepartamento(arr){
    if(!Array.isArray(arr)){
        return "No es un array"
    }

    if(arr.length === 0){
        return "No hay empleados registrados"
    }

    return arr.reduce((acumulador, dpto) => {
        acumulador[dpto.departamento] = (acumulador[dpto.departamento] || 0) + dpto.salario
        return acumulador;
    }, {});
}

const empleados = [
    { nombre: "Juan", salario: 3000, departamento: "IT" },
    { nombre: "Ana", salario: 2500, departamento: "IT" },
    { nombre: "Carlos", salario: 2000, departamento: "Ventas" },
    { nombre: "María", salario: 3500, departamento: "Ventas" },
    { nombre: "Luis", salario: 1800, departamento: "RRHH" }
];

console.log(calcularSalarioPorDepartamento(empleados));  
// ✅ { IT: 5500, Ventas: 5500, RRHH: 1800 }

console.log(calcularSalarioPorDepartamento([]));  
// ✅ "No hay empleados registrados"
