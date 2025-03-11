function filtrarPorLongitud(a,b) {
    if(!Array.isArray(a)){
        return "No es un array"
    }

    if(typeof b != "number"){
        return "El parámetro no es un número"
    }

    if(a.length === 0){
        return "El array está vacío"
    }

    let palabrasFiltradas = a.filter(element => typeof element === "string");
    let filterWords = palabrasFiltradas.filter(element => element.length > b);

    return filterWords.length > 0 ? filterWords : "Ninguna palabra cumple con el criterio"
}

// ✅ Ejemplos Correctos
console.log(filtrarPorLongitud(["javascript", "react", "css", "html", "node"], 4));  
// ✅ ["javascript", "react", "node"]

console.log(filtrarPorLongitud(["hola", "adiós", "hey", "ok"], 3));  
// ✅ ["hola", "adiós"]

// ❌ Manejo de Errores
console.log(filtrarPorLongitud([], 4));  
// ✅ "El array está vacío"

console.log(filtrarPorLongitud(["js", "css", "ok"], 10));  
// ✅ "Ninguna palabra cumple el criterio"

console.log(filtrarPorLongitud([123, "hola", null, "mundo"], 3));  
// ✅ ["hola", "mundo"] (ignora `123` y `null`)

console.log(filtrarPorLongitud("javascript", 4));  
// ✅ "No es un array"