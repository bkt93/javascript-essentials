// Sumar los numeros dentro del array

function sumarArray(arr){
    if(!Array.isArray(arr)){
        return "No es un array"
    }

    if(arr.length === 0){
        return "El array está vacío"
    }

    let sum = arr.reduce((acumulador, nota) => acumulador + nota, 0)

    return sum;
}

console.log(sumarArray([10, 20, 30, 40]));  
// ✅ 100

console.log(sumarArray([5, 15, 25]));  
// ✅ 45
