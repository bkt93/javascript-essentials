function filtrarPorLetra(arr, b) {

    // Corroboro que sea un array
    if(!Array.isArray(arr)){
        return "No es un array"
    }

    // Corroboro el tipo de b y filtro
    let filterWord = arr.filter(element =>
        typeof b === "string" && element[0] === b
    );

    // Corroboro que el length sea mayor a 0 o que coincida con la inicial esperada
    return filterWord.length > 0 ? filterWord : `Ninguna palabra coincide con la inicial: ${b}`;
}

console.log(filtrarPorLetra(["Ana", "Carlos", "Pedro", "Andrea", "Lucía"], "A"));  
// ✅ ["Ana", "Andrea"]

console.log(filtrarPorLetra(["Mario", "Marta", "Juan", "Miguel"], "M"));  
// ✅ ["Mario", "Marta", "Miguel"]