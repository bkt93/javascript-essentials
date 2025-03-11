function filtrarMayores (arr, b) {

    if (!Array.isArray(arr)){
        return "No es un array"
    }

    if (typeof b != "number") {
        return "El parámetro brindado no es un número"
    }

    if (arr.length === 0) {
        return "El array está vacío"
    }

    let filtrados = arr.filter(element => element > b);

    return filtrados;

}

// ✅ Ejemplos Correctos
console.log(filtrarMayores([10, 25, 30, 5, 40, 50], 20));  
// ✅ [25, 30, 40, 50]

console.log(filtrarMayores([3, 8, 15, 1, 9], 5));  
// ✅ [8, 15, 9]

// ❌ Manejo de Errores
console.log(filtrarMayores("hola", 5)); 
// ✅ "No es un array"

console.log(filtrarMayores([], 10));  
// ✅ "El array está vacío"

console.log(filtrarMayores([1, 2, 3], "diez"));  
// ✅ "El segundo parámetro debe ser un número"