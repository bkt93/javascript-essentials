// ✅ Ejercicio 25: Convertir un array de strings en un solo string
// 📌 Instrucciones:
// 1️⃣ Recibe un array de strings.
// 2️⃣ Usa reduce() para concatenar todos los strings en un solo string, separados por un espacio.
// 3️⃣ Si el array está vacío, devuelve "El array está vacío".

function concatenarStrings(arr){
    if(!Array.isArray(arr)){
        return "No es un array"
    }

    if(arr.length === 0){
        return "El array se encuentra vacío"
    }

    return arr.reduce((concatenador, palabra) => concatenador + ' ' + palabra)


}

console.log(concatenarStrings(["Hola", "mundo", "esto", "es", "JavaScript"]));  
// ✅ "Hola mundo esto es JavaScript"

console.log(concatenarStrings(["reduce", "es", "genial"]));  
// ✅ "reduce es genial"

console.log(concatenarStrings([]));  
// ✅ "El array está vacío"
