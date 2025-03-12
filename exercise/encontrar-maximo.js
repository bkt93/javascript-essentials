// ✅ Ejercicio 22: Encontrar el número máximo en un array usando reduce()
// 📌 Instrucciones:
// 1️⃣ Recibe un array de números.
// 2️⃣ Usa reduce() para encontrar el número más alto del array.
// 3️⃣ Si el array está vacío, devuelve "El array está vacío".

function encontrarMaximo(arr){
    if(!Array.isArray(arr)){
        return "No es un array"
    }

    if(arr.length === 0){
        return "El array está vacío"
    }

    let maximo = arr.reduce((max, num) => {
        if(num > max) {
            max = num
        }
        return max;
    })

    return maximo;
}

console.log(encontrarMaximo([10, 20, 5, 40, 15]));  
// ✅ 40

console.log(encontrarMaximo([3, 8, 2, 12, 7]));  
// ✅ 12

console.log(encontrarMaximo([]));  
// ✅ "El array está vacío"
