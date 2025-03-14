// ✅ Ejercicio 34: Agrupar estudiantes por calificación aprobada o reprobada
// 📌 Contexto real:
// Una escuela quiere clasificar a los estudiantes en dos grupos:

// "Aprobados" (calificación mayor o igual a 60)
// "Reprobados" (calificación menor a 60)
// 📌 Instrucciones:
// 1️⃣ Recibe un array de estudiantes, donde cada estudiante tiene:

// nombre (string)
// calificacion (número)
// 2️⃣ Usa reduce() para devolver un objeto, donde:
// Aprobados contiene un array con los nombres de los estudiantes aprobados.
// Reprobados contiene un array con los nombres de los estudiantes reprobados.
// 3️⃣ Si el array está vacío, devuelve "No hay estudiantes registrados".

function clasificarEstudiantes(arr) {
    if(!Array.isArray(arr)){
        return "Esto no es un array"
    }

    if(arr.length === 0){
        return "El array se encuentra vacío"
    }

    return arr.reduce((acc, obj) => {
        if (obj.calificacion > 60) {
            acc.Aprobados = acc.Aprobados || []
            acc.Aprobados.push(obj.nombre);
        } else {
            acc.Desaprobados = acc.Desaprobados || []
            acc.Desaprobados.push(obj.nombre)
        }
        return acc
    }, { Aprobados: [], Desaprobados:[]});
}

const estudiantes = [
    { nombre: "Ana", calificacion: 85 },
    { nombre: "Carlos", calificacion: 45 },
    { nombre: "Lucía", calificacion: 70 },
    { nombre: "Pedro", calificacion: 50 },
    { nombre: "Luis", calificacion: 95 }
];

console.log(clasificarEstudiantes(estudiantes));  
// ✅ { Aprobados: ["Ana", "Lucía", "Luis"], Reprobados: ["Carlos", "Pedro"] }

console.log(clasificarEstudiantes([]));  
// ✅ "No hay estudiantes registrados"
