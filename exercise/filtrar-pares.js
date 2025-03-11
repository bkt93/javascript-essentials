// Desarrollar una función para filtrar números pares y otra que filtre impares
// Se brindar un array con una serie de números que deben ser filtrados utilizando el método filter()

function filtrarPares(arr){
    if(!Array.isArray(arr)){
        return "No es un array"
    }

    let filtroPares = arr.filter(element =>
        typeof element === "number" && element % 2 == 0
    )

    return filtroPares;
}

function filtrarImpares(arr){
    if(!Array.isArray(arr)){
        return "No es un array"
    };

    let filtroImpares = arr.filter(element =>
        typeof element === "number" && element % 2 != 0
    )

    return filtroImpares;
}

console.log(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9]));  
// ✅ [2, 4, 6, 8]

console.log(filtrarImpares([1, 2, 3, 4, 5, 6, 7, 8, 9]));  
// ✅ [1, 3, 5, 7, 9]