// Filtrar y formatear nombres 
// Debo mostrar nombres con 5 o mas caracteres
// Usar el método .filter()

function filterFormatNames(arr){

    // Manejo errores para indicar cuando no es un array
    if(!Array.isArray(arr)){
        return "No es un array"
    };

    // Guardo los datos filtrados en una constante para utilizar luego
    const arrayFiltrado = arr.filter(element => element.trim().length >= 5)

    // Si el array no contiene datos, envío mensaje
    if (arrayFiltrado.length === 0){
        return "No contiene elementos"
    }

    // retorno el array filtrado y formateado
    return arrayFiltrado.map(element => element[0].toUpperCase() + element.substring(1).toLowerCase());
    
}

console.log(filterFormatNames([" juan ", "maria", "sebastian", "ana", "luis"])); // ✅ ["Maria", "Sebastian"]
console.log(filterFormatNames(["   ", "a", "b", "c"])); // ❌ "No contiene elementos"
console.log(filterFormatNames([" JUAN ", " elon ", "gABRIEL"])); // ✅ ["Gabriel"]
console.log(filterFormatNames("hola")); // ❌ Error: No es un array
console.log(filterFormatNames([])); // ❌ "No contiene elementos"