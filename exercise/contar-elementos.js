// ✅ Ejercicio 23: Contar la cantidad de veces que aparece cada elemento en un array
// 📌 Instrucciones:
// 1️⃣ Recibe un array de elementos (números o strings).
// 2️⃣ Usa reduce() para devolver un objeto donde las claves sean los elementos y los valores la cantidad de veces que aparecen.
// 3️⃣ Si el array está vacío, devuelve "El array está vacío".

function contarElementos(arr) {
    if(!Array.isArray) {
        return "No es un array"
    }

    if(arr.length === 0) {
        return "El array está vacío"
    }

    return arr.reduce((contador, palabra) =>{
        contador[palabra] = (contador[palabra] || 0) + 1
        return contador
    }, {});
}

console.log(contarElementos(["manzana", "pera", "manzana", "banana", "pera", "pera"]));  
// ✅ { manzana: 2, pera: 3, banana: 1 }

console.log(contarElementos([1, 2, 2, 3, 3, 3, 4]));  
// ✅ { 1: 1, 2: 2, 3: 3, 4: 1 }

console.log(contarElementos([]));  
// ✅ "El array está vacío"
