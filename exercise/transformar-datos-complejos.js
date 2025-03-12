// 📌 Instrucciones:
// 1️⃣ Recibe un array de objetos con información de estudiantes:

// nombre (string)
// calificaciones (array de números)
// 2️⃣ Usa filter() para devolver solo los estudiantes con un promedio de calificaciones mayor o igual a un valor dado.
// 3️⃣ Extra: Usa map() dentro de filter() para calcular el promedio de cada estudiante antes de filtrar.

function filtrarPorPromedio(arr, b) {
    if(!Array.isArray(arr)){
        return "No es un array"
    }

    if(arr.length === 0){
        return "El array se encuentra vacío"
    }

    let promedio = arr.filter(element =>
        ( element.calificaciones.reduce((acumulador, nota) => acumulador + nota, 0 ) / element.calificaciones.length ) > b
    )
    
    return promedio;

}

const estudiantes = [
    { nombre: "Ana", calificaciones: [80, 90, 100] },
    { nombre: "Carlos", calificaciones: [60, 70, 75] },
    { nombre: "Lucía", calificaciones: [85, 95, 90] },
    { nombre: "Pedro", calificaciones: [40, 50, 60] }
];

console.log(filtrarPorPromedio(estudiantes, 80));  
// ✅ [ { nombre: "Ana", calificaciones: [80, 90, 100] }, { nombre: "Lucía", calificaciones: [85, 95, 90] } ]