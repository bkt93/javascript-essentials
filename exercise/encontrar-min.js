// ✅ Ejercicio 24: Encontrar el número más pequeño en un array usando reduce()
// 📌 Instrucciones:
// 1️⃣ Recibe un array de números.
// 2️⃣ Usa reduce() para encontrar el número más pequeño del array.
// 3️⃣ Si el array está vacío, devuelve "El array está vacío".

function encontrarMinimo(arr){
    if(!Array.isArray(arr)){
        return "No es un array"
    }

    if(arr.length === 0){
        return "El array se encuentra vacío"
    }

    return arr.reduce((min, numero) => {
        if(numero > min){
            numero = min
        }
        return numero
    })
}

console.log(encontrarMinimo([10, 20, 5, 40, 15]));  
// ✅ 5

console.log(encontrarMinimo([3, 8, 2, 12, 7]));  
// ✅ 2

console.log(encontrarMinimo([]));  
// ✅ "El array está vacío"
