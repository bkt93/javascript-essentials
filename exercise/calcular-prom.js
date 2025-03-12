// ✅ Ejercicio 21: Calcular el promedio de un array de números
// 📌 Instrucciones:
// 1️⃣ Recibe un array de números.
// 2️⃣ Usa reduce() para calcular la suma total.
// 3️⃣ Divide la suma por la cantidad de elementos para obtener el promedio.
// 4️⃣ Si el array está vacío, devuelve "El array está vacío".

function calcularPromedio(arr){
    if(!Array.isArray(arr)){
        return "No es un array"
    }

    if(arr.length === 0){
        return "El array se encuentra vacío"
    }

    let promedio = arr.reduce((acumulador, nota) => acumulador + nota, 0) / arr.length

    return promedio;
}

console.log(calcularPromedio([10, 20, 30, 40]));  
// ✅ 25

console.log(calcularPromedio([5, 15, 25]));  
// ✅ 15

console.log(calcularPromedio([]));  
// ✅ "El array está vacío"
